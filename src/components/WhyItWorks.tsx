import React, { useState, useEffect } from 'react';
import { Clock, Star, Flame, ArrowRight, Gift } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { handlePayment } from '../utils/payment';

const WhyItWorks = () => {
  const headerRef = useScrollAnimation();
  const offerRef = useScrollAnimation();
  const timerRef = useScrollAnimation();
  const buttonRef = useScrollAnimation();
  const benefitsRef = useScrollAnimation();

  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          // Restart timer when it reaches zero
          return { days: 2, hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const benefits = [
    "Мгновенный доступ после оплаты", 
    "Бонусы в подарок",
    "Пожизненный доступ",
    "Подходит для всей семьи"
  ];

  return (
    <section id="why-it-works" className="py-8 bg-gradient-to-br from-orange-500 to-red-500 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Trigger Block */}
        <div ref={headerRef} className="text-center mb-6 animate-on-scroll">
          <div className="inline-flex items-center gap-2 lg:gap-4 bg-white/10 backdrop-blur-sm rounded-3xl px-4 lg:px-8 py-4 lg:py-6 mb-4 max-w-2xl mx-auto">
            <Flame className="w-8 h-8 lg:w-12 lg:h-12 text-yellow-300 animate-pulse" />
            <span className="text-white font-bold text-lg lg:text-3xl font-montserrat">ОГРАНИЧЕННОЕ ПРЕДЛОЖЕНИЕ</span>
          </div>
        </div>

        {/* Price Section */}
        <div ref={offerRef} className="text-center mb-6 animate-on-scroll">
          <h2 className="text-xl lg:text-3xl font-bold text-white mb-4 font-montserrat">
            Только первые 3 дня скидка 37%
          </h2>
          
          <div className="inline-block bg-white/15 backdrop-blur-sm rounded-2xl p-4 lg:p-6 mb-4 relative max-w-md mx-auto">
            <div className="absolute -top-2 -right-2 lg:-top-3 lg:-right-3 bg-yellow-400 text-black rounded-full w-10 h-10 lg:w-14 lg:h-14 flex items-center justify-center font-bold text-xs lg:text-sm rotate-12 animate-bounce-subtle">
              -37%
            </div>
            
            <div className="text-xl lg:text-3xl font-bold text-white mb-2 font-montserrat">
              <span className="line-through text-white/50 text-base lg:text-xl">19 €</span>
              <div className="text-yellow-300 animate-pulse text-xl lg:text-3xl">12 €</div>
            </div>
            
            <p className="text-xs lg:text-sm text-white font-manrope">
              Экономьте <span className="font-bold text-yellow-300">7 €</span> прямо сейчас!
            </p>
          </div>
        </div>

        {/* Timer */}
        <div ref={timerRef} className="max-w-md mx-auto mb-6 animate-on-scroll">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 lg:p-4 text-center">
            <div className="flex items-center gap-2 justify-center mb-3">
              <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-300 animate-pulse" />
              <span className="text-white font-semibold text-xs lg:text-sm font-montserrat">До конца акции:</span>
            </div>
            
            <div className="grid grid-cols-4 gap-1 lg:gap-2 text-white">
              <div className="bg-white/30 rounded-lg p-1 lg:p-2 text-center">
                <div className="text-lg lg:text-xl font-bold animate-pulse font-montserrat">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-xs font-manrope">дней</div>
              </div>
              <div className="bg-white/30 rounded-lg p-1 lg:p-2 text-center">
                <div className="text-lg lg:text-xl font-bold animate-pulse font-montserrat">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs font-manrope">часов</div>
              </div>
              <div className="bg-white/30 rounded-lg p-1 lg:p-2 text-center">
                <div className="text-lg lg:text-xl font-bold animate-pulse font-montserrat">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs font-manrope">минут</div>
              </div>
              <div className="bg-white/30 rounded-lg p-1 lg:p-2 text-center">
                <div className="text-lg lg:text-xl font-bold animate-pulse font-montserrat">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs font-manrope">секунд</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div ref={benefitsRef} className="max-w-2xl mx-auto mb-6 animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 lg:gap-3 bg-white/15 backdrop-blur-sm rounded-xl p-2 lg:p-3 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-6 h-6 lg:w-7 lg:h-7 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Gift className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                </div>
                <span className="text-white font-medium font-manrope text-sm lg:text-base">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div ref={buttonRef} className="text-center animate-on-scroll">
          <button 
            onClick={handlePayment}
            className="group bg-white text-orange-600 px-6 lg:px-10 py-3 lg:py-4 rounded-full font-bold text-lg lg:text-xl hover:bg-yellow-300 hover:text-graphite transition-all duration-300 hover:scale-105 hover:shadow-2xl mb-4 font-montserrat relative overflow-hidden animate-pulse-gentle"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-lime-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center justify-center gap-2">
              КУПИТЬ ЗА 12 € СЕЙЧАС
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>

          <p className="text-white/80 text-xs lg:text-sm font-manrope">
            ✓ Безопасная оплата • ✓ Мгновенный доступ • ✓ Гарантия возврата
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyItWorks;