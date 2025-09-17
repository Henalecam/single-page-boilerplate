import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { insertContactMessageSchema } from '@shared/schema';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { trackEvent } from '@/lib/analytics';
import { Mail, Phone, MapPin, CheckCircle, XCircle, Loader2 } from 'lucide-react';

const contactFormSchema = insertContactMessageSchema.extend({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Por favor, forneça um email válido'),
  subject: z.string().min(1, 'Por favor, selecione um assunto'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres')
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const contactInfo = [
  {
    id: 'email',
    icon: Mail,
    title: 'Email',
    value: 'contato@landing.com'
  },
  {
    id: 'phone',
    icon: Phone,
    title: 'Telefone',
    value: '+55 (11) 99999-9999'
  },
  {
    id: 'location',
    icon: MapPin,
    title: 'Localização',
    value: 'São Paulo, SP'
  }
];

export function ContactSection() {
  const { toast } = useToast();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      setSubmitStatus('success');
      form.reset();
      toast({
        title: 'Mensagem enviada com sucesso!',
        description: 'Entraremos em contato em breve.',
      });
      trackEvent('contact_form_submit', 'contact', 'success');
    },
    onError: (error: any) => {
      setSubmitStatus('error');
      toast({
        title: 'Erro ao enviar mensagem',
        description: error.message || 'Tente novamente mais tarde.',
        variant: 'destructive',
      });
      trackEvent('contact_form_submit', 'contact', 'error');
    }
  });

  const onSubmit = (data: ContactFormData) => {
    setSubmitStatus('idle');
    contactMutation.mutate(data);
  };

  return (
    <Section id="contact" className="py-16 sm:py-24 bg-muted">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="contact-title">
              Entre em Contato
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="contact-description">
              Pronto para transformar sua ideia em realidade? 
              Vamos conversar sobre seu próximo projeto.
            </p>
          </div>

          <Card className="shadow-xl p-8" data-testid="contact-form-card">
            <CardContent className="p-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Seu nome completo" 
                              {...field}
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="seu@email.com" 
                              {...field}
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Assunto</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-subject">
                              <SelectValue placeholder="Selecione um assunto" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="desenvolvimento">Desenvolvimento Web</SelectItem>
                            <SelectItem value="design">Design UI/UX</SelectItem>
                            <SelectItem value="marketing">Marketing Digital</SelectItem>
                            <SelectItem value="ecommerce">E-commerce</SelectItem>
                            <SelectItem value="consultoria">Consultoria Tech</SelectItem>
                            <SelectItem value="suporte">Suporte & Manutenção</SelectItem>
                            <SelectItem value="outro">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Conte-nos mais sobre seu projeto..."
                            rows={5}
                            className="resize-vertical"
                            {...field}
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="text-center">
                    <Button 
                      type="submit"
                      size="lg"
                      disabled={contactMutation.isPending}
                      className="bg-primary hover:bg-blue-600 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      data-testid="button-submit-contact"
                    >
                      {contactMutation.isPending ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Mail className="w-5 h-5 mr-2" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 rounded-lg" data-testid="success-message">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 rounded-lg" data-testid="error-message">
                  <div className="flex items-center">
                    <XCircle className="w-5 h-5 mr-2" />
                    <span>Erro ao enviar mensagem. Tente novamente.</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.id} className="flex flex-col items-center" data-testid={`contact-info-${info.id}`}>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  <p className="text-muted-foreground">{info.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
