/*
// const showMenu = (toggleId, navId) =>{
//     const toggle = document.getElementById(toggleId)
//     nav = document.getElementById(navId)
//     toggle.addEventListener('click', () =>{
//         nav.classList.toggle('show-menu')
//     })
// }

// showMenu('nav-toggle','nav-menu')
*/


//                                              перший блок


// 1. Створити функцію, яка виводить текст з різним розміром шрифту.
// Функція має два аргументи: текстовий рядок і розмір шрифту.
// Використовуйте style-властивість fontSize

{
  function printWithFontSize(text, fontSize) {
    let output = document.getElementById("output");
    let span = document.createElement("span");
    span.style.fontSize = fontSize + "px";
    span.style.color = getRandomColor();
    span.innerText = text;
    output.appendChild(span);
  }
  
  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}


// Використовуючи властивості елемента IMG style.top і style.left,
// зробіть сторінку, на якій невелика картинка кожну секунду виникає в новому
// місці екрану. Використовуйте setInterval.

{
  function moveImage() {
    let image = document.getElementById("movingImage");
    let screenWidth = window.innerWidth;
    let documentHeight = document.body.scrollHeight;
  
    // Генеруємо випадкові координати для нового положення
    let newX = Math.random() * (screenWidth - 100); // Від 0 до ширини екрану мінус ширина картинки
    let newY = Math.random() * (documentHeight - 100); // Від 0 до висоти екрану мінус висота картинки
  
    // Встановлюємо нові координати для переміщення картинки
    image.style.left = newX + "px";
    image.style.top = newY + "px";
  }
  setInterval(moveImage, 1000); // Виклик функції moveImage кожну секунду (1000 мілісекунд)
}


// Знайти на сторінці всі <p> і змінити їх розмір на 15px.
// Використовувати getElementsByTagName, setAttribute

{
  function changeSizeFont() {
    let paragraphs = document.getElementsByTagName('p');
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.fontSize = '15px';
    }
  }
  
  
  let changeSizeButton = document?.getElementById('changeSizeButton');
  // console.log(changeSizeButton)
  changeSizeButton?.addEventListener('click', changeSizeFont);
}


// 4. Текстовий годинник – використовувати функції setInterval або
// setTimeout об'єкта window.

{
  setInterval(showTime, 1000);
  function showTime() {
    // console.log(showTime)
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
  
    if (hour > 12) {
      hour -= 12;
      am_pm = "PM";
    }
    if (hour == 0) {
      hr = 12;
      am_pm = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" + min + ":" + sec + am_pm;
  
    // console.log(currentTime)
    document.getElementById("clock").innerHTML = currentTime;
  }
}


// 5. Створити ефект поступового витирання (аналог фільтра) частини
// документа, використовуючи таймер.

{
  function fadeOutEffect() {
    let fadeTarget = document.getElementById("fadeElement");
    let fadeEffect = setInterval(function() {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 100);
  }
  // Викликати функцію fadeOutEffect через 3 секунди
  setTimeout(fadeOutEffect, 3000);
}



//                                                 другий блок


// 4. Створіть сторінку, на якій в DIV-блок будуть виводиться поточні
// координати курсору мишки і код натиснутоюклавіші на клавіатурі.
{
  // Отримання посилання на DIV-елемент для виводу результатів
  let outputDiv = document.getElementById('output_cordynates');

  // Обробник події руху мишки
  document.addEventListener('mousemove', function(event) {
    let x = event.clientX;
    let y = event.clientY;
    outputDiv.innerText = 'Координати курсору мишки: X: ' + x + ', Y: ' + y;
  });

  // Обробник події натискання клавіші на клавіатурі
  document.addEventListener('keydown', function(event) {
    let keyCode = event.keyCode || event.which;
    outputDiv.innerText += '\nКод натиснутої клавіші: ' + keyCode;
  });
}


// 5.Создать сторінку, розмір тексту на якій можна змінювати за
// допомогою кнопок A + / A-. Вибір користувача запомнінать в cookie і при
// наступному вході на сторінку відразу відображати її запомненним розміром
// шрифту.

// Файли cookie не можна зберігати локально на стороні клієнта за допомогою чистого HTML. 
{
  // Отримання посилань на кнопки та елемент з текстом
  let increaseBtn = document.getElementById('increaseBtn');
  let decreaseBtn = document.getElementById('decreaseBtn');
  let textElement = document.getElementById('page-light-theme-collections');

  // Функція для зміни розміру тексту
  function changeFontSize(size) {
    textElement.style.fontSize = size + 'px';
  }

  // Обробник події натискання кнопки "A+"
  increaseBtn.addEventListener('click', function() {
    let currentSize = parseInt(getCookie('fontSize')) || parseInt(localStorage.getItem('fontSize')) || 16;
    // console.log(document.cookie)
    // console.log(parseInt(getCookie('fontSize')))
    let newSize = currentSize + 2;
    if (newSize <= 60) {
      // console.log(newSize)
      changeFontSize(newSize);
      document.cookie = `fontSize=${newSize}`;
      localStorage.setItem('fontSize', newSize)
      // console.log(document.cookie)
    }
  });

  // Обробник події натискання кнопки "A-"
  decreaseBtn.addEventListener('click', function() {
    let currentSize = parseInt(getCookie('fontSize')) || parseInt(localStorage.getItem('fontSize')) || 16;
    // console.log(document.cookie)
    // console.log(parseInt(getCookie('fontSize')))
    let newSize = currentSize - 2;
    if (newSize >= 10) {
      // console.log(newSize)
      changeFontSize(newSize);
      document.cookie = `fontSize=${newSize}`;
      localStorage.setItem('fontSize', newSize)
      // console.log(document.cookie)
    }
  });

  // Функція для отримання значення cookie за ім'ям
  function getCookie(name) {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) { 
      let cookie = cookies[i].trim();
      if (cookie.indexOf(name + '=') === 0) {
        return cookie.substring((name + '=').length, cookie.length);
      }
    }
    return null;
  }


  // Отримання розміру шрифту з cookie і встановлення його значення
  let savedFontSize = parseInt(getCookie('fontSize')) || parseInt(localStorage.getItem('fontSize')) || 16;
  if (savedFontSize >= 10 && savedFontSize <= 30) {
    changeFontSize(savedFontSize);
  }
}


// 3. У лівому верхньому кутку екрану - список з п'яти кольорів. У правому
// верхньому куті - чорний квадрат. Колір квадрата можна поміняти,
// використовуючи список.

{

  // Отримання посилань на список та елемент квадрата
  let colorSelect = document.getElementById('colorSelect');
  let colorSquare = document.querySelector('.color-square');

  // Обробник події зміни вибору кольору
  colorSelect.addEventListener('change', function() {
    let selectedColor = colorSelect.value;
    colorSquare.style.backgroundColor = selectedColor;
  });
}



// 2. Дана таблиця. Зробіть так, щоб можна було міняти колонки таблиці
// місцями

{
  function swapColumns() {
    let table = document.getElementById('myTable');
    let rows = table.rows;
    let columnIndex1 = Math.floor(Math.random() * rows[0].cells.length);
    let columnIndex2 = Math.floor(Math.random() * rows[0].cells.length);
    // console.log(columnIndex1);
    // console.log(columnIndex2);
    // console.log(rows);
    for (let i = 0; i < rows.length; i++) {
      let cells = rows[i].cells;
  
      let tempContent = cells[columnIndex1].innerHTML;
      let tempColspan = cells[columnIndex1].colSpan;
  
      cells[columnIndex1].innerHTML = cells[columnIndex2].innerHTML;
      cells[columnIndex1].colSpan = cells[columnIndex2].colSpan;
  
      cells[columnIndex2].innerHTML = tempContent;
      cells[columnIndex2].colSpan = tempColspan;
    }
  }
}


//                                                   третій блок


// 5. Звідки ви прийшли. Версія вашого браузера.(виводиться в консоль)

{
  // Отримання вихідної сторінки
  let referrer = document.location.referer;
  // var referrer = document.referrer;

  // Отримання версії браузера
  let browserVersion = navigator.userAgent;

  // Виведення результатів
  console.log('Вихідна сторінка:', referrer);
  console.log('Версія браузера:', browserVersion);
}


// 6. Розробити скрипт, щоб заборонити браузеру виділяти та копіювати
// текст (також реалізовано за допомогою CSS)

{
  function disableSelection(elem) {
    if (typeof elem.onselectstart != "undefined") {
       return false;
    }
    elem.style.cursor = "default";
   }
   disableSelection(document.body);
}


// 9. Реалізувати скрипт для зворотного відліку часу (наприклад: через 1
//   хвилину вікно закриється).

{
    // Get the modal
  var modal = document.getElementById('myModal');
  // Get the main container and the body
  var body = document.getElementsByTagName('page__collections__main_id');
  var container = document.getElementById('page__collections__main_id');

  // Open the modal
  setTimeout(function() {
      modal.className = "Modal is-visuallyHidden";
      setTimeout(function() {
        container.className = "page__collections__main is-blurred";
        modal.className = "Modal";
      }, 100);
      container.parentElement.className = "ModalOpen";
  }, 5000)

  setTimeout(function() {
    modal.className = "Modal is-hidden is-visuallyHidden";
    body.className = "";
    container.className = "page__collections__main";
    container.parentElement.className = "";
  }, 10000)


      // Функція для закриття вікна


  
  function closeWindow() {
    window.close();
  }

  // Встановлюємо зворотний відлік часу
  function startCountdown(minutes) {
    let milliseconds = minutes *  60 * 1000; // Перетворюємо хвилини на мілісекунди

    setTimeout(closeWindow, milliseconds);
  }

  // Запускаємо зворотний відлік часу на 1 хвилину (60 секунд)
  startCountdown(1);

}



