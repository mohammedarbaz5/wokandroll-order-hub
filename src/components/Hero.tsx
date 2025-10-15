import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-wok.jpg';

interface HeroProps {
  onOrderClick: () => void;
}

export const Hero = ({ onOrderClick }: HeroProps) => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Fresh. Fast. <span className="text-accent">Flavorful.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Authentic Chinese cuisine prepared with passion and served with speed. 
            Experience the perfect harmony of tradition and convenience.
          </p>
          <Button
            size="lg"
            onClick={onOrderClick}
            className="hero-gradient text-white font-semibold text-lg px-8 py-6 rounded-full hover:scale-105 transition-smooth animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            View Menu & Order Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
