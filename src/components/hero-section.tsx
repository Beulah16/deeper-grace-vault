import { Button } from '@/components/ui/button';
import { Play, Download } from 'lucide-react';
import heroImage from '@/assets/hero-church-service.jpg';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      
      {/* Subtle Cross Background Element */}
      <div className="absolute top-1/4 right-1/4 opacity-10">
        <div className="w-32 h-32 relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-accent transform -translate-y-1/2" />
          <div className="absolute top-0 left-1/2 w-1 h-full bg-accent transform -translate-x-1/2" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Discover Eternal Truths,
            <span className="block text-accent">Anytime, Anywhere</span>
          </h1>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Access digitized sermons, teachings, and music from Deeper Life Bible Church – 
            preserved for generations to come
          </p>
          
          {/* Bible Verse */}
          <blockquote className="text-lg md:text-xl text-accent/90 italic mb-12 font-light">
            "The word of the Lord endures forever"
            <cite className="block text-primary-foreground/80 text-base mt-2 not-italic">
              - 1 Peter 1:25
            </cite>
          </blockquote>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent text-primary hover:bg-accent/90 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Get Started Free
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-secondary text-primary-foreground hover:bg-secondary hover:text-primary font-semibold px-8 py-4 text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Request Demo
            </Button>
          </div>
          
          {/* Additional Info */}
          <p className="text-primary-foreground/70 mt-8 text-sm">
            Create your free account today. No credit card required.
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}