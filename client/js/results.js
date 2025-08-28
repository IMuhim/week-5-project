const totalScoreElement = document.getElementById("score-text")
const scorePercentage = document.getElementById('score-percentage')
const critique = document.getElementById('words')


document.addEventListener("DOMContentLoaded", () => {
  let score = localStorage.getItem("quizScore")
  if(score > 10){
    score -=1
  }
  totalScoreElement.textContent = `Total Score: ${score} / 10`
  scorePercentage.textContent = `Score Percentage : ${score/10 * 100} %` 
  if(score < 5.5){
    critique.textContent = 'Absolutely shocking >:('
  }else{
    'Well done'
  }
  
})