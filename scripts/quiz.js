class triviaApi {
    constructor() {
        this.baseUrl = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple'
    }

    async getQuestions() {
        const result = await axios.get(this.baseUrl);
        return result.data.results
    }
}

const filmTrivia = new triviaApi
let currentQuestionIndex = 0
let tracker = 0

const getQ = async () => {
    try {
        const questions = await filmTrivia.getQuestions();
        let currentQuestionIndex = 0;
        let tracker = 0;

        const quizEl = document.querySelector('.quiz');
        const progressEl = document.querySelector('.quiz__progress');
        const quizbodyEl = document.querySelector('.quiz__body')
        const resultEl = document.querySelector('.quiz__result');

        const displayQuestion = (question) => {
            if (currentQuestionIndex < questions.length) {
                progressEl.innerHTML = `Question ${currentQuestionIndex + 1}/10`;
                const titleEl = document.querySelector('.quiz__body-title');
                titleEl.innerHTML = question.question;

                const options = shuffleArray([...question.incorrect_answers, question.correct_answer]);
                const optionsEl = document.querySelectorAll('.quiz__body-options');

                optionsEl.forEach((element, i) => {
                    element.innerHTML = options[i];
                    element.classList.remove('quiz__body-options--right', 'quiz__body-options--wrong');
                });

                optionsEl.forEach((element) => {
                    element.addEventListener('click', ClickHandler);
                });
            }
            else {
                resultEl.innerHTML = `Congratulations! You got ${tracker} questions right.`;
                resultEl.classList.add('quiz__result--end');
                quizEl.removeChild(quizbodyEl)
                quizEl.removeChild(progressEl)
            }
        };

        const ClickHandler = (event) => {
            if (event.target.innerHTML === questions[currentQuestionIndex].correct_answer) {
                event.target.classList.add('quiz__body-options--right');
                tracker++;
            }
            else {
                event.target.classList.add('quiz__body-options--wrong');
            }
            const optionsEl = document.querySelectorAll('.quiz__body-options');
            optionsEl.forEach((optionEl) => {
                optionEl.removeEventListener('click', ClickHandler);
            });

            setTimeout(() => {
                currentQuestionIndex++;
                displayQuestion(questions[currentQuestionIndex]);
            }, 1000);
        };


        displayQuestion(questions[currentQuestionIndex]);
    } catch (e) {
        console.log(e);
    }
};

getQ();


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


