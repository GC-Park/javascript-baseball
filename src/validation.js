const { EXCEPTION } = require("./constant")

const userNumberInputException = (userInput)=>{
  if (userInput.length !== 3) throw new Error(EXCEPTION)

  let checkString=0
  userInput.map((user) => {
      if (isNaN(user)) checkString=1;
  })
  if(checkString===1) throw new Error(EXCEPTION)

  if (userInput.includes('0')) throw new Error(EXCEPTION)

  const repeatCheck = new Set(userInput)
  if (repeatCheck.size !== 3) throw new Error(EXCEPTION)

}

module.exports = {
  userNumberInputException
}