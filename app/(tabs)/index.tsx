import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

import Header from "@/components/Header";
import { gamersData } from "@/gameData";
import { renderGamerItem } from "@/components/RenderGamerItem";
import { Link } from "expo-router";



export default function HomeScreen() {
  
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.card}>
        <View style={styles.tipsCont}>
          <View></View>
          <View style={styles.tips}>
            <Text style={styles.tipsText}>?</Text>
          </View>
        </View>
        <View>
          <Text style={styles.cardText1}>Game Prize</Text>
          <Text style={styles.cardTextGrandPrice}>₦1,000,000</Text>
          <Text style={styles.predictText}>Next Game: Tomorrow, 8PM </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.actionRow}>
            <Link href={"/game-screen"} asChild>
              <TouchableOpacity style={styles.joinButton} activeOpacity={0.4}>
                <Text style={styles.joinButtonText}>Join Game</Text>
              </TouchableOpacity>
            </Link>
            <View style={styles.entryFeeContainer}>
              <View>
                <Text style={styles.entryFeeText}>Entry Fee</Text>
              </View>
              <View style={styles.entryFeeAmountContainer}>
                <Text style={styles.currencyText}>₦</Text>
                <Text style={styles.amountText}>100.00</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.gamersSection}>
        <Text style={styles.sectionTitle}>Top Gamers of the Day</Text>
        <FlatList
          data={gamersData}
          keyExtractor={(item) => item.id}
          renderItem={renderGamerItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.referContainer}>
        <View style={styles.referImage}>
          <Image source={require("@/assets/images/share.png")} />
        </View>
        <View style={styles.referSection}>
          <View style={{ padding: 18 }}>
            <Text style={styles.referTextHeader}>
              Refer & Earn with your Friends{" "}
            </Text>
            <Text style={styles.referTextSub}>
              Share with your friends and loved ones to come and play
            </Text>
            <TouchableOpacity style={styles.referButton} activeOpacity={0.4}>
              <Text style={styles.referButtonText}>Invite Friends</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  stepContainer2: {
    marginBottom: 8,
    backgroundColor: "#FFFFFF",
    height: 246,
    width: 352,
    borderRadius: 20,
    bottom: 98,
    left: 18,
    borderBottomWidth: 63,
    borderColor: "#2364AA",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  image: {
    width: "100%",
    height: "100%",
    zIndex: -2222,
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    height: 246,
    borderRadius: 20,
    // Shadow for iOS
    borderBottomWidth: 63,
    borderColor: "#2364AA",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: "absolute",
    top: 185,
    alignSelf: "center",
    justifyContent: "space-between",
  },
  predictText: {
    fontSize: 12,
    color: "#3B3B3B",
    textAlign: "center",
    fontFamily: " SpaceGroteskRegular",
    lineHeight: 22,
  },
  cardText1: {
    fontSize: 20,
    color: "#17478B",
    textAlign: "center",
    fontFamily: "DMSansSemiBold",
    lineHeight: 24,
  },
  cardTextGrandPrice: {
    fontSize: 48,
    color: "#17478B",
    textAlign: "center",
    fontFamily: "DMSansSemiBold",
  },
  gamersSection: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 17,
    marginTop: "40%",
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
    fontFamily: "SpaceGroteskSemiBold",
    color: "#3B3B3B",
    marginLeft: 10,
  },

  actionRow: {
    top: "18%",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  joinButton: {
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    padding: 5,
    width: 93,
    height: 28,
    justifyContent: "center",
  },
  joinButtonText: {
    textAlign: "center",
    color: "#17478B",
    fontFamily: "SpaceGroteskMedium",
    fontSize: 12,
  },
  entryFeeContainer: {
    flexDirection: "row",
    gap: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  entryFeeText: {
    fontFamily: "SpaceGroteskSemiBold",
    color: "#ffffff",
    fontSize: 14,
    lineHeight: 22,
  },
  entryFeeAmountContainer: {
    flexDirection: "row",
    gap: 1,
  },
  currencyText: {
    fontFamily: "SpaceGroteskLight",
    color: "#ffffff",
    fontSize: 12,
    lineHeight: 22,
  },
  amountText: {
    fontFamily: "SpaceGroteskLight",
    color: "#ffffff",
    fontSize: 12,
    lineHeight: 22,
  },
  referSection: {
    backgroundColor: "#2364AA",
    borderRadius: 20,
    width: "90%",
    alignSelf: "center",
    height: 140,
    flex: 1,
    marginTop: 23,
  },
  referTextHeader: {
    fontFamily: "SpaceGroteskSemiBold",
    color: "#F9F9F9",
    fontSize: 18,
    lineHeight: 20,
  },
  referTextSub: {
    fontFamily: "SpaceGroteskLight",
    color: "#F2F2F2",
    fontSize: 12,
    lineHeight: 18,
    width: "80%",
    marginTop: 5,
    paddingRight: 12,
  },
  referButtonText: {
    fontFamily: "SpaceGroteskLight",
    color: "#F2F2F2",
    fontSize: 10,
    lineHeight: 22,
    textAlign: "center",
    padding: 2,
  },
  referButton: {
    borderRadius: 20,
    borderColor: "#F2F2F2",
    borderWidth: 1,
    width: 91,
    height: 30,
    marginTop: 10,
  },
  referImage: {
    position: "absolute",
    alignSelf: "center",
    zIndex: 2222,
    right: 0,
    top: 35,
    width: 116.2,
    height: 106,
  },
  referContainer: {
    position: "relative",
  },
  tipsCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tips: {
    height: 18,
    width: 18,
    borderRadius: 30,
    backgroundColor: "#51A2E0",
    alignSelf: "center",
  },
  tipsText: {
    fontFamily: "SpaceGroteskMedium",
    color: "#F9F9F9",
    fontSize: 14,
    lineHeight: 18,
    textAlign: "center",
    alignSelf: "center",
  },
});
