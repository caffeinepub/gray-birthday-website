import { useEffect, useRef } from 'react';
import type { Message } from '../../data';
import ChatMessageBubble from './ChatMessageBubble';

interface ChatThreadProps {
  messages: Message[];
  themeColor: string;
}

export default function ChatThread({ messages, themeColor }: ChatThreadProps) {
  const threadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top on mount
    if (threadRef.current) {
      threadRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <div
      ref={threadRef}
      className="max-w-3xl mx-auto space-y-6 md:space-y-8"
    >
      {messages.map((message, index) => (
        <div
          key={message.id}
          className="animate-slide-up"
          style={{
            animationDelay: `${index * 200}ms`,
            animationFillMode: 'backwards',
          }}
        >
          <ChatMessageBubble message={message} themeColor={themeColor} />
        </div>
      ))}
    </div>
  );
}
