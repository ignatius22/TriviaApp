import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

const GameScreen = () => {
  return (
    <ImageBackground
      source={require("@/assets/images/game_bg.png")} // Update the path to your image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Other content of your GameScreen can go here */}
        <View style={styles.countDown}>
          <View style={styles.stopwatchCont}>
            <View style={styles.stopwatch}>
              <Image source={require("@/assets/images/stopwatch.png")} />
              <Text style={styles.countDownText}>00.00.40</Text>
            </View>
            <View style={styles.progress}>
              <Text style={styles.timer}>10</Text>
            </View>
          </View>
          <View></View>
          <View></View>
        </View>
        <View style={styles.questionBox}>
          <View style={styles.questionOptions}>
            <Text style={styles.questionNum}>Question 1</Text>
            <Text style={styles.questionText}>
              Who was the First President of the United States ?
            </Text>
          </View>
        </View>
        <View style={styles.optionsBox}>
          <View>
            <Text style={styles.optionBoxText}>Choose Correct Option</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.optionButton}>
              <View style={styles.letterOption}>
                <Text style={styles.optionLetter}>A.</Text>
                <Text style={styles.optionText}>George Washington</Text>
              </View>

              <View style={styles.mark}>
                <Image
                  source={require("@/assets/images/mark.png")}
                  style={styles.markImg}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // width: '100%',
    // height: '100%',
    backgroundColor: "#17478BB2",
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  text: {
    color: "#fff",
    fontSize: 24,
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
    fontFamily: " SpaceGroteskRegular",
    lineHeight: 20,
    color: "#FFFFFF",
  },
  countDown: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "20%",
    alignItems: "center",
  },
  countDownText: {
    fontSize: 14,
    fontFamily: " SpaceGroteskLight",
    lineHeight: 20,
    color: "#FFFFFF",
  },
  stopwatch: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  stopwatchCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
  },
  questionBox: {
    width: "100%",
    height: 182,
    borderColor: "#00CBF7",
    borderWidth: 8,
    borderRadius: 10,
    marginTop: "10%",
    backgroundColor: "#FFFFFF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  questionNum: {
    fontSize: 20,
    color: "#000000",
    textAlign: "center",
    fontFamily: " SpaceGroteskBold",
    lineHeight: 32,
  },
  questionOptions: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  questionText: {
    fontSize: 16,
    color: "#1B1B1B",
    textAlign: "center",
    fontFamily: " SpaceGroteskSemiBold",
    lineHeight: 24,
    paddingTop: 10,
  },
  optionsBox: {
    flexDirection: "column",
    marginTop: "10%",
  },
  optionBoxText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: " SpaceGroteskSemiBold",
    lineHeight: 30,
  },
  mark: {
    backgroundColor: "#62F694",
    borderRadius: 30,
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  markImg: {
    backgroundColor: "#62F694",
  },
  optionLetter: {
    fontSize: 18,
    color: "#1B1B1B",
    fontFamily: " SpaceGroteskBold",
    lineHeight: 20,
  },
  optionText: {
    fontSize: 16,
    color: "#1B1B1B",
    fontFamily: " SpaceGroteskLight",
    lineHeight: 20,
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
    marginTop: 15,
  },
  letterOption:{
    flexDirection:'row',
    width:'56%',
    justifyContent:'space-between',
    alignItems:'center'
  }
});
