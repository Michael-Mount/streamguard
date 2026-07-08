import {
  mockUsers,
  mockMessages,
  mockReports,
  mockAppeals,
} from "../data/mockModerationData";

import MeticCard from "../components/ui/MetricCard/MetricCard";
import ChatMessageCard from "../components/moderation/ChatMessageCard/ChatMessageCard";

export default function Dashboard() {
  const openReports = mockReports.filter((report) => {
    return report.status == "new" || report.status == "reviewing";
  }).length;

  const heldMessages = mockMessages.filter((msg) => {
    return msg.status == "held";
  }).length;

  const highRiskMessages = mockMessages.filter((msg) => {
    return msg.riskLevel == "high";
  }).length;

  const bannedUsers = mockUsers.filter((user) => {
    return user.isBanned;
  }).length;

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
          {mockMessages.map((msg) => {
            const user = mockUsers.find((user) => {
              return user.id === msg.userId;
            });

            if (!user) {
              return null;
            }

            return (
              <ChatMessageCard
                key={msg.id}
                user={user.displayName}
                status={msg.status}
                risk={msg.riskLevel}
                autoMod={msg.automodReasons}
                message={msg.text}
              />
            );
          })}
        </div>
      </section>
    </section>
  );
}
