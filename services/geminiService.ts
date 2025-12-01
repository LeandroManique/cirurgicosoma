import { GoogleGenAI, Chat, HarmCategory, HarmBlockThreshold } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

let chatSession: Chat | null = null;

export const initializeChat = async () => {
  if (!process.env.API_KEY) {
    console.warn("Gemini API Key missing");
    return null;
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.6, // Levemente mais baixo para garantir fidelidade às instruções de formato
      maxOutputTokens: 300, // Força respostas mais curtas
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
      ],
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    return "Desculpe, o sistema de chat está indisponível no momento. Por favor, entre em contato via WhatsApp.";
  }

  try {
    const response = await chatSession.sendMessage({ message });
    // Verifica se houve resposta válida, caso contrário retorna algo genérico mas acolhedor
    return response.text || "Entendo. Para te dar a melhor orientação médica, o ideal seria agendar uma avaliação. Posso te passar os contatos?";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Tive um pequeno problema técnico, mas quero te ajudar. Por favor, clique no botão de WhatsApp da sua cidade para falar com a recepção.";
  }
};