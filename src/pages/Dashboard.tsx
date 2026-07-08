import {
  mockUsers,
  mockChatMessage,
  mockReport,
  mockAppeal,
} from "../data/mockModerationData";

import MeticCard from "../components/ui/MetricCard/MetricCard";

export default function Dashboard() {
  const heldMessages = mockChatMessage.filter((msg) => {
    return msg.status == "held";
  });

  const highRiskMessages = mockChatMessage.filter((msg) => {
    return msg.riskLevel == "high";
  });

  const bannedUsers = mockUsers.filter((user) => {
    return user.isBanned;
  });

  return (
    <section>
      <h1> Dashboard</h1>
      <p>Overview of live moderation activity.</p>
      <div className="metric-cards-wrapper">
        <MeticCard title="users" value={mockUsers.length} />
        <MeticCard title="chat messages" value={mockChatMessage.length} />
        <MeticCard title="reports" value={mockReport.length} />
        <MeticCard title="appeals" value={mockAppeal.length} />
        <MeticCard title="held messages" value={heldMessages.length} />
        <MeticCard title="high-risk messages" value={highRiskMessages.length} />
        <MeticCard title="banned users" value={bannedUsers.length} />
      </div>
    </section>
  );
}
