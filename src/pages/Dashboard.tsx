import { useState } from "react";

import {
  mockUsers,
  mockMessages,
  mockReports,
  mockAppeals,
} from "../data/mockModerationData";

import MeticCard from "../components/ui/MetricCard/MetricCard";
import ChatMessageCard from "../components/moderation/ChatMessageCard/ChatMessageCard";

export default function Dashboard() {
  const [message, setMessages] = useState(mockMessages);
  const [users, setUsers] = useState(mockUsers);

  const openReports = mockReports.filter((report) => {
    return report.status == "new" || report.status == "reviewing";
  }).length;

  const heldMessages = mockMessages.filter((msg) => {
    return msg.status == "held";
  }).length;

  const highRiskMessages = mockMessages.filter((msg) => {
    return msg.riskLevel == "high";
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
        <MeticCard
          title="users"
          value={mockUsers.length}
          desciprtion="Total Watching Viewers"
        />
        <MeticCard
          title="chat messages"
          value={mockMessages.length}
          desciprtion="total messages this stream"
        />
        <MeticCard
          title="open reports"
          value={openReports}
          desciprtion="Reports needing review"
        />
        <MeticCard
          title="appeals"
          value={mockAppeals.length}
          desciprtion="Appeals needing review"
        />
        <MeticCard
          title="held messages"
          value={heldMessages}
          desciprtion="Messages needing review"
        />
        <MeticCard
          title="high-risk messages"
          value={highRiskMessages}
          desciprtion="High Risk messages"
        />
        <MeticCard
          title="banned users"
          value={bannedUsers}
          desciprtion="Total Banned Users"
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
          {message.map((msg) => {
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
                onDeletedMessage={handleDeleteMessage}
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
