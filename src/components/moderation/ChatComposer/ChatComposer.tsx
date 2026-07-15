import { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Send a test chat message..."
      />
      <button type="submit">Chat</button>
    </form>
  );
}
