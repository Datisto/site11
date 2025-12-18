import React from 'react';
import { Award, Target, Heart, CheckCircle, ArrowRight, Shield, Euro, Dumbbell, User, BookOpen, Zap, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { handlePayment } from '../utils/payment';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const SpecialOffer = () => {
  const { language } = useLanguage();
  const t = translations.specialOffer;
  const headerRef = useScrollAnimation();
  const contentRef = useScrollAnimation();

  return (
    <section id="about-author" className="py-20 relative overflow-hidden min-h-screen">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="https://i.ibb.co/zWfZWLfH/image.png" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/60"></div>
      </div>
      
      {/* Decorative leaves */}
      <div className="absolute top-20 left-10 w-8 h-8 text-lime-400 transform rotate-45 opacity-60">🍃</div>
      <div className="absolute top-40 right-20 w-6 h-6 text-green-400 transform -rotate-12 opacity-50">🍃</div>
      <div className="absolute bottom-32 left-16 w-10 h-10 text-mint-400 transform rotate-12 opacity-40">🍃</div>
      <div className="absolute bottom-20 right-32 w-8 h-8 text-lime-500 transform -rotate-45 opacity-60">🍃</div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-lime-400 to-green-500 text-white px-8 py-3 rounded-full shadow-lg mb-6">
            <span className="font-bold text-lg font-montserrat">{t.badge[language]}</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 items-center animate-on-scroll">
            {/* Left Side - Photo */}
            <div className="relative lg:-ml-12 order-2 lg:order-1">
              <img 
                src="https://i.ibb.co/cX898gTf/image.jpg"
                alt="Ася - автор рецептов"
                className="w-full h-auto max-w-sm lg:max-w-xl mx-auto"
                style={{ height: 'auto', maxHeight: '500px', objectFit: 'contain' }}
              />
              
              {/* Caption under photo */}
              <div className="mt-4 lg:mt-6 text-center max-w-lg mx-auto">
                <h3 className="text-xl lg:text-2xl font-bold text-graphite mb-2 lg:mb-4 font-montserrat">
                  {t.caption.title[language]}
                </h3>
                <p className="text-base lg:text-lg text-sage font-manrope">
                  {t.caption.subtitle[language]}
                </p>
              </div>
            </div>

            {/* Right Side - About Me Text Block */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl min-h-[400px] lg:min-h-[600px] flex flex-col justify-center order-1 lg:order-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-graphite mb-4 lg:mb-6 font-montserrat">
                {t.aboutTitle[language]}
              </h2>
              
              <div className="space-y-3 lg:space-y-4 text-graphite leading-relaxed font-manrope text-sm lg:text-base">
                <p>
                  {t.aboutText[language][0].split('Ася')[0]}<strong>Ася</strong>{t.aboutText[language][0].split('Ася')[1]}
                </p>

                <p>
                  {t.aboutText[language][1].split('20 кг')[0]}<strong className="text-lime-500">20 кг</strong>{t.aboutText[language][1].split('20 кг')[1]}
                </p>

                <p>
                  {t.aboutText[language][2]}
                </p>
                
                <div className="bg-lime-50 rounded-2xl p-4 lg:p-6 mt-4 lg:mt-6">
                  <h3 className="text-lg lg:text-xl font-bold text-graphite mb-3 lg:mb-4 font-montserrat">{t.priceTitle[language]}</h3>
                  <ul className="space-y-1 lg:space-y-2 text-graphite text-sm lg:text-base">
                    <li>• {t.priceItems[language][0].split('490 грн')[0]}<strong className="text-lime-600">490 грн</strong>{t.priceItems[language][0].split('490 грн')[1]}</li>
                    <li>• {t.priceItems[language][1]}</li>
                    <li>• {t.priceItems[language][2]}</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-2xl p-4 lg:p-6 mt-3 lg:mt-4">
                  <h3 className="text-lg lg:text-xl font-bold text-graphite mb-3 lg:mb-4 font-montserrat">{t.howItWorksTitle[language]}</h3>
                  <ol className="space-y-1 lg:space-y-2 text-graphite text-sm lg:text-base">
                    <li>1. {t.howItWorksSteps[language][0]}</li>
                    <li>2. {t.howItWorksSteps[language][1]}</li>
                    <li>3. {t.howItWorksSteps[language][2]}</li>
                    <li>4. {t.howItWorksSteps[language][3]}</li>
                  </ol>
                </div>
              </div>


              {/* CTA Button */}
              <div className="mt-6 lg:mt-8">
                <button 
                  onClick={handlePayment}
                  className="w-full bg-gradient-to-r from-lime-400 to-green-500 text-white py-3 lg:py-4 rounded-2xl font-bold text-lg lg:text-xl hover:from-lime-500 hover:to-green-600 transition-all duration-300 hover:scale-105 hover:shadow-xl font-montserrat flex items-center justify-center gap-2"
                >
                  {t.button[language]}
                  <ArrowRight className="w-6 h-6" />
                </button>

                <div className="text-center mt-3 lg:mt-4">
                  <div className="flex items-center justify-center gap-2 text-sage">
                    <Shield className="w-5 h-5 text-mint-500" />
                    <span className="font-medium font-manrope text-sm lg:text-base">{t.securePayment[language]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SpecialOffer;