import { Code, Palette, TrendingUp, ShoppingCart, Shield, HeadphonesIcon } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    id: 'web-development',
    icon: Code,
    title: 'Desenvolvimento Web',
    description: 'Criamos sites e aplicações web modernas, responsivas e otimizadas para performance.',
    features: ['Next.js e React', 'Design Responsivo', 'SEO Otimizado']
  },
  {
    id: 'ui-ux-design',
    icon: Palette,
    title: 'Design UI/UX',
    description: 'Interfaces intuitivas e experiências de usuário que convertem visitantes em clientes.',
    features: ['Prototipagem', 'Testes de Usabilidade', 'Design System']
  },
  {
    id: 'digital-marketing',
    icon: TrendingUp,
    title: 'Marketing Digital',
    description: 'Estratégias de marketing digital que aumentam sua visibilidade e geram resultados.',
    features: ['SEO & SEM', 'Redes Sociais', 'Analytics']
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Lojas virtuais completas com integração de pagamentos e gestão de estoque.',
    features: ['Shopify & WooCommerce', 'Gateways de Pagamento', 'Gestão de Inventário']
  },
  {
    id: 'tech-consulting',
    icon: Shield,
    title: 'Consultoria Tech',
    description: 'Consultoria especializada em tecnologia e transformação digital para sua empresa.',
    features: ['Arquitetura de Software', 'Cloud Infrastructure', 'DevOps & CI/CD']
  },
  {
    id: 'support-maintenance',
    icon: HeadphonesIcon,
    title: 'Suporte & Manutenção',
    description: 'Suporte técnico contínuo e manutenção para garantir o perfeito funcionamento.',
    features: ['Suporte 24/7', 'Atualizações Regulares', 'Backup & Segurança']
  }
];

export function ServicesSection() {
  return (
    <Section id="services" className="py-16 sm:py-24 bg-muted">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="services-title">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="services-description">
            Oferecemos soluções completas para suas necessidades digitais, 
            desde desenvolvimento até estratégia de marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id} 
                className="p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
                data-testid={`service-card-${service.id}`}
              >
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-4" data-testid={`service-title-${service.id}`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6" data-testid={`service-description-${service.id}`}>
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center" data-testid={`service-feature-${service.id}-${index}`}>
                        <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
