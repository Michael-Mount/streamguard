import type { ChatMessage, User } from "../../../types/moderation";
import ChatComposer from "../ChatComposer/ChatComposer";
import ChatMessageCard from "../ChatMessageCard/ChatMessageCard";
import "./index.css";

type ChatFeedProps = {
  messages: ChatMessage[];
  users: User[];
  onCreateMessage: (text: string) => void;
  onApproveMessage: (messageId: string) => void;
  onDeleteMessage: (messageId: string) => void;
  onBanUser: (userId: string) => void;
  onHandleTimeout: (userId: string) => void;
  onWarning: (userId: string) => void;
};

export default function ChatFeed({
  messages,
  users,
  onCreateMessage,
  onDeleteMessage,
  onBanUser,
  onHandleTimeout,
  onWarning,
  onApproveMessage,
}: ChatFeedProps) {
  return (
    <div className="chat-box-wrapper">
      <ChatComposer onCreateMessage={onCreateMessage} />
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
            onApproveMessage={onApproveMessage}
            onDeleteMessage={onDeleteMessage}
            onBanUser={onBanUser}
            onHandleTimeout={onHandleTimeout}
            onWarning={onWarning}
          />
        );
      })}
    </div>
  );
}
