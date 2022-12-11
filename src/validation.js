const userNumberInputException = (userInput)=>{
  if (userInput.length !== 3) throw new Error("입력 값이 잘못 되었습니다. 게임을 종료합니다.")

  let checkString=0
  userInput.map((user) => {
      if (isNaN(user)) checkString=1;
  })
  if(checkString===1) throw new Error("입력 값이 잘못 되었습니다. 게임을 종료합니다.")

  if (userInput.includes('0')) throw new Error("입력 값이 잘못 되었습니다. 게임을 종료합니다.")

  const repeatCheck = new Set(userInput)
  if (repeatCheck.size !== 3) throw new Error("입력 값이 잘못 되었습니다. 게임을 종료합니다.")

}

module.exports = {
  userNumberInputException
}