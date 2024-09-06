import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useRouter } from "expo-router";

interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

const useGame = () => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(10);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const router = useRouter();

  // Fetch questions
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple&encode=url3986"
        );
        if (Array.isArray(response.data.results)) {
          setQuestions(response.data.results);
        } else {
          console.error("Unexpected data format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  // Timer countdown
  useEffect(() => {
    if (gameEnded) return;

    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      if (timer === 0) {
        handleNextQuestion();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, gameEnded]);

  // Handle the next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setTimer(10);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      handleEndGame();
    }
  };

  // Handle answer selection
  const handleAnswerSelection = (option: string) => {
    if (!selectedAnswer) {
      setSelectedAnswer(option);
      const correct = option === questions[currentQuestionIndex].correct_answer;
      setIsCorrect(correct);
      if (correct) setScore((prev) => prev + 1);
      setTimeout(handleNextQuestion, 3000); // Delay before moving to next question
    }
  };

  // End the game
  const handleEndGame = useCallback(() => {
    if (!questions.length || gameEnded) return;

    setGameEnded(true);
    const incorrectAnswers = questions.length - score;
    const timeUsed = `00:00:${timer < 10 ? `0${timer}` : timer}`;

  // Check if the user won (7 or more correct answers)
  const hasWon = score >= 7;

    router.push({
      pathname: "/result-screen",
      params: {
        correctAnswers: score,
        incorrectAnswers,
        timeUsed,
        isCorrect: isCorrect?.toString() || "null",
        hasWon: hasWon.toString(), // Pass whether the player won or lost

      },
    });
  }, [gameEnded, questions, score, timer, router, isCorrect]);

  return {
    loading,
    questions,
    currentQuestionIndex,
    timer,
    selectedAnswer,
    isCorrect,
    score,
    gameEnded,
    handleAnswerSelection,
    handleNextQuestion,
    handleEndGame,
  };
};

export default useGame;
