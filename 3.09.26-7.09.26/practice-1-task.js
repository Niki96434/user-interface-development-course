// Задание 1. Типы данных и арифметические операции
'use strict';
/** 
1.Создайте переменные a = 10 и b = 30. Используйте let там, где значение далее будет изменяться.
2. Измените значение a на 8.
3. Вычислите c = a ** b.
4. Выведите значения a, b и c, а также результат typeof для каждого значения.
5. Преобразуйте a в строку и отдельно обратно в число. Выведите значение и тип на каждом шаге.
6. Уменьшите b на 6.8.
7. Найдите абсолютное значение b.
8. Найдите целую часть результата деления b на a.
9. Найдите остаток от деления b на a и округлите его до целого.
10. Определите максимальное и минимальное значения среди a, b и c.
11. Продемонстрируйте проблему точности: вычислите 0.1 + 0.2 и сравните результат с 0.3 через ===.
12. Создайте значение BigInt 9007199254740993n и прибавьте к нему 10n. Объясните, почему нельзя прибавить обычное число 10 без преобразования.
**/
export default function firstTask() {
  try {
    let a = 10;
    const b = 30;
    a = 8;
    const c = a ** b;
    console.log(a, typeof a, b, typeof b, c, typeof c);

    const toStr = a.toString();
    console.log(toStr, typeof toStr);

    const toNum = Number(toStr);
    console.log(toNum, typeof toNum);

    const deduction = b - 6.8;

    const absValue = Math.abs(deduction);

    const integerPart = Math.trunc(b / a);
    const remainderDiv = Math.round(b % a);

    const maxValue = Math.max(a, b, c);
    const minValue = Math.min(a, b, c);
    console.log(integerPart, remainderDiv, maxValue, minValue);

    const sum = 0.1 + 0.2;
    console.log(`sum:${sum}`);
    const problemAccuracy = 0.3 === sum;
    console.log(`Проблема точности(sum !== 0.3): ${problemAccuracy}`); // из-за того что вычисления с плавающей запятой в двоичном представлении не со всеми могут быть точными(ограничения в 64 бита)
    const intValue = 9007199254740993n;
    console.log(intValue);
    const bigIntSum1 = intValue + 10n;
    console.log(bigIntSum1);
    // const bigIntSum2 = intValue + 10; // смешивание разных типов - BigInt и number, ошибка
    // console.log(bigIntSum2);
    const bigIntSum3 = intValue + BigInt(10);
    console.log(bigIntSum3);
  } catch (err) {
    console.log(err);
  }
}
