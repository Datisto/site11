// Интеграция с WayForPay для оплаты
export const handlePayment = async () => {
  try {
    // Отслеживание события InitiateCheckout для Meta Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Purchase', {
        content_name: 'РЕЦЕПТБУК EAT&FIT',
        content_category: 'Рецепти',
        value: 490.00,
        currency: 'UAH'
      });
    }

    const orderReference = `order_${Date.now()}`;
    const orderDate = Math.floor(Date.now() / 1000);

    localStorage.setItem('pendingPayment', orderReference);
    localStorage.setItem('paymentTimestamp', Date.now().toString());

    const paymentData = {
      orderReference,
      orderDate,
      amount: 490,
      currency: 'UAH',
      productName: ['РЕЦЕПТБУК EAT&FIT'],
      productPrice: [490],
      productCount: [1]
    };

    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    const apiUrl = `${supabaseUrl}/functions/v1/create-payment`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData)
    });

    const result = await response.json();

    console.log('WayForPay Response:', result);

    if (result.invoiceUrl) {
      window.location.href = result.invoiceUrl;
    } else if (result.url) {
      window.location.href = result.url;
    } else if (result.reason === 'Ok' || result.reasonCode === 1100) {
      alert('Платіж успішно створено, але посилання не отримано. Відповідь: ' + JSON.stringify(result));
    } else {
      throw new Error(result.reasonCode || 'Помилка створення платежу');
    }
  } catch (error) {
    console.error('Помилка при створенні платежу:', error);
    alert('Виникла помилка при створенні платежу. Спробуйте ще раз.');
  }
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