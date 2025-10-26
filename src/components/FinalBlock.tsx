import React from 'react';
import { ArrowRight, Shield, CreditCard, Smartphone, Download, CheckCircle, Star, Users } from 'lucide-react';
import { handlePayment } from '../utils/payment';

const FinalBlock = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-lime-600 to-green-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-lime-400/20 to-green-500/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Повтор основного оффера */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Star className="w-5 h-5 text-yellow-300" />
            <span className="text-yellow-200 font-semibold font-montserrat">ВСЁ В ОДНОМ МЕСТЕ</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-montserrat">
            Все секреты здорового питания и ухода за собой –
            <span className="block text-transparent bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text">
              в одном клике от тебя
            </span>
          </h2>
          
          {/* Что получит пользователь */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 font-montserrat">60+ рецептов</h3>
              <p className="text-gray-300 text-sm font-manrope">60+ рецептов с постоянным обновлением</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 font-montserrat">Комьюнити</h3>
              <p className="text-gray-300 text-sm font-manrope">Поддержка единомышленников 24/7</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 font-montserrat">Бонусы</h3>
              <p className="text-gray-300 text-sm font-manrope">Гайды, МФР, уход за кожей</p>
            </div>
          </div>
        </div>

        {/* Финальный призыв */}
        <div className="text-center mb-8">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-montserrat text-transparent bg-gradient-to-r from-lime-400 to-mint-400 bg-clip-text">
            <span className="text-white">Присоединяйся к нам и начни превращать своё тело и образ жизни уже сегодня!</span>
          </h3>
        </div>

        {/* Цена */}
        <div className="text-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto mb-6">
            <div className="text-6xl font-bold mb-4 font-montserrat">
              <span className="line-through text-gray-500">19 €</span>
              <span className="text-yellow-300 ml-4">12 €</span>
            </div>
            <p className="text-yellow-300 text-xl font-semibold font-montserrat">Экономия 7 € только сегодня!</p>
          </div>
        </div>

        {/* Финальная CTA кнопка */}
        <div className="text-center mb-8">
          <button 
            onClick={handlePayment}
            className="group bg-white text-green-700 px-12 py-6 rounded-full font-bold text-2xl hover:bg-yellow-300 hover:text-green-800 transition-all duration-300 hover:scale-110 hover:shadow-2xl font-montserrat flex items-center justify-center gap-3 mx-auto animate-pulse-gentle"
          >
            <Download className="w-6 h-6" />
            ПОЛУЧИТЬ ДОСТУП И ВОЙТИ В КАНАЛ
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Гарантии и доверие */}
        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center items-center gap-6 mb-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-yellow-300" />
              <span className="text-gray-300 text-sm font-manrope">Оплата 100% безопасна</span>
            </div>
            <div className="flex items-center gap-4">
              <CreditCard className="w-8 h-8 text-gray-400" />
              <Smartphone className="w-8 h-8 text-gray-400" />
              <span className="text-gray-400 text-sm font-manrope">Visa • Mastercard</span>
            </div>
          </div>
          
          <p className="text-gray-400 text-xs font-manrope">
            ✓ Мгновенный доступ после оплаты • ✓ Пожизненный доступ • ✓ Техническая поддержка
          </p>
        </div>

      </div>

      {/* Footer */}
      <footer className="text-center mt-12">
        <p className="text-gray-400 text-xs font-manrope">
          © 2024 Здоровое питание. Все права защищены.
          {' • '}
          <a href="#" className="hover:text-yellow-300 transition-colors">Политика конфиденциальности</a>
          {' • '}
          <a href="#" className="hover:text-yellow-300 transition-colors">Условия использования</a>
          {' • '}
          <a href="#" className="hover:text-yellow-300 transition-colors">Публичная оферта</a>
        </p>
      </footer>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-lime-400/30 to-green-400/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-green-400/30 to-lime-400/30 rounded-full blur-xl"></div>
    </section>
  );
};

export default FinalBlock;