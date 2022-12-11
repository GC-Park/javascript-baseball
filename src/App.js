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

  strikeCount(computerInput, userInput) {
    let strikeTotal = 0
    computerInput.map((computer, index) => {
        if (computer === Number(userInput[index])) strikeTotal++
    })
    return strikeTotal
  }

  ballCount(computerInput, userInput) {
    let ballTotal = 0
    computerInput.map((computer, index) => {
        if (
            computer !== Number(userInput[index]) &&
            computerInput.includes(Number(userInput[index]))
        )
            ballTotal++
    })
    return ballTotal
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
    })
  }
}

const app = new App();
app.play();
module.exports = App;
