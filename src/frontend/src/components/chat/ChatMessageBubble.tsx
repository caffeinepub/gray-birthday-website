import type { Message } from '../../data';
import { Card, CardContent } from '@/components/ui/card';

interface ChatMessageBubbleProps {
  message: Message;
  themeColor: string;
}

export default function ChatMessageBubble({ message, themeColor }: ChatMessageBubbleProps) {
  return (
    <Card className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-4 md:p-6">
        {/* Sender Info */}
        <div className="flex items-center gap-3 mb-3 md:mb-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-purple-200">
            <img
              src={message.senderGifUrl}
              alt={message.senderName}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-sm md:text-base text-gray-800">
              {message.senderName}
            </p>
          </div>
        </div>

        {/* Message Content */}
        <div className="ml-0 md:ml-14">
          {message.type === 'text' && (
            <p className="text-sm md:text-base text-gray-700 leading-relaxed whitespace-pre-wrap">
              {message.content}
            </p>
          )}

          {message.type === 'audio' && (
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 md:p-4">
              <audio controls className="w-full">
                <source src={message.content} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}

          {message.type === 'video' && (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
              <iframe
                src={message.content}
                title={`Video from ${message.senderName}`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
