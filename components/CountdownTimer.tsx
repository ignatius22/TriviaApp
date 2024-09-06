// components/CountdownTimer.tsx
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface CountdownTimerProps {
  timer: number;
  currentQuestionIndex: number;
  totalQuestions: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  timer,
  currentQuestionIndex,
  totalQuestions,
}) => {
  return (
    <View style={styles.countDown}>
      <View style={styles.stopwatchCont}>
        <View style={styles.stopwatch}>
          <Image source={require("@/assets/images/stopwatch.png")} />
          <Text style={styles.countDownText}>
            00:00:{timer < 10 ? `0${timer}` : timer}
          </Text>
        </View>
        <View style={styles.progress}>
          <Text style={styles.timer}>
            {currentQuestionIndex + 1}/{totalQuestions}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  countDown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  stopwatchCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
  },
  stopwatch: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  countDownText: {
    fontSize: 14,
    fontFamily: "SpaceGroteskLight",
    lineHeight: 20,
    color: "#FFFFFF",
  },
  progress: {
    borderRadius: 30,
    borderWidth: 4,
    height: 43,
    width: 43,
    borderColor: "#10DC78",
    justifyContent: "center",
  },
  timer: {
    fontSize: 10,
    textAlign: "center",
    fontFamily: "SpaceGroteskRegular",
    lineHeight: 20,
    color: "#FFFFFF",
  },
});

export default CountdownTimer;
