import { useState } from "react";

import "./index.css";

type ChatComposerProps = {
  onCreateMessage: (text: string) => void;
};

export default function ChatComposer({ onCreateMessage }: ChatComposerProps) {
  const [text, setText] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedText = text.trim();

    if (!trimmedText) {
      return;
    }
    onCreateMessage(trimmedText);

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

      <button className="chat-form__button" type="submit">
        Chat
      </button>
    </form>
  );
}
