class triviaApi {
    constructor() {
        this.baseUrl = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple'
    }

    async getQuestions() {
        const result = await axios.get(this.baseUrl);
        //console.log(result.data.results)
        return result.data.results
    }
}

const filmTrivia = new triviaApi
let currentQuestionIndex = 0

const getQ = async () => {
    try {
        const questions = await filmTrivia.getQuestions()
        let tracker = 0
        popQuestion(questions[currentQuestionIndex]);

        function popQuestion(element) {
            const bodyQuiz = document.querySelector('.quiz__body');
            const progressEl = document.querySelector('.quiz__progress');
            let page = currentQuestionIndex + 1;
            progressEl.innerText = `Question ${page}/10`;
        
            const titleEl = document.querySelector('.quiz__body-title');
            titleEl.innerHTML = element.question;
        
            element.incorrect_answers.push(element.correct_answer);
            const quiz = shuffleArray(element.incorrect_answers);
        
            quiz.forEach((answer, index) => {
                let optionEl = document.querySelector(`.quiz__body-options${index + 1}`);
                
                // Remove previous event listeners by cloning the option elements the question basically
                let newOptionEl = optionEl.cloneNode(true);
                newOptionEl.innerHTML = answer;
                optionEl.parentNode.replaceChild(newOptionEl, optionEl);
        
                newOptionEl.addEventListener('click', (event) => {
                    for (let i = 1; i <= 4; i++) {
                        //same here, needing to replacechild for new options answers
                        let optEl = document.querySelector(`.quiz__body-options${i}`);
                        let optClone = optEl.cloneNode(true);
                        optEl.parentNode.replaceChild(optClone, optEl);
                    }
        
                    if (answer=== element.correct_answer) {
                        newOptionEl.classList.add('quiz__body-options--right');
                        tracker++; 
                    } else {
                        newOptionEl.classList.add('quiz__body-options--wrong');
                    }
        
                    const resultEl = document.querySelector('.quiz__result');
                    resultEl.innerText = `Congratulations! You got ${tracker} questions right.`;
                    if (currentQuestionIndex < questions.length - 1) {
                        currentQuestionIndex++;
                        setTimeout(() => popQuestion(questions[currentQuestionIndex]), 1000);
                        bodyQuiz.classList.remove('quiz__body');
                    } else {
                        resultEl.classList.add('quiz__result--end');
                    }
                });
            });
        }
    }

    catch (e) {
        console.log(e)
    }
}

getQ()




function shuffleArray(values) {
    let index = values.length,
        randomIndex;
    while (index != 0) {
        randomIndex = Math.floor(Math.random() * index);
        index--;
        [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
    }

    return values
}


