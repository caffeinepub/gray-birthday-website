import { Card, CardContent } from '@/components/ui/card';
import type { MoodSection } from '../data';

interface OpenWhenGridProps {
  sections: MoodSection[];
  onCardClick: (slug: string) => void;
}

const moodIcons: Record<string, string> = {
  sad: '💙',
  doubt: '💪',
  laugh: '😂',
  celebrate: '🎉',
  stressed: '🌿',
};

export default function OpenWhenGrid({ sections, onCardClick }: OpenWhenGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {sections.map((section) => (
        <Card
          key={section.id}
          className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 bg-white/80 backdrop-blur-sm border-2 border-transparent hover:border-purple-300"
          onClick={() => onCardClick(section.id)}
        >
          <CardContent className="p-6 md:p-8 text-center">
            <div className="text-4xl md:text-5xl mb-3 md:mb-4">
              {moodIcons[section.id] || '✨'}
            </div>
            <h3 className="text-base md:text-lg font-semibold text-gray-800 leading-snug">
              {section.title}
            </h3>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
