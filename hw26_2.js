// /* 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби,
//  и следующие функции для работы с этим объектом:

// Функция сложения 2-х объектов-дробей;

// Функция вычитания 2-х объектов-дробей;

// Функция умножения 2-х объектов-дробей;

// Функция деления 2-х объектов-дробей;

// Функция сокращения объекта-дроби. */

let frac1 = {
  num: 3,
  den: 6
};
let frac2 = {
  num: 2,
  den: 4
};

function nok(x, y) {
  return ((x / nod(x, y)) | 0) * y;
}

function nod(x, y) {
  while (y !== 0) y = x % (x = y);
  return x;
}

// function fracRed(numerator, denominator) {
//   if (nod(numerator, denominator) > 1) {
//     numerator = numerator / nod(numerator, denominator);
//     denominator = denominator / nod(numerator, denominator);
//     return numerator;
//   }
// }

/*   Функция сложения 2-х объектов-дробей;  */
let addition = (a, b, c, d) => {
  let numerator, denominator, nodNumber;
  let addition = (a + c) / nok(b, d);
  console.log(addition)

  if (addition % 1 === 0) {
    console.log(`Addition = ${addition}`);
  } else {
          if (addition < 1 && b == d) {
            numerator = a + c;
            denominator = nok(b, d);
            alert(1)
          } else if (addition < 1 && b != d) {
            numerator = a + c;
            denominator = nok(b, d);
            alert(2)
          }

          /*   Сокращение-дробей;  */
          if (nod(numerator, denominator) > 1) {
            nodNumber = nod(numerator, denominator)
            numerator = numerator / nodNumber;
            denominator = denominator / nodNumber;
          }
          /*   Сокращение-дробей;  */
          console.log(`Addition = ${numerator} / ${denominator}`);
  }



};

addition(frac1.num, frac1.den, frac2.num, frac2.den);



// console.log(frac1.den, frac2.den)

/*   Функция сложения 2-х объектов-дробей;  */

let subtraction = () => {};
let multiplication = () => {};
let division = () => {};
let reduction = () => {};