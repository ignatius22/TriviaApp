import { rem } from "@/constants/helper";
import { gamersData } from "@/gameData";
import { Image, StyleSheet, Text, View } from "react-native";

export const renderGamerItem = ({ item }: { item: (typeof gamersData)[0] }) => (
  <View style={styles.gamerItem}>
    <View style={[styles.avatarContainer, { borderColor: item.bgColor }]}>
      <View
        style={[styles.avatarBackground, { backgroundColor: item.bgColor }]}
      >
        <Image source={item.avatar} style={styles.avatar} />
      </View>
    </View>
    <View style={styles.gamerInfo}>
      <Text style={styles.gamerName}>{item.name}</Text>
      <Text style={styles.gamerPrize}>{item.prize}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  gamerInfo: {
    flex: 1,
  },
  gamerName: {
    fontSize: 14,
    fontFamily: "SpaceGroteskSemiBold",
  },
  gamerPrize: {
    fontSize: 12,
    color: "#2364AA",
    fontFamily: "SpaceGroteskLight",
  },
  avatarBackground: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  gamerItem: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: rem(15),
    justifyContent: "center",
  },
  avatarContainer: {
    width: rem(60),
    height: rem(60),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    borderWidth: 5,
    borderColor: "#fff",
    marginRight: rem(10),
  },
});
