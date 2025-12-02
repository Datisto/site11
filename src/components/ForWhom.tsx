import React from 'react';
import { Target, Clock, Heart, Users, DollarSign, X, Brain, Zap, Utensils, Ban } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const ForWhom = () => {
  const { language } = useLanguage();
  const t = translations.forWhom;
  const headerRef = useScrollAnimation();
  const tabsRef = useScrollAnimation();
  const contentRef = useScrollAnimation();

  const forWhom = [
    { icon: Target, text: t.forWhom[language][0] },
    { icon: Clock, text: t.forWhom[language][1] },
    { icon: Heart, text: t.forWhom[language][2] },
    { icon: Users, text: t.forWhom[language][3] },
    { icon: DollarSign, text: t.forWhom[language][4] }
  ];

  const notForWhom = [
    { icon: Brain, text: t.notForWhom[language][0] },
    { icon: Ban, text: t.notForWhom[language][1] },
    { icon: Utensils, text: t.notForWhom[language][2] },
    { icon: Zap, text: t.notForWhom[language][3] },
    { icon: X, text: t.notForWhom[language][4] }
  ];

  return (
    <section id="for-whom" className="py-20 bg-gradient-to-b from-cream-50 to-vanilla-100">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-graphite mb-6 font-montserrat">
            {t.title[language]}
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Header Tabs */}
          <div ref={tabsRef} className="flex justify-center mb-8 lg:mb-12 animate-on-scroll">
            <div className="flex bg-white rounded-full shadow-lg overflow-hidden">
              <div className="bg-green-500 text-white px-4 py-2 lg:px-8 lg:py-4 font-bold text-sm lg:text-lg font-montserrat">
                {t.suitable[language]}
              </div>
              <div className="bg-red-500 text-white px-4 py-2 lg:px-8 lg:py-4 font-bold text-sm lg:text-lg font-montserrat">
                {t.notSuitable[language]}
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div ref={contentRef} className="grid lg:grid-cols-2 gap-6 lg:gap-8 animate-on-scroll">
            {/* Подходит */}
            <div className="space-y-4 lg:space-y-6">
              {forWhom.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 lg:gap-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <p className="text-graphite-800 font-medium text-sm lg:text-lg leading-relaxed font-manrope">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Разделительная линия */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-200 via-orange-400 to-orange-200 transform -translate-x-1/2"></div>

            {/* Не подходит */}
            <div className="space-y-4 lg:space-y-6">
              {notForWhom.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 lg:gap-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <p className="text-graphite-800 font-medium text-sm lg:text-lg leading-relaxed font-manrope">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-12 h-12 bg-green-200 rounded-full opacity-30 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-8 h-8 bg-red-200 rounded-full opacity-40 animate-float-delayed"></div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;