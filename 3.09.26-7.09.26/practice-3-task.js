/**
 Задание 3. Условные операторы
1. Создайте переменную score со значением от 0 до 100.
2. С помощью if / else if / else определите оценку: 85–100 – «отлично», 70–84 – «хорошо», 60–69 – «удовлетворительно», 0–59 – «неудовлетворительно».
3. Добавьте проверку корректности диапазона. Значение меньше 0 или больше 100 должно приводить к сообщению «Некорректное значение».
4. Создайте переменную role со значением "admin", "teacher", "student" или иным значением. Через switch выведите уровень доступа: admin – «полный доступ», teacher – «редактирование учебных материалов», student – «просмотр и выполнение заданий», default – «доступ не определён».
5. Продемонстрируйте разницу между == и === на примерах 0 и false, "5" и 5.
 **/

function thirdTask() {
  const score = 55;

  if (score >= 85 && score <= 100) {
    return console.log('отлично');
  } else if (score >= 70 && score < 84) {
    return console.log('хорошо');
  } else if (score <= 69 && score >= 60) {
    console.log('«удовлетворительно»');
  } else if (score <= 59 && score >= 0) {
    console.log('«неудовлетворительно»');
  } else {
    console.log('Некорректное значение');
  }

  const role = 'admin';
  switch (role) {
    case 'admin':
      console.log('полный доступ');
      break;
    case 'teacher':
      console.log('редактирование учебных материалов');
      break;
    case 'student':
      console.log('просмотр и выполнение заданий');
      break;
    default:
      console.log('доступ не определён');
  }

  console.log(0 == false); // true
  console.log(0 === false); // false

  console.log(5 == '5'); // true
  console.log(5 === '5'); // false
}

export default thirdTask;
