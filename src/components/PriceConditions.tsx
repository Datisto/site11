import React from 'react';
import { CheckCircle, ArrowRight, Shield, Clock, Download, CreditCard } from 'lucide-react';

const PriceConditions = () => {
  const steps = [
    {
      number: "01",
      title: "Оплата",
      description: "Оплачиваете рецептбук и получаете ссылку на скачивание"
    },
    {
      number: "02", 
      title: "Скачивание",
      description: "Скачиваете PDF-файл с рецептами на свое устройство"
    },
    {
      number: "03",
      title: "Готовка",
      description: "Начинаете готовить вкусные и полезные блюда уже сегодня"
    },
    {
      number: "04",
      title: "Результат",
      description: "Наслаждаетесь стройностью и энергией от правильного питания"
    }
  ];

  const conditions = [
    "Мгновенный доступ после оплаты",
    "200+ проверенных рецептов в PDF",
    "Бонусы: смузи, планы питания, гид по суперфудам",
    "Пожизненный доступ к материалам",
    "Возможность распечатать рецепты"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-vanilla-50 to-cream-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-graphite mb-6 font-montserrat">
            Как получить рецептбук
          </h2>
          <p className="text-xl text-sage max-w-3xl mx-auto font-manrope">
            Простой процесс в 4 шага до вашей кулинарной трансформации
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-coral-400 to-terracotta-400 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white font-montserrat">{step.number}</span>
                </div>
                
                <h3 className="text-xl font-bold text-graphite mb-4 font-montserrat">{step.title}</h3>
                <p className="text-sage leading-relaxed font-manrope">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-coral-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Conditions */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-graphite mb-6 font-montserrat">Что вы получаете</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {conditions.map((condition, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-6 h-6 text-mint-500 flex-shrink-0" />
                  <span className="text-graphite font-manrope">{condition}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-3xl text-sage line-through font-montserrat">19 €</span>
              <span className="text-5xl font-bold text-coral-500 font-montserrat">12 €</span>
              <div className="bg-lime-400 text-white px-3 py-1 rounded-full font-bold font-montserrat">-37%</div>
            </div>

            <div className="flex items-center justify-center gap-2 text-sage mb-6">
              <Clock className="w-5 h-5" />
              <span className="font-manrope">Акция действует ограниченное время</span>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-coral-500 to-terracotta-400 text-white py-4 rounded-2xl font-bold text-xl hover:from-coral-600 hover:to-terracotta-500 transition-all duration-300 hover:scale-105 hover:shadow-xl mb-6 font-montserrat flex items-center justify-center gap-2">
            <Download className="w-6 h-6" />
            КУПИТЬ ДОСТУП И СКАЧАТЬ
          </button>

          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Shield className="w-6 h-6 text-mint-500" />
              <span className="text-graphite font-medium font-manrope">Безопасная оплата</span>
            </div>
            <div className="flex items-center justify-center gap-4 text-sm text-sage">
              <CreditCard className="w-5 h-5" />
              <span className="font-manrope">Visa • Mastercard • МИР • СБП • Яндекс.Деньги</span>
            </div>
          </div>
        </div>

        {/* Slogan */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-mint-100 to-lime-100 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-graphite mb-4 font-montserrat">
              Начните питаться правильно уже сегодня!
            </h3>
            <p className="text-sage text-lg font-manrope">
              Каждый день промедления — это упущенная возможность стать здоровее и стройнее
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceConditions;