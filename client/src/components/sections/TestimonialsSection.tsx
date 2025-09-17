import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 'maria-silva',
    name: 'Maria Silva',
    position: 'CEO, TechStart',
    content: 'A equipe transformou completamente nossa presença digital. O novo site aumentou nossas conversões em 300% e a experiência do usuário melhorou drasticamente.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100'
  },
  {
    id: 'carlos-santos',
    name: 'Carlos Santos',
    position: 'CTO, InovaCode',
    content: 'Profissionais excepcionais! Entregaram o projeto no prazo e superaram todas as nossas expectativas. O design é moderno e funcional.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100'
  },
  {
    id: 'ana-costa',
    name: 'Ana Costa',
    position: 'Founder, ModaStyle',
    content: 'Excelente trabalho em nossa loja virtual. As vendas online triplicaram depois do redesign. A experiência do cliente melhorou significativamente.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100'
  },
  {
    id: 'roberto-lima',
    name: 'Roberto Lima',
    position: 'Director, FinTech Pro',
    content: 'A consultoria em transformação digital foi fundamental para nosso crescimento. Implementaram soluções que otimizaram todos nossos processos.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100'
  },
  {
    id: 'julia-pereira',
    name: 'Julia Pereira',
    position: 'Manager, EduTech',
    content: 'Suporte excepcional! Sempre disponíveis e rápidos para resolver qualquer questão. A manutenção do nosso sistema está sempre em dia.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100'
  },
  {
    id: 'fernando-alves',
    name: 'Fernando Alves',
    position: 'CMO, GrowthLab',
    content: 'Estratégias de marketing digital que realmente funcionam! Nosso ROI aumentou 250% em apenas 6 meses. Equipe muito competente.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100'
  }
];

function StarRating() {
  return (
    <div className="flex text-yellow-400 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <Section id="testimonials" className="py-16 sm:py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="testimonials-title">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="testimonials-description">
            Histórias reais de empresas que transformaram seus negócios conosco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="p-6 shadow-md"
              data-testid={`testimonial-card-${testimonial.id}`}
            >
              <CardContent className="p-0">
                <StarRating />
                <p className="text-card-foreground mb-4" data-testid={`testimonial-content-${testimonial.id}`}>
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={`Professional headshot of ${testimonial.name}`} 
                    className="w-12 h-12 rounded-full mr-4 object-cover" 
                    data-testid={`testimonial-image-${testimonial.id}`}
                  />
                  <div>
                    <h4 className="font-semibold text-card-foreground" data-testid={`testimonial-name-${testimonial.id}`}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground" data-testid={`testimonial-position-${testimonial.id}`}>
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
