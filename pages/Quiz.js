import styles from "../styles/Quiz.module.css";
import React, { useState, useEffect } from 'react';
import classNames from "classnames";


function Quiz() {
    const questions = [
        {
            question: 'What is the primary focus of Green Cloud Computing, beyond minimizing energy consumption?',
            options: ['Improving operational cost', 'Maximizing e-waste in data centers', 'Increasing carbon emissions', 'Boosting server reliability'],
            correctAnswer: 'Boosting server reliability',
        },
        {
            question: 'Which application of Green Cloud Computing involves real-time services for smart devices with low latency and mobility?',
            options: ['Green Parallel Computing', 'Green AI Cloud', 'Green Internet of Things (IoT)', 'Autonomous vehicles'],
            correctAnswer: 'Green Internet of Things (IoT)',
        },
        {
            question: 'What is the primary purpose of using a global search algorithm in the Optimal Parameter Search layer in Green Cloud Computing?',
            options: ['Reducing energy consumption', 'Locating a global optimum', 'Increasing operational cost', 'Enhancing server utility rate'],
            correctAnswer: 'Locating a global optimum',
        },
        {
            question: 'How does real-time video streaming, especially on platforms like Netflix, impact energy consumption and carbon footprint according to the provided information?',
            options: ['It has no significant impact', 'It reduces carbon emissions', 'It may overstate climate impact by up to 90 times', 'It consumes negligible energy'],
            correctAnswer: 'It may overstate climate impact by up to 90 times',
        },
        {
            question: 'What is a key factor in achieving sustainability in data centers, as emphasized in the text?',
            options: ['Maximizing carbon emissions', 'Optimizing resource utility', 'Increasing waste production', 'Encouraging energy inefficiency'],
            correctAnswer: 'Optimizing resource utility',
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
                    <p className={styles.Ende}>Quiz completed! Your score is: {score}/{questions.length}</p>
                    <div className={styles.positionButton}>
                        <button className={styles['restart-button']} onClick={handleRestart}>
                            Restart
                        </button>
                    </div>
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
                                className={
                                    classNames(styles.button, {
                                        [styles.CloudCorrect]: selectedAnswer === option && option === questions[currentQuestion].correctAnswer,
                                        [styles.CloudIncorrect]: selectedAnswer === option && option !== questions[currentQuestion].correctAnswer,
                                    })
                                }
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