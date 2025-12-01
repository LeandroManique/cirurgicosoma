export interface Unit {
  city: string;
  address: string;
  whatsapp: string;
  formattedPhone: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Treatment {
  title: string;
  description: string;
  icon?: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
  details?: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}