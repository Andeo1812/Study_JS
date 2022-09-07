'use strict';


//  Объект может быть создан с помощью фигурных скобок {…} с необязательным списком свойств.
//  Свойство – это пара «ключ: значение», где ключ – это строка (также называемая «именем свойства»),
//  а значение может быть чем угодно.
let user = new Object(); // синтаксис "конструктор объекта"
let user_ = {};  // синтаксис "литерал объекта"

//  При использовании литерального синтаксиса {...} мы сразу можем поместить
//  в объект несколько свойств в виде пар «ключ: значение»:

let user__ = {     // объект
    name: "John",  // под ключом "name" хранится значение "John"
    age: 30        // под ключом "age" хранится значение 30
};

//  Получаем свойства объекта:
alert(user__.name); // John
alert(user__.age); // 30

//  Можно добавить любое поле
user__.isAdmin = true;

//  Для удаления свойства мы можем использовать оператор delete:
delete user__.age;

//  Имя свойства может состоять из нескольких слов, но тогда оно должно быть заключено в кавычки:
let person = {
    name: "John",
    age: 30,
    "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
};

//  Вычисляемые свойства
let fruit = prompt("your fruit buy?", "apple");
let bag = {
    [fruit]: 5, // имя свойства будет взято из переменной fruit
};
alert(bag.apple); // 5, если fruit="apple"

let fruit_ = 'apple';
let bag_ = {
    [fruit_ + 'Computers']: 5  //  bag_.appleComputers = 5
};

//  Существует специальный оператор "in" для проверки существования свойства в объекте.
let profile = {name: "John", age: 30};

alert("age" in profile); // true, user.age существует
alert("blabla" in profile); // false, user.blabla не существует

//  Для перебора всех свойств объекта используется цикл for..in.
//  Этот цикл отличается от изученного ранее цикла for(;;).
let __user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in __user) {
    // ключи
    alert(key);  // name, age, isAdmin
    // значения ключей
    alert(__user[key]); // John, 30, true
}

//  Свойства упорядочены особым образом: свойства с целочисленными ключами сортируются
//  по возрастанию, остальные располагаются в порядке создания.
let codes = {
    "49": "Германия",
    "41": "Швейцария",
    "44": "Великобритания",
    // ..,
    "1": "США"
};

for (let code in codes) {
    alert(code); // 1, 41, 44, 49
}

let codes_ = {
    "+49": "Германия",
    "+41": "Швейцария",
    "+44": "Великобритания",
    // ..,
    "+1": "США"
};

for (let code in codes_) {
    alert(+code); // 49, 41, 44, 1
}

//  Переменная, присвоенная объекту, хранит не сам объект,
//  а его «адрес в памяти» – другими словами, «ссылку» на него.

let userTest = {
    name: "John"
};
let admin = userTest; // копируется ссылка
admin.name = 'Pete'; // изменено по ссылке из переменной "admin"
alert(userTest.name); // 'Pete', изменения видны по ссылке из переменной "user"

//  Два объекта равны только в том случае, если это один и тот же объект.
//  Например, здесь a и b ссылаются на один и тот же объект, поэтому они равны:
let a = {};
let b = a; // копирование по ссылке

alert(a == b); // true, обе переменные ссылаются на один и тот же объект
alert(a === b); // true

//  И здесь два независимых объекта не равны, даже если они выглядят одинаково (оба пусты):
let a__ = {};
let b__ = {}; // два независимых объекта

alert(a__ == b__); // false

//  Клонирование и объединение, Object.assign
let person__ = {
    name: "John",
    age: 30
};

let clone = {}; // новый пустой объект

//  Давайте скопируем все свойства user в него
for (let key in person__) {
    clone[key] = person__[key];
}

//  Теперь clone это полностью независимый объект с тем же содержимым
clone.name = "Pete"; // изменим в нём данные

alert(person__.name); // все ещё John в первоначальном объекте

let permissions1 = {canView: true};
let permissions2 = {canEdit: true};

// Копируем все свойства из permissions1 и permissions2 в user
Object.assign(person__, permissions1, permissions2);

//  Теперь person__ = { name: "John", age: 30, canView: true, canEdit: true }
//  Если скопированное имя свойства уже существует, оно будет перезаписано.
//  Также идет глубокое копирование когда поля тоже сложные
//  Важным побочным эффектом хранения объектов в качестве ссылок является то,
//  что объект, объявленный как const, может быть изменён.
const test = {
    name: "John"
};

test.name = "Pete"; // (*)

alert(test.name); // Pete

//  Глобальная переменная test ссылается на объект {name: "John"}
person__ = null
//  Если перезаписать значение user, то ссылка потеряется

//  Основной алгоритм сборки мусора называется «алгоритм пометок» (от англ. «mark-and-sweep»).
// Согласно этому алгоритму, сборщик мусора регулярно выполняет следующие шаги:
// Сборщик мусора «помечает» (запоминает) все корневые объекты.
// Затем он идёт по ним и «помечает» все ссылки из них.
// Затем он идёт по отмеченным объектам и отмечает их ссылки. Все посещённые объекты запоминаются,
// чтобы в будущем не посещать один и тот же объект дважды.
// …И так далее, пока не будут посещены все достижимые (из корней) ссылки.
// Все непомеченные объекты удаляются.
// Например, пусть наша структура объектов выглядит так:

//  Это концепция того, как работает сборка мусора. Движки JavaScript применяют множество оптимизаций, чтобы она работала быстрее и не задерживала выполнение кода.
//
// Вот некоторые из оптимизаций:
//
// Сборка по поколениям (Generational collection) – объекты делятся на два набора:
// «новые» и «старые». В типичном коде многие объекты имеют короткую жизнь: они появляются,
// выполняют свою работу и быстро умирают, так что имеет смысл отслеживать новые объекты и,
// если это так, быстро очищать от них память. Те, которые выживают достаточно долго,
// становятся «старыми» и проверяются реже.
// Инкрементальная сборка (Incremental collection) – если объектов много, и мы
// пытаемся обойти и пометить весь набор объектов сразу, это может занять некоторое
// время и привести к видимым задержкам в выполнения скрипта. Так что движок делит всё
// множество объектов на части, и далее очищает их одну за другой. Получается несколько
// небольших сборок мусора вместо одной всеобщей. Это требует дополнительного учёта для
// отслеживания изменений между частями, но зато получается много крошечных задержек вместо одной большой.
// Сборка в свободное время (Idle-time collection) – чтобы уменьшить возможное влияние
// на производительность, сборщик мусора старается работать только во время простоя процессора.
// Существуют и другие способы оптимизации и разновидности алгоритмов сборки мусора.