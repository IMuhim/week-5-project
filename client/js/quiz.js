const subjectName = document.querySelector('#subject-heading')
const questionText = document.querySelector('#question-text')
const option1 = document.querySelector('#option-1')
const option2 = document.querySelector('#option-2')
const option3 = document.querySelector('#option-3')
const option4 = document.querySelector('#option-4')
const submitBtn = document.querySelector('#submit-btn')
let question = 0
// let optiona = 0
// let optionb = 1
// let optionc = 2
// let optiond = 3

document.addEventListener('DOMContentLoaded', async function () {
    await fetchSubject(id)
    await FetchAnswers()
})

submitBtn.addEventListener('click', loadNextQuestion)




const params = new URLSearchParams(window.location.search);
const id = params.get('id')
//subject now holds the info stored on the subject 'key' in url


// async function FetchData(){
//     const response = await fetch(`http://localhost:3000/game/?id=${id}`)
//     const data = await response.json()
//     console.log(data)
//     questionText.textContent = data[0].question_text
//     const questionId = data[0].question_id
//     const response2 = await fetch(`http://localhost:3000/game/${questionId}`)
//     const data2 = await response2.json()
//     option1.textContent = data2[0].answer_text
//     option2.textContent = data2[1].answer_text
//     option3.textContent = data2[2].answer_text
//     option4.textContent = data2[3].answer_text
// }

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
    const answers = await response.json()

    option1.textContent = answers[0].answer_text
    option2.textContent = answers[1].answer_text
    option3.textContent = answers[2].answer_text
    option4.textContent = answers[3].answer_text
    

}


async function loadNextQuestion(){
    console.log('hit')
    question++
    

    FetchAnswers()
    console.log(answers)

}





// Example code
// const subjectName = document.querySelector('#subject-heading');
// const questionText = document.querySelector('#question-text');
// const option1 = document.querySelector('#option-1');
// const option2 = document.querySelector('#option-2');
// const option3 = document.querySelector('#option-3');
// const option4 = document.querySelector('#option-4');
// const submitBtn = document.querySelector('#submit-btn');

// // Store questions and track state
// let allQuestions = [];
// let currentQuestionIndex = 0;
// let selectedAnswer = null;

// document.addEventListener('DOMContentLoaded', FetchData);

// const params = new URLSearchParams(window.location.search);
// const id = params.get('id');

// async function FetchData() {
//     try {
//         const response = await fetch(`http://localhost:3000/game/?id=${id}`);
//         const data = await response.json();
        
//         // Store all questions for navigation
//         allQuestions = data;
        
//         // Load the first question
//         loadQuestion(allQuestions[0]);
        
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// function loadQuestion(question) {
//     // Update question text
//     questionText.textContent = question.question_text;
    
//     // Fetch and display answers for this question
//     loadAnswers(question.question_id);
    
//     // Reset selection
//     selectedAnswer = null;
//     resetOptionStyles();
//     submitBtn.disabled = true;
//     submitBtn.textContent = 'Submit Answer';
// }

// async function loadAnswers(questionId) {
//     try {
//         const response = await fetch(`http://localhost:3000/game/${questionId}`);
//         const answers = await response.json();
        
//         // Display answers
//         option1.textContent = answers[0].answer_text;
//         option2.textContent = answers[1].answer_text;
//         option3.textContent = answers[2].answer_text;
//         option4.textContent = answers[3].answer_text;
        
//         // Store answer IDs for validation
//         option1.setAttribute('data-answer-id', answers[0].answer_id);
//         option2.setAttribute('data-answer-id', answers[1].answer_id);
//         option3.setAttribute('data-answer-id', answers[2].answer_id);
//         option4.setAttribute('data-answer-id', answers[3].answer_id);
        
//         // Store correct answer info
//         option1.setAttribute('data-is-correct', answers[0].is_correct);
//         option2.setAttribute('data-is-correct', answers[1].is_correct);
//         option3.setAttribute('data-is-correct', answers[2].is_correct);
//         option4.setAttribute('data-is-correct', answers[3].is_correct);
        
//     } catch (error) {
//         console.error('Error loading answers:', error);
//     }
// }

// // Add click event listeners to options
// option1.addEventListener('click', () => selectAnswer(option1));
// option2.addEventListener('click', () => selectAnswer(option2));
// option3.addEventListener('click', () => selectAnswer(option3));
// option4.addEventListener('click', () => selectAnswer(option4));

// function selectAnswer(optionElement) {
//     // Remove selection from all options
//     resetOptionStyles();
    
//     // Highlight selected option
//     optionElement.style.backgroundColor = '#e3f2fd';
//     optionElement.style.borderColor = '#2196f3';
    
//     // Store selected answer
//     selectedAnswer = {
//         element: optionElement,
//         answerId: optionElement.getAttribute('data-answer-id'),
//         isCorrect: optionElement.getAttribute('data-is-correct') === 'true'
//     };
    
//     // Enable submit button
//     submitBtn.disabled = false;
// }

// function resetOptionStyles() {
//     const options = [option1, option2, option3, option4];
//     options.forEach(option => {
//         option.style.backgroundColor = '';
//         option.style.borderColor = '';
//     });
// }

// // Handle submit button click
// submitBtn.addEventListener('click', handleSubmit);

// function handleSubmit() {
//     if (!selectedAnswer) return;
    
//     // Show visual feedback
//     showAnswerFeedback();
    
//     // Disable further selections
//     disableOptions();
    
//     // Change button to "Next Question"
//     submitBtn.textContent = 'Next Question';
//     submitBtn.removeEventListener('click', handleSubmit);
//     submitBtn.addEventListener('click', loadNextQuestion);
// }

// function showAnswerFeedback() {
//     const options = [option1, option2, option3, option4];
    
//     options.forEach(option => {
//         const isCorrect = option.getAttribute('data-is-correct') === 'true';
        
//         if (isCorrect) {
//             option.style.backgroundColor = '#d4edda';
//             option.style.borderColor = '#28a745';
//         } else if (option === selectedAnswer.element && !selectedAnswer.isCorrect) {
//             option.style.backgroundColor = '#f8d7da';
//             option.style.borderColor = '#dc3545';
//         }
//     });
// }

// function disableOptions() {
//     const options = [option1, option2, option3, option4];
//     options.forEach(option => {
//         option.style.pointerEvents = 'none';
//     });
// }

// function loadNextQuestion() {
//     // Move to next question
//     currentQuestionIndex++;
    
//     if (currentQuestionIndex < allQuestions.length) {
//         loadQuestion(allQuestions[currentQuestionIndex]);
        
//         // Restore button functionality
//         submitBtn.removeEventListener('click', loadNextQuestion);
//         submitBtn.addEventListener('click', handleSubmit);
//     } else {
//         // Quiz completed
//         endQuiz();
//     }
// }

// function endQuiz() {
//     // Redirect to results page or show completion message
//     questionText.textContent = 'Quiz completed!';
    
//     // Hide options
//     [option1, option2, option3, option4].forEach(option => {
//         option.style.display = 'none';
//     });
    
//     // Change button to restart or go home
//     submitBtn.textContent = 'Play Again';
//     submitBtn.onclick = () => window.location.reload();
// }