/* • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • JavaScript необходимые основы для начинающих • • • • •
• • • • • • • • • • • • практический курс • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • */
// ================== 0. Настройка окружения ===============
/*
- Установка редактора
- Установка плагина liveServer
- Моя тема Ayu
- Создание проекта
*/

// =================== 1. Подключение ===================
/*
- index.html
- файл main.js
- тег <script src></script>
- Запуск в liveServer
- команда console.log для вывода информации в консоль браузера
- комментарии
*/

/*const arrowSayHi = (userName) => {
  console.log(`Hi ${userName}! How are you?`);
};*/

let userName = "John";
let age = 30;
let isMaried = false;

const person = {
  userName: "John",
  age: 30,
  isMaried: false,
  profession: "Designer",
};

console.log(person);
console.log(person.userName);
console.log(person["age"]); // ниже приведен приме, можно использовать переменную в качестве названия свойства объекта

let propertyName = "profession";
console.log(person[propertyName]);

person.height = 173;
console.log(person);
