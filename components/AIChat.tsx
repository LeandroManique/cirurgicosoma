import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Loader2, MessageCircle, ExternalLink } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Initial message requests the name respectfully
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá. Sou a Son.ia, assistente do Dr. Fábio. Para eu lhe atender bem, como posso lhe chamar?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const responseText = await sendMessageToGemini(userMessage);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  // Helper to parse links formatted as [Label](url) into styled buttons
  const renderMessageContent = (text: string) => {
    const parts = [];
    let lastIndex = 0;
    // Regex matches [Link Text](URL)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(<span key={`text-${lastIndex}`}>{text.substring(lastIndex, match.index)}</span>);
      }
      
      // Add the button
      parts.push(
        <a 
          key={`btn-${match.index}`} 
          href={match[2]} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-sm text-sm font-medium mt-2 mb-1 transition-colors shadow-sm no-underline"
        >
          {match[1]}
          <ExternalLink className="w-3 h-3" />
        </a>
      );
      
      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(<span key={`text-end`}>{text.substring(lastIndex)}</span>);
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105 ${
          isOpen ? 'hidden' : 'bg-primary text-white flex items-center gap-2 border border-white/10'
        }`}
        aria-label="Falar com a Assistente"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="font-serif font-medium pr-2 text-sm tracking-wide">Falar com a Assistente</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-96 bg-white rounded-sm shadow-2xl border border-primary/10 flex flex-col overflow-hidden animate-fade-in-up max-h-[600px]">
          {/* Header */}
          <div className="bg-primary p-5 flex justify-between items-center text-white">
            <div className="flex items-center gap-4">
              <div className="relative">
                 <div className="w-10 h-10 rounded-full bg-warmDark/20 border border-white/20 flex items-center justify-center overflow-hidden">
                    <span className="font-serif text-lg font-bold">S</span>
                 </div>
                 <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-primary"></div>
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium tracking-wide leading-none mb-1">Dona Son.ia</h3>
                <p className="text-[10px] uppercase tracking-widest opacity-70 font-light">Assistente do Dr. Fábio</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 bg-warm/30 space-y-6 h-[400px]"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-4 rounded-sm text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-white text-primary border border-warmDark'
                  }`}
                >
                  {renderMessageContent(msg.text)}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-warmDark p-3 rounded-sm shadow-sm flex items-center gap-2">
                  <Loader2 className="w-3 h-3 animate-spin text-accent" />
                  <span className="text-xs text-secondary/60 tracking-wider uppercase">Dona Son.ia está escrevendo...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-warmDark flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-warm/50 border border-transparent focus:border-accent/30 rounded-sm px-4 py-3 text-sm focus:outline-none text-primary placeholder:text-secondary/50 font-light transition-all"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-primary hover:bg-primary/90 text-white p-3 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;