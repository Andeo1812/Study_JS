//  Для работы кода в современном режиме
'use strict';


let value = true;
alert(typeof value); //  boolean

value = String(value); //  теперь value это строка "true"
alert(typeof value); //  string


//   Численное преобразование происходит в математических функциях и выражениях.
//  Например, когда операция деления / применяется не к числу:
alert( "6" / "2" ); //  3, строки преобразуются в числа


//  Мы можем использовать функцию Number(value), чтобы явно преобразовать value к числу:
let str = "123";
alert(typeof str); // string

let num = Number(str); // становится числом 123
alert(typeof num); // number

//  Если строка не может быть явно приведена к числу, то результатом преобразования будет NaN. Например:
let age = Number("string, not number");
alert(age); // NaN, преобразование не удалось


//  Еще примеры:
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("Привет!") ); // true
alert( Boolean("") ); // false
