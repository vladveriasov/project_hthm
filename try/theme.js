//console.log(document.querySelector('.page'));
//console.log(document.querySelector('.theme-button'));


//document.querySelector('.page').classList.remove('light-theme');
//document.querySelector('.page').classList.add('dark-theme');
//page.classList.remove('light-theme');
//page.classList.add('dark-theme');
//page.classList.remove('light-theme');
//page.classList.add('dark-theme');

let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function() {
    
    page.classList.toggle('light-theme');
    page.classList.toggle('dark-theme');
};

let message= document.querySelector('.subscription-message');
message.textContent ='Обещаем присылать вам новости не чаще одного раза в день, причём только самые интересные и важные.';

let form = document.querySelector('.subscription');
let email = document.querySelector('.subscription-email');
form.onsubmit = function(evt) {
  // Инструкция ниже отменяет отправку данных
  evt.preventDefault();
  message.textContent ='Адрес ' + email.value + ' добавлен в список получателей рассылки.';
};
let hrt = dockument.querySelector(".haert");
let faheart = document.querySelector('.fa-heart');
let likenum = document.querySelector('.likes-number');

hrt.onclick = function() {
  if (faheart.classList.contains(added)) {
     likenum.textContent += 1;
    }
  else if (faheart.classList.contains(dnadded)) {
    likenum.textContent -= 1;
  }
                
  faheart.classList.toggle('dntadded');
  faheart.classList.toggle('added');
}
let commentfield = document.querySelector('.comment-field')
let commentlist = document.querySelector('.comment-list')
let commentForm = document.querySelector('.comment-form');


commentForm.onsubmit = function (evt) {
  evt.preventDefault();
  let newcomment = document.createElement('li')
  newcomment.textContent =commentfield.value;
  commentfield.value ='' ;
  commentlist.append(newcomment);
};