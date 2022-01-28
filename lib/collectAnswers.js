const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// export the collectAnswer function as a module
// create default dummy function f => f doesn't return anything; make the done function optional for the caller 
module.exports = (questions, done = f => f) => {
    const answers = []
    // deconstruct the array
    const [firstQuestion] = questions
    //console.log(firstQuestion)

    const { EventEmitter } = require("events") // so no need to preface it with events.
    const emitter = new EventEmitter()

    //done(answers)
    const questionAnswered = answer => {
        answers.push(answer)
        emitter.emit("answer", answer)

        if (answers.length < questions.length){
            rl.question(questions[answers.length], questionAnswered)
        } else {
            done(answers)
            emitter.emit("complete", answers)
            }
        }
    rl.question(firstQuestion, questionAnswered)

    return emitter
}