const MissionUtils = require('@woowacourse/mission-utils')
const { GAME_START, ZERO_RESULT, BALL_RESULT, STRIKE_RESULT, RESOLVE_RESULT, GAME_FINISH} = require("../constant")
const OutputView = {
  start(){
    MissionUtils.Console.print(GAME_START)
  },

  resultPrint(strikes, balls) {
    if (strikes === 0 && balls === 0) {
        MissionUtils.Console.print(ZERO_RESULT)
    } else if (strikes === 3) {
        MissionUtils.Console.print(RESOLVE_RESULT)
    } else if (strikes === 0) {
        MissionUtils.Console.print(balls + BALL_RESULT)
    } else if (balls === 0) {
        MissionUtils.Console.print(strikes + STRIKE_RESULT)
    } else {
        MissionUtils.Console.print(balls + BALL_RESULT + " " + strikes + STRIKE_RESULT)
    }
  },

  gameFinish(){
    MissionUtils.Console.print(GAME_FINISH)
  }

}

module.exports = OutputView