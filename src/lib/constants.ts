export const CLINIC_NAME = "Instituto Reparatè";
export const CLINIC_TAGLINE = "Cirurgia Plástica com Segurança, Tecnologia e Cuidado Integral";
export const CLINIC_LOCATION = "Campina Grande, PB";
export const CLINIC_INSTAGRAM = "@institutoreparate";

export const WHATSAPP_NUMBER = "5583987038365";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20no%20Instituto%20Reparatè.`;

export const DOCTORS = [
  {
    name: "Dr. Daniel Rolim",
    role: "Cirurgião Plástico",
    crm: "CRM/PB 7909 · RQE 3879 / 3929",
    photo: "/images/dr-daniel.JPG",
    description: "Especialista em cirurgia plástica estética e reparadora, com vasta experiência em procedimentos corporais e faciais de alta complexidade.",
  },
  {
    name: "Dra. Sandra Karina Rolim",
    role: "Ginecologista · Endoscopia Ginecológica",
    crm: "CRM/PB 7811 · RQE 3882 / 3892",
    photo: "/images/dra-sandra.JPG",
    description: "Especialista em endoscopia ginecológica, com realização de histeroscopia cirúrgica e diagnóstica.",
  },
  {
    name: "Stephany Renally",
    role: "Nutricionista",
    crm: "CRN 37159",
    photo: "/images/dra-stephany.JPG",
    description: "Nutrição clínica especializada no acompanhamento pré e pós-operatório, emagrecimento saudável e protocolos de saúde hormonal feminina.",
  },
  {
    name: "Keila Monteiro",
    role: "Fisioterapeuta",
    crm: "CREFITO 322232-F",
    photo: "/images/dra-keila.JPG",
    description: "Fisioterapia pós-operatória especializada em drenagem linfática, tratamento de fibroses e recuperação após procedimentos cirúrgicos.",
  },
];

export const NUMBERS = [
  { value: 15, suffix: "+", label: "Anos de Experiência" },
  { value: 2000, suffix: "+", label: "Procedimentos Realizados" },
  { value: 98, suffix: "%", label: "Satisfação dos Pacientes" },
];

export const SERVICES = [
  {
    category: "Cirurgia Corporal",
    icon: "✦",
    color: "#6B8B7A",
    procedures: [
      "Abdominoplastia",
      "Mini-lipoabdominoplastia vídeo assistida (MILA)",
      "Lipoaspiração",
      "Mamoplastia & Mastopexia",
      "Implante de Mamas",
      "Remodelação Costal",
      "Gluteoplastia",
      "Cirurgia Reparadora",
    ],
  },
  {
    category: "Cirurgia Facial",
    icon: "◇",
    color: "#D4907A",
    procedures: [
      "Rinoplastia (PIEZO)",
      "Blefaroplastia",
      "Facelift (Deep plane & Deep Neck)",
      "Frontoplastia endoscópica",
      "Otoplastia",
      "Mentoplastia",
      "Toxina Botulínica, Preenchedores e Bioestimuladores",
    ],
  },
  {
    category: "Fisioterapia Pós-Op",
    icon: "○",
    color: "#A8C5B8",
    procedures: [
      "Tratamento de Fibroses",
      "Drenagem Linfática",
      "Recuperação Pós-Lipoaspiração",
      "Pós-Abdominoplastia",
      "Laser Fotobiomodulador",
      "Ozonioterapia",
    ],
  },
  {
    category: "Nutrição",
    icon: "◆",
    color: "#C9A96E",
    procedures: [
      "Nutrição Pré e Pós-Op",
      "Emagrecimento Saudável",
      "Saúde Hormonal Feminina",
      "Composição Corporal",
      "Protocolo Tirzepatida",
      "Saúde Intestinal",
    ],
  },
];

export const TECHNOLOGIES = [
  {
    name: "VASER",
    description: "Lipoaspiração ultrassônica de alta precisão. Ondas ultrassônicas liquefazem células de gordura para remoção mais precisa, com contornos naturais e maior segurança.",
  },
  {
    name: "ARGOPLASMA",
    description: "Tecnologia inovadora para flacidez cutânea. Plasma de argônio ionizado promove lifting imediato, estimula colágeno e sela vasos sanguíneos.",
  },
  {
    name: "PIEZO",
    description: "Dispositivo ultrassônico cirúrgico piezoelétrico para rinoplastia e esculturas ósseas de alta precisão, preservando tecidos moles adjacentes.",
  },
  {
    name: "MORPHEUS",
    description: "Combinação de microagulhas com radiofrequência para camadas profundas da pele. Efeito de lifting não cirúrgico com produção intensa de colágeno e elastina.",
  },
  {
    name: "MILA",
    description: "Abdominoplastia Minimamente Invasiva. Videocirurgia com pequenas incisões, corrigindo diástase abdominal com menor tempo de recuperação.",
  },
  {
    name: "VIBROLIPO",
    description: "Lipoaspiração vibratória com cânulas mais finas. Movimento vibratório facilita a quebra de células adiposas com menor trauma tecidual.",
  },
  {
    name: "USG Transoperatória",
    description: "Ultrassonografia em tempo real durante enxerto de gordura. Guia o cirurgião para deposição precisa e segura, otimizando a sobrevivência celular.",
  },
  {
    name: "Funil de Keller",
    description: "Inserção de implantes sem contato manual. Reduz risco de contaminação, minimiza contratura capsular e permite incisões menores.",
  },
];

export const JOURNEY_STEPS = [
  { step: "01", title: "Primeiro Contato", description: "Entre em contato via WhatsApp para agendar sua avaliação inicial." },
  { step: "02", title: "Avaliação Médica", description: "Consulta individualizada com análise completa dos seus objetivos e saúde." },
  { step: "03", title: "Planejamento", description: "Plano cirúrgico personalizado desenvolvido especialmente para você." },
  { step: "04", title: "Procedimento", description: "Cirurgia realizada com tecnologia de ponta e máxima segurança." },
  { step: "05", title: "Recuperação", description: "Acompanhamento fisioterápico especializado no pós-operatório." },
  { step: "06", title: "Resultado", description: "Acompanhamento contínuo até atingir o resultado ideal e duradouro." },
];

export const FAQ_ITEMS = [
  {
    question: "Como funciona a avaliação inicial?",
    answer: "A avaliação é uma consulta individualizada onde os médicos analisam seu histórico de saúde, discutem seus objetivos e apresentam as melhores opções de tratamento para o seu caso. É um momento de escuta e planejamento conjunto.",
  },
  {
    question: "Quais exames são necessários antes da cirurgia?",
    answer: "Os exames pré-operatórios são solicitados de acordo com cada procedimento e o perfil do paciente. Geralmente incluem exames de sangue, cardiológico e outros específicos para garantir total segurança.",
  },
  {
    question: "Como é o pós-operatório?",
    answer: "O pós-operatório é acompanhado de perto pela nossa equipe multidisciplinar. A fisioterapeuta oferece sessões especializadas para otimizar a recuperação, reduzir edema e tratar possíveis fibroses.",
  },
  {
    question: "Qual o tempo médio de recuperação?",
    answer: "O tempo de recuperação varia conforme o procedimento. Cirurgias minimamente invasivas como a MILA têm recuperação mais rápida. Sua equipe médica orientará cada detalhe do processo.",
  },
  {
    question: "A clínica oferece suporte nutricional integrado?",
    answer: "Sim. Nossa nutricionista especializada acompanha os pacientes antes e após a cirurgia, otimizando resultados, acelerando a recuperação e promovendo saúde metabólica completa.",
  },
  {
    question: "Como agendar uma avaliação?",
    answer: "O agendamento é feito diretamente pelo WhatsApp. Nossa equipe responde rapidamente para encontrar o melhor horário para você.",
  },
];

export const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Equipe", href: "#equipe" },
  { label: "FAQ", href: "#faq" },
];
