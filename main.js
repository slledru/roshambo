const argv = require('yargs').argv

class Roshambo {
  constructor(player) {
    console.log('Playing a game of Roshambo against the computer.')
    const computer = new ComputerMove()
    this.computer = computer.move()
    this.player = player
  }

}

class ComputerMove {
  constructor() {
    this.moves = ['rock', 'paper', 'scissor']
  }

  move() {
    const index = Math.floor(Math.random() * this.moves.length)
    return this.moves[index]
  }
}

if (argv.move) {
  const game = new Roshambo(argv.move)
}
else {
  console.log('Pick a move!')
}
