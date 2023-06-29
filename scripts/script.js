//document.getElementsByClassName('main-title')[0].style.color = 'red'; //меняем цвет заголовка
//робимо скрол от кнопки Новое меню
document.getElementById('main-action-button').onclick = function () {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
};

//делаем скрол по якорям
let links = document.querySelectorAll('.menu-item > a');
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    document
      .getElementById(links[i].getAttribute('data-link'))
      .scrollIntoView({ behavior: 'smooth' });
  };
}

//при нажатии на кнопку купить, попадаем оформить заказ
let buttons = document.getElementsByClassName('product-button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
  };
}

//обращаемся к кажжому полю
let burger = document.getElementById('burger');
let name = document.getElementById('name');
let phone = document.getElementById('phone');
//делаем валидацию форми
document.getElementById('order-action').onclick = function () {
  let hasError = false;
  [burger, name, phone].forEach(item => {
    if (!item.value) {
      item.parentElement.style.background = 'red';
      hasError = true;
    } else {
      item.parentElement.style.background = '';
    }
  });
  //проверяем на ошибки
  if (!hasError) {
    [burger, name, phone].forEach(item => {
      item.value = ' '; //чистим строку
    });
    alert('Дякую за замовлення!');
  }
};

let prices = document.getElementsByClassName('products-item-price'); //поиск всех цен

//меняем валюту
document.getElementById('change-currency').onclick = function (e) {
  let currentCurrency = e.target.innerText; //текущая валюта
  //новая валюта на которую ми изменяем и коефициент по которому будем пересчитивать цену
  let newCurrency = '$';
  let coefficient = 1;
  // будем определять какая сейчас валюта
  if (currentCurrency === '$') {
    newCurrency = '₴';
    coefficient = 38;
  } else if (currentCurrency === '₴') {
    newCurrency = '€';
    coefficient = 3;
  } else if (currentCurrency === '€') {
    newCurrency = '¥';
    coefficient = 6.9;
  } else if (currentCurrency === '¥') {
    newCurrency = '£';
    coefficient = 0.9;
  }
  e.target.innerText = newCurrency;
  //перебираем циклом по каждому елемент и меняем каждое значение по каждому курсу
  for (let i = 0; i < prices.length; i++) {
    prices[i].innerText =
      +(prices[i].getAttribute('data-base-price') * coefficient).toFixed(1) + ' ' + newCurrency;
  }
};
//Слайдер
$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    // autoplay: true,
    // speed: 1000,
    // autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


var openButtons = document.querySelectorAll('.button-about');
var modals = document.querySelectorAll('.modal');

openButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    var modalId = button.dataset.modalId;
    var modal = document.getElementById(modalId);
    modal.style.display = 'block';

    // Додати обробник подій для закриття модального вікна при натисканні на крестик
    var closeButtons = modal.getElementsByClassName('close');
    for (var i = 0; i < closeButtons.length; i++) {
      closeButtons[i].addEventListener('click', function () {
        modal.style.display = 'none';
      });
    }
  });
});

// Додати обробник подій для закриття модального вікна при натисканні на клавішу Esc
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modals.forEach(function (modal) {
      modal.style.display = 'none';
    });
  }
});

// Додати обробник подій для закриття модального вікна при натисканні де-небудь на сторінці
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
});


// function zoomImage(image) {
//   // Створюємо модальне вікно для збільшення картинки
//   var modalImageCard = document.createElement('div');
//   modalImageCard.classList.add('modal-image-card');
//   modalImageCard.addEventListener('click', function () {
//   modalImageCard.remove(); // При кліку на модальне вікно воно закриється
//   });

//   // Створюємо зображення в модальному вікні
//   var modalImage = document.createElement('img');
//   modalImage.src = image.src;
//   modalImage.alt = image.alt;
//   modalImage.classList.add('modal-image');

//   // Додаємо зображення в модальне вікно
//   modalImageCard.appendChild(modalImage);

//   // Додаємо модальне вікно до body
//   document.body.appendChild(modalImageCard);
// }

// // Отримання всіх елементів зображень слайдера
// const sliderItems = document.querySelectorAll('.slider-item');

// // Перехід до наступного зображення при кліку на поточне зображення
// sliderItems.forEach(item => {
//   item.addEventListener('click', () => {
//     // Вибір наступного елемента
//     const nextItem = item.nextElementSibling || sliderItems[0];

//     // Зміна стилів для показу наступного зображення
//     item.classList.remove('active');
//     nextItem.classList.add('active');
//   });
// });
