//  Для работы кода в современном режиме
"use strict"


//  Больше/меньше: a > b, a < b.
//  Больше/меньше или равно: a >= b, a <= b.
//  Равно: a == b. Обратите внимание, для сравнения используется двойной знак равенства ==.
//  Один знак равенства a = b означал бы присваивание.
//  Не равно. В математике обозначается символом ≠, но в JavaScript записывается как a != b.
alert( 2 > 1 );  // true (верно)
alert( 2 == 1 ); // false (неверно)
alert( 2 != 1 ); // true (верно)

//  Особый случай
let a = 0;
alert(Boolean(a)); // false

let b = "0";
alert(Boolean(b)); // true

alert(a == b); // true!


//   Строгое сравнение
alert( 0 == false ); // true
alert( '' == false ); // true
//  Это происходит из-за того, что операнды разных типов преобразуются оператором == к числу.
//  В итоге, и пустая строка, и false становятся нулём.
//  Оператор строгого равенства === проверяет равенство без приведения типов.
alert( 0 === false ); // false, так как сравниваются разные типы


//  Поведение null и undefined при сравнении с другими значениями — особое:
//  При строгом равенстве ===
//  Эти значения различны, так как различны их типы.
alert( null === undefined ); // false
// При нестрогом равенстве ==
// Эти значения равны друг другу и не равны никаким другим значениям. Это специальное правило языка.
alert( null == undefined ); // true

//  При использовании математических операторов и других операторов сравнения < > <= >=
//  Значения null/undefined преобразуются к числам: null становится 0, а undefined – NaN.


alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
//  Причина в том, что нестрогое равенство и сравнения > < >= <= работают по-разному.
//  Сравнения преобразуют null в число, рассматривая его как 0.
//  Поэтому выражение (3) null >= 0 истинно, а null > 0 ложно.
//  С другой стороны, для нестрогого равенства == значений undefined и null действует особое правило:
//  эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому.
//  Поэтому (2) null == 0 ложно.


alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
//  Сравнения (1) и (2) возвращают false, потому что undefined преобразуется в NaN,
//  а NaN – это специальное числовое значение, которое возвращает false при любых сравнениях.
//  Нестрогое равенство (3) возвращает false, потому что undefined равно только null, undefined и ничему больше.


//  Еще примеры
//  5 > 4 → true
//  "ананас" > "яблоко" → false
//  "2" > "12" → true
//  undefined == null → true
//  undefined === null → false
//  null == "\n0\n" → false
//  null === +"\n0\n" → false
//  1 Очевидно, true.
//  2 Используется посимвольное сравнение, поэтому false. "а" меньше, чем "я".
//  3 Снова посимвольное сравнение. Первый символ первой строки "2" больше, чем первый символ второй "1".
//  4 Специальный случай. Значения null и undefined равны только друг другу при нестрогом сравнении.
//  5 Строгое сравнение разных типов, поэтому false.
//  6 Аналогично (4), null равен только undefined.
//  7 Строгое сравнение разных типов.