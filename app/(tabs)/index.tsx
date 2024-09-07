import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  Platform,
} from "react-native";

import Header from "@/components/Header";
import { gamersData } from "@/gameData";
import { renderGamerItem } from "@/components/RenderGamerItem";
import { Link } from "expo-router";
import {rem, vh, vw} from '@/constants/helper'
import {scaleFontSize} from "@/constants/scaling"



export default function HomeScreen() {

  
  
  return (
    <SafeAreaView style={{flex:1}}>
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.card}>
        <View style={styles.tipsCont}>
          <View></View>
          <View style={styles.tips}>
            <Text style={styles.tipsText}>?</Text>
          </View>
        </View>
        <View style={styles.grandContainer}>
          <Text style={styles.cardText1}>Game Prize</Text>
          <Text style={styles.cardTextGrandPrice}>₦1,000,000</Text>
          <Text style={styles.predictText}>Next Game: Tomorrow, 8PM</Text>
        </View>
        <View style={styles.actionCont}>
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
          <Image source={require("@/assets/images/share.png")} style={{width:"82%"}}/>
        </View>
        <View style={styles.referSection}>
          <View style={{ padding: rem(18) }}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
   
  },
  actionCont:{
    justifyContent:"center"
  },
  image: {
    width: "100%",
    height: "100%",
    zIndex: -2222,
  },
  card: {
    width: vw(90),
    backgroundColor: "#fff",
    padding: rem(20),
    height: vh(30),
    borderRadius: rem(20),
    // Shadow for iOS
    borderBottomWidth: rem(63),
    borderColor: "#2364AA",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: rem(0.25),
    shadowRadius: rem(3.84),
    elevation: rem(5),
    position: "absolute",
    top: rem(185),
    alignSelf: "center",
    justifyContent: "space-between",
  },
  predictText: {
    fontSize: rem(12),
    color: "#3B3B3B",
    textAlign: "center",
    fontFamily: " SpaceGroteskRegular",
    lineHeight: rem(22),
  },
  cardText1: {
    fontSize: rem(20),
    color: "#17478B",
    textAlign: "center",
    fontFamily: "DMSansSemiBold",
    lineHeight: rem(24),
  },
  cardTextGrandPrice: {
    fontSize:  rem(48),
    color: "#17478B",
    textAlign: "center",
    fontFamily: "DMSansSemiBold",
  },
  grandContainer:{
    flexDirection:"column",
    justifyContent:"center",
    height: vh(10)
  },
  gamersSection: {
    flex: 1,
    width: "100%",
    paddingHorizontal: rem(17),
    marginTop:Platform.OS === "android" ?  vh(12) : vh(20),
  },
  sectionTitle: {
    fontSize: rem(16),
    marginBottom: rem(10),
    lineHeight: rem(24),
    fontFamily: "SpaceGroteskSemiBold",
    color: "#3B3B3B",
    marginLeft: rem(10),
  },

  actionRow: {
    top: Platform.OS === "android" ? vh(6) : vh(8),
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  joinButton: {
    borderRadius: rem(20),
    backgroundColor: "#FFFFFF",
    padding: rem(5),
    width: rem(93),
    height: rem(28),
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
    fontSize: rem(14),
    lineHeight: 22,
  },
  entryFeeAmountContainer: {
    flexDirection: "row",
    gap: 1,
  },
  currencyText: {
    fontFamily: "SpaceGroteskLight",
    color: "#ffffff",
    fontSize: rem(12),
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
    height: rem(140),
    flex: 1,
    marginTop: rem(23),
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
    marginTop: rem(5),
    paddingRight: rem(12),
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
    width: rem(91),
    height: rem(30),
    marginTop: rem(10),
  },
  referImage: {
    position: "absolute",
    alignSelf: "center",
    zIndex: 2222,
    right: 0,
    top: rem(35),
    width: rem(116.2),
    height: rem(106),
  },
  referContainer: {
    position: "relative",
    marginBottom:vh(15)
  },
  tipsCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tips: {
    height: rem(18),
    width: rem(18),
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
