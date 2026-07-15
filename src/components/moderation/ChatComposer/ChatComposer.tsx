import { useState } from "react";

import "./index.css";

import { mockUsers } from "../../../data/mockModerationData";

type ChatComposerProps = {
  onCreateMessage: (userId: string, text: string) => void;
};

export default function ChatComposer({ onCreateMessage }: ChatComposerProps) {
  const [text, setText] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("user-1");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedText = text.trim();

    if (!trimmedText) {
      return;
    }
    onCreateMessage(selectedUserId, trimmedText);

    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="chat-form">
      <input
        className="chat-form__input"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Send a test chat message..."
      />

      <select
        name="user-select"
        value={selectedUserId}
        onChange={(event) => setSelectedUserId(event.target.value)}
      >
        {mockUsers.map((user) => {
          return <option value={user.id}>{user.displayName}</option>;
        })}
      </select>

      <button className="chat-form__button" type="submit">
        Chat
      </button>
    </form>
  );
}
