//  Для работы кода в современном режиме
"use strict"


alert("Hello"); //  Показывает сообщение и ждёт, пока пользователь нажмёт кнопку «ОК».
//  Это небольшое окно с сообщением называется модальным окном.
//  Понятие модальное означает, что пользователь не может взаимодействовать с интерфейсом остальной части страницы,
//  нажимать на другие кнопки и т.д. до тех пор, пока взаимодействует с окном.
//  В данном случае – пока не будет нажата кнопка «OK».

let title = "title"


//  Функция prompt отобразит модальное окно с текстом, полем для ввода текста и кнопками OK/Отмена.
//  Например:
let age = prompt('How old you??', 100);
alert(`You ${age} years old!`); // Тебе 100 лет!


//  Функция confirm отображает модальное окно с текстом вопроса question и двумя кнопками: OK и Отмена.
//  Результат – true, если нажата кнопка OK. В других случаях – false.
//  Например:
let isBoss = confirm("You boss there?");
alert( isBoss ); // true, если нажата OK
