const MissionUtils = require('@woowacourse/mission-utils')
const { INPUT_USER_NUMBER, RETRY_OR_FINISH } = require("../constant")
const InputView={

  userInputNumber(userNumberChoice){
    MissionUtils.Console.readLine(INPUT_USER_NUMBER, (input)=>{
      userNumberChoice(input);
    })
  },

  finishOrRetry(userFinishOrRetryChoice) {
    MissionUtils.Console.readLine(RETRY_OR_FINISH,(answer) => {
        userFinishOrRetryChoice(answer);
    })
  }

}

module.exports = InputView