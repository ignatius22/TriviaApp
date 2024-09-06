// components/QuestionBox.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const QuestionBox: React.FC<{ question: string; questionIndex: number }> = ({ question, questionIndex }) => (
  <View style={styles.questionBox}>
    <Text style={styles.questionNum}>Question {questionIndex + 1}</Text>
    <Text style={styles.questionText}>{question}</Text>
  </View>
);

const styles = StyleSheet.create({
  questionBox: {
    width: "100%",
    height: 182,
    borderColor: "#00CBF7",
    borderWidth: 8,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  questionNum: {
    fontSize: 20,
    color: "#000000",
    fontFamily: "SpaceGroteskBold",
    lineHeight: 32,
  },
  questionText: {
    fontSize: 16,
    color: "#1B1B1B",
    textAlign: "center",
    fontFamily: "SpaceGroteskSemiBold",
    lineHeight: 24,
    paddingTop: 10,
  },
});

export default QuestionBox;
