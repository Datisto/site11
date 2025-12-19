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

  const [showPromo, setShowPromo] = useState(false);

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

  useEffect(() => {
    const switchText = () => {
      setTimeout(() => {
        setShowPromo(prev => !prev);
      }, 600);
    };

    switchText();
    const promoTimer = setInterval(() => {
      switchText();
    }, 3000);

    return () => clearInterval(promoTimer);
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

            {/* Special Offer Card */}
            <div className="relative max-w-lg">
              <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 via-green-400 to-emerald-500 rounded-3xl blur-lg opacity-75 animate-pulse"></div>

              <div className="relative bg-gradient-to-br from-white via-lime-50 to-green-50 rounded-3xl p-6 lg:p-8 shadow-2xl border-2 border-lime-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-400/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                <div className="absolute top-3 right-3">
                  <Sparkles className="w-6 h-6 text-lime-500 animate-pulse" />
                </div>

                <div className="relative">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-lime-500 to-green-500 text-white px-4 py-2 rounded-full mb-4 shadow-lg">
                    <Zap className="w-4 h-4 animate-pulse" />
                    <span className="font-bold text-sm font-montserrat tracking-wide">{t.specialOffer[language]}</span>
                  </div>

                  <div className="mb-5 lg:mb-6">
                    <div className="flex items-baseline gap-3 mb-2">
                      <div className="relative">
                        <span className="text-lg lg:text-xl text-gray-400 font-montserrat">1225 грн</span>
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full h-0.5 bg-red-500 rotate-[-8deg]"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingDown className="w-5 h-5 text-red-500" />
                        <span className="text-red-500 font-bold text-sm">-60%</span>
                      </div>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-4xl lg:text-5xl font-montserrat bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-transparent price-animate">
                        {showPromo ? (language === 'ua' ? 'АКЦІЯ' : 'АКЦИЯ') : '490 грн'}
                      </span>
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span className="text-gray-600 text-sm font-manrope font-medium">
                        {t.discountText[language]}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2 lg:gap-3 mb-5 lg:mb-6">
                    <div className="group relative">
                      <div className="absolute inset-0 bg-lime-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                      <div className="relative bg-white rounded-2xl p-2 lg:p-3 text-center border-2 border-lime-200 shadow-lg hover:border-lime-400 transition-colors">
                        <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-b from-graphite-800 to-graphite-600 bg-clip-text text-transparent font-montserrat">{String(timeLeft.days).padStart(2, '0')}</div>
                        <div className="text-xs text-gray-500 font-manrope uppercase tracking-wider">{t.timer.days[language]}</div>
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="absolute inset-0 bg-lime-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                      <div className="relative bg-white rounded-2xl p-2 lg:p-3 text-center border-2 border-lime-200 shadow-lg hover:border-lime-400 transition-colors">
                        <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-b from-graphite-800 to-graphite-600 bg-clip-text text-transparent font-montserrat">{String(timeLeft.hours).padStart(2, '0')}</div>
                        <div className="text-xs text-gray-500 font-manrope uppercase tracking-wider">{t.timer.hours[language]}</div>
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="absolute inset-0 bg-orange-400 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
                      <div className="relative bg-white rounded-2xl p-2 lg:p-3 text-center border-2 border-orange-200 shadow-lg hover:border-orange-400 transition-colors">
                        <div className="text-2xl lg:text-3xl font-bold text-orange-500 font-montserrat animate-pulse">{String(timeLeft.minutes).padStart(2, '0')}</div>
                        <div className="text-xs text-gray-500 font-manrope uppercase tracking-wider">{t.timer.minutes[language]}</div>
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="absolute inset-0 bg-red-400 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
                      <div className="relative bg-white rounded-2xl p-2 lg:p-3 text-center border-2 border-red-200 shadow-lg hover:border-red-400 transition-colors">
                        <div className="text-2xl lg:text-3xl font-bold text-red-500 font-montserrat">{String(timeLeft.seconds).padStart(2, '0')}</div>
                        <div className="text-xs text-gray-500 font-manrope uppercase tracking-wider">{t.timer.seconds[language]}</div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handlePayment}
                    className="relative w-full group overflow-hidden rounded-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-lime-400 via-green-400 to-lime-400 bg-[length:200%_100%] animate-gradient-x"></div>
                    <div className="relative bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600 text-white py-4 lg:py-5 font-bold text-base lg:text-lg transition-all duration-300 font-montserrat shadow-xl flex items-center justify-center gap-2">
                      <span>{t.buyButton[language]}</span>
                      <Zap className="w-5 h-5 group-hover:animate-bounce" />
                    </div>
                  </button>

                  <div className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-lime-100 to-green-100 rounded-full px-4 py-2.5 border border-lime-200">
                    <div className="relative">
                      <Users className="w-4 h-4 text-lime-600" />
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                    </div>
                    <span className="text-sm text-graphite-700 font-semibold font-manrope">
                      {t.purchaseCounter[language]} <span className="text-lime-600 font-bold text-base">77</span> {t.purchaseAccess[language]}
                    </span>
                  </div>
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