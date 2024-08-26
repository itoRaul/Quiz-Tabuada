var startGameButton = document.querySelector(".start-quiz")
var questionsContainer = document.querySelector(".questions-container")
var answersContainer = document.querySelector(".answers-container")
var questionText = document.querySelector(".question")
var nextQuestionButton = document.querySelector(".next-question")

startGameButton.addEventListener("click", startGame)
nextQuestionButton.addEventListener("click", displayNextQuestion)

var currentQuestionIndex = 0
var totalCorrect = 0

function startGame(){
    startGameButton.classList.add("hide")
    questionsContainer.classList.remove("hide")
    displayNextQuestion()

}

function displayNextQuestion(){
    resetState()
    
    if (questions.length === currentQuestionIndex){
        return finishGame()
    }

    questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {
        var newAnswer = document.createElement("button")
        newAnswer.classList.add("button", "answer") 
        newAnswer.textContent = answer.text
        if (answer.correct){
            newAnswer.dataset.correct = answer.correct
        }
        answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)
    })
}

function resetState(){
    while(answersContainer.firstChild){
        answersContainer.removeChild(answersContainer.firstChild)
    }

    document.body.removeAttribute("class")
    nextQuestionButton.classList.add("hide")
}



function selectAnswer(event){
    var answerClicked = event.target

    if (answerClicked.dataset.correct){
        document.body.classList.add("correct")
        totalCorrect++
    } else {
        document.body.classList.add("incorrect")
    }

    document.querySelectorAll(".answer").forEach(button =>{
        button.disabled = true
        if (button.dataset.correct){
            button.classList.add("correct")
        } else {
            button.classList.add("incorrect")
        }
    })
    nextQuestionButton.classList.remove("hide")
    currentQuestionIndex++
}

function finishGame(){
    var totalQuestions = questions.length
    var performance = Math.floor(totalCorrect * 100 / totalQuestions)
    
    let message = ""

    switch (true){
        case (performance >= 90):
            message = "Excelente :)"
            break
        case (performance >= 70):
            message = "Muito bom! :)"
            break
        case (performance > 50):
            message = "Bom! :)"
            break
        case (performance <= 50):
            message = "Você pode melhorar! :("
    }
    
    questionsContainer.innerHTML = 
    `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}


const questions = [
    {
      question: "4 x 3",
      answers: [
        { text: "11", correct: false },
        { text: "10", correct: false },
        { text: "12", correct: true },
        { text: "13", correct: false }
      ]
    },
    {
      question: "5 x 6",
      answers: [
        { text: "30", correct: true },
        { text: "35", correct: false },
        { text: "25", correct: false },
        { text: "36", correct: false }
      ]
    },
    {
      question: '7 x 3',
      answers: [
        { text: '21', correct: true },
        { text: '28', correct: false },
        { text: '20', correct: false },
        { text: "22", correct: false }
      ]
    },
    {
      question: '9 x 4',
      answers: [
        { text: "39", correct: false },
        { text: "36", correct: true },
        { text: "45", correct: false },
        { text: "40", correct: false }
      ]
    },
    {
      question: '8 x 7',
      answers: [
        { text: '57', correct: false },
        { text: '56', correct: true },
        { text: '54', correct: false },
        { text: '52', correct: false }
      ]
    },
    {
      question: '7 x 6',
      answers: [
        { text: '40', correct: false },
        { text: '42', correct: true },
        { text: '46', correct: false },
        { text: '45', correct: false }
      ]
    },
    {
      question: '9 x 8',
      answers: [
        { text: '70', correct: false },
        { text: '71', correct: false },
        { text: '78', correct: false },
        { text: '72', correct: true },
      ]
    },
    {
        question: '7 x 9',
        answers: [
          { text: '62', correct: false },
          { text: '63', correct: true },
          { text: '64', correct: false },
          { text: '68', correct: false },
        ]
      },
      {
        question: '6 x 9',
        answers: [
          { text: '54', correct: true },
          { text: '58', correct: false },
          { text: '56', correct: false },
          { text: '52', correct: false },
        ]
      },
      {
        question: '6 x 8',
        answers: [
          { text: '46', correct: false },
          { text: '42', correct: false },
          { text: '48', correct: true },
          { text: '44', correct: false },
        ]
      },
  ]