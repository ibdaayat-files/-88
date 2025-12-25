
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, Command, Cpu, Sparkles, Send, X, MessageSquare, Menu, Github, ExternalLink, Info } from 'lucide-react';
import { SHORTCUTS, CATEGORIES } from './constants';
import { ShortcutCard } from './components/ShortcutCard';
import { Category, ChatMessage } from './types';
import { ShortcutAI } from './geminiService';

const GITHUB_REPO = "https://github.com/ibdaayat-files/-88.git";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const filteredShortcuts = useMemo(() => {
    return SHORTCUTS.filter(s => {
      const matchesSearch = s.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            s.keys.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'الكل' || s.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isTyping]);

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMsg: ChatMessage = { role: 'user', content: userInput };
    setChatMessages(prev => [...prev, userMsg]);
    setUserInput('');
    setIsTyping(true);

    const aiService = new ShortcutAI();
    const response = await aiService.askAboutShortcut(userInput);
    
    setIsTyping(false);
    setChatMessages(prev => [...prev, { role: 'assistant', content: response || 'لا يوجد رد.' }]);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20 overflow-x-hidden">
      {/* Header */}
      <nav className="sticky top-0 z-50 glass border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-500/20">
              <Command size={28} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-l from-indigo-400 to-white">
              88 موقع
            </h1>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
              <Github size={20} />
              <span>المشروع على GitHub</span>
            </a>
            <button 
              onClick={() => setIsChatOpen(true)}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg font-bold transition-all"
            >
              <Sparkles size={18} />
              مساعد الذكاء الاصطناعي
            </button>
          </div>
          
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-20 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-600/10 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-bold mb-6">
            <Info size={16} />
            <span>دليلك الشامل للاحترافية والسرعة</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            اختصارات كيبورد الكمبيوتر <br/><span className="text-indigo-500">في مكان واحد</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            مستودع شامل لكل اختصارات الكمبيوتر، الويندوز، الماك وأشهر برامج التطوير. ابحث عن أي اختصار تريده في ثوانٍ.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={24} />
            <input 
              type="text" 
              placeholder="ابحث عن اختصار أو وظيفة (مثلاً: نسخ، فتح، غلق)..."
              className="w-full bg-slate-900/50 border border-white/10 rounded-2xl py-5 pl-6 pr-14 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-2xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all border ${
                selectedCategory === cat 
                ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/30' 
                : 'bg-slate-900 border-white/5 text-slate-400 hover:border-indigo-500/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Shortcuts Grid */}
        {filteredShortcuts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredShortcuts.map(shortcut => (
              <ShortcutCard key={shortcut.id} shortcut={shortcut} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-900/30 rounded-3xl border border-dashed border-white/10">
            <Cpu size={48} className="mx-auto text-slate-700 mb-4" />
            <h3 className="text-2xl font-bold text-slate-500">لم يتم العثور على نتائج</h3>
            <p className="text-slate-600">جرب البحث بكلمات أخرى أو اختر تصنيفاً مختلفاً</p>
          </div>
        )}
      </main>

      {/* AI Assistant Button (Mobile) */}
      <button 
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-8 right-8 md:bottom-12 md:right-12 bg-indigo-600 p-4 rounded-2xl shadow-2xl shadow-indigo-600/40 hover:scale-110 active:scale-95 transition-all z-40 group"
      >
        <MessageSquare size={30} className="text-white" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          اسأل المساعد الذكي
        </span>
      </button>

      {/* AI Sidebar Chat */}
      {isChatOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsChatOpen(false)}></div>
          <div className="relative w-full max-w-md bg-slate-900 h-full flex flex-col shadow-2xl animate-in slide-in-from-left duration-300">
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-indigo-900/20">
              <div className="flex items-center gap-3">
                <Sparkles className="text-indigo-400" />
                <h3 className="text-xl font-bold">المساعد الذكي (88 AI)</h3>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="hover:bg-white/10 p-1 rounded-lg transition-colors">
                <X />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {chatMessages.length === 0 && (
                <div className="text-center py-10 opacity-50">
                  <p>أهلاً بك! كيف يمكنني مساعدتك في العثور على اختصارات؟</p>
                  <p className="text-sm mt-2">جرب سؤال: "ما هي اختصارات فوتوشوب؟"</p>
                </div>
              )}
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl leading-relaxed ${
                    msg.role === 'user' 
                    ? 'bg-slate-800 text-white rounded-tr-none' 
                    : 'bg-indigo-600 text-white rounded-tl-none'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-end">
                  <div className="bg-indigo-600/50 p-4 rounded-2xl rounded-tl-none flex gap-1 items-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef}></div>
            </div>

            <form onSubmit={handleAskAI} className="p-6 border-t border-white/10 bg-slate-950">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="اسأل عن اختصار لأي برنامج..."
                  className="w-full bg-slate-800 border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-indigo-500 outline-none"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                />
                <button type="submit" className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400 hover:text-indigo-300">
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-20 py-12 border-t border-white/5 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-right">
            <h4 className="text-xl font-bold text-white mb-2">88 موقع</h4>
            <p className="text-slate-500">تم التطوير بواسطة فريق <span className="text-white font-bold">88</span> لخدمة المجتمع التقني العربي</p>
          </div>
          
          <div className="flex items-center gap-6">
             <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-all">
                <Github size={20} />
                <span>المصدر على GitHub</span>
                <ExternalLink size={14} />
             </a>
          </div>

          <p className="text-slate-600 text-sm">جميع الحقوق محفوظة &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
