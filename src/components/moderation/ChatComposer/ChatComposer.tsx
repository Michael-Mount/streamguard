import { useState } from "react";

import "./index.css";

import type { User } from "../../../types/moderation";

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
        <option value="user-1">user-1</option>
        <option value="user-2">user-2</option>
        <option value="user-3">user-3</option>
        <option value="user-4">user-4</option>
      </select>

      <button className="chat-form__button" type="submit">
        Chat
      </button>
    </form>
  );
}
