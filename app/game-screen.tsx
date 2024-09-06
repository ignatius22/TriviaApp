import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
} from "react-native";
import useGame from "@/hooks/useGame";
import CountdownTimer from "@/components/CountdownTimer";
import QuestionBox from "@/components/QuestionBox";
import OptionsBox from "@/components/OptionsBox";

const GameScreen: React.FC = () => {
  const {
    loading,
    questions,
    currentQuestionIndex,
    timer,
    selectedAnswer,
    handleAnswerSelection,
  } = useGame();

  if (loading) {
    return (
      <ImageBackground
        source={require("@/assets/images/game_bg.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.container}>
          <ActivityIndicator size="large" color="#DFF9FF" />
        </SafeAreaView>
      </ImageBackground>
    );
  }

  // Ensure questions and the current question exist before accessing properties
  const question = questions?.[currentQuestionIndex];

  if (!question) {
    return (
      <ImageBackground
        source={require("@/assets/images/game_bg.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.errorContainer}>
          <Text style={styles.reactTitle}>No question available.</Text>
        </View>
      </ImageBackground>
    );
  }

  // Safely handle incorrect_answers and correct_answer using fallback values
  const options = [
    ...(question.incorrect_answers || []),
    question.correct_answer || "",
  ];

  return (
    <ImageBackground
      source={require("@/assets/images/game_bg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <CountdownTimer
          timer={timer}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
        />
        <QuestionBox
          question={decodeURIComponent(question.question)}
          questionIndex={currentQuestionIndex}
        />
        <OptionsBox
          options={options}
          selectedAnswer={selectedAnswer}
          correctAnswer={question.correct_answer}
          handleAnswerSelection={handleAnswerSelection}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#17478B",
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "#ff0000",
  },
  reactTitle: {
    color: "#F9F9F9",
    fontFamily: "SpaceGroteskSemiBold",
    fontSize: 25, // Larger font size for title
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 10, // Space between title and subtitle
  },
});

export default GameScreen;
