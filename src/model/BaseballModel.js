const MissionUtils = require('@woowacourse/mission-utils')

class BaseballModel {
  #computerInput;
  #userInput;

  constructor(){
    this.#computerInput=[]
    this.#userInput=[]
    this.makeRandomNumber();
  }

  get computerNumber(){
    return this.#computerInput;
  }

  get userNumber(){
    return this.#userInput;
  }

  setUserNumber(input){
    this.#userInput = input;
  }

  makeRandomNumber(){
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.#computerInput = computer;
  }
}

module.exports = BaseballModel;