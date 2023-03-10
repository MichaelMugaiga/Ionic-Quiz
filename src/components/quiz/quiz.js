import { QuizResults } from "./quizr";
import QuizCards from "./quizCard";
import { useState } from "react";
import quizData from "../../data/quizData.json";

export function Quiz() {
    const [showResult, setShowResult] = useState(false);
    const [questionId, setQuestionId] = useState(0);
    const [score, setScore] = useState(0);
    const quizLength = quizData.length;

    const handleAnswer = (isCorrect) => {
        if (isCorrect === true) setScore(score + 1);
        console.log({ score });

        const newQuestionId = questionId + 1;

        if (newQuestionId < quizLength) {
            setQuestionId(newQuestionId);
        } else {
            setShowResult(true);
        }
    };

    const handleReset = () => {
        setShowResult(false);
        setQuestionId(0);
        setScore(0);
    };

    return (
        <>
            {showResult ? (
                <QuizResults
                    score={score}
                    quizLength={quizLength}
                    handleReset={handleReset}
                />
            ) : (
                <QuizCards
                    quizData={quizData}
                    questionId={questionId}
                    quizLength={quizLength}
                    handleAnswer={handleAnswer}
                />
            )}
        </>
    );
}
