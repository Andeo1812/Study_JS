//  Для работы кода в современном режиме
"use strict"


//  Объявление функции
function showMessage() {
    alert('hello world!');
}


//  С параметрами
function showMessage__(from, text) { // аргументы: from, text
    alert(from + ': ' + text);
}

showMessage__('Anna', 'hello!'); // Anna: hello! (*)
showMessage__('Anna', "How your day?"); // Anna: How your day? (**)


//  Аргументы по умолчанию
//  С параметрами
function showMessageDef(from, text = "No text") { // аргументы: from, text
    alert(from + ': ' + text);
}

showMessageDef('Anna'); // Anna: No text (*)
showMessageDef('Anna'); // Anna: No text (**)

//  Еще пример:
// function showMessage(from, text = anotherFunction()) {
//     // anotherFunction() выполнится только если не передан text
//     // результатом будет значение text
// }


//  Возвращаемое значение
function checkAge(age) {
    if (age > 18) {
        return true;
    }

    return false
}

let age = prompt('How are you old?', 18);

if (checkAge(age)) {
    alert('No Access');
} else {
    alert('Access received');
}


//  Function Expression
let sayHi_ = function() {
    alert( "Hello!" );
};

function sayHi() {   // (1) создаём
    alert( "Hello" );
}

let func = sayHi;    // (2) копируем

func(); //  Hello    // (3) вызываем копию (работает)!
sayHi(); // Hello    //     эта тоже все ещё работает (почему бы и нет)



function confirm(question) {
    return true
}

//  Функции колбэки
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert( "you agree." );
}

function showCancel() {
    alert( "you canceled action." );
}

//  Использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("you agree?", showOk, showCancel);

function askShort(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

askShort(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
);


//  Function Declaration
function sum____(a, b) {
    return a + b;
}

//  Function Expression
let _sum = function(a, b) {
    return a + b;
};


//  Существует ещё один очень простой и лаконичный синтаксис для создания функций,
//  который часто лучше, чем Function Expression.
let sum__ = (a, b) => a + b;
/* Эта стрелочная функция представляет собой более короткую форму:

let sum = function(a, b) {
  return a + b;
};
*/
alert( sum__(1, 2) ); // 3

//  Еще примеры:
let double = n => n * 2;
// примерно тоже что и: let double = function(n) { return n * 2 }
alert( double(3) ); // 6

//  Если аргументов нет, круглые скобки будут пустыми, но они должны присутствовать:
let sayHi__ = () => alert("Hello!");
sayHi__();

//  Многострочное
let _sum_ = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
    let result = a + b;
    return result; // если мы используем фигурные скобки, то нам нужно явно указать "return"
};

alert( _sum_(1, 2) ); // 3
