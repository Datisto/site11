// Интеграция с WayForPay для оплаты
export const handlePayment = () => {
  // Отслеживание события InitiateCheckout для Meta Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'InitiateCheckout', {
      content_name: 'РЕЦЕПТБУК EAT&FIT',
      content_category: 'Рецепти',
      value: 12.00,
      currency: 'EUR'
    });
  }

  // Перенаправляем на страницу оплаты WayForPay в той же вкладке
  // После оплаты WayForPay должен перенаправить на Telegram бот
  window.location.href = 'https://secure.wayforpay.com/button/b30a9d07471f7';
};

/*
// СТАРЫЙ КОД MONOBANK - закомментирован, можно вернуть при необходимости
export const handlePayment = () => {
  // ТЕСТОВЫЙ РЕЖИМ - раскомментируйте для тестирования редиректа
  const isTestMode = false; // Поставьте false для реальных платежей

  if (isTestMode) {
    // Имитация успешной оплаты для тестирования
    const confirmTest = confirm('ТЕСТОВЫЙ РЕЖИМ: Имитировать успешную оплату и перейти в Telegram канал?');
    if (confirmTest) {
      // Имитируем задержку как при реальной оплате
      setTimeout(() => {
        alert('✅ Тестовая оплата прошла успешно! Переходим в Telegram канал...');
        // Используем window.location.href для надежного перенаправления
        window.location.href = 'https://t.me/asyafitnessart_bot?start=ZGw6MzAwNTI2';
      }, 1000);
    }
    return;
  }

  try {
    // Создаем запрос к Monobank API с правильными заголовками
    const paymentData = {
      amount: 60000, // 600 грн в копейках
      ccy: 980, // UAH
      merchantPaymInfo: {
        reference: `order_${Date.now()}`,
        destination: 'Доступ к рецептбуку EAT&FIT',
        comment: 'Покупка доступа к закрытому каналу с рецептами - 600 грн'
      },
      redirectUrl: 'https://t.me/asyafitnessart_bot?start=ZGw6MzAwNTI2',
      webHookUrl: `${window.location.origin}/webhook`
    };

    // Отправляем запрос с правильными заголовками
    fetch('https://api.monobank.ua/api/merchant/invoice/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Token': 'mfN60xiyd7wUiESlEDZYYqA'
      },
      body: JSON.stringify(paymentData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.invoiceId && data.pageUrl) {
        // Перенаправляем на страницу оплаты
        window.open(data.pageUrl, '_blank');
      } else {
        throw new Error('Не удалось создать инвойс');
      }
    })
    .catch(error => {
      console.error('Ошибка создания инвойса:', error);
      showFallbackPayment();
    });

  } catch (error) {
    console.error('Ошибка при инициации платежа:', error);
    showFallbackPayment();
  }
};
*/