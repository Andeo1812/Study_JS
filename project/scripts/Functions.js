//  Для работы кода в современном режиме
"use strict"


//  Объявление функции
function showMessage() {
    alert('hello world!');
}


//  С параметрами
function showMessage(from, text) { // аргументы: from, text
    alert(from + ': ' + text);
}

showMessage('Anna', 'hello!'); // Anna: hello! (*)
showMessage('Anna', "How your day?"); // Anna: How your day? (**)


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
