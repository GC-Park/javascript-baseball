const MissionUtils = require('@woowacourse/mission-utils')
class App {
  #computerInput;
  #userInput;
  
  constructor(){
    this.#computerInput=[]
    this.#userInput=[]
  }

  play() {
    this.#computerInput=this.makeRandomNumber()
    this.userInputNumber()
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

  userInputNumber(){
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input)=>{
      this.#userInput=input.split('');
      console.log(this.#userInput)
    })
  }
}

const app = new App();
app.play();
module.exports = App;
