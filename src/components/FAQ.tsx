import React from 'react';
import { handlePayment } from '../utils/payment';

const FAQ = () => {
  const faqItems = [
    {
      question: "Что за бонусы?",
      answer: "«Правильная тарелка» — GIF-схемы как правильно составить тарелку + карточки с подробным разъяснением\n\n«Видео МФР» — короткие ролики по зонам: стопы, икры, бёдра/ягодицы, спина, грудной отдел, плечи/руки.\n\n«Уход за кожей» — список проверенных скрабов/масел, щёток для тела, массажёры, пошаговые мини-ритуалы + ссылки где купить\n\nРегулярное обновление канала",
      bgColor: "bg-gradient-to-br from-yellow-400 to-orange-400",
      textColor: "text-white"
    },
    {
      question: "Это дорого!",
      answer: "Цена - это про ценность. А с нашим Рецептбуком ты не только экономишь время на поиски и раздумья «что приготовить сегодня», а и получаешь:\n- полностью просчитанный КБЖУ для каждого блюда; гайд по уходу за кожей; МФР-упражнения для всего тела; картинки с пояснениями, как делать массаж; схему «правильной тарелки» — как собрать сбалансированный приём пищи; комьюнити с поддержкой и челленджами — среди участниц разыгрываем духи.\nНе файл, а система с обновлениями — готовишь спокойно и живёшь проще.",
      bgColor: "bg-gradient-to-br from-coral-400 to-red-400",
      textColor: "text-white"
    },
    {
      question: "Нужны ли супер-ингредиенты?",
      answer: "Нет, никаких редких или дорогих продуктов покупать не придётся. Все рецепты составлены из простых и доступных ингредиентов, которые можно найти в ближайшем магазине.\nВам не нужны экзотические порошки или добавки — только то, что легко включить в повседневное меню. Такой подход экономит время, деньги и силы, а результат остаётся тем же: вкусное и сбалансированное питание, которое работает на вашу цель.",
      bgColor: "bg-gradient-to-br from-blue-400 to-blue-500",
      textColor: "text-white"
    },
    {
      question: "А если я на ГВ?",
      answer: "Идея — про сбалансированное питание, а не диету. Но на ГВ всё индивидуально: ориентируйтесь на самочувствие и рекомендации вашего врача.",
      bgColor: "bg-gradient-to-br from-green-400 to-green-500",
      textColor: "text-white"
    },
    {
      question: "Нужны ли кухонные весы?",
      answer: "Весы — это идеальный вариант, ведь подсчёт КБЖУ основан на точной граммовке продуктов. Так вы получаете максимально предсказуемый и понятный результат, без «на глаз».\nНо если весов нет — не проблема. Можно использовать мерный стакан, ложки или ориентироваться на удобные подсказки «по порциям», которые мы подготовили. Такой подход позволит вам всё равно двигаться к цели без лишнего стресса.",
      bgColor: "bg-gradient-to-br from-purple-400 to-purple-500",
      textColor: "text-white"
    },
    {
      question: "Почему канал, а не PDF?",
      answer: "Канал удобный - поиск по тегам, обсуждения, постоянные обновления. PDF устаревает, а в канале материалы всегда актуальны.",
      bgColor: "bg-gradient-to-br from-orange-400 to-orange-500",
      textColor: "text-white"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-graphite-800 mb-4 lg:mb-6 font-montserrat">
            FAQ
          </h2>
          <p className="text-base lg:text-xl text-graphite-600 max-w-3xl mx-auto font-manrope">
            Здесь собраны самые частые вопросы от наших клиентов. Если не найдете ответ на свой вопрос, обязательно напишите нам!
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
                {item.answer.split('\n').map((line, lineIndex) => {
                  // Обрабатываем жирный текст - все что было в скобках в промте
                  const parts = line.split(/(\«Правильная тарелка\»|Видео МФР|Уход за кожей|щёток для тела|ссылки|обновление|Цена - это про ценность|полностью просчитанный КБЖУ для каждого блюда; гайд по уходу за кожей; МФР-упражнения|картинки с пояснениями|схему «правильной тарелки»|комьюнити с поддержкой и челленджами)/g);
                  
                  return (
                    <span key={lineIndex} className="block mb-2 last:mb-0">
                      {parts.map((part, partIndex) => {
                        const shouldBeBold = /\«Правильная тарелка\»|Видео МФР|Уход за кожей|щёток для тела|ссылки|обновление|Цена - это про ценность|полностью просчитанный КБЖУ для каждого блюда; гайд по уходу за кожей; МФР-упражнения|картинки с пояснениями|схему «правильной тарелки»|комьюнити с поддержкой и челленджами|сбалансированное питание|Весы|конкретную граммовку|Супер-ингредиенты|поиск по тегам|постоянные обновления/.test(part);
                        return shouldBeBold ? (
                          <strong key={partIndex} className="font-bold">{part}</strong>
                        ) : (
                          <span key={partIndex}>{part}</span>
                        );
                      })}
                    </span>
                  );
                })}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-graphite-600 text-sm lg:text-lg mb-4 lg:mb-6 font-manrope">
            Не нашли ответ на свой вопрос?
          </p>
          <a 
            href="https://www.instagram.com/artassya?igsh=MXM3NGNxMDFtd3Vt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-mint-400 to-green-500 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-bold text-sm lg:text-lg hover:from-mint-500 hover:to-green-600 transition-all duration-300 hover:scale-105 hover:shadow-xl font-montserrat inline-block"
          >
            Спроси у меня
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
