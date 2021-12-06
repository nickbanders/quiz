var timerEl = document.getElementById('timer');
var score = document.getElementById('score');
var endScreenEl = document.querySelector("#end-screen");
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerEl = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answer-buttons')

var score = 0;

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
  timer();
}


var timeLeft = 90;


function timer() {
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft;
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        endScreen();
      }
    }, 1000);
  }
  
  var endScreen = function () {
    if (questionsEl.classList != "hidden") {
      questionsEl.classList.add("hidden");
    }
    if (correctAnswerEl.classList != "hidden") {
      correctAnswerEl.classList.add("hidden");
    }
    if (wrongAnswerEl.classList != "hidden") {
      wrongAnswerEl.classList.add("hidden");
    }
    if (nextBtnEl.classList != "hidden") {
      nextBtnEl.classList.add("hidden");
    }
    endScreenEl.classList.remove("hidden");
    highScoreEl.textContent = highScore;
  };


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


var selectAnswer = function (event) {
    let selectedButton = event.target
    let correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (correct === "true") {
      score++;
    } else {
      timeLeft = timeLeft - 5;
    }

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide'); 
       } else {
           startButton.innerText = 'Restart'
           startButton.classList.remove('hide');
           
       } console.log(score)
  };


// scoring

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
