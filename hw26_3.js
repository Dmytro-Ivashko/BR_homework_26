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
    seconds: 30,
  };
//    const secondsInHours = 3600;
//    const secondsInMinutes = 60;

function currentTime (a, b, c) {
    console.log(`На годинику ${a} год. ${b} хв. ${c} сек.`)
}

function addSeconds (s) {
    // let currentSeconds = (time.hours * secondsInHours) + (time.minutes * secondsInMinutes) + time.seconds;
    //     currentSeconds = currentSeconds + s;
    if (s < 60) {
        time.seconds = time.seconds + s;
        if (time.seconds > 60) {
            time.minutes++;
            time.seconds -= 60;
        } else if (time.minutes > 60){
            time.hours++;
            time.minutes  -= 60;
        } else if (time.hours > 24){
            time.hours
 > 24
        }
    } else {

    }

}

addSeconds(26)


console.log(currentTime(time.hours, time.minutes, time.seconds))

