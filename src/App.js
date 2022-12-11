const MissionUtils = require('@woowacourse/mission-utils')
class App {
  #computerInput;

  constructor(){
    this.#computerInput=[]
  }

  play() {
    this.#computerInput=this.makeRandomNumber()
  }

  makeRandomNumber(){
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer
  }
}

const app = new App();
app.play();
module.exports = App;
