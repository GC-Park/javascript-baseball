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

  compareNumber(userInput) {
    const strikes = this.strikeCount(this.#computerInput, userInput)
    const balls = this.ballCount(this.#computerInput, userInput)
    if (strikes === 0 && balls === 0) {
        MissionUtils.Console.print('낫싱')
        this.userInputNumber()
    } else if (strikes === 3) {
        MissionUtils.Console.print('3스트라이크')
        this.finishOrRestart()
    } else if (strikes === 0) {
        MissionUtils.Console.print(balls + '볼')
        this.userInputNumber()
    } else if (balls === 0) {
        MissionUtils.Console.print(strikes + '스트라이크')
        this.userInputNumber()
    } else {
        MissionUtils.Console.print(balls + '볼 ' + strikes + '스트라이크')
        this.userInputNumber()
    }
  }

  userInputNumber(){
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input)=>{
      this.#userInput=input.split('');
      this.compareNumber(this.#userInput);
    })
  }

  finishOrRestart() {
    MissionUtils.Console.readLine('3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',(answer) => {
        if (Number(answer) === 1) this.play()
        else if (Number(answer) === 2) {
            MissionUtils.Console.print('게임 종료')
            MissionUtils.Console.close()
        }
    })
  }
  exceptionHandler(userInput) {
    if (userInput.length !== 3) return 1

    let checkString=0
    userInput.map((user) => {
        if (isNaN(user)) checkString=1;
    })
    if(checkString===1) return 1

    if (userInput.includes('0')) return 1

    const repeatCheck = new Set(userInput)
    if (repeatCheck.size !== 3) return 1
  }
}

const app = new App();
app.play();
module.exports = App;
