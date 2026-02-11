import { useParams, useNavigate } from '@tanstack/react-router';
import { moodSections } from '../data';
import { ArrowLeft } from 'lucide-react';
import ChatThread from '../components/chat/ChatThread';
import { Button } from '@/components/ui/button';

export default function MoodPage() {
  const { slug } = useParams({ strict: false });
  const navigate = useNavigate();

  const moodSection = moodSections.find((section) => section.id === slug);

  if (!moodSection) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-4">
        <div className="text-center animate-fade-in">
          <h1 className="mb-4 text-3xl md:text-4xl font-bold text-gray-800">
            Mood Not Found
          </h1>
          <p className="mb-6 text-sm md:text-base text-gray-600">
            This mood section doesn't exist yet.
          </p>
          <Button
            onClick={() => navigate({ to: '/' })}
            className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${moodSection.backgroundGradient} animate-fade-in`}>
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate({ to: '/' })}
              className="hover:bg-gray-100"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Back</span>
            </Button>
            <h1 className="font-cursive text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 flex-1">
              {moodSection.title}
            </h1>
          </div>
        </div>
      </header>

      {/* Chat Thread */}
      <main className="container mx-auto px-4 py-6 md:py-8">
        <ChatThread messages={moodSection.messages} themeColor={moodSection.themeColor} />
      </main>
    </div>
  );
}
