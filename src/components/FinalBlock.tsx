import React from 'react';
import { ArrowRight, Shield, CreditCard, Smartphone, Download, CheckCircle, Star, Users } from 'lucide-react';
import { handlePayment } from '../utils/payment';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const FinalBlock = () => {
  const { language } = useLanguage();
  const t = translations.finalBlock;
  return (
    <section className="py-20 bg-gradient-to-b from-lime-600 to-green-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-lime-400/20 to-green-500/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Повтор основного оффера */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Star className="w-5 h-5 text-yellow-300" />
            <span className="text-yellow-200 font-semibold font-montserrat">{t.badge[language]}</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-montserrat">
            {t.title[language]}
            <span className="block text-transparent bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text">
              {t.titleAccent[language]}
            </span>
          </h2>
          
          {/* Что получит пользователь */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 font-montserrat">{t.features[0].title[language]}</h3>
              <p className="text-gray-300 text-sm font-manrope">{t.features[0].description[language]}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 font-montserrat">{t.features[1].title[language]}</h3>
              <p className="text-gray-300 text-sm font-manrope">{t.features[1].description[language]}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 font-montserrat">{t.features[2].title[language]}</h3>
              <p className="text-gray-300 text-sm font-manrope">{t.features[2].description[language]}</p>
            </div>
          </div>
        </div>

        {/* Финальный призыв */}
        <div className="text-center mb-8">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-montserrat text-transparent bg-gradient-to-r from-lime-400 to-mint-400 bg-clip-text">
            <span className="text-white">{t.callToAction[language]}</span>
          </h3>
        </div>

        {/* Цена */}
        <div className="text-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto mb-6">
            <div className="flex flex-col items-center gap-2 mb-4">
              <span className="line-through text-gray-500 text-4xl lg:text-5xl font-bold font-montserrat">1225 грн</span>
              <span className="text-yellow-300 text-5xl lg:text-6xl font-bold font-montserrat">490 грн</span>
            </div>
            <p className="text-yellow-300 text-xl font-semibold font-montserrat">{t.savings[language]}</p>
          </div>
        </div>

        {/* Финальная CTA кнопка */}
        <div className="text-center mb-8">
          <button 
            onClick={handlePayment}
            className="group bg-white text-green-700 px-12 py-6 rounded-full font-bold text-2xl hover:bg-yellow-300 hover:text-green-800 transition-all duration-300 hover:scale-110 hover:shadow-2xl font-montserrat flex items-center justify-center gap-3 mx-auto animate-pulse-gentle"
          >
            <Download className="w-6 h-6" />
            {t.button[language]}
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Гарантии и доверие */}
        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center items-center gap-6 mb-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-yellow-300" />
              <span className="text-gray-300 text-sm font-manrope">{t.securePayment[language]}</span>
            </div>
            <div className="flex items-center gap-4">
              <CreditCard className="w-8 h-8 text-gray-400" />
              <Smartphone className="w-8 h-8 text-gray-400" />
              <span className="text-gray-400 text-sm font-manrope">Visa • Mastercard</span>
            </div>
          </div>
          
          <p className="text-gray-400 text-xs font-manrope">
            {t.guarantees[language]}
          </p>
        </div>

      </div>

      {/* Footer */}
      <footer className="text-center mt-12">
        <p className="text-gray-400 text-xs font-manrope">
          {t.footer.copyright[language]}
          {' • '}
          <a href="#" className="hover:text-yellow-300 transition-colors">{t.footer.privacy[language]}</a>
          {' • '}
          <a href="#" className="hover:text-yellow-300 transition-colors">{t.footer.terms[language]}</a>
          {' • '}
          <a href="#" className="hover:text-yellow-300 transition-colors">{t.footer.offer[language]}</a>
        </p>
      </footer>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-lime-400/30 to-green-400/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-green-400/30 to-lime-400/30 rounded-full blur-xl"></div>
    </section>
  );
};

export default FinalBlock;