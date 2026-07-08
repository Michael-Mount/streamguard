import "./index.css";

type ChatMsgProps = {
  message: string;
  status: string;
  risk: string;
  user: string;
  autoMod: string[];
};

export default function ChatMessageCard({
  user,
  message,
  status,
  risk,
  autoMod,
}: ChatMsgProps) {
  return (
    <article className="message-card">
      <header className="message-card__header">
        <div>
          <p className="message-card__user">{user}</p>
          <p className="message-card__label">Chat message</p>
        </div>

        <div className="message-card__badges">
          <span className={`badge badge--risk-${risk}`}>Risk: {risk}</span>
          <span className={`badge badge--status-${status}`}>{status}</span>
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
        <button className="action-button action-button--approve">
          Approve
        </button>
        <button className="action-button">Delete</button>
        <button className="action-button">Warn</button>
        <button className="action-button">Timeout</button>
        <button className="action-button action-button--danger">Ban</button>
      </div>
    </article>
  );
}
