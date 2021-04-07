const tip=98;
let discount;
tip>50 || tip<300 ? discount=tip*0.15 :discount=tip*0.2;
console.log(tip, discount);