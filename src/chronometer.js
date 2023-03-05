class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null 
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }
  
  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    const seconds = Math.floor(this.currentTime % 60);
    return seconds;
  }

  computeTwoDigitNumber(value) {
    if (value < 10){
    return `0${value}`;
  } else {
    return `${value}`;
  }
  }

  stop() {
      clearInterval(this.intervalId);
    }
  
  reset() {
    this.currentTime = 0;
  }

  split() {
//defines dos constantes retornarlas como un string juntas
const minutes = this.computeTwoDigitNumber(this.minutes());
const seconds = this.computeTwoDigitNumber(this.seconds());
return `${minutes}:${seconds}`;
  }
}
