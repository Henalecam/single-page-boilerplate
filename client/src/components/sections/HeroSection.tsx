import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/lib/analytics';

export function HeroSection() {
  const handleCTAClick = (action: string) => {
    trackEvent('hero_cta_click', 'hero', action);
  };

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Section id="home" className="pt-20 pb-16 sm:pt-24 lg:pt-32">
      <Container>
        <div className="text-center animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6" data-testid="hero-title">
            Transforme suas{' '}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              ideias digitais
            </span>
            {' '}em realidade
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="hero-description">
            Template moderno e responsivo para landing pages e sites institucionais, 
            construído com Next.js 14, TailwindCSS e otimizado para performance e conversão.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => {
                handleCTAClick('primary');
                handleScrollToContact();
              }}
              className="bg-primary hover:bg-blue-600 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              data-testid="button-primary-cta"
            >
              Começar Agora
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => {
                handleCTAClick('secondary');
                const element = document.getElementById('services');
                if (element) {
                  const offsetTop = element.offsetTop - 80;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                  });
                }
              }}
              className="bg-secondary hover:bg-accent text-secondary-foreground font-semibold border border-border transition-all duration-200"
              data-testid="button-secondary-cta"
            >
              Ver Demonstração
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600" 
            alt="Dashboard interface with analytics and charts" 
            className="rounded-2xl shadow-2xl mx-auto max-w-full h-auto" 
            data-testid="hero-image"
          />
        </div>
      </Container>
    </Section>
  );
}
