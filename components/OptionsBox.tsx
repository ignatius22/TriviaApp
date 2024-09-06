import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";


const OptionsBox: React.FC<{
  options: string[];
  selectedAnswer: string | null;
  correctAnswer: string;
  handleAnswerSelection: (option: string) => void;
}> = ({ options, selectedAnswer, correctAnswer, handleAnswerSelection }) => (
  <View style={styles.optionsBox}>
    {options.map((option, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.optionButton,
          selectedAnswer
            ? option === correctAnswer
              ? styles.correctAnswer
              : option === selectedAnswer
              ? styles.incorrectAnswer
              : styles.optionButton
            : styles.optionButton,
        ]}
        onPress={() => handleAnswerSelection(option)}
        activeOpacity={0.8}
        disabled={!!selectedAnswer}
      >
        <View style={styles.letterOption}>
          <Text style={styles.optionLetter}>
            {String.fromCharCode(65 + index)}.
          </Text>
          <Text
            style={[
              styles.optionText,
              selectedAnswer
                ? option === correctAnswer
                  ? styles.optionTextColor
                  : option === selectedAnswer
                  ? styles.optionTextColor
                  : null
                : null,
            ]}
          >
            {decodeURIComponent(option)}
          </Text>
        </View>
        {selectedAnswer && (
          <Image
            source={
              option === correctAnswer
                ? require("@/assets/images/markgrn.png") // Correct answer
                : require("@/assets/images/cancel.png") // Incorrect answer
            }
            style={{ width: 24, height: 24 }} // Adjust the size of the images
          />
        )}
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  optionsBox: {
    flexDirection: "column",
    marginBottom: 20,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#F9F9F9",
    height: 66,
    borderRadius: 100,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  letterOption: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  optionLetter: {
    fontSize: 16,
    color: "#1B1B1B",
    fontFamily: "SpaceGroteskMedium",
    lineHeight: 24,
  },
  optionText: {
    fontSize: 14,
    color: "#000000",
    fontFamily: "SpaceGroteskRegular",
    lineHeight: 20,
  },
  optionTextColor: {
    color: "#FFFFFF",
  },
  correctAnswer: {
    backgroundColor: "#009028",
    borderWidth: 4,
    borderColor: "#00EA62",
  },
  incorrectAnswer: {
    backgroundColor: "#C30012",
    borderWidth: 4,
    borderColor: "#F69798",
  },
});

export default OptionsBox;
