import { useState } from "react";

import {
  mockUsers,
  mockMessages,
  mockReports,
  mockAppeals,
} from "../data/mockModerationData";

import MetricCard from "../components/ui/MetricCard/MetricCard";
import ChatMessageCard from "../components/moderation/ChatMessageCard/ChatMessageCard";

export default function Dashboard() {
  const [messages, setMessages] = useState(mockMessages);
  const [users, setUsers] = useState(mockUsers);

  const openReports = mockReports.filter((report) => {
    return report.status === "new" || report.status === "reviewing";
  }).length;

  const heldMessages = messages.filter((msg) => {
    return msg.status === "held";
  }).length;

  const highRiskMessages = messages.filter((msg) => {
    return msg.riskLevel === "high";
  }).length;

  const bannedUsers = users.filter((user) => user.isBanned).length;

  function handleApproveMessage(messageId: string) {
    setMessages((currentMessages) =>
      currentMessages.map((message) => {
        if (message.id !== messageId) {
          return message;
        }
        return {
          ...message,
          status: "approved",
        };
      }),
    );
  }

  function handleDeleteMessage(messageId: string) {
    setMessages((currentMessages) =>
      currentMessages.map((message) => {
        if (message.id !== messageId) {
          return message;
        }
        return {
          ...message,
          status: "deleted",
        };
      }),
    );
  }

  function handleBanUser(userId: string) {
    setUsers((currentUsers) =>
      currentUsers.map((user) => {
        if (user.id !== userId) {
          return user;
        }
        return {
          ...user,
          isBanned: true,
        };
      }),
    );
  }

  function handleTimeoutUser(userId: string) {
    setUsers((currentUsers) =>
      currentUsers.map((user) => {
        if (user.id !== userId) {
          return user;
        }
        return {
          ...user,
          timeoutUntil: "2026-07-10T00:00:00Z",
        };
      }),
    );
  }

  function handleWarningUser(userId: string) {
    setUsers((currentUsers) =>
      currentUsers.map((user) => {
        if (user.id !== userId) {
          return user;
        }
        return {
          ...user,
          warningCount: (user.warningCount ?? 0) + 1,
        };
      }),
    );
  }

  return (
    <section>
      <h1> Dashboard</h1>
      <p>Overview of live moderation activity.</p>
      <div className="metric-cards-wrapper">
        <MetricCard
          title="users"
          value={mockUsers.length}
          description="Total Watching Viewers"
        />
        <MetricCard
          title="chat messages"
          value={mockMessages.length}
          description="total messages this stream"
        />
        <MetricCard
          title="open reports"
          value={openReports}
          description="Reports needing review"
        />
        <MetricCard
          title="appeals"
          value={mockAppeals.length}
          description="Appeals needing review"
        />
        <MetricCard
          title="held messages"
          value={heldMessages}
          description="Messages needing review"
        />
        <MetricCard
          title="high-risk messages"
          value={highRiskMessages}
          description="High Risk messages"
        />
        <MetricCard
          title="banned users"
          value={bannedUsers}
          description="Total Banned Users"
        />
      </div>

      <section className="chat-section">
        <div className="chat-section__header">
          <div>
            <h2>Recent Chat Activity</h2>
            <p>Review recent messages and moderation signals.</p>
          </div>
        </div>

        <div className="chat-box-wrapper">
          {messages.map((msg) => {
            const user = users.find((user) => {
              return user.id === msg.userId;
            });

            if (!user) {
              return null;
            }

            return (
              <ChatMessageCard
                key={msg.id}
                messageId={msg.id}
                user={user.displayName}
                userId={user.id}
                isBanned={user.isBanned}
                status={msg.status}
                risk={msg.riskLevel}
                autoMod={msg.automodReasons}
                message={msg.text}
                onApproveMessage={handleApproveMessage}
                onDeleteMessage={handleDeleteMessage}
                onBanUser={handleBanUser}
                onHandleTimeout={handleTimeoutUser}
                onWarning={handleWarningUser}
              />
            );
          })}
        </div>
      </section>
    </section>
  );
}
