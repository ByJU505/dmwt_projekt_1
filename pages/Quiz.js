//import React from 'react';
import styles from "../styles/Quiz.module.css";
import React, { useState, useEffect } from 'react';


function Quiz() {
    const questions = [
        {
            question: 'Was ist die Hauptstadt von Frankreich?',
            options: ['Berlin', 'Madrid', 'Paris', 'Rom'],
            correctAnswer: 'Paris',
        },
        {
            question: 'Welches ist das größte Säugetier der Welt?',
            options: ['Elefant', 'Walhai', 'Giraffe', 'Blauwal'],
            correctAnswer: 'Blauwal',
        },
        {
            question: 'Wie viele Planeten gibt es in unserem Sonnensystem?',
            options: ['7', '8', '9', '10'],
            correctAnswer: '8',
        },
        {
            question: 'Wer hat die Relativitätstheorie entwickelt?',
            options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nikola Tesla'],
            correctAnswer: 'Albert Einstein',
        },
        {
            question: 'Welches Element hat das chemische Symbol "O"?',
            options: ['Sauerstoff', 'Gold', 'Kohlenstoff', 'Eisen'],
            correctAnswer: 'Sauerstoff',
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleAnswerClick = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        setAnsweredQuestions([...answeredQuestions, { index: currentQuestion, correct: selectedOption === questions[currentQuestion].correctAnswer }]);

        setSelectedAnswer(selectedOption);

        // Warte 1 Sekunde und wechsle zur nächsten Frage
        setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedAnswer(null);
            } else {
                // Quiz beendet
                setQuizCompleted(true);
            }
        }, 1000);
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setScore(0);
        setAnsweredQuestions([]);
        setSelectedAnswer(null);
        setQuizCompleted(false);
    };

    useEffect(() => {
        // Ändere die Farbe des letzten Registers nach der letzten Antwort
        if (answeredQuestions.length === questions.length) {
            const lastRegister = document.getElementById(`register-${questions.length - 1}`);
            if (lastRegister) {
                lastRegister.classList.add(answeredQuestions[answeredQuestions.length - 1].correct ? styles.correct : styles.incorrect);
            }
        }
    }, [answeredQuestions, questions.length]);

    return (
        <div className={styles['quiz-container']}>
            <h1>Quiz</h1>
            <div className={styles['register-container']}>
                <div className={styles['register']}>
                    {questions.map((q, index) => (
                        <span
                            key={index}
                            id={`register-${index}`}
                            className={
                                index === currentQuestion
                                    ? styles.active
                                    : answeredQuestions[index] && answeredQuestions[index].correct
                                        ? styles['correct']
                                        : answeredQuestions[index]
                                            ? styles['incorrect']
                                            : ''
                            }
                        >
              {index + 1}
            </span>
                    ))}
                </div>
            </div>
            {quizCompleted ? (
                <>
                    <p>Quiz beendet! Dein Punktestand ist {score}/{questions.length}</p>
                    <button className={styles['restart-button']} onClick={handleRestart}>
                        Neustart
                    </button>
                </>
            ) : (
                <>
                    <div className={styles['question']}>
                        <p>{questions[currentQuestion].question}</p>
                    </div>
                    <div className={styles['options-grid']}>
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerClick(option)}
                                className={styles.button}
                                style={{
                                    backgroundColor:
                                        selectedAnswer === option
                                            ? option === questions[currentQuestion].correctAnswer
                                                ? 'green'
                                                : 'red'
                                            : '',
                                }}
                                disabled={selectedAnswer !== null}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Quiz;