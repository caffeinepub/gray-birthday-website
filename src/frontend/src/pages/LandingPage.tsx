import { useNavigate } from '@tanstack/react-router';
import { heroGifs, birthdayPoem, moodSections } from '../data';
import GifCarousel from '../components/GifCarousel';
import PoemReveal from '../components/PoemReveal';
import OpenWhenGrid from '../components/OpenWhenGrid';
import FooterActions from '../components/FooterActions';
import { Heart } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="font-cursive text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-2 md:mb-4">
            Happy Birthday, Gray!
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-600">
            A special celebration just for you ✨
          </p>
        </div>
        
        <GifCarousel gifs={heroGifs} />
      </section>

      {/* Poem Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <PoemReveal poem={birthdayPoem} />
      </section>

      {/* Open When Grid */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 text-gray-800">
          Open When...
        </h2>
        <OpenWhenGrid
          sections={moodSections}
          onCardClick={(slug) => navigate({ to: '/mood/$slug', params: { slug } })}
        />
      </section>

      {/* Footer Actions */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <FooterActions />
      </section>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-sm border-t border-gray-200 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-gray-600 flex items-center justify-center gap-2 flex-wrap">
            <span>© {new Date().getFullYear()} Built with</span>
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            <span>using</span>
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'gray-birthday')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
