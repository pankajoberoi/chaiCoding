const questions=[
    {
        question:"which one from these is language for front-end?",
        answers:[
            {text:"html" , correct:true},
            {text:"node" , correct:false},
            {text:"express" , correct:false},
            {text:"c++" , correct:false},

        ]
    },
    {
        question: "which is smallest continent in world?",
        answers: [
            {text:"Asia" , correct:false},
            {text:"Australia" , correct:true},
            {text:"Arctic" , correct:false},
            {text:"Africa" , correct:false},
        ]
    },
    {
        question: "which is language is server side?",
        answers: [
            {text:"Node" , correct:true},
            {text:"html" , correct:false},
            {text:"css" , correct:false},
            {text:"Js" , correct:false},
        ]
    },
    {
        question: "which is largest desert in the world?",
        answers: [
            {text:"kalahari" , correct:false},
            {text:"Gobi" , correct:false},
            {text:"sahara" , correct:false},
            {text:"Antarctica" , correct:true},
        ]
    }
];

const questionElement=document.getElementById("question")
const answerButton=document.getElementById("answer-buttons")
const nextButton=document.getElementById("next-btn")


let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion()
}

function showQuestion(){
    resetstate();
    let currentQuestion=questions[currentQuestionIndex]
    let questionNo=currentQuestionIndex+1;

    questionElement.innerHTML=questionNo + " . "  +  currentQuestion.question;

    currentQuestion.answers.forEach((answer)=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        if(answer.correct){
            button.dataset.correct=answer.correct;
        }

        button.addEventListener("click",selectAnswer)


    })


}
function resetstate(){
    nextButton.style.display="none"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(event){
   
    const selectedBtn=event.target;
    const isCorrect=selectedBtn.dataset.correct==="true"

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach((button)=>{
        if(button.dataset.correct==="true"){
            selectedBtn.classList.add("correct");
        }
        button.disabled=true;
    })
    nextButton.style.display="block"

}

function showScore(){
    resetstate();
    questionElement.innerHTML=`Your score ${score} out of  ${questions.length}`
    nextButton.innerHTML="Play again" 
    nextButton.style.display="block"  
}


function handleNextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextbutton();
    }
    else{
        startQuiz();
    }
})


startQuiz();