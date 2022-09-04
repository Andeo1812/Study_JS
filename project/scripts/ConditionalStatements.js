//  Для работы кода в современном режиме
"use strict"


let year = prompt('Year of created ECMAScript-2015?', '');
if (year == 2015) {
    alert( "True!" );
    alert( "it's amazing!" );
}
//  Инструкция if (…) вычисляет выражение в скобках и преобразует результат к логическому типу.
// Число 0, пустая строка "", null, undefined и NaN становятся false.
// Из-за этого их называют «ложными» («falsy») значениями.
// Остальные значения становятся true, поэтому их называют «правдивыми» («truthy»).
// Таким образом, код при таком условии никогда не выполнится:
if (year < 2015) {
    alert( 'too early..' );
} else if (year > 2015) {
    alert( 'too late');
} else {
    alert( 'True!' );
}
let age = 20

let accessAllowed = (age > 18) ? true : false;
