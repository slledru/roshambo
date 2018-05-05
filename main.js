const argv = require('yargs').argv

class Roshambo {
  constructor(player) {
    console.log('Playing a game of Roshambo against the computer.')
    const computer = new ComputerMove()
    this.computer = computer.move()
    this.player = player
  }
}

if (argv.move) {
  const game = new Roshambo(argv.move)
}
else {
  console.log('Pick a move!')
}
