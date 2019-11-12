let car = {
  manufacture: "Opel",
  model: "Astra",
  year: 2008,
  speed: 120
};

let carInfo = () => {
  console.log(`-- Car info --`);
  console.log(`Manufacture: ${car.manufacture}`);
  console.log(`Model: ${car.model}`);
  console.log(`Year: ${car.year}`);
  console.log(`Speed: ${car.speed}`);
};
let hoursSpent, minutesSpent;
let distance = prompt("Введіть відстань яку бажаєте подолати");

let distanceOvercoming = distance => {
  let overcoming = distance / car.speed;
  if (overcoming > 4) {
    overcoming = overcoming + Math.floor(overcoming / 4);
  }
  hoursSpent = Math.floor(overcoming);
  minutesSpent = Math.round((overcoming - hoursSpent) * 60);
  console.log(hoursSpent);
  console.log(minutesSpent);
  alert(
    `Завдяки цій машині ви зможете подолати вказану відстань приблизно за ${hoursSpent} год. ${minutesSpent} хв.`
  );
};

carInfo();
distanceOvercoming(distance);
