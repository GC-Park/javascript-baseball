const {Controller} = require("./controller/Controller")
class App {

  play() {
    const baseball = new Controller();
    baseball.start();
  }
}

const app = new App();
app.play();
module.exports = App;
