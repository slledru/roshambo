const argv = require('yargs').argv

class Roshambo {
  constructor(player) {
    console.log('Playing a game of Roshambo against the computer.')
    const computer = new ComputerMove()
    this.computer = computer.move()
    this.player = player
  }

  static didPlayerWin(player, computer) {
    /* eslint-disable */
    switch (player) {
      case 'rock':
        if (computer === 'paper') {
          return false
        }
        break;
      case 'paper':
        if (computer === 'scissor') {
          return false
        }
        break;
      default: // scissor
        if (computer === 'rock') {
          return false
        }
    }
    /* eslint-enable */
    return true
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
