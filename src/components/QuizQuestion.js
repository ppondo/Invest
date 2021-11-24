import { Questions } from "../QuizModel";
import React from "react";

export const QuizQuestion = (props) => {
    const [currentPage, setCurrentPage] = React.useState(0);
    const [result, setResult] = React.useState(0);
    const [correct, setCorrect] = React.useState("");  
    const [currentAnswer, setCurrentAnswer] = React.useState(null);
    const questions = Questions

    const handleSubmit = (e) => {
        e.preventDefault()
        setCurrentAnswer(e.target.answer.value)
        if (e.target.answer.value === questions[currentPage].ans) {
            setCorrect("Correct! Well Done!");
            setResult(result + 1);
        } else {
            setCorrect(`Close! The correct answer is ${questions[currentPage].ans}`);
        }
    }

    const handleNextQuestion = (e) => {
        e.preventDefault();
        setCurrentAnswer(null);
        setCorrect("");
        setCurrentPage(currentPage + 1);
    }

    const createInputs = () => {
        let inputs;
        if (questions[currentPage].ansList.length === 2) {
            inputs = <div>
                        <input 
                            type="radio" name="answer" value={questions[currentPage].ansList[0]}
                        />{questions[currentPage].ansList[0]}<br/>
                        <input 
                            type="radio" name="answer" value={questions[currentPage].ansList[1]}
                        />{questions[currentPage].ansList[1]}
                    </div>
        } else {
            inputs = <div>
                        <input 
                            type="radio" name="answer" value={questions[currentPage].ansList[0]}
                        />{questions[currentPage].ansList[0]}<br/>
                        <input 
                            type="radio" name="answer" value={questions[currentPage].ansList[1]}
                        />{questions[currentPage].ansList[1]}<br/>
                        <input 
                            type="radio" name="answer" value={questions[currentPage].ansList[2]}
                        />{questions[currentPage].ansList[2]}<br/>
                        <input 
                            type="radio" name="answer" value={questions[currentPage].ansList[3]}
                        />{questions[currentPage].ansList[3]}
                    </div>
        }
        return inputs
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Question {currentPage + 1}</h1>
                <h3>{questions[currentPage].question}</h3>
                {createInputs()}
                <button type="submit">Check Answer</button>
            </form>
            <p>{correct}</p>
            <button onClick={handleNextQuestion}>Next</button>
        </div>
    );
};