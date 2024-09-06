import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const Loading: React.FC = () => {
  return (
    <ImageBackground
      source={require("@/assets/images/game_bg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.loaderText}>Loading...</Text>
      </View>
    </ImageBackground>
  );
};

export default Loading;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#17478B",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center"
  },
  loaderText:{
    fontSize: 28,
    color: "#F9F9F9",
    fontFamily: "SpaceGroteskBold",
    marginRight: 10,
  }
});

// if (questions === null) {
//     return <Text>Error loading questions. Please try again later.</Text>;
//   }


