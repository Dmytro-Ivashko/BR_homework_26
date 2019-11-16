/* 3. Создать объект, описывающий время (часы, минуты, секунды),
 и следующие функции для работы с этим объектом: 

Функция вывода времени на экран; +++++

Функция изменения времени на переданное количество секунд;

Функция изменения времени на переданное количество минут;

Функция изменения времени на переданное количество часов. 

Учтите, что в последних 3-х функциях, при изменении
 одной части времени, может измениться и другая.
  Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».
 */

  let time = {
    hours: 23,
    minutes: 50,
    seconds: 35,
  };

function timeNormalize () {
    while (time.hours > 23 || time.minutes > 60 || time.seconds >60) {
        if (time.seconds > 60) {
            time.seconds -= 60;
            time.minutes++;
        } else if (time.minutes > 60) {
            time.minutes -= 60;
            time.hours++;
        } else if (time.hours > 23) {
            if (time.hours == 24){
                time.hours = 0;
            } else {
                time.hours -= 24;
            }
        }
        
    }
    console.log(`На годиннику ${time.hours} год. ${time.minutes} хв. ${time.seconds} сек.`);
};

function addSeconds(s) {
    time.seconds += s;
    console.log(`------- Додамо ${s} сек. -------`)
    timeNormalize();
}
function addMinutes(m) {
    time.minutes += m;
    console.log(`------- Додамо ${m} хв. -------`)
    timeNormalize();
}
function addHours(h) {
    time.hours += h;
    console.log(`------- Додамо ${h} год. -------`)
    timeNormalize();
}



// --------------------
timeNormalize();
addSeconds(500);
addMinutes(500);
addHours(600);








