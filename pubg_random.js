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

let sanhokCityRand = () => {
  init(townCoordinateValue);
  if (yCoor === prevValue) {
    sanhokCityRand();
  }
  updatePinValue();
}

let sanhokNotBattleFieldRand = () => {
  init(townCoordinateValue);
  if (yCoor === PARADISE_Y || yCoor === RUINS_Y || yCoor === BOOTCAMP_Y || yCoor === PAINAN_Y || yCoor === prevValue) {
    sanhokNotBattleFieldRand();
  }
  updatePinValue();
}

let sanhokDepopulateRand = () => {
  init(depopulatedCoordinateValue);
  if (yCoor === prevValue) {
    sanhokDepopulateRand();
  }
  updatePinValue();
}

let erangelCityRand = () => {
  init(erangelTownCoorVal);
  if (yCoor === prevValue) {
    erangelCityRand();
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
