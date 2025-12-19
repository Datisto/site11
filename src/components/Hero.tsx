import React, { useState, useEffect } from 'react';
import { Instagram, Users, Zap, Clock, Sparkles, TrendingDown } from 'lucide-react';
import { handlePayment } from '../utils/payment';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Hero = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations.hero;

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

      {/* Social Icons and Language Switcher - Top Right */}
      <div className="absolute top-6 right-6 z-20 flex items-center space-x-3">
        {/* Language Switcher */}
        <div className="bg-white rounded-full shadow-lg overflow-hidden flex">
          <button
            onClick={() => setLanguage('ru')}
            className={`px-4 py-2 font-bold text-sm transition-all duration-300 ${
              language === 'ru'
                ? 'bg-lime-400 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            RU
          </button>
          <button
            onClick={() => setLanguage('ua')}
            className={`px-4 py-2 font-bold text-sm transition-all duration-300 ${
              language === 'ua'
                ? 'bg-lime-400 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            UA
          </button>
        </div>

        {/* Instagram Icon */}
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
                {t.title[language]}<br />
                <span className="text-lime-500">{t.titleAccent[language]}</span>
              </h1>

              {/* Main Subtitle - positioned to the right of EAT&FIT */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-lime-200 max-w-2xl hidden lg:block">
                <p className="text-base md:text-lg lg:text-xl text-graphite-800 leading-relaxed font-manrope font-medium">
                  {t.subtitle1[language]}
                </p>
              </div>
            </div>

            {/* Main Subtitle - mobile version below title */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 lg:p-6 max-w-2xl shadow-lg border border-lime-200 lg:hidden">
              <p className="text-base md:text-lg lg:text-xl text-graphite-800 leading-relaxed font-manrope font-medium">
                  {t.subtitle1[language]}
                </p>
            </div>

            {/* Additional info */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 lg:p-6 max-w-2xl shadow-lg border border-lime-200">
              <p className="text-base md:text-lg lg:text-xl text-graphite-800 leading-relaxed font-manrope font-medium">
                {t.subtitle2[language]}
              </p>
            </div>

            {/* Offer Container */}
            <div className="relative max-w-lg space-y-4">
              {/* Price Block */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-lime-400 via-green-400 to-emerald-500 opacity-60 blur-xl animate-pulse"></div>

                <div className="relative bg-gradient-to-br from-green-50 via-lime-50 to-white rounded-3xl p-6 lg:p-8 shadow-2xl border-2 border-lime-200">
                  <div className="absolute top-4 right-4 flex gap-1">
                    <Sparkles className="w-5 h-5 text-lime-500 animate-pulse" />
                    <Sparkles className="w-4 h-4 text-green-400 animate-pulse delay-100" />
                  </div>

                  <div className="flex items-center gap-3 mb-5">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-green-400 rounded-lg blur opacity-50"></div>
                      <div className="relative bg-gradient-to-r from-lime-500 to-green-500 text-white p-2.5 rounded-lg">
                        <Zap className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <span className="font-bold text-base font-montserrat tracking-wide text-lime-700 uppercase">{t.specialOffer[language]}</span>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-red-500 font-semibold">{language === 'ua' ? 'Обмежена пропозиція' : 'Ограниченное предложение'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative inline-block">
                      <span className="text-2xl lg:text-3xl text-gray-400 font-montserrat font-medium">1225 грн</span>
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 20">
                        <line x1="0" y1="12" x2="100" y2="8" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div className="bg-red-500 text-white px-4 py-1.5 rounded-full text-base font-bold flex items-center gap-1.5 shadow-lg">
                      <TrendingDown className="w-5 h-5" />
                      -60%
                    </div>
                  </div>

                  <div className="mb-2">
                    <span className="font-black text-6xl lg:text-7xl font-montserrat bg-gradient-to-br from-lime-600 via-green-500 to-emerald-600 bg-clip-text text-transparent drop-shadow-lg">
                      490 грн
                    </span>
                  </div>
                </div>
              </div>

              {/* Timer Block */}
              <div className="relative bg-white rounded-3xl p-6 shadow-xl border-2 border-lime-200">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <span className="text-orange-700 font-semibold font-manrope">
                    {t.discountText[language]}
                  </span>
                </div>

                <div className="flex gap-2 lg:gap-3">
                  <div className="flex-1">
                    <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-4 text-center border-2 border-gray-200 shadow-md">
                      <div className="text-3xl lg:text-4xl font-black text-graphite-800 font-montserrat tabular-nums">{String(timeLeft.days).padStart(2, '0')}</div>
                      <div className="text-[10px] text-gray-500 font-manrope uppercase tracking-widest mt-1">{t.timer.days[language]}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-4 text-center border-2 border-gray-200 shadow-md">
                      <div className="text-3xl lg:text-4xl font-black text-graphite-800 font-montserrat tabular-nums">{String(timeLeft.hours).padStart(2, '0')}</div>
                      <div className="text-[10px] text-gray-500 font-manrope uppercase tracking-widest mt-1">{t.timer.hours[language]}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-b from-orange-50 to-orange-100 rounded-2xl p-4 text-center border-2 border-orange-300 shadow-md">
                      <div className="text-3xl lg:text-4xl font-black text-orange-500 font-montserrat tabular-nums animate-pulse">{String(timeLeft.minutes).padStart(2, '0')}</div>
                      <div className="text-[10px] text-orange-600 font-manrope uppercase tracking-widest mt-1">{t.timer.minutes[language]}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-b from-red-50 to-red-100 rounded-2xl p-4 text-center border-2 border-red-300 shadow-md">
                      <div className="text-3xl lg:text-4xl font-black text-red-500 font-montserrat tabular-nums">{String(timeLeft.seconds).padStart(2, '0')}</div>
                      <div className="text-[10px] text-red-600 font-manrope uppercase tracking-widest mt-1">{t.timer.seconds[language]}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buy Button */}
              <button
                onClick={handlePayment}
                className="relative w-full group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 via-green-400 to-lime-400 rounded-2xl blur opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-lime-500 via-green-500 to-lime-500 hover:from-lime-600 hover:via-green-600 hover:to-lime-600 text-white py-5 lg:py-6 rounded-2xl font-bold text-xl lg:text-2xl transition-all duration-300 font-montserrat shadow-xl flex items-center justify-center gap-3 group-hover:scale-[1.02]">
                  <span>{t.buyButton[language]}</span>
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Zap className="w-6 h-6" />
                  </div>
                </div>
              </button>

              {/* Purchase Counter Block */}
              <div className="relative bg-white rounded-2xl p-4 shadow-lg border-2 border-lime-200">
                <div className="flex items-center justify-center gap-2">
                  <div className="relative flex items-center justify-center">
                    <Users className="w-5 h-5 text-lime-600" />
                    <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                  </div>
                  <span className="text-sm lg:text-base text-graphite-700 font-semibold font-manrope">
                    {t.purchaseCounter[language]} <span className="text-lime-600 font-bold text-lg">77</span> {t.purchaseAccess[language]}
                  </span>
                </div>
              </div>
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
                <span className="text-graphite-600 text-sm font-manrope">{t.author[language]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;