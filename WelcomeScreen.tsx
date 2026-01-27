
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import { useAppContext } from '../App';

interface WelcomeScreenProps {
    onStart: () => void;
}

const shoppingSlides = [
    { id: 1, icon: '📱', title: 'लेटेस्ट मोबाइल एक्सेसरीज', desc: 'प्रीमियम इयरबड्स, स्मार्टवॉच और मोबाइल गैजेट्स पर भारी डिस्काउंट।', category: 'GADGETS', color: 'from-blue-900/80 to-black' },
    { id: 2, icon: '📚', title: 'डिजिटल ई-बुक्स लाइब्रेरी', desc: 'कोर्स, स्किल्स और मोटिवेशनल PDF ई-बुक्स अब आपके फोन में।', category: 'E-BOOKS', color: 'from-purple-900/80 to-black' },
    { id: 3, icon: '👟', title: 'ट्रेंडी फुटवियर कलेक्शन', desc: 'स्टाइलिश और आरामदायक जूतों का सबसे बड़ा संग्रह।', category: 'SHOES', color: 'from-orange-900/80 to-black' },
    { id: 4, icon: '👜', title: 'प्रीमियम बैग्स और बेल्ट', desc: 'लेडीज पर्स और जेंट्स एक्सेसरीज की लेटेस्ट वैरायटी।', category: 'ACCESSORIES', color: 'from-rose-900/80 to-black' },
    { id: 5, icon: '🕉️', title: 'शुद्ध पूजन सामग्री', desc: 'सात्विक और सिद्ध पूजन सामग्री आपके हर अनुष्ठान के लिए।', category: 'SPIRITUAL', color: 'from-red-900/80 to-black' },
];

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
    const { t } = useAppContext();
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % shoppingSlides.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 4000); 
        return () => clearInterval(timer);
    }, [nextSlide]);
    
    return (
        <div className="flex flex-col items-center justify-center text-center animate-fade-in min-h-screen py-6 px-4">
            <Card className="max-w-4xl w-full !bg-black/40 border-orange-500/20 shadow-2xl relative overflow-hidden p-4 sm:p-10">
                <div className="absolute -top-10 -right-10 w-60 h-60 bg-orange-600/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-purple-600/10 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                    <div className="mb-6">
                        <span className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-[10px] font-black rounded-full uppercase tracking-[0.2em] mb-4">
                            ✨ Welcome to Premium Store ✨
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-hindi font-black text-white mb-2 tracking-tight drop-shadow-lg">
                            {t('welcome_greeting')}
                        </h2>
                        <p className="text-sm sm:text-lg text-orange-400 font-bold mb-8 uppercase tracking-[0.3em] opacity-80">
                            बेहतरीन क्वालिटी • तेज़ डिलीवरी • असली प्रोडक्ट्स
                        </p>
                    </div>

                    <div className="w-full h-[320px] sm:h-[400px] rounded-[2.5rem] overflow-hidden mb-10 relative group bg-black/60 shadow-[0_0_50px_rgba(255,100,0,0.15)] border border-white/5">
                        <div key={currentSlide} className={`absolute inset-0 bg-gradient-to-br ${shoppingSlides[currentSlide].color} transition-all duration-1000 flex flex-col items-center justify-center p-6 gap-4 sm:gap-8`}>
                            
                            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-white/5 border border-white/20 flex items-center justify-center relative flex-shrink-0 backdrop-blur-md shadow-2xl transform transition-transform duration-700 hover:scale-110">
                                <span className="text-5xl sm:text-7xl drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
                                    {shoppingSlides[currentSlide].icon}
                                </span>
                            </div>

                            <div className="text-center relative z-10 max-w-2xl px-2">
                                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-orange-300 text-[9px] sm:text-[10px] font-black rounded-full mb-2 tracking-[0.2em] uppercase shadow-lg">
                                    ★ {shoppingSlides[currentSlide].category} ★
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-black text-white font-hindi mb-2 drop-shadow-xl leading-tight">
                                    {shoppingSlides[currentSlide].title}
                                </h3>
                                <p className="text-xs sm:text-base text-gray-200 font-hindi leading-relaxed opacity-90 font-medium">
                                    {shoppingSlides[currentSlide].desc}
                                </p>
                            </div>
                        </div>

                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-20">
                            {shoppingSlides.map((_, i) => (
                                <button 
                                    key={i} 
                                    onClick={() => setCurrentSlide(i)}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-8 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]' : 'w-2 bg-white/20'}`}
                                ></button>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center w-full mb-10">
                        <button 
                            onClick={onStart}
                            className="saffron-glow-btn group relative px-16 py-5 bg-gradient-to-r from-orange-600 via-orange-500 to-red-600 text-white font-hindi font-black text-xl sm:text-2xl rounded-full shadow-[0_15px_45px_rgba(234,88,12,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-4 border-t-2 border-white/30 overflow-hidden"
                        >
                            <span>शॉपिंग शुरू करें</span>
                            <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">➔</span>
                            
                            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-700"></div>
                        </button>
                    </div>

                    <div className="mt-8 relative inline-flex items-center">
                        <div className="px-8 py-4 bg-[#050508] border border-blue-600/50 rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                            <h3 className="text-sm sm:text-base font-mono font-bold uppercase tracking-wider text-blue-500">
                                Trusted Platform <br className="sm:hidden" />
                                <span className="text-blue-400">ok-e-store tech</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default WelcomeScreen;
