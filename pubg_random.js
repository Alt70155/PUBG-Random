"use strict";

let yCoor = 0;
let xCoor = 0;
let prevValue = 0;

let init = (coorArray) => {
  let pin = document.getElementById("pin");
  pin.style.visibility = "visible";
  coorArray.shuffle();
  yCoor = coorArray[0][0];
  xCoor = coorArray[0][1];
}

//sanhokFunc
let sanhokCityRand = () => {
  init(SANHOKTOWNCOORVAL);
  if (yCoor === prevValue) {
    sanhokCityRand();
  }
  updatePinValue();
}

let sanhokNotBattleFieldRand = () => {
  init(SANHOKTOWNCOORVAL);
  if (yCoor === PARADISE_Y || yCoor === RUINS_Y || yCoor === BOOTCAMP_Y || yCoor === PAINAN_Y || yCoor === prevValue) {
    sanhokNotBattleFieldRand();
  }
  updatePinValue();
}

let sanhokDepopulateRand = () => {
  init(SANHOKDEPOCOORVAL);
  if (yCoor === prevValue) {
    sanhokDepopulateRand();
  }
  updatePinValue();
}

//erangelFunc
let erangelCityRand = () => {
  init(ERANGELTOWNCOORVAL);
  if (yCoor === prevValue) {
    erangelCityRand();
  }
  updatePinValue();
}

let erangelNotBattleFieldRand = () => {
  init(ERANGELTOWNCOORVAL);
  if (yCoor === YASUNAYA_Y || yCoor === SCHOOL_Y || yCoor === POCHINKI_Y || yCoor === MILITARY_Y || yCoor === SCHOOL2_Y || yCoor === prevValue) {
    erangelNotBattleFieldRand();
  }
  updatePinValue();
}

let miramarCityRand = () => {
  init(MIRAMARTOWNCOORVAL);
  if (yCoor === prevValue) {
    miramarCityRand();
  }
  updatePinValue();
}

let updatePinValue = () => {
  let pin = document.getElementById("pin");
  pin.style.top = yCoor;
  pin.style.left = xCoor;
  prevValue = yCoor;
}

Array.prototype.shuffle = function() {
  let w = this.length;
  while (w) {
    let j = Math.floor(Math.random() * w);
    let t = this[--w];
    this[w] = this[j];
    this[j] = t;
  }
}
