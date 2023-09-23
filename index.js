const btn = document.querySelector("#btn")
const heart = document.querySelector("#heart")

let fill = 20;

const QandO = [
    {
        question: "what is the name you give to your boyfriend?",
        option: ["baby", "kuki", "sona", "subha"]
    },
    {
        question: "What is the name that you boyfried gave to you?",
        option: ["chitra", "baby", "sona", "pagla"]
    },
    {
        question: "What is you kuki's faverite food?",
        option: ["korola", "tomato", "misti", "soma"]
    },
    {
        question: "What is the food your kuki dislike?",
        option: ["somosa", "tomato", "soma", "misti"]
    },
    {
        question: "What is the biggest win prize for your kuki when he will get the job?",
        option: ["chitra", "chitra with only shirt", "hug", "a personal plillow"]
    },
]

const answer = ["kuki", "chitra", "korola", "tomato", "chitra"]


function questionReady(no) {
    question.innerText = QandO[no].question
    options.forEach((ele, i) => {
        ele.innerText = QandO[no].option[i]
        ele.style.backgroundColor = "tomato"
        ele.addEventListener("click", (e) => {
            // console.log(e.target.innerText)
            if (e.target.innerText == answer[no]) {
                console.log("right")
                e.target.style.backgroundColor = "green"

                // for fill the heart -----------------
                fill = fill + 15
                if (fill > 100){
                    fill = 100
                }
                heart.style.backgroundPositionX = `${fill}%`
                // ------------------------------------------

                // for the next question --------------------
                setTimeout(() => {
                    // for end massage -------------------
                    if (questionNo == answer.length - 1){
                        endDisplay.classList.remove("display")
                    }
                    // ----------------------------------------

                    if (questionNo < answer.length - 1) {
                        questionNo++
                        questionReady(questionNo)
                    }
                }, 600)
                // ------------------------------------------
            } else {
                console.log("wrong")
                e.target.style.backgroundColor = "red"
            }
        })
    })
}

const question = document.querySelector(".question")
const options = document.querySelectorAll(".option")
const endDisplay = document.querySelector(".end-display")

let questionNo = 0

// first qustion is ready
questionReady(questionNo)



// const hi = document.querySelector(".hi")

// hi.addEventListener("click", ()=>{
//     console.log("hi")
//     endDisplay.classList.toggle("display")
// })

