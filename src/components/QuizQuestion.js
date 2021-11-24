import { QuizModel } from "../QuizModel";
import React from "react";

export const QuizQuestion = (props) => {
    const [currentPage, setCurrentPage] = React.useState(0);
    const [result, setResult] = React.useState(0);
    const [correct, setCorrect] = React.useState("");  
    const [currentAnswer, setCurrentAnswer] = React.useState(null);

    let inputs;
    if (QuizModel[currentPage].ansList.length === 2) {
        inputs = <div>
                    <input type="radio" name="answer" onChange={handleChange} value={QuizModel[currentPage].ansList[0]}/>
                    <input type="radio" name="answer" onChange={handleChange} value={QuizModel[currentPage].ansList[1]}/>
                </div>
    } else {
        inputs = <div>
                    <input type="radio" name="answer" onChange={handleChange} value={QuizModel[currentPage].ansList[0]}/>
                    <input type="radio" name="answer" onChange={handleChange} value={QuizModel[currentPage].ansList[1]}/>
                    <input type="radio" name="answer" onChange={handleChange} value={QuizModel[currentPage].ansList[2]}/>
                    <input type="radio" name="answer" onChange={handleChange} value={QuizModel[currentPage].ansList[4]}/>
                </div>
    }

    const handleChange = (e) => {
        e.preventDefault();
        setCurrentAnswer(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (currentAnswer === QuizModel[currentPage].ans) {
            setCorrect("Correct! Well Done!");
            setResult(result + 1);
        } else {
            setCorrect(`Close! The correct answer is ${QuizModel[currentPage].ans}`);
        }
    }

    const handleNextQuestion = (e) => {
        e.preventDefault();
        setCurrentAnswer(null);
        setCorrect("");
        setCurrentPage(currentPage + 1);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Question {currentPage}</h1>
                <h3>{QuizModel[currentPage].question}</h3>
                {inputs}
                <button type="submit">Check Answer</button>
            </form>
            <p>{correct}</p>
            <button onClick={handleNextQuestion}>Next</button>
        </div>
    );
}