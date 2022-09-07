//  Для работы кода в современном режиме
'use strict';


//  В JavaScript есть четыре логических оператора: || (ИЛИ), && (И) и ! (НЕ), ?? (Оператор нулевого слияния).
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
    alert( 'office closed.' ); // это выходной
}


// Если первый операнд истинный,
// И возвращает второй:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// Если первый операнд ложный,
// И возвращает его. Второй операнд игнорируется
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0


//  В частности, двойное НЕ !! используют для преобразования значений к логическому типу:
alert( !true ); // false
alert( !0 ); // true

alert( !!"non-empty string" ); // true
alert( !!null ); // false


//  Оператор нулевого слияния (??)
//  Так как он обрабатывает null и undefined одинаковым образом, то для этой статьи мы введём специальный термин.
//  Для краткости будем говорить, что значение «определено», если оно не равняется ни null, ни undefined.
//  Результат выражения a ?? b будет следующим:
//  если a определено, то a,
//  если a не определено, то b.
//  Иначе говоря, оператор ?? возвращает первый аргумент, если он не null/undefined, иначе второй.

//  Оператор нулевого слияния не является чем-то принципиально новым. Это всего лишь удобный синтаксис, как из двух значений получить одно, которое «определено».
//  Вот как можно переписать выражение result = a ?? b, используя уже знакомые нам операторы:
//  let result = (a !== null && a !== undefined) ? a : b;

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

//  Показывает первое истинное значение:
alert(firstName || lastName || nickName || "Anonim"); // Суперкодер
//  Показывает первое значение, которое определено:
alert(firstName ?? lastName ?? nickName ?? "Anonim"); // Суперкодер

//  || возвращает первое истинное значение.
//  ?? возвращает первое определённое значение.
let x = 1 && 2 ?? 3; // Синтаксическая ошибка
let y = (1 && 2) ?? 3; // Работает без ошибок