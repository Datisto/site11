import React from 'react';
import { handlePayment } from '../utils/payment';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const FAQ = () => {
  const { language } = useLanguage();
  const tFaq = translations.faq;

  const bgColors = [
    "bg-gradient-to-br from-yellow-400 to-orange-400",
    "bg-gradient-to-br from-coral-400 to-red-400",
    "bg-gradient-to-br from-blue-400 to-blue-500",
    "bg-gradient-to-br from-green-400 to-green-500",
    "bg-gradient-to-br from-purple-400 to-purple-500",
    "bg-gradient-to-br from-orange-400 to-orange-500"
  ];

  const faqItems = tFaq.items.map((item, index) => ({
    question: item.question[language],
    answer: item.answer[language],
    bgColor: bgColors[index],
    textColor: "text-white"
  }));

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-graphite-800 mb-4 lg:mb-6 font-montserrat">
            {tFaq.title[language]}
          </h2>
          <p className="text-base lg:text-xl text-graphite-600 max-w-3xl mx-auto font-manrope">
            {tFaq.subtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-7xl mx-auto mb-8 lg:mb-12">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className={`${item.bgColor} rounded-3xl p-5 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              <h3 className={`text-base lg:text-xl font-bold mb-3 lg:mb-4 font-montserrat ${item.textColor}`}>
                {item.question}
              </h3>
              <p className={`text-xs lg:text-base leading-relaxed font-manrope ${item.textColor} opacity-90`}>
                {item.answer.split('\n').map((line, lineIndex) => (
                  <span key={lineIndex} className="block mb-2 last:mb-0">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-graphite-600 text-sm lg:text-lg mb-4 lg:mb-6 font-manrope">
            {tFaq.notFound[language]}
          </p>
          <a
            href="https://www.instagram.com/artassya?igsh=MXM3NGNxMDFtd3Vt"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-mint-400 to-green-500 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-bold text-sm lg:text-lg hover:from-mint-500 hover:to-green-600 transition-all duration-300 hover:scale-105 hover:shadow-xl font-montserrat inline-block"
          >
            {tFaq.askMe[language]}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
