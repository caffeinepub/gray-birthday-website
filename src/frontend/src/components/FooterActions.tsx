import { Button } from '@/components/ui/button';
import { Music, Globe } from 'lucide-react';

export default function FooterActions() {
  const handlePlaylistClick = () => {
    console.log('Personal Playlist clicked');
  };

  const handleGlobeClick = () => {
    console.log('Love Globe clicked');
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Button
        onClick={handlePlaylistClick}
        size="lg"
        className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        <Music className="w-5 h-5 mr-2" />
        Personal Playlist
      </Button>
      <Button
        onClick={handleGlobeClick}
        size="lg"
        className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold px-8 py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        <Globe className="w-5 h-5 mr-2" />
        Love Globe
      </Button>
    </div>
  );
}
