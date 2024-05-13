const questions =[{
    question:"Which one is the language is for front-end?",
    answers:[
        {text:"html",correct:true},
        {text:"firebase",correct:false},
        {text:"node",correct:false},
        {text:"express",correct:false},
    ]
},{
    question:"Which one is the language for front-end",
    answers:[
        {text:"html",correct:false},
        {text:"html",correct:true},
        {text:"html",correct:false},
        {text:"html",correct:false},
    ]
},{
    question:"Which one is the language for front-end",
    answers:[
        {text:"html",correct:true},
        {text:"html",correct:false},
        {text:"html",correct:false},
        {text:"html",correct:false},
    ]
},{
    question:"Which one is the language for front-end",
    answers:[
        {text:"html",correct:true},
        {text:"html",correct:false},
        {text:"html",correct:false},
        {text:"html",correct:false},
    ]
}]
const questionElement=document.getElementById("question")
const answerButton=document.getElementById("answer-buttons")
const nextButton=document.getElementById("next-btn")

let currentQuestionIndex;
let score;

function startQuiz(){
    currentQuestionIndex=0;
    score=0
    showQuestion();
}

function showQuestion(){
    resetState()
    let currentQuestion=questions[currentQuestionIndex]
    let questionNo=currentQuestionIndex + 1;

    questionElement.innerHTML=questionNo + " . " +  currentQuestion.question

    currentQuestion.answers.forEach((answer)=>{
        const button= document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        if(answer.correct){
            button.dataset.correct=answer.correct
        }

        button.addEventListener("click",selectAnswer)


    })

}

function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}
function selectAnswer(event){
    console.log(event)
    const selectedBtn=event.target;
    const isCorrect=selectedBtn.dataset.correct==="true"

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }



}


startQuiz()

