// Задание 2. Строки и преобразования
'use strict';
import 'dotenv/config';
/** Создайте строку:
const d = "   My name is   ";
1. Удалите пробелы в начале и конце строки.
2. Сформируйте строку «My name is ФИО», подставив собственные фамилию, имя и отчество через шаблонный литерал.
3. Определите длину полученной строки.
4. Выведите фразу в две строки: «My name is» и ФИО.
5. Разбейте строку на слова и выведите слова через символ табуляции.
6. Повторите итоговую фразу 3 раза, каждую с новой строки.
7. Получите строку в верхнем регистре.
8. Извлеките слово NAME из строки в верхнем регистре.
9. Проверьте наличие подстрок "name", "JavaScript" и первой буквы своей фамилии.
10. Замените первое вхождение "name" на "****".
11. Определите позицию символа "y" в строке. **/

export default function secondTask() {
  let d = '   My name is   ';
  console.log(d);

  d = d.trim();
  console.log(d);

  const initials = process.env.INITIALS;
  console.log(initials);

  const greeting = `${d} ${initials}`;
  console.log(greeting.length);
  console.log(`${d}\n${initials}`);

  const words = greeting.split(' ');
  let firstWord = words[0];
  words.forEach((word, index) => {
    if (index === 0) {
      return;
    }
    firstWord += `\t${words[index]}`;
  });

  for (let i = 0; i < 3; i++) {
    console.log(firstWord);
  }

  let greetingToUpperCase = '';

  greeting.split('').forEach((letter) => {
    greetingToUpperCase += letter.toUpperCase();
  });
  console.log(greetingToUpperCase);

  const res = greeting[greeting.indexOf('NAME')];
  console.log(res);

  const task_9_1 = greeting.includes('name');
  const task_9_2 = greeting.includes('Javascript');
  const task_9_3 = greeting.startsWith('P');
  console.log(task_9_1, task_9_2, task_9_3);

  const replaceWord = greeting.replace('name', '****');
  console.log(replaceWord);

  console.log(greeting.indexOf('y'));
}
