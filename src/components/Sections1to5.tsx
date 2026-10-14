import React from 'react';
import { motion } from 'motion/react';
import { Container, Section, Button, SectionLabel, SectionTitle, SectionSubtitle, PlaceholderImage } from './UI';
import { Check, ChevronRight, ChevronLeft, Play, User, Heart, Baby, Users, Sparkles, Sun, Gem, Lightbulb } from 'lucide-react';

export const Hero = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const dateString = `${day}/${month}`;

  return (
    <>
      <div className="w-full bg-[#D4AF37] text-[#111111] font-bold text-center py-2.5 px-4 uppercase tracking-widest text-[10px] sm:text-xs md:text-sm flex items-center justify-center">
        OFERTA ESPECIAL DISPONÍVEL APENAS HOJE — {dateString}
      </div>
      <Section className="bg-[#111111] text-white pt-12 pb-20 relative overflow-hidden">
        {/* Subtle Golden Glow Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] md:w-full max-w-4xl h-[400px] md:h-[600px] bg-[#D4AF37] opacity-[0.12] blur-[120px] rounded-full pointer-events-none"></div>
        
        <Container className="flex flex-col items-center text-center relative z-10">
        <div className="inline-flex items-center bg-[#171717] border border-[#D4AF37]/30 text-[#D4AF37] rounded-full px-5 py-1.5 text-xs font-bold tracking-widest mb-6 uppercase shadow-lg">
          Biblioteca Visual para Fotógrafos
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6 mt-2 max-w-4xl mx-auto uppercase">
          <span className="text-[1.2em]">+100</span> SETUPS DE <br className="hidden md:block"/>
          <span className="text-[#D4AF37] italic [text-shadow:0_0_35px_rgba(212,175,55,0.5)]">ILUMINAÇÃO PROFISSIONAL</span>
        </h1>
        
        <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          Biblioteca com +100 setups de iluminação profissionais utilizados pelos melhores fotógrafos, como referência para criar fotos com mais confiança, clareza e direção em seus ensaios.
        </p>

        {/* Mockup Area */}
        <div className="w-full max-w-4xl mx-auto mb-12 relative">
          <img src="https://i.imgur.com/sYE24cT.png" alt="LightBook Pro Mockup" className="w-full h-auto object-contain drop-shadow-2xl" />
        </div>

        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <ul className="text-left space-y-4 mb-12 text-gray-300 w-full max-w-xl mx-auto">
            {[
              'Mais de 100 setups de iluminação',
              'Resultado final + montagem na mesma página',
              'Estúdio, externo, casais, gestantes, grupos e eventos',
              'Consulta pelo celular, tablet ou computador',
              'Acesso digital vitalício e imediato'
            ].map((item, i) => (
              <li key={i} className="flex items-center">
                <Check className="text-[#D4AF37] w-5 h-5 mr-3 shrink-0" strokeWidth={3} />
                <span className="text-sm md:text-base font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <Button href="#planos" className="">
            QUERO ACESSAR AGORA
          </Button>
          <p className="text-sm text-gray-400 mt-5">
            Produto digital • Acesso imediato após a confirmação do pagamento
          </p>
        </div>
      </Container>
    </Section>
    </>
  );
};

export const Problem = () => {
  return (
    <Section className="bg-[#F4EFE5]">
      <Container>
        <SectionLabel text="UM PROBLEMA COMUM ENTRE FOTÓGRAFOS" />
        <SectionTitle className="max-w-4xl mx-auto mb-10">
          Você já soube qual resultado queria, mas não sabia como <span className="text-[#D4AF37] italic">posicionar as luzes?</span>
        </SectionTitle>
        
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
          <p className="text-base md:text-lg text-[#666666] mb-8 leading-relaxed">
            Muitas vezes o fotógrafo encontra uma imagem bonita, mas não consegue identificar claramente onde estava a luz principal, qual modificador foi usado, a posição da câmera ou como as sombras foram controladas.
          </p>

          <div className="bg-white p-6 md:p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-l-4 border-[#D4AF37] mb-8 w-full">
            <p className="text-lg md:text-xl font-serif text-[#111111] italic font-medium">
              "Qual luz devo usar e onde devo posicioná-la para chegar a esse resultado?"
            </p>
          </div>

          <p className="text-base md:text-lg text-[#666666] leading-relaxed">
            O LightBook Pro reúne o resultado e a montagem em uma única página, para que você consiga compreender cada setup visualmente.
          </p>
        </div>
      </Container>
    </Section>
  );
};

export const Benefits = () => {
  const benefits = [
    { num: "01", title: "Mais Clareza", desc: "Visualize rapidamente a posição de cada luz e equipamento." },
    { num: "02", title: "Mais Repertório", desc: "Conheça diferentes formas de iluminar retratos, casais, grupos e eventos." },
    { num: "03", title: "Mais Agilidade", desc: "Consulte o setup antes ou durante o ensaio sem interrupções." },
    { num: "04", title: "Mais Organização", desc: "Encontre todas as referências reunidas em uma única biblioteca." },
    { num: "05", title: "Mais Segurança", desc: "Planeje antecipadamente a montagem que deseja utilizar." },
    { num: "06", title: "Mais Criatividade", desc: "Combine diferentes técnicas e adapte os setups ao seu estilo." },
    { num: "07", title: "Mais Variedade", desc: "Evite produzir sempre o mesmo tipo de iluminação." },
    { num: "08", title: "Melhor Aproveitamento", desc: "Descubra novas formas de utilizar luzes, modificadores e rebatedores." },
  ];

  return (
    <Section className="bg-[#111111] text-white">
      <Container>
        <SectionLabel text="O QUE VOCÊ GANHA" />
        <SectionTitle dark className="max-w-3xl mx-auto mb-12">
          Planeje e execute seus ensaios com <span className="text-[#D4AF37] italic">Mais Clareza</span>
        </SectionTitle>

        <div className="max-w-4xl mx-auto bg-[#171717] rounded-3xl border border-gray-800 overflow-hidden shadow-2xl">
          <div className="flex flex-col">
            {benefits.map((b, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 md:p-10 border-b border-gray-800/50 last:border-0">
                <span className="text-[#D4AF37] font-serif text-2xl md:text-3xl italic font-medium mb-3">{b.num}</span>
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 text-white">{b.title}</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
           <Button href="#planos">QUERO ACESSAR AGORA</Button>
        </div>
      </Container>
    </Section>
  );
};

export const Deliverables = () => {
  const categories = [
    { icon: <User className="w-8 h-8" strokeWidth={1.5} />, title: "Retratos", desc: "Iluminação clássica e profissional" },
    { icon: <Heart className="w-8 h-8" strokeWidth={1.5} />, title: "Casais", desc: "Ensaios românticos e pré-wedding" },
    { icon: <Baby className="w-8 h-8" strokeWidth={1.5} />, title: "Gestantes", desc: "Iluminação para ensaios de gestação" },
    { icon: <Users className="w-8 h-8" strokeWidth={1.5} />, title: "Famílias e Grupos", desc: "Luz para duas ou mais pessoas" },
    { icon: <Sparkles className="w-8 h-8" strokeWidth={1.5} />, title: "Estúdio e Moda", desc: "Setups para retratos e editoriais" },
    { icon: <Sun className="w-8 h-8" strokeWidth={1.5} />, title: "Luz Natural e Externas", desc: "Ambientes internos e externos" },
    { icon: <Gem className="w-8 h-8" strokeWidth={1.5} />, title: "Casamentos e Eventos", desc: "Cerimônias, festas e momentos especiais" },
    { icon: <Lightbulb className="w-8 h-8" strokeWidth={1.5} />, title: "Criativa e Avançada", desc: "Efeitos, recortes e setups diferenciados" }
  ];

  const benefits = [
    "Mais de 100 páginas visuais",
    "Fotografias com resultado final",
    "Diagramas de iluminação",
    "Equipamentos recomendados",
    "Configurações da câmera",
    "Dicas rápidas",
    "Nível de dificuldade",
    "Acesso digital"
  ];

  const images = [
    "https://i.imgur.com/Da4NCNH.png",
    "https://i.imgur.com/5HzDgAv.png",
    "https://i.imgur.com/q5Xatao.png",
    "https://i.imgur.com/xaIZCUS.png",
    "https://i.imgur.com/Pfat8ef.png",
    "https://i.imgur.com/M4nLaRv.png"
  ];

  return (
    <Section className="bg-[#F4EFE5]">
      <Container>
        <SectionTitle className="mb-4">TUDO O QUE VOCÊ VAI RECEBER <br className="hidden md:block"/><span className="text-[#D4AF37] italic">NO LIGHTBOOK PRO</span></SectionTitle>
        <SectionSubtitle className="mb-12">
          Uma biblioteca visual organizada para consultar antes ou durante seus ensaios.
        </SectionSubtitle>

        <div className="max-w-4xl mx-auto mb-16">
          <img src="https://i.imgur.com/sYE24cT.png" alt="LightBook Pro" className="w-full h-auto rounded-2xl shadow-xl" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto mb-12 md:mb-16">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white p-3 sm:p-4 md:p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="text-[#D4AF37] mb-3 md:mb-4">
                {cat.icon}
              </div>
              <h3 className="font-serif font-bold text-[#111111] text-sm md:text-base mb-1 md:mb-2 leading-tight">{cat.title}</h3>
              <p className="text-[10px] md:text-sm text-[#666666] leading-snug md:leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 mb-12 md:mb-16">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {benefits.map((item, i) => (
              <li key={i} className="flex items-center text-[#666666]">
                <Check className="text-[#D4AF37] w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 shrink-0" strokeWidth={3} />
                <span className="font-medium text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full mx-auto relative overflow-hidden pb-4">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-center mb-10 text-[#111111]">
            VEJA O LIGHTBOOK <span className="text-[#D4AF37] italic">POR DENTRO</span>
          </h3>
          
          <div className="flex relative w-full before:absolute before:left-0 before:top-0 before:w-12 md:before:w-24 before:h-full before:bg-gradient-to-r before:from-[#F4EFE5] before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-12 md:after:w-24 after:h-full after:bg-gradient-to-l after:from-[#F4EFE5] after:to-transparent after:z-10 -mx-6 px-6 sm:mx-0 sm:px-0">
            <motion.div
              className="flex gap-4 md:gap-6 shrink-0"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            >
              {[...images, ...images].map((img, i) => (
                <div key={i} className="shrink-0 w-[260px] md:w-[320px] bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
                  <img src={img} alt={`Página ${i + 1}`} className="w-full h-auto rounded-xl pointer-events-none" />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <Button href="#planos" className=" relative z-20">QUERO ACESSAR AGORA</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export const InsideGallery = () => {
  const images = [
    "https://i.imgur.com/Da4NCNH.png",
    "https://i.imgur.com/5HzDgAv.png",
    "https://i.imgur.com/q5Xatao.png",
    "https://i.imgur.com/xaIZCUS.png",
    "https://i.imgur.com/Pfat8ef.png",
    "https://i.imgur.com/M4nLaRv.png"
  ];

  return (
    <Section className="bg-[#111111] text-white overflow-hidden pb-0">
      <Container>
        <SectionLabel text="POR DENTRO DO MATERIAL" />
        <SectionTitle dark className="mb-6">
          Dá uma <span className="text-[#D4AF37] italic">espiadinha</span> no que tem dentro
        </SectionTitle>
        <SectionSubtitle dark className="mb-12">
          Cada categoria com referências visuais claras, prontas para guiar você no ensaio.
        </SectionSubtitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {images.slice(0, 4).map((img, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden p-1">
              <img src={img} alt={`Página ${i + 1}`} className="w-full h-auto rounded-xl" />
            </div>
          ))}
        </div>
        
        <p className="text-center text-[#D4AF37] italic font-serif text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Essas são só algumas páginas — tem muito mais dentro da biblioteca.
        </p>

        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {images.slice(4, 6).map((img, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden p-1 shadow-2xl relative">
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur text-black text-xs font-bold px-3 py-1.5 rounded-lg flex items-center shadow">
                 📖 {117 + i} de 473
              </div>
              <img src={img} alt={`Página ${i + 5}`} className="w-full h-auto rounded-xl" />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
