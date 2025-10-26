import React from 'react';
import { BookOpen, Utensils, Heart, Users, RefreshCw, Gift, User, Play, Calculator } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { handlePayment } from '../utils/payment';

const WhatInside = () => {
  const headerRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  const bonusesRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  const mainFeatures = [
    {
      number: "01",
      title: "60+ рецептов на каждый день",
      description: "Завтраки/обеды/ужины/перекусы, для каждого блюда - просчитанное КБЖУ",
      icon: Utensils
    },
    {
      number: "02",
      title: "SOS-сладкое и ПП-десерты",
      description: "Без демонизации продуктов",
      icon: Heart
    },
    {
      number: "03",
      title: "Челлендж «7 дней завтраков»",
      description: "Стартуем сразу, чтобы войти в ритм",
      icon: Play
    },
    {
      number: "04",
      title: "Памятки и мини-гайды",
      description: "По осознанному питанию",
      icon: BookOpen
    },
    {
      number: "05",
      title: "Комьюнити-чат",
      description: "Активное сообщество единомышленников для обмена опытом, мотивации и поддержки 24/7",
      icon: Users
    },
    {
      number: "06",
      title: "Регулярное пополнение контента",
      description: "Новые рецепты, советы, бонусы и анонсы продуктов о которых вы узнаете первыми",
      icon: RefreshCw
    }
  ];

  const bonuses = [
    {
      icon: "https://i.ibb.co/XhNmmLM/image.png",
      title: "«Правильная тарелка»",
      description: "Наглядная схема баланса БЖУ и порций",
      details: [
        "яркие GIF-анимации, показывающие, как собрать тарелку",
        "карточки с пояснениями по каждой группе продуктов",
        "примеры сочетаний для сбалансированного питания"
      ]
    },
    {
      icon: "https://i.ibb.co/p6jKNLy1/image.png",
      title: "Рекомендации по уходу за кожей",
      description: "Секреты красоты и здоровья",
      details: [
        "подборка лучших скрабов, масел и кремов",
        "ссылки на проверенные продукты и аксессуары (щётки, массажёры и тп)",
        "пошаговые советы по уходу и простые ритуалы дома"
      ]
    },
    {
      icon: "https://i.ibb.co/R4T0DYTX/image.png",
      title: "Видео МФР",
      description: "Миофасциальный релиз для расслабления и восстановления",
      details: [
        "серия видео для разных зон (икры, бедра, спина, руки)",
        "техники миофасциального релиза для снятия напряжения и расслабления",
        "рекомендации по выбору роликов и мячей для самомассажа"
      ]
    },
    {
      icon: "https://i.ibb.co/Q1LSCHC/image.png",
      title: "Индивидуальный подсчёт КБЖУ",
      description: "Для первых участников канала",
      details: [
        "персональная норма калорий и БЖУ под вашу цель (похудение, набор или поддержание формы)",
        "подробный разбор продуктов и комбинаций для вашего режима дня",
        "рекомендации, как корректировать рацион без жёстких ограничений",
        "лёгкая система, которая поможет питаться осознанно и без стресса"
      ]
    }
  ];

  const stats = [
    { number: "Завтраки", label: "Завтраки" },
    { number: "Обеды", label: "Обеды" },
    { number: "Ужины", label: "Ужины" },
    { number: "Перекусы", label: "Перекусы" },
    { number: "Десерты", label: "Десерты" },
    { number: "В дорогу", label: "В дорогу" },
    { number: "Смузи", label: "Смузи" },
    { number: "Для компании", label: "Для компании" }
  ];

  return (
    <section id="what-inside" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://i.ibb.co/XfmX4v3q/image.png" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl lg:text-5xl font-bold text-graphite mb-6 font-montserrat">
            Что внутри канала
          </h2>
        </div>

        {/* Stats Bar */}
        <div ref={statsRef} className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-12 lg:mb-16 animate-on-scroll">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-coral-100 text-coral-600 px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-semibold font-montserrat"
            >
              {stat.number}
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Side - Numbered List */}
          <div className="space-y-6 lg:space-y-8">
            {mainFeatures.map((feature, index) => {
              const featureRef = useScrollAnimation();
              return (
                <div 
                  key={index}
                  ref={featureRef}
                  className="flex items-start gap-4 lg:gap-6 animate-on-scroll"
                >
                  {/* Number Circle */}
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-coral-500 text-white rounded-full flex items-center justify-center font-bold text-base lg:text-lg font-montserrat flex-shrink-0">
                    {feature.number}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold text-graphite mb-2 font-montserrat">
                      {feature.title}
                    </h3>
                    <p className="text-sage leading-relaxed font-manrope text-sm lg:text-base">
                      {feature.description}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-lime-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 lg:w-5 lg:h-5 text-lime-600" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bonuses Section */}
        <div ref={bonusesRef} className="mt-12 lg:mt-20 animate-on-scroll">
          <div className="text-center mb-8 lg:mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-coral-500 to-terracotta-500 text-white px-6 lg:px-8 py-3 rounded-full mb-4 shadow-lg">
              <Gift className="w-5 h-5" />
              <span className="font-bold text-base lg:text-lg font-montserrat">БОНУСЫ</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12 max-w-6xl mx-auto">
            {bonuses.map((bonus, index) => {
              const bonusRef = useScrollAnimation();
              // Цвета для карточек - первая карточка более темная для лучшей читаемости
              const cardColors = [
                'bg-gradient-to-br from-orange-400 to-red-400', // Еще более контрастный оранжево-красный
                'bg-gradient-to-br from-blue-100 to-blue-200',
                'bg-gradient-to-br from-green-100 to-green-200',
                'bg-gradient-to-br from-purple-100 to-purple-200'
              ];
              const textColors = [
                'text-white', // Белый текст для лучшей читаемости
                'text-blue-800',
                'text-green-800',
                'text-purple-800'
              ];
              return (
                <div 
                  key={index}
                  ref={bonusRef}
                  className={`rounded-3xl p-6 lg:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll flex flex-col h-full ${cardColors[index]}`}
                >
                  {/* Иконка сверху */}
                  <div className="flex justify-center mb-4 lg:mb-6">
                    <div className="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center">
                      <img 
                        src={bonus.icon} 
                        alt={bonus.title}
                        className="w-12 h-12 lg:w-20 lg:h-20 object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Заголовок и описание - выровнены по верху */}
                  <div className="mb-4">
                    <h4 className={`font-bold mb-2 lg:mb-3 text-lg lg:text-xl font-montserrat ${textColors[index]}`}>
                      {bonus.title}
                    </h4>
                    
                    <p className={`text-xs lg:text-sm leading-relaxed font-manrope ${textColors[index]} opacity-80`}>
                      {bonus.description}
                    </p>
                  </div>
                  
                  {/* Подпункты - центрированы в оставшемся пространстве */}
                  <div className="flex-1 flex items-start justify-center">
                    {bonus.details && bonus.details.length > 0 && (
                      <ul className={`space-y-1 text-xs lg:text-sm ${textColors[index]} opacity-70`}>
                        {bonus.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-1">
                            <span className="text-xs mt-0.5">•</span>
                            <span className="leading-tight">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div ref={ctaRef} className="text-center animate-on-scroll">
          <button 
            onClick={handlePayment}
            className="group bg-gradient-to-r from-coral-500 to-terracotta-500 text-white px-8 lg:px-12 py-3 lg:py-4 rounded-full font-bold text-lg lg:text-xl hover:from-coral-600 hover:to-terracotta-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl font-montserrat relative overflow-hidden animate-pulse-gentle before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] before:animate-[shimmer_2s_infinite] before:skew-x-12 shadow-lg"
          >
            <span className="relative z-10">ПОЛУЧИТЬ ДОСТУП</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatInside;