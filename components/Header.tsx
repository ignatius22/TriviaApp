import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { HelloWave } from "./HelloWave";
import { rem, vw } from "@/constants/helper";

const Header: React.FC = () => {
  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.header}
      imageStyle={styles.image}
      resizeMode="cover"
    >
      <View style={styles.profileSection}>
        <View style={{ flexDirection: "column", gap: rem(15) }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: vw(90),
            }}
          >
            <Image
              source={require("@/assets/images/avatar.png")}
              style={styles.avatar}
            />
            <View style={styles.balanceContainer}>
              <View style={styles.eraser}>
                <TouchableOpacity activeOpacity={0.3}>
                  <Image source={require("@/assets/images/eraser.png")} />
                </TouchableOpacity>
                <Text style={styles.countText}>0</Text>
              </View>
              <View style={styles.joinButton}>
                <Text style={styles.joinButtonText}>₦5,000.00</Text>
                <TouchableOpacity activeOpacity={0.3}>
                  <Image
                    source={require("@/assets/images/plus.png")}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity activeOpacity={0.3}>
                <Image
                  source={require("@/assets/images/notification.png")}
                  // style={{ marginLeft:10}}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
            >
              <Text style={styles.welcomeText}>Hello John</Text>
              <HelloWave />
            </View>
            <View>
              <Text style={styles.welcomeSubText}>Let's play and Earn</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 300,
    alignItems: "center",
    flex: 1,
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
  image: {
    borderBottomRightRadius: 70,
    backgroundColor: "#17478B",
    opacity: 0.78,
  },
  welcomeText: {
    color: "#ffffff",
    fontSize: 24,
    fontFamily: "DMSansSemiBold",
    lineHeight: 32,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    paddingVertical: 60,
    paddingHorizontal: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#ddd",
    backgroundColor: "#e0e0e0",
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // width:'45%',
    gap: 6,
    alignItems: "center",
  },
  balanceLabel: {
    fontFamily: "SpaceGroteskSemiBold",
    color: "#ffffff",
    fontSize: 14,
  },
  balanceAmount: {
    fontFamily: "SpaceGroteskMedium",
    color: "#ffffff",
    fontSize: 18,
  },
  joinButton: {
    borderRadius: 20,
    backgroundColor: "#E4F1FA",
    padding: 5,
    width: 95,
    height: 28,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  joinButtonText: {
    textAlign: "center",
    color: "#17478B",
    fontFamily: "SpaceGroteskMedium",
    fontSize: 12,
  },
  countText: {
    textAlign: "center",
    color: "#E4F1FA",
    fontFamily: "SpaceGroteskMedium",
    fontSize: 14,
    lineHeight: 22,
  },
  eraser: {
    borderRadius: 20,
    width: rem(47),
    height: 28,
    justifyContent: "space-between",
    borderWidth: 1.4,
    borderColor: "#E4F1FA",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 10,
  },
  welcomeSubText: {
    color: "#F9F9F9",
    fontFamily: "SpaceGroteskLight",
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Header;
