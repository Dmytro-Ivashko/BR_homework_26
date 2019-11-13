// /* 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби,
//  и следующие функции для работы с этим объектом:

// Функция сложения 2-х объектов-дробей;

// Функция вычитания 2-х объектов-дробей;

// Функция умножения 2-х объектов-дробей;

// Функция деления 2-х объектов-дробей;

// Функция сокращения объекта-дроби. */

let frac1 = {
  num: 57,
  den: 30
};
let frac2 = {
  num: 3,
  den: 32
};

function nok(x, y) {
  return ((x / nod(x, y)) | 0) * y;
}

function nod(x, y) {
  while (y !== 0) y = x % (x = y);
  return x;
}

function fracRed() {
  if (nod(numerator, denominator) > 1) {
    nodNumber = nod(numerator, denominator)
    numerator = numerator / nodNumber;
    denominator = denominator / nodNumber;
  }
}

/*   Функция сложения 2-х объектов-дробей;  */
let addition = (a, b, c, d) => {
  let numerator, denominator, nodNumber;
  let addition = (a / b) + (c / d);
  console.log(addition);

  if (addition % 1 === 0) {
    console.log(`${frac1.num} / ${frac1.den} + ${frac2.num} / ${frac2.den} = ${addition}`);
  } else if (addition < 1) {
      numerator = a + c;
      denominator = nok(b, d);
    /*   Сокращение-дробей;  */
    if (nod(numerator, denominator) > 1) {
      nodNumber = nod(numerator, denominator)
      numerator = numerator / nodNumber;
      denominator = denominator / nodNumber;
    }
    /*   Сокращение-дробей;  */
    console.log(`${frac1.num} / ${frac1.den} + ${frac2.num} / ${frac2.den} = ${numerator} / ${denominator}`);
  } else {
    addition = Math.floor(addition)
    numerator = (a + c) - nok(b, d);
    denominator = nok(b, d);
    /*   Сокращение-дробей;  */
    if (nod(numerator, denominator) > 1) {
      nodNumber = nod(numerator, denominator)
      numerator = numerator / nodNumber;
      denominator = denominator / nodNumber;
    }
    /*   Сокращение-дробей;  */
    console.log(`${frac1.num} / ${frac1.den} + ${frac2.num} / ${frac2.den} = ${addition} and ${numerator} / ${denominator}`);
  }
};

// let subtraction = (a, b, c, d) => {
//   let numerator, denominator, nodNumber;
//   let subtraction = (a / b) - (b / d);
//   console.log(subtraction);
//   if (subtraction % 1 === 0) {
//     console.log(subtraction);
//   } else if (subtraction < 1) {

//   } else {

//   }

// };


addition(frac1.num, frac1.den, frac2.num, frac2.den);
// subtraction(frac1.num, frac1.den, frac2.num, frac2.den);
// console.log(nok(31,42));

// console.log(frac1.den, frac2.den)

/*   Функция сложения 2-х объектов-дробей;  */


let multiplication = () => {};
let division = () => {};
let reduction = () => {};