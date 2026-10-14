import React, { useState } from 'react';
import { Container, Section, Button, SectionLabel, SectionTitle, SectionSubtitle, PlaceholderImage } from './UI';
import { Check, X } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    { num: "i.", title: "ACESSE", desc: "Abra a biblioteca pelo celular antes ou durante o ensaio" },
    { num: "ii.", title: "FILTRE", desc: "Escolha a categoria do ensaio: casal, gestante, estúdio..." },
    { num: "iii.", title: "DIRIJA", desc: "Use a referência para conduzir o cliente com confiança" },
    { num: "iv.", title: "FOTOGRAFE", desc: "Entregue um ensaio variado, profissional e sem travas" }
  ];

  return (
    <Section className="bg-[#F4EFE5] pt-0">
      <Container>
        <SectionLabel text="COMO FUNCIONA" />
        <SectionTitle>Não É Apenas Uma Coleção de <span className="text-[#D4AF37] italic">Setups</span></SectionTitle>
        <SectionSubtitle className="max-w-2xl">
          A maioria das referências encontradas na internet está espalhada. O LightBook Pro foi criado para resolver exatamente esse problema.
        </SectionSubtitle>

        <div className="text-center mb-16">
          <p className="text-xl md:text-2xl font-serif italic text-[#111111] font-medium">
            "Tudo organizado em um só lugar — pra você encontrar o setup certo em segundos."
          </p>
        </div>

        <div className="flex flex-col space-y-12 mb-16 max-w-xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="text-[#D4AF37] font-serif text-5xl italic font-bold mb-3">{step.num}</span>
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-3">{step.title}</h3>
              <p className="text-[#666666] text-lg">{step.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export const TargetAudience = () => {
  return (
    <Section className="bg-[#111111] text-white">
      <Container>
        <SectionLabel text="PENSADO PARA VOCÊ" />
        <SectionTitle dark className="max-w-3xl mx-auto">
          Tudo Foi Feito Para Você <span className="text-[#D4AF37] italic">Nunca Mais Travar</span> em um Ensaio
        </SectionTitle>

        <div className="max-w-4xl mx-auto bg-[#171717] border border-gray-800 rounded-3xl p-6 md:p-12 shadow-2xl relative mt-16">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#111111] rounded-full px-6 py-2 text-sm font-bold tracking-widest uppercase flex items-center gap-2">
            <span>⚡</span> ACESSO IMEDIATO
          </div>

          <h3 className="text-2xl md:text-3xl font-serif text-center mb-10">
            Mais Repertório. <span className="text-[#D4AF37] italic">Mais Confiança.</span>
          </h3>

          <img src="https://i.imgur.com/sYE24cT.png" alt="Mockup Completo LightBook Pro" className="w-full h-auto object-contain mb-10 drop-shadow-2xl" />

          <p className="text-center text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Com a biblioteca completa, você para de perder tempo procurando referências e tem todas as opções organizadas em um só lugar, prontas para consultar quando precisar.
          </p>

          <ul className="space-y-5 text-gray-200 mb-12">
            {[
              '+100 setups prontos em uma só biblioteca',
              'Categorias: retratos, casais, gestantes, famílias, grupos, estúdio e mais',
              'Encontre a referência ideal em segundos',
              'Conduza ensaios com mais agilidade e profissionalismo',
              'Consulte pelo celular, tablet ou PC',
              'Acesso vitalício: pague uma vez, use sempre'
            ].map((item, i) => (
              <li key={i} className="flex items-center border-b border-gray-800/50 pb-4 last:border-0 last:pb-0">
                <div className="bg-[#D4AF37] text-[#111111] rounded-full p-1 mr-4 shrink-0">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <span className="text-sm md:text-base font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <div className="text-center mt-12 pt-8 border-t border-gray-800">
             <div className="text-[#D4AF37] font-serif text-2xl md:text-3xl italic mb-8">
               ⚡ Oferta especial até 07/08/2026
             </div>
             <Button href="#planos" className="">QUERO ACESSAR AGORA</Button>
             <p className="text-sm text-gray-400 mt-5">Acesso imediato no seu e-mail</p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export const Summary = () => {
  return null; // Merged with TargetAudience to match PDF flow
};

export const Bonuses = () => {
  const bonuses = [
    {
      id: "BÔNUS 01", name: "POSEBOOK PRO", desc: "+1000 Poses para diferentes tipos de ensaio.",
      image: "https://i.imgur.com/r9I5Aia.png", price: "R$ 49,90"
    },
    {
      id: "BÔNUS 02", name: "DIREÇÃO PRO", desc: "Guia para dirigir clientes e modelos.",
      image: "https://i.imgur.com/WIzhgX1.png", price: "R$ 29,90"
    },
    {
      id: "BÔNUS 03", name: "EDIÇÃO PRO", desc: "Fluxo de edição no Lightroom e Photoshop.",
      image: "https://i.imgur.com/xjAmai9.png", price: "R$ 39,90"
    },
    {
      id: "BÔNUS 04", name: "STORIES QUE VENDEM", desc: "Roteiros para atrair clientes pelos Stories.",
      image: "https://i.imgur.com/qcHi1G5.png", price: "R$ 24,90"
    },
    {
      id: "BÔNUS 05", name: "CHECKLIST DO ENSAIO PERFEITO", desc: "Organização completa do seu ensaio.",
      image: "https://i.imgur.com/mxvxbWy.png", price: "R$ 19,90"
    }
  ];

  return (
    <Section className="bg-[#111111] text-white py-12 md:py-16">
      <Container>
        <div className="text-center mb-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            <span className="italic text-gray-300">E não para por aí...</span> Você ainda recebe 👇
          </h2>
          <div className="inline-flex items-center bg-[#171717] border border-[#D4AF37]/20 text-[#D4AF37] rounded-full px-6 py-2.5 text-xs font-bold tracking-widest uppercase shadow-lg">
            🎁 +5 BÔNUS EXCLUSIVOS
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {bonuses.map((bonus, i) => (
            <div key={i} className={`bg-[#171717] rounded-3xl overflow-hidden flex flex-col p-6 md:p-8 border border-[#D4AF37]/40 shadow-[0_0_25px_rgba(212,175,55,0.15)] relative ${i === 4 ? 'md:col-span-2 md:max-w-xl md:mx-auto w-full' : ''}`}>
              <div className="w-full flex items-center justify-center mb-4 md:mb-6">
                 <img src={bonus.image} alt={bonus.name} className="w-full max-w-[160px] md:max-w-[200px] h-auto object-contain" />
              </div>
              
              <div className="w-full flex flex-col text-center flex-grow justify-end">
                <h3 className="text-lg md:text-xl font-serif font-bold mb-2 text-white">{bonus.name}</h3>
                <p className="text-gray-400 text-xs md:text-sm mb-4 leading-snug md:leading-relaxed max-w-sm mx-auto">{bonus.desc}</p>
                
                <div className="flex items-center justify-center space-x-2 text-[11px] md:text-sm font-bold mt-auto">
                  <span className="text-gray-300">Valor:</span>
                  <span className="text-gray-500 line-through decoration-1">{bonus.price}</span>
                  <span className="text-[#D4AF37] uppercase tracking-wider ml-1">GRÁTIS</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="#planos" className="">QUERO ACESSAR AGORA</Button>
        </div>
      </Container>
    </Section>
  );
};

export const Pricing = () => {
  const [showUpsell, setShowUpsell] = useState(false);

  return (
    <Section id="planos" className="bg-[#F4EFE5] pt-20 relative">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#111111] mb-4">
            ESCOLHA COMO <span className="text-[#D4AF37] italic">DESEJA ACESSAR</span>
          </h2>
        </div>

        <div className="flex flex-col gap-8 max-w-xl mx-auto items-center">
          {/* Basic Plan */}
          <div className="w-full bg-white rounded-[2rem] p-6 md:p-8 flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 text-center relative">
            <h3 className="text-base md:text-lg font-serif font-bold text-[#111111] mb-2 mx-auto text-center">Plano Básico</h3>
            <p className="text-xs font-bold tracking-[0.15em] text-[#666666] uppercase mb-6 mx-auto text-center">LightBook Pro</p>
            
            <div className="mb-6">
              <span className="text-gray-400 text-xs line-through">de R$ 47</span>
              <div className="text-6xl md:text-7xl font-serif font-bold text-[#111111] tracking-tighter mt-1">
                R$ 10
              </div>
            </div>

            <div className="text-left max-w-md mx-auto w-full mb-4">
              <p className="font-bold text-[#111111] uppercase tracking-wider text-xs">Você recebe:</p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow text-left max-w-md mx-auto w-full">
              {[
                'LightBook Pro com +100 setups',
                'Organização por categoria',
                'Garantia de 7 dias',
                'Acesso vitalício e imediato'
              ].map((item, i) => (
                <li key={i} className="flex items-center text-[#666666] border-b border-gray-100 pb-2.5 last:border-0 last:pb-0">
                  <div className="bg-[#D4AF37] text-[#111111] rounded-full p-0.5 mr-3 shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => setShowUpsell(true)}
              className="w-full bg-[#111111] text-white hover:bg-[#222] transition-colors py-3 px-6 rounded-full font-bold tracking-widest text-xs uppercase"
            >
              QUERO O PLANO BÁSICO
            </button>
          </div>

          {/* Premium Plan */}
          <div className="w-full bg-white text-[#111111] border-2 border-[#D4AF37] rounded-[2rem] p-6 md:p-8 flex flex-col relative shadow-[0_0_35px_rgba(212,175,55,0.4)] text-center">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#111111] font-bold text-xs px-5 py-2 rounded-full uppercase tracking-widest flex items-center justify-center whitespace-nowrap">
              MAIS POPULAR
            </div>
            
            <h3 className="text-lg md:text-xl font-serif font-bold text-[#111111] mb-2 mt-2 mx-auto text-center">Plano Premium</h3>
            <p className="text-xs font-bold tracking-[0.15em] text-[#D4AF37] uppercase mb-6 mx-auto text-center">LightBook Pro Premium</p>
            
            <div className="mb-6">
              <span className="text-gray-400 text-xs line-through">de R$ 97</span>
              <div className="text-6xl md:text-7xl font-serif font-bold text-[#D4AF37] tracking-tighter mt-1">
                R$ 27
              </div>
            </div>

            <div className="text-left max-w-md mx-auto w-full mb-4">
              <p className="font-bold text-[#111111] uppercase tracking-wider text-xs">Você recebe:</p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow text-left max-w-md mx-auto w-full">
              {[
                'LightBook Pro — Biblioteca +100 setups de iluminação', 
                'PoseBook Pro — +1000 Poses para diferentes tipos de ensaio', 
                'Direção Pro — Guia para dirigir clientes e modelos', 
                'Edição Pro — Fluxo de edição no Lightroom e Photoshop',
                'Stories que Vendem — Roteiros de Stories para atrair clientes',
                'Checklist do Ensaio Perfeito — Organização completa do ensaio',
                'Garantia de 7 dias',
                'Acesso vitalício e imediato'
              ].map((item, i) => (
                <li key={i} className="flex items-center text-[#666666] border-b border-gray-100 pb-2.5 last:border-0 last:pb-0">
                  <div className="bg-[#D4AF37] text-[#111111] rounded-full p-0.5 mr-3 shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-bold">{item}</span>
                </li>
              ))}
            </ul>

            <Button href="https://checkout.wiapy.com/bQEz4Yv-hkXA" className="w-full">
              QUERO O PLANO PREMIUM
            </Button>
          </div>
        </div>

        {/* Upsell Modal */}
        {showUpsell && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowUpsell(false)}></div>
            <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
              
              {/* Header */}
              <div className="bg-[#111111] py-4 px-5 flex flex-col items-center justify-center text-center relative">
                <button onClick={() => setShowUpsell(false)} className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors">
                  <X className="w-4 h-4" />
                </button>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                  Espera! Você está deixando dinheiro na mesa 👇
                </h3>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col text-center">
                
                <p className="text-[#666666] text-sm leading-relaxed mb-5">
                  Com o plano básico você leva o <strong className="text-[#111111]">LightBook Pro</strong>. Mas por apenas <strong className="text-[#111111]">R$ 7 a mais</strong>, você leva o <strong className="text-[#111111]">Premium + 5 bônus exclusivos</strong>.
                </p>

                {/* Offer Box */}
                <div className="bg-[#F4EFE5]/50 rounded-xl border border-gray-200 p-4 mb-5">
                  <p className="text-[#111111] font-bold text-[10px] tracking-widest uppercase mb-2">LIGHTBOOK PRO PREMIUM</p>
                  
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-gray-400 font-bold text-xs line-through">R$ 97,00</span>
                    <span className="bg-[#111111] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">OFERTA ESPECIAL</span>
                  </div>
                  
                  <div className="flex items-start justify-center text-[#111111] mb-1">
                    <span className="font-bold text-lg mt-1 mr-1">R$</span>
                    <span className="font-black text-5xl tracking-tighter">17</span>
                  </div>
                  
                  <p className="text-gray-500 text-[10px] font-medium">pagamento único • acesso vitalício</p>
                </div>

                <Button href="https://checkout.wiapy.com/fOIrrkAx6Nuu" className="w-full mb-3 !rounded-xl !py-2.5 !text-xs">
                  SIM, QUERO O PLANO PREMIUM
                </Button>

                <a href="https://checkout.wiapy.com/qlTTRbANlB3o" className="text-gray-400 hover:text-gray-600 text-[11px] text-center transition-colors pb-1">
                  Não, prefiro só o LightBook Pro pelo básico
                </a>
              </div>
            </div>
          </div>
        )}

      </Container>
    </Section>
  );
};
