let team1Score = 0
document.querySelector('p').textContent = 0
const add1ToTeam1Score = () => {
  console.log('adding 1 to team 1 score')
  if (team1Score < 21) {
    team1Score = team1Score + 1
  } else {
    document.querySelector('.output').textContent = 'Team 1 WINS!'
    document.querySelector('.team-1-add-1-button').disabled = true
    document.querySelector('.team-1-subtract-1-button').disabled = true
  }
  console.log('the new score is' + team1Score)
  document.querySelector('.team1Score').textContent = team1Score
  console.log('updated the team 1 score')
}

const subtract1ToTeam1Score = () => {
  console.log('subtracting 1 to team 1 score')
  if (team1Score > 0) team1Score = team1Score + -1
  console.log('the new score is' + team1Score)
  document.querySelector('.team1Score').textContent = team1Score
}

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', add1ToTeam1Score)
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subtract1ToTeam1Score)

let team2Score = 0
document.querySelector('p').textContent = 0
const add1ToTeam2Score = () => {
  console.log('adding 1 to team 2 score')
  if (team2Score < 21) {
    team2Score = team2Score + 1
  } else {
    document.querySelector('.output2').textContent = 'Team 2 WINS!'
    document.querySelector('.team-2-add-1-button').disabled = true
    document.querySelector('.team-2-subtract-1-button').disabled = true
  }
  console.log('the new score is' + team2Score)
  document.querySelector('.team2Score').textContent = team2Score
  console.log('updated the team 2 score')
}

const subtract1ToTeam2Score = () => {
  console.log('subtracting 1 to team 2 score')
  if (team2Score > 0) team2Score = team2Score + -1
  console.log('the new score is' + team2Score)
  document.querySelector('.team2Score').textContent = team2Score
}

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', add1ToTeam2Score)
document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subtract1ToTeam2Score)

let Team1Name = 'FirstTeam'
const updateTeam1Name = () => {
  let name = document.querySelector('.input1').value
  document.querySelector('.teamName').textContent = name
}

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateTeam1Name)

let Team2Name = 'SecondTeam'
const updateTeam2Name = () => {
  let name = document.querySelector('.input2').value
  document.querySelector('.teamName2').textContent = name
}

document
  .querySelector('.update-team-2-name')
  .addEventListener('click', updateTeam2Name)

const resetScore = () => {
  team2Score = 0
  team1Score = 0
  document.querySelector('.team1Score').textContent = team1Score
  document.querySelector('.output').textContent = ''
  document.querySelector('.team-1-add-1-button').disabled = false
  document.querySelector('.team-1-subtract-1-button').disabled = false
  document.querySelector('.team2Score').textContent = team2Score
  document.querySelector('.output2').textContent = ''
  document.querySelector('.team-2-add-1-button').disabled = false
  document.querySelector('.team-2-subtract-1-button').disabled = false
}
document.querySelector('.reset').addEventListener('click', resetScore)
