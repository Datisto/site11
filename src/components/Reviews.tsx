import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Оксана Гончар",
      age: "29 лет",
      text: "Рецепты простые, всё готовится быстро, а блюда реально вкусные. Муж тоже подключился - худею сама, и балую вкусненьким мужа!",
      rating: 5,
      image: "https://i.ibb.co/DS6PVRC/IMG-20250918-152536-234.jpg"
    },
    {
      name: "Ирина Коваленко",
      age: "33 года",
      text: "Очень удобно: не нужно ломать голову, что приготовить. Все рецепты из обычных продуктов, которые есть в магазине возле дома. Экономлю время и деньги.",
      rating: 5,
      image: "https://i.ibb.co/jZJ5kZnf/IMG-20250918-152538-322.jpg"
    },
    {
      name: "Татьяна Мельник",
      age: "45 лет",
      text: "Мне важно было наладить питание без строгих диет. Благодаря этому сборнику ушли лишние 4 кг за месяц, и самое главное — появилось больше энергии.",
      rating: 5,
      image: "https://i.ibb.co/RpM3vKQt/IMG-20250918-152539-979.jpg"
    },
    {
      name: "Наталия Шевченко",
      age: "24 года",
      text: "Я студентка, и у меня мало времени на готовку и никогда нет идей что приготовить. Эти рецепты моё спасение: быстро, недорого и полезно)",
      rating: 5,
      image: "https://i.ibb.co/fdXyzmTx/IMG-20250918-152542-387.jpg"
    }
  ];

  return (
    <section id="reviews" className="py-12 lg:py-20 bg-gradient-to-b from-sage-50 via-powder-50 to-mint-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-graphite mb-4 lg:mb-6 font-montserrat">
            Отзывы покупателей
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl lg:rounded-3xl p-4 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                <img 
                  src={review.image}
                  alt={review.name}
                  className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover ${
                    review.name === "Ирина Коваленко" ? "object-top" : ""
                  }`}
                />
                <div>
                  <h4 className="font-bold text-graphite text-sm lg:text-lg font-montserrat">{review.name}</h4>
                  <p className="text-sage font-manrope text-xs lg:text-base">{review.age}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3 lg:mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="w-6 h-6 lg:w-8 lg:h-8 text-coral-300 absolute -top-1 lg:-top-2 -left-1 lg:-left-2" />
                <p className="text-graphite leading-relaxed pl-4 lg:pl-6 font-manrope text-sm lg:text-base">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;