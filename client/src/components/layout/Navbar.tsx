import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { useTheme } from '@/components/ThemeProvider';
import { trackEvent } from '@/lib/analytics';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    trackEvent('navigation_click', 'navbar', section);
    setIsMenuOpen(false);
    
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleThemeToggle = () => {
    toggleTheme();
    trackEvent('theme_toggle', 'ui', theme === 'light' ? 'to_dark' : 'to_light');
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-200",
      isScrolled 
        ? "bg-background/95 backdrop-blur-sm border-b border-border" 
        : "bg-transparent"
    )}>
      <Container>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" onClick={() => trackEvent('logo_click', 'navbar')}>
            <div className="flex items-center" data-testid="navbar-logo">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">L</span>
                </div>
              </div>
              <div className="ml-3">
                <span className="text-xl font-semibold text-foreground">Landing</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => handleNavClick('home')}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
                data-testid="nav-home"
              >
                Início
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
                data-testid="nav-services"
              >
                Serviços
              </button>
              <button
                onClick={() => handleNavClick('testimonials')}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
                data-testid="nav-testimonials"
              >
                Depoimentos
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
                data-testid="nav-contact"
              >
                Contato
              </button>
              
              {/* Dark Mode Toggle */}
              <button
                onClick={handleThemeToggle}
                className="relative p-2 rounded-lg bg-muted hover:bg-accent text-muted-foreground hover:text-foreground transition-all duration-200 group"
                data-testid="theme-toggle"
                title={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
              >
                <div className="relative w-5 h-5">
                  <Moon className={`w-5 h-5 absolute transition-all duration-300 ${
                    theme === 'light' 
                      ? 'opacity-100 rotate-0 scale-100' 
                      : 'opacity-0 rotate-180 scale-75'
                  }`} />
                  <Sun className={`w-5 h-5 absolute transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'opacity-100 rotate-0 scale-100' 
                      : 'opacity-0 -rotate-180 scale-75'
                  }`} />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2"
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden" data-testid="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
              <button
                onClick={() => handleNavClick('home')}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium w-full text-left"
                data-testid="mobile-nav-home"
              >
                Início
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium w-full text-left"
                data-testid="mobile-nav-services"
              >
                Serviços
              </button>
              <button
                onClick={() => handleNavClick('testimonials')}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium w-full text-left"
                data-testid="mobile-nav-testimonials"
              >
                Depoimentos
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium w-full text-left"
                data-testid="mobile-nav-contact"
              >
                Contato
              </button>
              
              {/* Mobile Theme Toggle */}
              <div className="border-t border-border pt-3 mt-3">
                <button
                  onClick={handleThemeToggle}
                  className="flex items-center text-muted-foreground hover:text-primary transition-all duration-200 px-3 py-2 text-sm font-medium w-full text-left rounded-lg hover:bg-accent"
                  data-testid="mobile-theme-toggle"
                >
                  <div className="relative w-5 h-5 mr-3">
                    <Moon className={`w-5 h-5 absolute transition-all duration-300 ${
                      theme === 'light' 
                        ? 'opacity-100 rotate-0 scale-100' 
                        : 'opacity-0 rotate-180 scale-75'
                    }`} />
                    <Sun className={`w-5 h-5 absolute transition-all duration-300 ${
                      theme === 'dark' 
                        ? 'opacity-100 rotate-0 scale-100' 
                        : 'opacity-0 -rotate-180 scale-75'
                    }`} />
                  </div>
                  {theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
