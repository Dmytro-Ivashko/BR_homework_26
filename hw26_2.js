// /* 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби,
//  и следующие функции для работы с этим объектом: 

// Функция сложения 2-х объектов-дробей;

// Функция вычитания 2-х объектов-дробей;

// Функция умножения 2-х объектов-дробей;

// Функция деления 2-х объектов-дробей;

// Функция сокращения объекта-дроби. */

let fractions1 = {
    num: 6,
    den: 7,
}
let fractions2 = {
    num: 8,
    den: 6,
}

function nok(x,y){
    return (x / nod(x,y)|0)*y;
  }
  
function nod(x, y) {
    while (y !== 0) y = x % (x = y);
    return x;
  }

  /*   Функция сложения 2-х объектов-дробей;  */
let addition = (num1, den1, num2, den2) => {
    addition = (num1 + num2) / nok(den1, den2)
    console.log(addition);
};

addition(fractions1.num, fractions1.den, fractions2.num, fractions2.den)


  /*   Функция сложения 2-х объектов-дробей;  */

let subtraction = () => {};
let multiplication  = () => {};
let division  = () => {};
let reduction  = () => {};



console.log(nok(fractions1.den, fractions2.den));
