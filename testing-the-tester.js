var player = 1
var grid = [null, null, null, null, null, null, null, null, null]

function playTurn (index) {
  if (grid[index] || isGameOver()) {
    return false
  } else {
    grid[index] = player
    if (player === 1) {
      player = 2    // why ! is not needed? -- if !(player === 1) player = 2
    } else player = 1
    return true
  }
}

  // check for winning conditions

function isGameOver () {
  if (whoWon()) {
    return true
  } else {
    return false
  }
}

function restart () {
  player = 1
  grid = [null, null, null, null, null, null, null, null, null]
}

// input: nothing
// output: either 1, 2, or 3
// or: 0 if its the start of the game

function whoWon () {
  if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) return grid[0]
  if (grid[3] && grid[3] === grid[4] && grid[3] === grid[5]) return grid[3]
  if (grid[6] && grid[6] === grid[7] && grid[6] === grid[8]) return grid[6]
  if (grid[0] && grid[0] === grid[3] && grid[0] === grid[6]) return grid[0]
  if (grid[1] && grid[1] === grid[4] && grid[1] === grid[7]) return grid[1]
  if (grid[2] && grid[2] === grid[5] && grid[2] === grid[8]) return grid[2]
  if (grid[0] && grid[0] === grid[4] && grid[0] === grid[8]) return grid[0]
  if (grid[2] && grid[2] === grid[4] && grid[2] === grid[6]) return grid[2]
  if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] &&
    grid[5] && grid[6] && grid[7] && grid[8]) return 3
  return 0
}
