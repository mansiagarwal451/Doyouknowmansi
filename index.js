var score = 0;
var readlineSync = require('readline-sync');
var chalk = require('chalk');

function play(question,answer) {
  var userAnswer = readlineSync.question(question);
  if(userAnswer===answer)
  {
    console.log('right')
    score = score + 1;
  }
  else
  {
    console.log('wrong')
  }
}
var highscore1 = {
  name: 'Ben',
  value: 2,
}
var highscore2 = {
  name: 'Gargi',
  value: 1,
}

console.log("Welcome to do you know mansi? ");

questionOne = {
  question: "What drink do I like? ",
  answer: "icetea",
},
questionTwo = {
  question: "What is my favourite vegetable? ",
  answer: "paneer",
}

var questions = [questionOne, questionTwo]

for(var j=0;j<questions.length;j++)
{
  var current = questions[j];
  play(current.question, current.answer);
}
console.log("Your final score is: " + score);

var highscores = [highscore1,highscore2];
for(var j=0;j<highscores.length;j++)
{
  var curr = highscores[j];
  if(score>curr.value)
  {
    console.log(chalk.red.bgBlue.bold("Congratulations, You have beaten the high score!"));
    console.log(chalk.blue.bgRed.bold("Please send a screenshot to us!"))
  }
}
