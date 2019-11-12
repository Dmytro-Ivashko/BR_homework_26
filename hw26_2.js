// /* 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби,
//  и следующие функции для работы с этим объектом: 

// Функция сложения 2-х объектов-дробей;

// Функция вычитания 2-х объектов-дробей;

// Функция умножения 2-х объектов-дробей;

// Функция деления 2-х объектов-дробей;

// Функция сокращения объекта-дроби. */

let frac1 = {
    num: 8,
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

  function fracRed(a, b) {
    c = nod(a, b);
    if (c > 1) {
     a = a / c;
     b = b / c;
  }
  }


  /*   Функция сложения 2-х объектов-дробей;  */
let addition = (a, b, c, d) => {
let numerator, denominator;
    denominator = nok(b, d)
let addition = (a + c) / denominator;

    if ((addition < 1) && (b == d)){
      numerator = a + c;
      console.log(numerator);
    } else if ((addition < 1) && (b != d)) {
      let nodNumber = nod((a + c), denominator);
      console.log(`Addition = ${(a + c)/nodNumber} / ${denominator/nodNumber}`)
    } else {
        addition = (a + c) / denominator;
    }
    // console.log(numerator);
    fracRed(numerator, denominator);
    console.log(`Addition = ${numerator} / ${denominator}`);



    
    
  
};

addition(frac1.num, frac1.den, frac2.num, frac2.den);

// console.log(frac1.den, frac2.den)

  /*   Функция сложения 2-х объектов-дробей;  */

let subtraction = () => {};
let multiplication  = () => {};
let division  = () => {};
let reduction  = () => {};



