const Gpio = require("pigpio").Gpio;

var pin17 = new Gpio(17, { mode: Gpio.OUTPUT });
var pin22 = new Gpio(22, { mode: Gpio.OUTPUT });
var pin23 = new Gpio(23, { mode: Gpio.OUTPUT });
var pin24 = new Gpio(24, { mode: Gpio.OUTPUT });

const forward = () => {
  pin17.pwmWrite(0);
  pin22.pwmWrite(255);
  pin23.pwmWrite(255);
  pin24.pwmWrite(0);
};

const backward = () => {
  pin17.pwmWrite(255);
  pin22.pwmWrite(0);
  pin23.pwmWrite(0);
  pin24.pwmWrite(255);
};

const left = () => {
  pin17.pwmWrite(0);
  pin22.pwmWrite(255);
  pin23.pwmWrite(0);
  pin24.pwmWrite(255);
};

const right = () => {
  pin17.pwmWrite(255);
  pin22.pwmWrite(0);
  pin23.pwmWrite(255);
  pin24.pwmWrite(0);
};

const stop = () => {
  pin17.pwmWrite(0);
  pin22.pwmWrite(0);
  pin23.pwmWrite(0);
  pin24.pwmWrite(0);
};

module.exports = {
  up: forward,
  down: backward,
  left: left,
  right: right,
  stop: stop
};
