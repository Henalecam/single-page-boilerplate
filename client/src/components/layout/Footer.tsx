import { Container } from '@/components/ui/Container';
import { Link } from 'wouter';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const services = [
  { name: 'Desenvolvimento Web', href: '#services' },
  { name: 'Design UI/UX', href: '#services' },
  { name: 'Marketing Digital', href: '#services' },
  { name: 'E-commerce', href: '#services' },
  { name: 'Consultoria Tech', href: '#services' }
];

const company = [
  { name: 'Sobre Nós', href: '#' },
  { name: 'Nossa Equipe', href: '#' },
  { name: 'Carreiras', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Contato', href: '#contact' }
];

const legal = [
  { name: 'Política de Privacidade', href: '#' },
  { name: 'Termos de Uso', href: '#' },
  { name: 'Cookies', href: '#' }
];

const socialMedia = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' }
];

export function Footer() {
  const handleLinkClick = (section: string, type: string) => {
    trackEvent('footer_link_click', 'footer', `${type}_${section}`);
    
    if (section.startsWith('#')) {
      const element = document.getElementById(section.substring(1));
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleSocialClick = (platform: string) => {
    trackEvent('social_media_click', 'footer', platform);
  };

  return (
    <footer className="bg-card border-t border-border">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <Link href="/" onClick={() => trackEvent('logo_click', 'footer')}>
                <div className="flex items-center mb-4" data-testid="footer-logo">
                  <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">L</span>
                  </div>
                  <div className="ml-3">
                    <span className="text-xl font-semibold text-card-foreground">Landing</span>
                  </div>
                </div>
              </Link>
              
              <p className="text-muted-foreground mb-6 max-w-md" data-testid="footer-description">
                Transformamos ideias digitais em soluções incríveis. 
                Template moderno e otimizado para Next.js 14 e TailwindCSS.
              </p>
              
              <div className="flex space-x-4" data-testid="social-media-links">
                {socialMedia.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      onClick={() => handleSocialClick(social.name.toLowerCase())}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      aria-label={`Follow us on ${social.name}`}
                      data-testid={`social-link-${social.name.toLowerCase()}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-card-foreground uppercase tracking-wider mb-4">
                Serviços
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <button
                      onClick={() => handleLinkClick(service.href, 'service')}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                      data-testid={`footer-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-card-foreground uppercase tracking-wider mb-4">
                Empresa
              </h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleLinkClick(item.href, 'company')}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                      data-testid={`footer-company-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm" data-testid="copyright">
              © 2024 Landing. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              {legal.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleLinkClick(item.href, 'legal')}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  data-testid={`footer-legal-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
