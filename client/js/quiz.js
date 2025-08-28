const subjectName = document.querySelector('#subject-heading')
const questionText = document.querySelector('#question-text')
const submitBtn = document.querySelector('#submit-btn')
const nextBtn = document.querySelector('#next-btn')

const option1 = document.getElementById("label-1")
const option2 = document.getElementById("label-2")
const option3 = document.getElementById("label-3")
const option4 = document.getElementById("label-4")


const button1 = document.querySelector('#option-1')
const button2 = document.querySelector('#option-2')
const button3 = document.querySelector('#option-3')
const button4 = document.querySelector('#option-4')
//both sets of 4 imports refer to the 4 multiple choice answers. imported 'twice' for added functionality

const buttons = [
        button1,
        button2,
        button3,
        button4
    ]


let question = 0
let score = 0
let currentAnswers




document.addEventListener('DOMContentLoaded', FetchAnswers)
submitBtn.addEventListener('click',  checkAnswer)
nextBtn.addEventListener('click', FetchAnswers)


//ugly code ensures only 1 button is selected
button1.addEventListener('click', () =>{
    button2.checked = false
    button3.checked = false
    button4.checked = false
 })

button2.addEventListener('click', () =>{
    button1.checked = false
    button3.checked = false
    button4.checked = false
 })

 button3.addEventListener('click', () =>{
    button1.checked = false
    button2.checked = false
    button4.checked = false
 })

 button4.addEventListener('click', () =>{
    button1.checked = false
    button2.checked = false
    button3.checked = false
 })






const params = new URLSearchParams(window.location.search);
const id = params.get('id')
//subject now holds the info stored on the subject 'key' in url



async function fetchSubject(subjectId){
    const response = await fetch (`http://localhost:3000/game/subject/${subjectId}`)
    const data = await response.json()
    subjectName.textContent = data.subject_name
}

async function FetchQuestion(id){
    const response = await fetch(`http://localhost:3000/game/?id=${id}`)
    const data = await response.json()
    questionText.textContent = data[question].question_text
    return data
}


async function FetchAnswers(){
    
    const data = await FetchQuestion(id)
    const questionId = data[question].question_id
    const response = await fetch(`http://localhost:3000/game/${questionId}`)
    currentAnswers = await response.json()
    
        
    

    option1.textContent = currentAnswers[0].answer_text
    option2.textContent = currentAnswers[1].answer_text
    option3.textContent = currentAnswers[2].answer_text
    option4.textContent = currentAnswers[3].answer_text

    question++
    
    for(i of buttons){
        i.checked = false
    }
    
    return currentAnswers
}



async function checkAnswer(){
    console.log(currentAnswers)

    for(let i = 0; i<=3 ; i++){
        if(buttons[i].checked === true && currentAnswers[i].is_correct === true){
            score ++
            
        }
        
        
    }
        
    
}
















