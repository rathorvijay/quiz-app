const data = [
    {
        question: "What is CSS used for?",
        options: ["Styling web pages", "Creating databases", "Writing server-side code", "None of the above"],
        answer: 0
    },
    {
        question: "Which programming language is commonly used for web development?",
        options: ["Java", "Python", "JavaScript", "C++"],
        answer: 2
    },
    {
        question: "What does SEO stand for?",
        options: ["Search Engine Optimization", "Software Engineering Organization", "System Enhancement Operation", "None of the above"],
        answer: 0
    },
    {
        question: "What is the purpose of the <div> element in HTML?",
        options: ["Defining a division or a section", "Embedding a video", "Creating a hyperlink", "None of the above"],
        answer: 0
    },
    {
        question: "Which of the following is not a JavaScript framework or library?",
        options: ["React", "Angular", "Bootstrap", "JavaFX"],
        answer: 3
    }
];


let currentindex=0;
let score=0;

const insertquestion=(index)=>{
    question.innerHTML=data[index].question;
    data[index].options.forEach((value,i)=>{
        window[`opt${i+1}`].innerHTML=value;
    });
}


insertquestion(currentindex);

const checkanswer=()=>{
    const opt=document.querySelectorAll(".opt");
    opt.forEach((value,index)=>{
        if(value.checked){
            if(index===data[currentindex].answer){
                score=score+1;
                console.log(score);
            }
        }
    });

}

const dechecked=()=>{
    const opt=document.querySelectorAll(".opt");
    opt.forEach((value,index)=>{
        value.checked=false;
    })
}

function greetStudentAndProvideScore(score) {
    let greetingMessage = "Hello Student! 🎉\n";

    if (score === data.length) {
        greetingMessage += `Congratulations on your perfect score! 🌟👏 Your score is: ${score}/${data.length}. You've truly mastered this material, and your dedication shines through. Keep up the fantastic work! 🚀📚`;
    } else if (score >= data.length/2+1) {
        greetingMessage += `Well done! You did a great job. 👍😄 Your score is:  ${score}/${data.length}. Your efforts have paid off, and you're making excellent progress. Keep it up, and you'll achieve even greater success! 💪👨‍🎓`;
    } else {
        greetingMessage += `Don't worry, keep practicing, and you'll improve! 💪😊 Your score is:  ${score}/${data.length}. Remember, every challenge is an opportunity to learn and grow. Keep your spirits high, and success will follow! 🌱🌞`;
    }

    // Add a "Play Again" button
    greetingMessage += '\n\n<br><br><br><button id="play" onclick="location.reload()" class="reload-button">Play Again</button>';

    return greetingMessage;
}

btn.addEventListener("click",()=>{
    checkanswer();
    currentindex=currentindex+1;
    dechecked();
    if(currentindex<data.length){
        insertquestion(currentindex);
    }else{
        document.querySelector(".main").innerHTML=greetStudentAndProvideScore(score);
    }
});
