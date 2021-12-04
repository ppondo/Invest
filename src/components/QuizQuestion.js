import { Questions } from "../QuizModel";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ResultContext } from "./ResultContext";
import {
  Grid,
  Box,
  Card,
  Button,
  CardContent,
  Typography,
} from "@mui/material";

export const QuizQuestion = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [correct, setCorrect] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [currentScore, setCurrentScore] = useState(0);
  const [enabledCheck, setEnabledCheck] = useState(true);
  const [enabledNext, setEnabledNext] = useState(false);
  const questions = Questions;
  const navigate = useNavigate();
  const { updateScore } = useContext(ResultContext);

  const handleChange = (e) => {
    setCurrentAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnabledCheck(false);
    setEnabledNext(true);
    if (currentAnswer === questions[currentPage].ans) {
      setCurrentScore(currentScore + 1);
      setCorrect("Correct! Well Done!");
    } else {
      setCorrect(`Close! The correct answer is ${questions[currentPage].ans}`);
    }
    document.getElementById("question" + currentPage).disabled = true;
  };

  const handleNextQuestion = (e) => {
    e.preventDefault();
    setCurrentAnswer("");
    setCorrect("");
    setEnabledCheck(true);
    setEnabledNext(false);
    document.getElementById("question" + currentPage).reset();
    if (currentPage === 6) {
      setEnabledCheck(false);
      setEnabledNext(false);
      updateScore(currentScore);
      navigate("/result");
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnabledCheck(false);
    setEnabledNext(true);
    if (currentAnswer === questions[currentPage].ans) {
      setCurrentScore(currentScore + 1);
      setCorrect("Correct! Well Done!");
    } else {
      setCorrect(`Close! The correct answer is ${questions[currentPage].ans}`);
    }
  };

  const handleNextQuestion = (e) => {
    e.preventDefault();
    setCurrentAnswer("");
    setCorrect("");
    setEnabledCheck(true);
    setEnabledNext(false);
    document.getElementById("question" + currentPage).reset();
    if (currentPage === 6) {
      setEnabledCheck(false);
      setEnabledNext(false);
      updateScore(currentScore);
      navigate("/result");
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const createInputs = () => {
    let inputs;
    if (questions[currentPage].ansList.length === 2) {
      inputs = (
        <div className="inputs">
          <input
            type="radio"
            name={"answer" + currentPage}
            value={questions[currentPage].ansList[0]}
            onChange={handleChange}
            onClick={handleChange}
          />
          {questions[currentPage].ansList[0]}
          <br />
          <input
            type="radio"
            name={"answer" + currentPage}
            value={questions[currentPage].ansList[1]}
            onChange={handleChange}
            onClick={handleChange}
          />
          {questions[currentPage].ansList[1]}
        </div>
      );
    } else {
      inputs = (
        <div className="inputs">
          <input
            type="radio"
            name={"answer" + currentPage}
            value={questions[currentPage].ansList[0]}
            onChange={handleChange}
            onClick={handleChange}
          />
          {questions[currentPage].ansList[0]}
          <br />
          <input
            type="radio"
            name={"answer" + currentPage}
            value={questions[currentPage].ansList[1]}
            onChange={handleChange}
            onClick={handleChange}
          />
          {questions[currentPage].ansList[1]}
          <br />
          <input
            type="radio"
            name={"answer" + currentPage}
            value={questions[currentPage].ansList[2]}
            onChange={handleChange}
          />
          {questions[currentPage].ansList[2]}
          <br />
          <input
            type="radio"
            name={"answer" + currentPage}
            value={questions[currentPage].ansList[3]}
            onChange={handleChange}
          />
          {questions[currentPage].ansList[3]}
        </div>
      );
    }
    return inputs;
  };

  const createForm = (inputs) => {
    let form = (
      <form id={"question" + currentPage} onSubmit={handleSubmit}>
        <h1 className="question">Question {currentPage + 1}</h1>
        <h2>{questions[currentPage].question}</h2>
        {inputs}
        <Button variant="contained" disabled={!enabledCheck} type="submit">
          Check Answer
        </Button>
      </form>
    );
    return form;
  };

  let html = "";
  if (correct === "Correct! Well Done!") {
    html = <p className="success">{correct}</p>;
  } else {
    html = <p className="error">{correct}</p>;
  }

  return (
    <Box
      sx={{ mt: 7, ml: 7, mb: 10 }}
      justifyContent="center"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{ width: 900, height: 450 }}
        variant="outlined"
        style={{ backgroundColor: "rgba(234, 252, 252, 1)" }}
      >
        <CardContent>
          {createForm(createInputs())}
          {html}
          <Box
            sx={{ mt: 7, mr: 7, mb: 10 }}
            justifyContent="right"
            style={{
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
            }}
          >
            <Button
              variant="contained"
              disabled={!enabledNext}
              onClick={handleNextQuestion}
            >
              Next
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
