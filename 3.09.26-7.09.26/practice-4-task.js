/**
 Задание 4. Циклы
1. С помощью for выведите числа от 1 до 10.
2. С помощью while вычислите сумму целых чисел от 1 до 100.
3. С помощью do/while выведите числа от 5 до 1.
4. С помощью for выведите только чётные числа от 2 до 20.
5. С помощью continue пропустите числа, кратные 3, в диапазоне от 1 до 20.
6. С помощью break завершите цикл при первом числе, которое больше 50 и делится на 7.
7. Для строки "JavaScript" с помощью for/of выведите каждый символ на новой строке.
8. Дополнительное: вычислите таблицу умножения для числа n от 1 до 10, где n задаётся переменной.
 **/

function fourthTask() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

  let i = 1;
  let total = 0;
  while (i <= 100) {
    // 1+2+3+4...
    total += i;
    i++;
  }

  console.log(total);

  console.log('Do...while');
  let index = 0;
  do {
    index++;
    console.log(index);
  } while (index < 5 && index >= 1);

  console.log('for');
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }

  console.log('continue');
  for (let i = 0; i <= 20; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
  }

  console.log('break');
  for (let i = 0; i <= 100; i++) {
    if (i > 50 && i % 7 === 0) {
      // 56
      break;
    } else {
      console.log(i);
    }
  }

  const js = 'JavaScript';

  for (let i of js) {
    console.log(i);
  }

  console.log('таблицу умножения для числа n от 1 до 10');

  const table = (n) => {
    for (let i = 1; i <= 10; i++) {
      console.log(`${n} * ${i} = ${n * i}`);
    }
  };

  table(2);
}

export default fourthTask;
