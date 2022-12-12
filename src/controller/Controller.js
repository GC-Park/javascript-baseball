const InputView = require("../view/InputView")
const OutputView = require("../view/OutputView.js")
const BaseballModel = require("../model/BaseballModel")
const {userNumberInputException} = require("../validation")
const MissionUtils = require('@woowacourse/mission-utils')
const { EXCEPTION } = require("../constant")

class Controller {
  constructor(){
    this.model = new BaseballModel();
  }

  start(){
    OutputView.start();
    this.play()
  }

  play(){
    this.userNumberChoice();
  }

  userNumberChoice(){
    InputView.userInputNumber((input)=>{
      this.model.setUserNumber(input.split(''))
      userNumberInputException(this.model.userNumber)
      this.compareNumber(this.model.userNumber);
    })
  }

  userFinishOrRetryChoice(){
    InputView.finishOrRetry((answer)=>{
      if (Number(answer) === 1) this.play()
        else if (Number(answer) === 2) {
            MissionUtils.Console.close()
        }
        else throw new Error(EXCEPTION)
    })
  }

  compareNumber(userInput) {
    const strikes = this.strikeCount(this.model.computerNumber, userInput)
    const balls = this.ballCount(this.model.computerNumber, userInput)
    OutputView.resultPrint(strikes, balls)
    if(strikes===3) this.userFinishOrRetryChoice()
    else this.userNumberChoice()
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

}

module.exports = {
  Controller
}