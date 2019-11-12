// /* 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби,
//  и следующие функции для работы с этим объектом: 

// Функция сложения 2-х объектов-дробей;

// Функция вычитания 2-х объектов-дробей;

// Функция умножения 2-х объектов-дробей;

// Функция деления 2-х объектов-дробей;

// Функция сокращения объекта-дроби. */

let frac1 = {
    num: 4,
    den: 15,
}
let frac2 = {
    num: 2,
    den: 15,
}

function nok(x,y){
    return (x / nod(x,y)|0)*y;
  }
  
function nod(x, y) {
    while (y !== 0) y = x % (x = y);
    return x;
  }

//   console.log(nod(6, 240));
  /*   Функция сложения 2-х объектов-дробей;  */
let addition = (num1, den1, num2, den2) => {

let nokNumber = nok(den1, den2)
let addition = (num1 + num2) / nokNumber;

    if ((addition < 1) && (frac1.den == frac2.den)){
      console.log(`Addition = ${num1 + num2} / ${nokNumber}`);
    } else if ((addition < 1) && (frac1.den != frac2.den)) {
      let nodNumber = nod((num1 + num2), nokNumber);
      console.log(`Addition = ${(num1 + num2)/nodNumber} / ${nokNumber/nodNumber}`)
    } else {
        addition = (num1 + num2) / nokNumber;

    }
  
};

addition(frac1.num, frac1.den, frac2.num, frac2.den)
// console.log(frac1.den, frac2.den)

  /*   Функция сложения 2-х объектов-дробей;  */

let subtraction = () => {};
let multiplication  = () => {};
let division  = () => {};
let reduction  = () => {};



