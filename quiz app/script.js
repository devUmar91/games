let questionNumberText=document.querySelector('h3')
let question=document.querySelector('h2')
let choicesSection=document.querySelector('.optionsSection')
let choices=document.querySelectorAll('button')

let questionNum=1;
let score=0
const questionsArray = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "London", "Paris", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1905", "1912", "1920", "1931"],
        correctAnswer: "1912"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correctAnswer: "William Shakespeare"
    }
];

let currQues=0;
function loadQuestion(){
    questionNumberText.innerText=`Q no :${questionNum++}`
    choicesSection.innerHTML='';
    question.innerText =questionsArray[currQues].question;

    questionsArray[currQues].options.forEach((option)=>{
        console.log(option)
         let newBtn =document.createElement('button')
         newBtn.innerText=option
        choicesSection.appendChild(newBtn)
        // choices.innerText=option
    
        newBtn.addEventListener('click',()=>{
            checkAnswer(option)
        })
    })
    
}


function checkAnswer(userSelected){
    if (userSelected==questionsArray[currQues].correctAnswer) {
        score++
    }
    currQues++
      if (currQues==questionsArray.length) {
        // console.log("limit ended");
        questionNumberText.innerText=''
        question.innerText=''
        choicesSection.innerHTML=''
        let scoreText =document.createElement('h1')
        choicesSection.appendChild(scoreText)
         scoreText.innerText=`You scored ${score} out of ${questionsArray.length}`
      }else{

       
        loadQuestion()
      }
       
}
loadQuestion()






