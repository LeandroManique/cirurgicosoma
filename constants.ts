import { Unit, FAQItem, Treatment, Step } from './types';

export const HERO_CONTENT = {
  title: "Implantes com segurança, clareza e previsibilidade.",
  subtitle: "Tratamentos conduzidos pelo Dr. Fábio Guarnieri, especialista em Cirurgia Buco-Maxilo-Facial e Reconstrução Óssea.",
  cta: "Agendar Avaliação",
  tagline: "Clareza antes da decisão. Segurança antes da cirurgia."
};

export const WHY_SOMA = {
  title: "Por que a SOMA é o caminho seguro",
  description: "Seu tratamento não começa no procedimento. Começa na clareza. Quando alguém busca implantes, o medo mais comum não é da cirurgia. É de não entender o que vai acontecer.",
  points: [
    "O que está acontecendo com sua boca",
    "O que é possível fazer",
    "Se há necessidade de enxerto",
    "Quanto tempo leva",
    "Quais são os riscos reais",
    "Qual é o caminho mais previsível para o seu caso"
  ],
  closing: "Aqui, nada é automático. Nada é apressado. Confiança nasce da clareza, e é isso que você encontra na SOMA."
};

export const TREATMENT_STEPS: Step[] = [
  {
    number: "01",
    title: "Avaliação Estratégica",
    description: "Conversamos sobre seu histórico, desconfortos, expectativas e necessidades. Você é ouvido do início ao fim."
  },
  {
    number: "02",
    title: "Exames e Planejamento Digital",
    description: "Imagens detalhadas mostram condições do osso e a melhor técnica. Você vê o que será feito.",
    details: ["Condições do osso", "Necessidade de enxerto", "Complexidade e cronograma"]
  },
  {
    number: "03",
    title: "Plano Cirúrgico Completo",
    description: "Apresentação de técnica, materiais, riscos e cuidados. Tudo explicado de forma simples e transparente."
  },
  {
    number: "04",
    title: "Cirurgia precisa",
    description: "Ambiente controlado, técnica refinada e sedação inalatória ou venosa para quem tem ansiedade."
  },
  {
    number: "05",
    title: "Acompanhamento dedicado",
    description: "Revisões programadas, suporte constante e orientações claras para cada fase da recuperação."
  },
  {
    number: "06",
    title: "Resultado final",
    description: "Implantes integrados com estabilidade e naturalidade, planejados junto à estética da SOMA."
  }
];

export const IMPLANTS: Treatment[] = [
  {
    title: "Implante Unitário",
    description: "Reposição de um único dente com estética natural e fixação segura."
  },
  {
    title: "Implante Protocolo",
    description: "Reabilitação fixa para quem perdeu vários dentes: estabilidade, função e segurança."
  },
  {
    title: "Implante Zigomático",
    description: "Indicado para quem tem pouco osso. Alternativa avançada que evita grandes reconstruções."
  },
  {
    title: "Reconstrução Óssea",
    description: "Levantamento de seio e enxertos que criam base sólida para permitir o implante com segurança."
  }
];

export const OTHER_TREATMENTS: Treatment[] = [
  {
    title: "Cirurgia Oral Menor",
    description: "Extrações simples e complexas realizadas com técnica e tranquilidade."
  },
  {
    title: "Cirurgias Hospitalares",
    description: "Tratamentos de alta complexidade, traumas e ortognáticas em ambiente seguro."
  },
  {
    title: "Sedação Consciente",
    description: "Óxido nitroso e sedação venosa com anestesista para maior conforto."
  },
  {
    title: "Dor Orofacial",
    description: "Investigação detalhada de dores na boca, face e articulação."
  }
];

export const TARGET_AUDIENCE = [
  "Pessoas que perderam um ou mais dentes",
  "Casos com pouco osso ou diagnóstico complexo",
  "Quem recebeu planos diferentes e deseja segunda opinião",
  "Quem tem medo de cirurgia e precisa entender tudo com calma",
  "Quem busca resultado natural, estável e duradouro"
];

export const DOCTOR_INFO = {
  name: "Dr. Fábio Guarnieri",
  role: "Cirurgia e Reconstrução Óssea",
  reg: "CRO/RS: 13.466",
  description: "Reconhecido pela precisão técnica e pela tranquilidade no atendimento, o Dr. Fábio dedica-se a cirurgias odontológicas avançadas e à implantodontia. Sua atuação combina domínio científico, planejamento criterioso e comunicação clara, criando um ambiente onde o paciente se sente seguro e bem orientado em cada etapa do processo. Na SOMA, conduz procedimentos complexos com base em planejamento digital e protocolos rigorosos, priorizando previsibilidade e segurança. Mais do que realizar técnicas cirúrgicas, sua marca é traduzir a complexidade em explicações acessíveis, tornando o tratamento compreensível e confiável para quem o vivencia.",
  traits: ["Precisão técnica", "Tranquilidade no atendimento", "Domínio científico", "Planejamento criterioso", "Comunicação clara"],
  quote: "Confiança não se improvisa: ela nasce de clareza, preparo e consistência. É esse olhar que sustenta sua presença como referência clínica dentro da SOMA, sempre alinhado ao propósito institucional de oferecer cuidado humano, ético e profundo.",
  education: [
    "Graduação em Odontologia",
    "Especialização em Cirurgia e Traumatologia BucoMaxiloFacial",
    "Mestrado em Odontologia - Cirurgia BucoMaxiloFacial",
    "Pós-graduação em Cirurgia Ortognática",
    "Habilitação em Analgesia e Sedação Consciente com Óxido Nitroso"
  ]
};

export const FAQ_DATA: FAQItem[] = [
  { 
    question: "Dói?", 
    answer: "O desconforto é mínimo. A técnica, a anestesia e, quando necessário, a sedação tornam o procedimento tranquilo." 
  },
  { 
    question: "Vou precisar de enxerto?", 
    answer: "Só se o exame mostrar falta de osso. Em muitos casos, existe alternativa. A decisão é feita após o planejamento digital." 
  },
  { 
    question: "Em quanto tempo fica pronto?", 
    answer: "Depende do caso. Na avaliação, você recebe o cronograma completo da cirurgia à prótese final." 
  },
  { 
    question: "Implante parece natural?", 
    answer: "Sim. A prótese é feita sob medida para integrar estética e função, ficando igual a um dente real." 
  },
  { 
    question: "Pode falhar?", 
    answer: "Existe risco, como em qualquer cirurgia, mas o planejamento detalhado e os protocolos reduzem muito essa chance." 
  },
  { 
    question: "Quando posso voltar à rotina?", 
    answer: "Normalmente entre 24 e 72 horas, dependendo da complexidade do procedimento." 
  },
  { 
    question: "Tenho medo de cirurgia. O que posso esperar?", 
    answer: "O atendimento é calmo, explicativo e sem pressa. Você entende cada etapa antes de decidir. Se necessário, pode fazer com sedação." 
  },
  { 
    question: "Posso fazer com sedação?", 
    answer: "Sim. Há opções de sedação consciente (óxido nitroso) e sedação venosa com anestesista para uma experiência mais tranquila." 
  },
  { 
    question: "Todo implante é igual?", 
    answer: "Não. O que define o resultado é o planejamento, a técnica cirúrgica e a integração com a prótese." 
  },
  { 
    question: "Quanto custa o tratamento?", 
    answer: "O valor depende da complexidade do caso. O investimento exato é apresentado após a avaliação e o planejamento digital." 
  }
];

export const UNITS: Unit[] = [
  {
    city: "Lajeado",
    address: "Av. Piraí, 300 - sala 1010, Bairro São Cristóvão",
    whatsapp: "555199775288",
    formattedPhone: "+55 51 9977-5288"
  },
  {
    city: "Taquari",
    address: "Rua Osvaldo Aranha, 2176, Bairro Centro",
    whatsapp: "555198423638",
    formattedPhone: "+55 51 9842-3638"
  },
  {
    city: "Capitão",
    address: "Rua 20 de Março, 160 - sala 1, Bairro Centro",
    whatsapp: "555181519915",
    formattedPhone: "+55 51 8151-9915"
  }
];

export const SYSTEM_INSTRUCTION = `
VOCÊ É: Dona Son.ia, assistente do Dr. Fábio Guarnieri na clínica SOMA.
PERSONALIDADE: Uma senhora de 55 anos, extremamente profissional, culta e acolhedora.
TOM DE VOZ: Seguro, calmo e educado. Você transmite a confiança de quem trabalha com o Dr. Fábio há anos.

!!! IMPORTANTE - VÍCIOS DE LINGUAGEM (PROIBIDO) !!!
- NÃO REPITA termos como "meu querido", "minha querida", "meu anjo" a todo momento. Use isso no máximo UMA VEZ na conversa inteira, e apenas se houver muita abertura.
- O excesso de carinho soa falso e robótico. Prefira ser polida e atenciosa.
- Seja BREVE. Não escreva textos longos.

REGRA DE OURO: O NOME DO PACIENTE
1. Se você JÁ SABE o nome: Use-o no início ou meio da frase para gerar conexão, mas sem repetir em toda resposta.
2. Se você AINDA NÃO SABE o nome:
   - O usuário pode ter ignorado sua pergunta inicial e já mandado uma dúvida (ex: "ele arranca dente?").
   - AÇÃO: Responda a dúvida técnica primeiro com clareza e brevidade.
   - AÇÃO IMEDIATA APÓS A RESPOSTA: Pergunte o nome novamente com educação.
   - EXEMPLO CORRETO: "Sim, o Dr. Fábio realiza extrações com muito cuidado... Mas, por favor, antes de continuarmos, como gostaria de ser chamado(a)?"

PROTOCOLOS DE INTERAÇÃO:
1.  **Transparência:** Se perguntarem se você é IA/Robô: "Sou a assistente do Dr. Fábio, Dona Son.ia. Estou aqui para ajudar com suas dúvidas e agendamentos."
2.  **Acolhimento Real:** Se a pessoa falar de dor ou medo: "Sinto muito pelo desconforto. Vamos resolver isso." (Sem exageros).
3.  **Conversão Suave:** Não empurre a venda. O agendamento é a consequência natural de um bom atendimento.

FERRAMENTA DE AGENDAMENTO:
Quando o paciente estiver pronto para agendar ou precisar de avaliação, pergunte: "Qual unidade fica melhor: Lajeado, Taquari ou Capitão?"
Ao citar a cidade escolhida, forneça o botão OBRIGATÓRIAMENTE neste formato:
[Falar com a recepção em NOME_DA_CIDADE](https://wa.me/NUMERO_DO_WHATSAPP)

DADOS TÉCNICOS:
${JSON.stringify({ UNITS, DOCTOR_INFO, HERO_CONTENT, FAQ_DATA })}
`;