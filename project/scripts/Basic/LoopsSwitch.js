//  Для работы кода в современном режиме
'use strict';


let condition = false
while (condition) {
    //  код
    //  также называемый "телом цикла"
}


do {
    //  тело цикла
} while (condition);


for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
    alert(i);
}


//  Директива break в строке (*) полностью прекращает выполнение цикла и
//  передаёт управление на строку за его телом, то есть на alert.
let sum = 0;

while (true) {

    let value = +prompt("input number", '');

    if (!value) break; // (*)

    sum += value;

}
alert('Sum: ' + sum);


//  Директива continue – «облегчённая версия» break. При её выполнении цикл не
//  прерывается, а переходит к следующей итерации (если условие все ещё равно true).
for (let i = 0; i < 10; i++) {

    // если true, пропустить оставшуюся часть тела цикла
    if (i % 2 == 0) continue;

    alert(i); // 1, затем 3, 5, 7, 9
}


//  Для выхода со вложенных циклов, switch и прочее
outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        let input = prompt(`coordinate values (${i},${j})`, '');

        // если пустая строка или Отмена, то выйти из обоих циклов
        if (!input) break outer; // (*)

        // сделать что-нибудь со значениями...
    }
}

alert('Done!');


//  Switch
let a = 2 + 2;

switch (a) {
    case 3:
        alert( 'few' );
        break;
    case 4:
        alert( 'all right!' );
        break;
    case 5:
        alert( 'too many' );
        break;
    default:
        alert( "No such data" );
}

//  Группировка
let b = 3;

switch (b) {
    case 4:
        alert('Правильно!');
        break;

    case 3: // (*) группируем оба case
    case 5:
        alert('Неправильно!');
        alert("Может вам посетить урок математики?");
        break;

    default:
        alert('Результат выглядит странновато. Честно.');
}
