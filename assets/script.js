const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerEl = document.getElementById
('question-container')
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startQuiz() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(()=> Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerEl.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
    resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionEl.innerText = question.question
  question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
          button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsEl.appendChild(button)
  })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
     nextButton.classList.remove('hide')   
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'what is 2 + 2',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '22', correct: false },
            { text: '22', correct: false }
        ]
    },
    {
        question: 'what is 2 + 2',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '22', correct: false },
            { text: '22', correct: false }
        ]
    },
    {
        question: 'what is 2 + 2',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '22', correct: false },
            { text: '22', correct: false }
        ]
    },
    {
        question: 'what is 2 + 2',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '22', correct: false },
            { text: '22', correct: false }
        ]
    },
    {
        question: 'what is 2 + 2',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '22', correct: false },
            { text: '22', correct: false }
        ]
    },
    {
        question: 'what is 2 + 2',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '22', correct: false },
            { text: '22', correct: false }
        ]
    },
    {
        question: 'what is 2 + 2',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '22', correct: false },
            { text: '22', correct: false }
        ]
    },
    {
        question: 'what is 2 + 2',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '22', correct: false },
            { text: '22', correct: false }
        ]
    },
    {
        question: 'what is 2 + 2',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '22', correct: false },
            { text: '22', correct: false }
        ]
    },
    {
        question: 'what is 4 + 2',
        answers: [
            { text: '6', correct: true },
            { text: '22', correct: false },
            { text: '22', correct: false },
            { text: '22', correct: false }
        ]
    },
]