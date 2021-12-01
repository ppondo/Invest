import React from "react";

const ResultContext = React.createContext({});

const ResultProvider = (props) => {
    const [ score, setScore ] = React.useState(0);
    const updateScore = (newScore) => {
        setScore(newScore)
    }
    const value = {
        score,
        setScore,
        updateScore
    }
    return (
        <ResultContext.Provider
            value={value}
        >
            {props.children}
        </ResultContext.Provider>
    );
}
export { ResultContext, ResultProvider };