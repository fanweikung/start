const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// create default dummy function; make the done function optional 
module.exports = (questions, done = f => f) => {
    const answers = []
    // deconstruct the array
    const [firstQuestion] = questions
    //console.log(firstQuestion)

    //done(answers)
    const questionAnswered = answer => {
        answers.push(answer)
        if (answers.length < questions.length){
            rl.question(questions[answers.length], questionAnswered)
        } else {
            done(answers)
            }
        }
    rl.question(firstQuestion, questionAnswered)
}