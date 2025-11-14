import React, { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';
import { handlePayment } from '../utils/payment';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 3,
    seconds: 0
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
          return { days: 0, hours: 0, minutes: 3, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="https://i.ibb.co/PvN7wXY7/image.png" 
          alt="Kitchen background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Social Icons - Top Right */}
      <div className="absolute top-6 right-6 z-20 flex items-center space-x-3">
        <a 
          href="https://www.instagram.com/artassya?igsh=MXM3NGNxMDFtd3Vt" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <Instagram className="w-6 h-6 text-white" />
        </a>
      </div>

      {/* Decorative Icons */}
      <div className="absolute top-32 left-16 w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center shadow-lg animate-float">
        <span className="text-2xl">🥑</span>
      </div>
      <div className="absolute top-80 right-32 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-bounce-subtle">
        <span className="text-xl">🥗</span>
      </div>
      <div className="absolute bottom-40 right-20 w-12 h-12 bg-red-400 rounded-full flex items-center justify-center shadow-lg animate-float">
        <span className="text-2xl">🍓</span>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Leaf icon */}
            <div className="w-16 h-16 text-lime-500 mb-4">
              🍃
            </div>

            <div className="relative">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-graphite-800 leading-tight font-montserrat">
                РЕЦЕПТБУК<br />
                <span className="text-lime-500">EAT&FIT</span>
              </h1>

              {/* Main Subtitle - positioned to the right of EAT&FIT */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-line-200 max-w-sm hidden lg:block">
                <p className="text-sm text-graphite-800 leading-snug font-manrope font-semibold mb-1.5">
                  + персональный разбор питания и тренировок.
                  Под твой ритм жизни — без срывов и жестких диет
                </p>
              </div>
            </div>

            {/* Main Subtitle - mobile version below title */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 lg:p-6 max-w-2xl shadow-lg border border-lime-200 lg:hidden">
              <p className="text-lg md:text-xl text-graphite-800 leading-relaxed font-manrope font-semibold mb-3">
                  + персональный разбор питания и тренировок.
                  Под твой ритм жизни — без срывов и жестких диет
                </p>
            </div>

            {/* Additional info */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 lg:p-6 max-w-2xl shadow-lg border border-lime-200">
              <p className="text-base md:text-lg lg:text-xl text-graphite-800 leading-relaxed font-manrope font-medium">
                Экономь время и нервы: вкусные и полезные блюда до 15 минут, которые помогают не сорваться. Просто готовь и худей в компании таких же, как и ты.
              </p>
            </div>

            {/* Special Offer Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-2xl max-w-lg border border-lime-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
                <span className="text-lime-600 font-bold text-sm font-montserrat">АКЦИЯ СЕГОДНЯ</span>
              </div>
              
              <div className="mb-4 lg:mb-6">
                <div className="flex flex-row gap-1 mb-2">
                  <span className="line-through text-lg lg:text-xl text-gray-500 font-montserrat">190 €</span>
                  <span className="font-bold text-3xl lg:text-4xl font-montserrat text-lime-600">12 €</span>
                </div>
                <div className="text-gray-600 text-sm font-manrope">
                  До конца акции: <span className="text-lime-600 font-bold">94% скидка</span>
                </div>
              </div>

              {/* Timer */}
              <div className="grid grid-cols-4 gap-2 lg:gap-3 mb-4 lg:mb-6">
                <div className="bg-lime-100 rounded-2xl p-2 lg:p-3 text-center">
                  <div className="text-xl lg:text-2xl font-bold text-graphite-800 font-montserrat">{String(timeLeft.days).padStart(2, '0')}</div>
                  <div className="text-xs text-gray-600 font-manrope">дней</div>
                </div>
                <div className="bg-lime-100 rounded-2xl p-2 lg:p-3 text-center">
                  <div className="text-xl lg:text-2xl font-bold text-graphite-800 font-montserrat">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-xs text-gray-600 font-manrope">часов</div>
                </div>
                <div className="bg-lime-100 rounded-2xl p-2 lg:p-3 text-center">
                  <div className="text-xl lg:text-2xl font-bold text-graphite-800 font-montserrat">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-xs text-gray-600 font-manrope">минут</div>
                </div>
                <div className="bg-lime-100 rounded-2xl p-2 lg:p-3 text-center">
                  <div className="text-xl lg:text-2xl font-bold text-graphite-800 font-montserrat">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="text-xs text-gray-600 font-manrope">секунд</div>
                </div>
              </div>
              
              <button 
                onClick={handlePayment}
                className="w-full bg-lime-400 hover:bg-lime-500 text-white py-3 lg:py-4 rounded-full font-bold text-base lg:text-lg transition-all duration-300 hover:scale-105 font-montserrat shadow-lg"
              >
                КУПИТЬ СО СКИДКОЙ
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:justify-self-end">
            <div className="relative">
              <img 
                src="https://i.ibb.co/V0gMw7fn/E6-DCA96-B-AF56-4-CA1-BAB1-3-C95196837-D0-no-bg-preview-carve-photos.png" 
                alt="Девушка"
                className="w-full max-w-lg mx-auto"
              />
              
              {/* Author label */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <span className="text-graphite-600 text-sm font-manrope">Автор: Asya</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;