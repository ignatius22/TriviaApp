import { Sad } from "@/components/Sad";
import { Smile } from "@/components/Smile";
import { rem, vh, vw } from "@/constants/helper";
import { RouteProp, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React from "react";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";

type ResultScreenRouteProp = RouteProp<{
  ResultScreen: {
    correctAnswers?: number;
    incorrectAnswers?: number;
    timeUsed?: string;
  };
}>;

const ResultScreen: React.FC = () => {
  const route = useRoute<ResultScreenRouteProp>();
  const {
    correctAnswers = 0,
    incorrectAnswers = 0,
    timeUsed = "00:00",
  } = route.params || {};

  // Determine if the user has won based on the number of correct answers
  const hasWon = correctAnswers >= 7;

  return (
    <ImageBackground
      source={require("@/assets/images/game_bg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView>
        <View style={styles.container}>
          <View>
            <View>
              <Text style={styles.resultText}>Results</Text>
            </View>
            <View style={styles.resultBox}>
              <Text style={styles.statisticText}>
                Total Time Used: {timeUsed}
              </Text>
              <View style={styles.statistic}>
                <View style={styles.grade}>
                  <Text style={styles.gradeText}>{correctAnswers} Correct</Text>
                  <Image source={require("@/assets/images/markgrn.png")} />
                </View>
                <View style={styles.bar} />
                <View style={styles.grade}>
                  <Text style={styles.gradeText}>
                    {incorrectAnswers} Incorrect
                  </Text>
                  <Image source={require("@/assets/images/cancel.png")} />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.reactionBox}>
            {hasWon ? <Smile /> : <Sad />}
            {!hasWon && (
              <Text style={styles.reactSubtitle}>Better luck next time</Text>
            )}
            <Text style={styles.reactTitle}>
              {hasWon ? "Congratulations You Won 🎉" : "Sorry you Didn't win"}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View>
        <Link href={{ pathname: "/" }} asChild>
          <TouchableOpacity style={styles.optionButton} activeOpacity={0.8}>
            <Text style={styles.resultBtn}>Go Home</Text>
          </TouchableOpacity>
        </Link>
        {/* Gradient applied only to bottom border */}
        <LinearGradient
          colors={["#FEE65E", "#ED7B2B"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientBorder}
        />
      </View>
    </ImageBackground>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#17478B",
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 45,
  },
  reactionBox: {
    width: "100%",
    height: vh(37),
    borderColor: "#00CBF7",
    borderWidth: 4,
    borderRadius: 10,
    marginTop: "10%",
    backgroundColor: "#DFF9FF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
    padding: 20,
  },
  resultBox: {
    width: "100%",
    height: vh(13),
    borderColor: "#00CBF7",
    borderWidth: 4,
    borderRadius: 10,
    marginTop: "10%",
    backgroundColor: "#DFF9FF",
    padding: 20,
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
  resultText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "DMSans_18ptBold",
    lineHeight: rem(44),
    textAlign: "center",
  },
  statistic: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    alignItems: "center",
    marginTop: 5,
  },
  bar: {
    borderColor: "#5A5A5A",
    borderWidth: 0.5,
    height: vh(4),
  },
  grade: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  gradeText: {
    color: "#1B1B1B",
    fontFamily: "SpaceGroteskSemiBold",
    lineHeight: 20,
    fontSize: 14,
  },
  statisticText: {
    color: "#000000",
    fontFamily: "SpaceGroteskSemiBold",
    fontSize: 12,
  },
  reactTitle: {
    color: "#000000",
    fontFamily: "SpaceGroteskSemiBold",
    fontSize: 20, // Larger font size for title
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 10, // Space between title and subtitle
  },
  reactSubtitle: {
    color: "#000000",
    fontFamily: "SpaceGroteskSemiBold",
    fontSize: 14, // Smaller font size for subtitle
    lineHeight: 20,
    textAlign: "center",
    padding: 4,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00CBF7",
    height: Platform.OS === "ios" ? vh(8) : vh(10),
    borderRadius: rem(100),
    marginHorizontal: Platform.OS === "ios" ? vw(7) : vw(8),
    marginBottom:Platform.OS === "ios" ?  vh(4.8) : vh(7),
    justifyContent: "center",
  },
  resultBtn: {
    color: "#3B3B3B",
    fontFamily: "SpaceGroteskSemiBold",
    lineHeight: 24,
    fontSize: 18,
  },
  gradientBorder: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderBottomWidth: 25,
    zIndex: -2222,
    marginHorizontal: 30,
    marginBottom: 12,
  },
});
