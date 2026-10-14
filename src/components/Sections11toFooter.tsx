import React, { useState } from 'react';
import { Container, Section, Button, SectionLabel, SectionTitle, PlaceholderImage } from './UI';
import { Mail, Smartphone, Tablet, Monitor, ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';

export const AccessInfo = () => {
  return null; // Merged or removed based on PDF structure, usually inside the plan cards or hero
};

export const Testimonials = () => {
  return (
    <Section className="bg-[#F4EFE5]">
      <Container>
        <SectionTitle className="mb-12">VEJA O QUE OUTROS FOTÓGRAFOS <br className="hidden md:block"/><span className="text-[#D4AF37] italic">ESTÃO FALANDO</span></SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { 
              img: 'https://i.imgur.com/5TpzH8P.jpeg',
              name: 'Lucas Martins',
              role: 'Fotógrafo Profissional',
              text: 'O material é muito prático. Já deixei salvo no celular para consultar antes dos ensaios e achei bem fácil encontrar uma iluminação de acordo com o resultado que quero fazer.'
            },
            { 
              img: 'https://i.imgur.com/vVaxGjA.jpeg',
              name: 'Marina Azevedo',
              role: 'Fotógrafa de Retratos',
              text: 'Gostei principalmente da forma como os setups são apresentados. É bem visual e dá para entender rápido onde posicionar cada luz sem ficar procurando informação em vários lugares.'
            },
            { 
              img: 'https://i.imgur.com/UOa9xEU.jpeg',
              name: 'Gabriel Nunes',
              role: 'Fotógrafo Corporativo',
              text: 'O que mais me chamou atenção foi ter o resultado e o setup de iluminação juntos. Facilita bastante para visualizar a montagem e adaptar para o equipamento que tenho.'
            }
          ].map((item, i) => (
             <div key={i} className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col">
              <div className="text-[#D4AF37] text-xl tracking-widest mb-4">★★★★★</div>
              <p className="text-[#666666] italic flex-grow mb-8 font-medium">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-[#111111]">{item.name}</p>
                  <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export const Guarantee = () => {
  return (
    <Section className="bg-[#F4EFE5] py-20">
      <Container>
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
           
           <div className="relative w-48 h-48 mb-12 mx-auto flex items-center justify-center">
             {/* Ribbons */}
             <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex z-0">
               <svg width="48" height="72" viewBox="0 0 40 60" className="text-[#0B3B24] drop-shadow-xl -rotate-12 translate-x-3 translate-y-1">
                  <path d="M0 0h40v60L20 45 0 60V0z" fill="currentColor"/>
                  <path d="M0 0h40v60L20 45 0 60V0z" fill="url(#grad1)" opacity="0.3"/>
                  <path d="M2 0v55l18-13.5L38 55V0" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#000" />
                      <stop offset="100%" stopColor="#fff" />
                    </linearGradient>
                  </defs>
               </svg>
               <svg width="48" height="72" viewBox="0 0 40 60" className="text-[#0B3B24] drop-shadow-xl rotate-12 -translate-x-3 translate-y-1">
                  <path d="M0 0h40v60L20 45 0 60V0z" fill="currentColor"/>
                  <path d="M0 0h40v60L20 45 0 60V0z" fill="url(#grad2)" opacity="0.3"/>
                  <path d="M2 0v55l18-13.5L38 55V0" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#000" />
                      <stop offset="100%" stopColor="#fff" />
                    </linearGradient>
                  </defs>
               </svg>
             </div>
             
             {/* Outer gold starburst */}
             <svg className="absolute inset-0 w-full h-full text-[#D4AF37] drop-shadow-2xl z-10" viewBox="0 0 100 100">
               <path fill="currentColor" d="M50 2L61 11L75 7L81 20L95 27L91 41L100 50L91 59L95 73L81 80L75 93L61 89L50 98L39 89L25 93L19 80L5 73L9 59L0 50L9 41L5 27L19 20L25 7L39 11Z" />
             </svg>
             
             {/* Inner circle */}
             <div className="absolute inset-0 m-[9%] rounded-full bg-[#0B3B24] border-2 border-[#D4AF37] border-dashed flex items-center justify-center flex-col z-20 shadow-inner">
                <span className="text-white text-[10px] font-bold tracking-widest uppercase mb-0.5 mt-2">GARANTIA</span>
                <span className="text-[#D4AF37] text-6xl font-black leading-none tracking-tighter">7</span>
                <span className="text-[#D4AF37] text-sm font-black tracking-widest uppercase mb-1">DIAS</span>
                <span className="text-white text-[9px] font-bold tracking-[0.2em] uppercase">INCONDICIONAL</span>
             </div>
           </div>
           
           <div className="flex items-center justify-center gap-4 mb-6">
             <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
             <span className="text-[#D4AF37] font-bold tracking-[0.2em] text-sm md:text-base uppercase">Risco Zero</span>
             <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
           </div>
           
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#111111] mb-6 leading-tight">
             Garantia Incondicional de <br className="hidden md:block" />
             <span className="text-[#D4AF37] italic font-medium text-4xl md:text-6xl mt-2 block">7 Dias</span>
           </h2>
           
           <p className="text-[#666666] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
             Não gostou? Devolvemos 100% do seu investimento. <br className="hidden md:block" />
             <span className="text-[#111111] font-bold">Sem burocracia, sem letras miúdas e sem perguntas.</span>
           </p>
        </div>
      </Container>
    </Section>
  );
};

export const FAQ = () => {
  const faqs = [
    { q: "O LightBook Pro é um produto físico?", a: "Não. O produto é 100% digital." },
    { q: "Como recebo o acesso?", a: "O acesso é liberado imediatamente após a aprovação do pagamento, você recebe no e-mail." },
    { q: "É um curso em vídeo?", a: "Não. É uma biblioteca visual em PDF para consulta rápida." },
    { q: "Posso acessar pelo celular?", a: "Sim. Você pode acessar por qualquer dispositivo." },
    { q: "O material serve para iniciantes?", a: "Sim, os setups mostram exatamente como montar cada cena." },
    { q: "Preciso ter todos os equipamentos mostrados?", a: "Não, você pode adaptar os setups para a realidade dos seus equipamentos." },
    { q: "Qual a diferença entre o plano Básico e o Premium?", a: "O Premium inclui 5 bônus adicionais de direção, edição e negócios." },
    { q: "Existe mensalidade?", a: "Não, é um pagamento único que garante acesso ao material." },
    { q: "Tenho garantia?", a: "Sim, você tem a garantia incondicional informada no momento da compra." }
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section className="bg-white">
      <Container>
        <SectionTitle className="mb-12">AINDA FICOU <span className="text-[#D4AF37] italic">ALGUMA DÚVIDA?</span></SectionTitle>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
             <div key={i} className="bg-[#F4EFE5] rounded-2xl overflow-hidden transition-all duration-200 border border-[#F4EFE5]/50">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-5 sm:px-8 py-5 sm:py-6 flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-[#111111] text-base md:text-lg pr-4">{faq.q}</span>
                {open === i ? <Minus className="text-[#D4AF37] w-5 h-5 md:w-6 md:h-6 shrink-0" /> : <Plus className="text-[#D4AF37] w-5 h-5 md:w-6 md:h-6 shrink-0" />}
              </button>
              {open === i && (
                <div className="px-5 sm:px-8 pb-5 sm:pb-6 text-[#666666] leading-relaxed pt-2 text-sm md:text-base">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export const FinalCTA = () => {
  return (
    <Section className="bg-[#111111] py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#D4AF37]/5 blur-3xl opacity-50"></div>
      <Container className="relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
          Pronto para <span className="text-[#D4AF37] italic">Elevar</span> sua Fotografia?
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Garanta agora o seu acesso ao LightBook Pro e comece a aplicar os setups de iluminação hoje mesmo.
        </p>
        <Button href="#planos" variant="vibrant">
          QUERO ACESSAR AGORA
        </Button>
      </Container>
    </Section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-[#111111] text-gray-500 py-16 text-sm text-center">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="font-serif text-3xl text-white font-bold italic">
            LightBook Pro
          </div>
          
          <p className="text-gray-400">Produto 100% digital.</p>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 tracking-wide text-xs text-gray-400">
            <a href="PRIVACY_URL" className="hover:text-[#D4AF37] transition-colors underline">Política de Privacidade</a>
            <a href="TERMS_URL" className="hover:text-[#D4AF37] transition-colors underline">Termos de Uso</a>
            <a href="mailto:CONTACT_EMAIL" className="hover:text-[#D4AF37] transition-colors underline">Contato</a>
          </div>
          
          <p className="text-xs text-gray-600 mt-8">
            &copy; 2026 LightBook Pro — Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
};
