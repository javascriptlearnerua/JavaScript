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

class Person {
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
