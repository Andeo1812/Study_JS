'use strict';


//  Опциональная цепочка ?. останавливает вычисление и возвращает undefined,
//  если значение перед ?. равно undefined или null.
//
//  Далее в этой статье, для краткости, мы будем говорить, что что-то «существует»,
//  если оно не является null и не undefined.
//
//  Другими словами, value?.prop:
//
//  1 работает как value.prop, если значение value существует,
//  2 в противном случае (когда value равно undefined/null) он возвращает undefined.
//  Вот безопасный способ получить доступ к user.address.street, используя ?.:
let user = {}; // пользователь без адреса

alert(user?.address?.street); // undefined (без ошибки)


//  Считывание адреса с помощью person?.address работает, даже если объект user не существует:
let person = null;

alert(person?.address); // undefined
alert(person?.address.street); // undefined

//  Нам следует использовать ?. только там, где нормально, что чего-то не существует.
//
//  К примеру, если, в соответствии с логикой нашего кода, объект user
//  должен существовать, но address является необязательным, то нам следует
//  писать user.address?.street, но не user?.address?.street.
//
//  В этом случае, если вдруг user окажется undefined, мы увидим программную
//  ошибку по этому поводу и исправим её. В противном случае, если слишком
//  часто использовать ?., ошибки могут замалчиваться там, где это неуместно, и их будет сложнее отлаживать.

