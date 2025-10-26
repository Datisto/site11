import React from 'react';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const AboutAuthor = () => {
  const achievements = [
    { icon: Award, text: "Сертифицированный нутрициолог", color: "from-coral-400 to-terracotta-400" },
    { icon: Users, text: "Более 10000 довольных клиентов", color: "from-mint-400 to-teal-400" },
    { icon: Clock, text: "7 лет опыта в здоровом питании", color: "from-lime-400 to-green-400" },
    { icon: CheckCircle, text: "Автор 5 книг о правильном питании", color: "from-sage-400 to-powder-400" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-graphite mb-6 font-montserrat">
            Об авторе рецептов
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Photo */}
          <div className="relative animate-fade-in-left">
            <img 
              src="https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
              alt="Автор рецептов"
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-coral-300 to-terracotta-300 rounded-3xl p-4 shadow-xl">
              <div className="text-white text-center">
                <div className="text-2xl font-bold font-montserrat">-15кг</div>
                <div className="text-sm font-manrope">личный результат</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-right">
            <h3 className="text-3xl font-bold text-graphite mb-6 font-montserrat">
              Елена Здоровская
            </h3>
            
            <p className="text-lg text-sage mb-8 leading-relaxed font-manrope">
              Привет! Я Елена, сертифицированный нутрициолог с 7-летним опытом. 
              Сама прошла путь от лишнего веса к стройности и здоровью, поэтому 
              знаю, как важно питаться вкусно и полезно одновременно.
            </p>

            <p className="text-lg text-sage mb-8 leading-relaxed font-manrope">
              Создала этот рецептбук, чтобы поделиться проверенными рецептами, 
              которые помогли мне и тысячам моих клиентов обрести стройность 
              без диет и ограничений.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-10 h-10 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center`}>
                    <achievement.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-graphite font-medium font-manrope">{achievement.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-mint-100 to-sage-100 rounded-2xl">
              <p className="text-graphite font-medium italic font-manrope">
                "Моя миссия — показать, что здоровое питание может быть вкусным, 
                простым и доступным каждому. Еда должна приносить радость, а не стресс!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;