import {
  mockUsers,
  mockChatMessage,
  mockReport,
  mockAppeal,
} from "../data/mockModerationData";

export default function Dashboard() {
  return (
    <section>
      <h1> Dashboard</h1>
      <p>Overview of live moderation activity.</p>
      <div>
        <p>Users: {mockUsers.length}</p>
        <p>Messages: {mockChatMessage.length}</p>
        <p>Reports: {mockReport.length}</p>
        <p>Appeals: {mockAppeal.length}</p>
      </div>
    </section>
  );
}
