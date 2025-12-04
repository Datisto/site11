import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

export default function Success() {
  useEffect(() => {
    localStorage.removeItem('pendingPayment');
    localStorage.removeItem('paymentTimestamp');

    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        value: 12.00,
        currency: 'EUR'
      });
    }
  }, []);

  const handleTelegramClick = () => {
    window.location.href = 'https://t.me/asyafitnessart_bot?start=ZGw6MzAwNTI2';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Оплата успішна!
        </h1>

        <p className="text-gray-600 mb-8">
          Дякуємо за покупку! Ваш РЕЦЕПТБУК EAT&FIT вже чекає на вас в Telegram-боті.
        </p>

        <button
          onClick={handleTelegramClick}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          👉 Перейти в Telegram-канал
        </button>

        <p className="text-sm text-gray-500 mt-6">
          Отримайте доступ до всіх рецептів просто зараз
        </p>
      </div>
    </div>
  );
}
