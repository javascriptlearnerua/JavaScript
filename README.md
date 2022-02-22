# JavaScript

JavaScript course
YouTube Channel: https://cutt.ly/jPUegSB

# 1. Типы данных в JavaScript:

    -Числа number;
    -Строки string;
    -Булевый тип данных boolean;
    -null - когда переменная не содержит ничего;
    -undefined - когда переменная/функция неопределена, ничего не вернула;
    -Объекты object;
    -Массивы arrays;
    -BigInt;
    -Symbol.

# 2. Операторы сравнения:

    >,<, >=, <=;
    == - нестрогое сравнение ('5' == 5) // true, при нестрогом сравнении происходит приведение типов и как результат true в данном случае;
    === строгое сравнение ('5' === 5) // false, т.к. при строгом сравнение приведения типов не происходит и как результат false в данном случае;
    != нестрогое неравенство;
    !== строгое неравенство.

# 3. Логические операторы:

    && - логическое И;
    || - логическое ИЛИ;
    !true - логическое НЕ.

# 4. Тернарный оператор:

    Сокращение конструкции if else.
    Формула построения: (условие)?(выполняется, если условие true):(выполняется, если условие false)
    console.log(10 <= 12 ? "taki da" : "NOPE");

# 5. Конкатенация строк и шаблонные строки:

    Контатенация - это объединение строк.
    let userName = "John";
    console.log('Hi ' + userName + '! How are you?'); // пример конкатенации, не всегда удобен
    // ниже приведен пример шаблонной строки, вместо кавычек используется скобка на букве "Ё"
    console.log(`Hi ${userName}! How are you?`); // шаблонная строка

# 6. Функции:

    Принцип DRY - don't repeat yourself

    function sayHi(){
        console.log('Hello world!');
    }

    // function declaration этот подоход создания функции примечателент тем, что есть возможность вызывать функцию раньше чем она объявлена в коде.

    sayHi(); // всё сработает корректно

    function sayHi(){
        console.log('Hello world!');
    }

    // function expression

    const sayHi = function () {
        console.log('Hello world!');
    }

6.1 Параметры и аргументы для функции:

    Когда мы описываем ф-цию - это параметры (username).
    Когда вызывваем ф-цию - передаем ей аргументы ('Illia').

    function sayHi(username){
        console.log(`Hi ${userName}! How are you?`)
    }

    sayHi('Illia');

6.2 return

    Return - это ф-ция возврата.

    function summ(a, b){
        return a+b;
        // всё, что написано после return в ф-ции - игнорируется
    }

    let res = summ(10,5); // res присвоится результат ф-ции summ - 15

6.3 Функция как аргумент:

    function summ(a, b){
        return a+b;
    }

    console.log(summ(10, 5));

    function doSomething(func) {
        let x = 10;
        let y = 5;

        let result = func(x, y);
        console.log(result);
    }

    doSomething(summ);

6.4 Самовызывающаяся функция IIFE:

    Для того, чтобы функция вызвала сама себя, необходимо взять её в круглые скобки и рядом еще раз написать круглые скобки как при вызове обычной ф-ции

    (function (){
        console.log('Hello world!');
    })();

    (function (a,b){
        console.log(a+b);
    })(10, 5);

6.5 Стрелочные функции:

    function sayHi(username){
        console.log(`Hi ${userName}! How are you?`)
    }

    const arrowSayHi = (userName) => {
        console.log(`Hi ${userName}! How are you?`)
    }

    const arrowSayHi = (userName) => console.log(`Hi ${userName}! How are you?`); // если операция одна в ф-ции, то можно убрать фигурные скобки

    arrowSayHi('Gus');

# 7. Массивы:

    const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];

    console.log(autoBrands[0]); // Audi
    console.log(autoBrands[2]); // Mazda
    console.log(autobrands.length); // 4 - длина массива

7.1 Методы массивов:

    arr.push(items) - добавить элемент в конец массива
    arr.pop() - удалить элемент из конца массива
    arr.shift() - удалить элемент из начала массива
    arr.unshift() - добавить элемент в начало массива
    arr.splice(startIndex, deleteCount) - удаление определенного кол-ва с определенного места

    const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];

    Сравнение массивов происходит по ссылкам, а не по элементам массива, например:
    let arr2 = autoBrands;
    console.log(arr2 == autoBrands); // true
    console.log(arr2 === autoBrands); // true

    let arr3 = ['Audi', 'BMW', 'Mazda', 'Toyota'];
    console.log(arr3 == autoBrands); // false
    console.log(arr3 === autoBrands); // false


    autoBrands.push('Nissan');
    console.log(autoBrands);

    autoBrands.splice(2, 1)
    console.log(autoBrands);

# 8. Циклы:

    8.1 Цикл for:

    for(let i = 0; i < 10; i++) {
        console.log(i);
    }

    const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];

    // перебор элементов массива
    for (let i = 0; i < autoBrands.length; i++){
        console.log(autoBrands[i]);
    }

    8.2 Цикл for (of):

    for (let item of autoBrands){
        console.log(item);
    }

    8.3 Цикл forEach():

    const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];

    autoBrands.forEach(function(item, index){
        console.log(`${item} = > ${index}`);
    })

    // передача ф-ции в цикл foreach
    autoBrands.forEach(printBrand);

    function printBrand(brand, index) {
        console.log(`${brand} = > ${index}`);
    }

    // работа цикла с помощью стрелочной ф-ции
    autoBrands.forEach((brand, i) => console.log(`${brand} => ${i}`));

# 9 Объекты:

    // объекты как и массивы ссылается на ссылку

    let userName = 'John';
    let age = 30;
    let isMaried = false;

    const person = {
        userName: 'John',
        age: 30,
        isMaried: false,
        profession: 'Designer'
    }

    console.log(person);
    console.log(person.userName);
    console.log(person['age']); // ниже приведен приме, можно использовать переменную в качестве названия свойства объекта

    let propertyName = 'profession';
    console.log(person[propertyName]);

    // создание нового свойства для объекта
    person.height = 173;

    // удаление свойства

    delete person.age;
    console.log(person);

    9.1 Методы в объектах:

    const person = {
        userName: 'John',
        age: 30,
        isMaried: false,
        sayHi: function() {
            console.log('hello');
        }
    };

    person.sayHi();

    person.doSomething = function() {
        console.log('Do it');
    };

    person.doSomething();

# 10. Ключевое слово this:

    const person = {
        userName: 'John',
        age: 30,
        isMaried: false,
        sayHi: function (name) {
            console.log(this);
            console.log(`Hello, ${name}! My name is ${this.userName}.`);
        }
    };

    person.sayHi('Illia');

# 11. Обход объектов циклом for in:

    // for of не может обходить неитерируемые объекты и возвращает ключи.

    const person = {
        userName: 'John',
        age: 30,
        isMaried: false,
        sayHi: function (name) {
            console.log(`Hello, ${name}! My name is ${this.userName}.`);
        }
    };

    for (let key in person) {
        console.log(key);
        console.log(key, ':', person[key]);
    }

# 12. Классы. Конструкторы объектов:

    Класс это как чертеж для всех будущих объектов, котрорые будут создаваться на его основе

    class Person {
        constructor(userName, age, isMaried) {
            this.userName = userName;
            this.age = age;
            this.isMaried = isMaried;
        }

        sayHi(name) {
            console.log(`Hello, ${name}! My name is ${this.userName}`);
        }
    }

    const person1 = new Person("Mark", 30, false); // будет создан новый объект на основе класса Person
    const person2 = new Person("Павел", 27, true);

    console.log(person1);
    console.log(person2);
    person1.sayHi("Yurii");
    person2.sayHi("Yurii");

# 13. Выбор DOM элементов:

    Выбор первого элемента по селектору (выбирается один элемент, который находится в коде раньше остальных)

    document.querySelector('selector');

    Добавление элементу нового класса:
    document.querySelector('selector').classList.add('red');

    Выбор коллекции элементов:
    document.querySelectorAll('h2');

    Для выполнения действий с коллекцией элементов, необходимо ее обходить в цикле:

    for (let item of document.querySelectorAll('h2')) {
        item.classList.add('red');
    }

    Также есть следующие методы:

    document.getElementsByClassName(); // выбор коллекции элементов по CSS классу
    document.getElementsByTagName(); // выбор коллекции элементов по тегу
    document.getElementById(); // выбор одного элемента по ID

# 14. Работа с CSS классами:

    element.classList.add()
    .add() - добавляет класс
    .remove() - удаляет класс
    .toggle() - переключает класс (если был выключен - включит и наоборот)
    .сontains() - возвращает true или false

# 15. Работа с атрибутами:

    getAttribute(attrName) - возвращает значение указанного атрибута
    setAttribute(name, value) - лобавляет указанный атрибут и его значение к элементу
    hasAttribute(attrName) - возвращает true при наличии у жлемента указанного атрибута
    removeAttribute(attrName) - удаляет указанный атрибут

    toggleAttribute(name, force) - добавляет новый атрибут при отсутствии или удаляет существующий атрибут
    hasAttributes() - возвращает true, если у элемента имеются какие-либо атрибуты
    getAttributesNames() - возвращает названия атрибутов элемента

    Пример:

    const img = document.querySelector('#logo');
    const srcValue = img.getAttribute('src); // выводит путь картинки

    img.setAttribute('src', './img.logo.png');
    imt.setAttribute('width', '200');
    Некоторые атрибуты можно менять и напрямую:
    img.src = './img/js.png';

# 16. Работа с прослушкой событий

    Любое действие на веб странице можно прослушать, клик, скролл, тап и тд

    const button = document.querySelector('#button');

    Этот способ прослушки может применяться еще раз, для обработки других действий, то есть можно создать такую же прослушку и в ней изменить действие. То есть в следующем коде будет выведено Click1, Click2

    button.addEventListener('click', function(){
        console.log('Click1');
        button.remove();// удалит кнопку
    })

     button.addEventListener('click', function(){
        console.log('Click2');
        button.remove();// удалит кнопку
    })

    Этот способ будет выполнять только последнюю запись. То есть выведется только Click2

    button.onclick = function () {
        console.log('Click1');
        button.remove();
    }

    button.onclick = function () {
        console.log('Click2');
        button.remove();
    }
