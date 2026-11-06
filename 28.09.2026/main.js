// задание 1 - создание класса

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showInfo() {
    console.log(`Имя: ${this.name}, возраст: ${this.age}`);
  }

  showRole() {
    return 'Пользователь';
  }
}

const user = new User('Nika', 22);
user.showInfo();

const admin = new User('Sasha', 36);
admin.showInfo();

// задание 2 - изменение состояния объекта

class Counter {
  constructor() {
    this.value = 0;
  }

  increment() {
    this.value++;
    console.log(this.value);
  }

  decrement() {
    this.value--;
    console.log(this.value);
  }

  reset() {
    this.value = 0;
    console.log(this.value);
  }
}

const count = new Counter();

count.increment();
count.decrement();
count.reset();

// 3-4. Геттеры/Сеттеры
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  get_info() {
    console.log(`${this.name} - ${this.price} руб`);
  }

  get price() {
    return this._price;
  }

  set price(value) {
    if (value < 0) {
      console.log('Ошибка: цена не может быть отрицательной');
      return;
    }

    this._price = value;
  }

  // 5. Статический метод
  static compare(prod1, prod2) {
    console.log(
      `Более дорогой товар: ${prod1.price > prod2.price ? prod1.name : prod2.name}`
    );
  }
}

const product = new Product('Монитор', 32000);
product.get_info();

const p1 = new Product('Видеокарта', 90000);
const p2 = new Product('Коврик для мыши', 500);
Product.compare(p1, p2);

// 6. Наследование

class Admin extends User {
  deleteUser() {
    return 'Пользователь удален';
  }

  showRole() {
    return 'Администратор';
  }
}

const adm = new Admin('Nikki', 22);
console.log(adm.showRole());
const usr = new User('Sasha', 36);
console.log(usr.showRole());

// 7. Использование instanceof

console.log(adm instanceof Admin); // true
console.log(adm instanceof User); // true
console.log(usr instanceof Admin); // false
console.log(usr instanceof User); // true

console.log(
  'экземпляры класса User это usr и adm, засчет наследования Admin от User. \nusr является экземпляром класса User, поэтому usr instanceof Admin выводит false.'
);

// 8 Итоговое задание

class Button {
  constructor(text) {
    this.text = text;
    this.clickCount = 0;
    this.status = true;
  }

  showInfo() {
    console.log(`Кнопка: ${this.text}`);
    console.log(`Состояние: ${this.status ? 'активна' : 'неактивна'}`);
    console.log(`Количество нажатий: ${this.clickCount}`);
  }

  disable() {
    this.status = false;
  }

  enable() {
    this.status = true;
  }

  click() {
    if (this.status) {
      return this.clickCount++;
    }
    return;
  }
}

const btn = new Button('Закрыть');
btn.click();
btn.click();
btn.disable();
btn.click();
btn.click();
btn.showInfo();
