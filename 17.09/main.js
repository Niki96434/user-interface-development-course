// 1
function calculateRectangleArea(width, height) {
  return width * height;
}

const res1 = calculateRectangleArea(2, 2);
console.log(res1);

//2
const average = function (a, b, c) {
  return (a + b + c) / 3;
};

const res2 = average(1, 2, 3);
console.log(res2);

//3
const averageArrow = (a, b, c) => {
  return (a + b + c) / 3;
};

const res3 = averageArrow(1, 2, 3);
console.log(res3);

//4
function greet(name = 'Пользователь') {
  return `Здравствуй, ${name}`;
}

const res4 = greet('Вероника');
console.log(res4);

//5
function sum(...numbers) {
  let sumResult = 0;
  for (let i = 0; i < numbers.length; i++) {
    i += numbers[i];
  }

  return sumResult;
}

const res5 = sum(1, 2, 3, 4, 5, 6);
console.log(res5);
