import "./index.css";

type ChatMsgProps = {
  messageId: string;
  message: string;
  isBanned: boolean;
  status: string;
  risk: string;
  userId: string;
  user: string;
  autoMod: string[];
  onApproveMessage: (messageId: string) => void;
  onDeletedMessage: (messageId: string) => void;
  onBanUser: (userId: string) => void;
  onHandleTimeout: (userId: string) => void;
  onWarning: (userId: string) => void;
};

export default function ChatMessageCard({
  user,
  userId,
  messageId,
  message,
  status,
  risk,
  isBanned,
  autoMod,
  onApproveMessage,
  onDeletedMessage,
  onBanUser,
  onHandleTimeout,
  onWarning,
}: ChatMsgProps) {
  return (
    <article className={`message-card status-${status}`}>
      <header className="message-card__header">
        <div>
          <p className="message-card__user">
            {user}
            <button
              className="action-button action-button--danger"
              onClick={() => onBanUser(userId)}
            >
              Ban
            </button>
          </p>
          <p className="message-card__label">Chat message</p>
        </div>

        <div className="message-card__badges">
          <span className={`badge badge--risk-${risk}`}>Risk: {risk}</span>
          <span className={`badge badge--status-${status}`}>{status}</span>
          <span className={`badge badge--status-${status}`}>
            Banned: {isBanned ? "yes" : "no"}
          </span>
        </div>
      </header>

      <p className="message-card__text">"{message}"</p>

      <div className="message-card__warnings">
        <p className="message-card__section-title">Automod Warnings</p>

        {autoMod.length > 0 ? (
          <ul>
            {autoMod.map((warning) => (
              <li key={warning}>{warning}</li>
            ))}
          </ul>
        ) : (
          <p className="message-card__empty">No automod warnings</p>
        )}
      </div>

      <div className="message-card__actions">
        <button
          className="action-button action-button--approve"
          onClick={() => onApproveMessage(messageId)}
        >
          Approve
        </button>
        <button
          className="action-button"
          onClick={() => onDeletedMessage(messageId)}
        >
          Delete
        </button>
        <button className="action-button" onClick={() => onWarning(userId)}>
          Warn
        </button>
        <button
          className="action-button"
          onClick={() => onHandleTimeout(userId)}
        >
          Timeout
        </button>
      </div>
    </article>
  );
}
