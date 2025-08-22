import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Cross } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Sermons' },
    { href: '/player', label: 'Live Events' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
              <Cross className="h-5 w-5 text-primary" />
            </div>
            <span className="text-xl font-bold text-primary-foreground">
              Deeper Life Media Archive
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary-foreground hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center space-x-4 ml-8">
              <Button variant="outline" size="sm" className="border-primary-foreground text-primary-foreground hover:bg-accent hover:text-primary">
                Login
              </Button>
              <Button variant="default" size="sm" className="bg-accent text-primary hover:bg-accent/90">
                Register
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-primary-foreground hover:text-accent transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" size="sm" className="border-primary-foreground text-primary-foreground hover:bg-accent hover:text-primary">
                Login
              </Button>
              <Button variant="default" size="sm" className="bg-accent text-primary hover:bg-accent/90">
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}