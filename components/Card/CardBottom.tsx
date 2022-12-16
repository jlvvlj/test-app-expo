import React from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";
import { Text, View } from "../Themed";
import { Button } from "../Button/Button";
import { useNavigation } from "@react-navigation/native";

interface Props {
  title: string;
  text: string;
  mainImg: ImageSourcePropType;
  isSecond?: boolean;
}

export const CardBottom: React.FC<Props> = React.memo(
  ({ title, text, isSecond, mainImg }) => {
    const navigation = useNavigation();
    return (
      <View style={isSecond ? [styles.main, styles.second] : styles.main}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
          <Button
            type="get"
            text="Spin the Wheel"
            onClick={() => navigation.navigate("TabRewardsScreen")}
          />
        </View>
        <Image style={styles.img} source={mainImg} />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  main: {
    height: 176,
    borderRadius: 24,
    borderBottomRightRadius: 24,
    width: 315,
    backgroundColor: "#EAECF6",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    width: "60%",
    backgroundColor: "#EAECF6",
    paddingVertical: 24,
    paddingLeft: 24,
  },
  title: {
    fontWeight: "700",
    fontSize: 22,
    lineHeight: 27,
    color: "#170A4B",
    marginBottom: 8,
  },
  text: {
    fontWeight: "500",
    fontSize: 16,
    color: "#616691",
    marginBottom: 16,
  },
  second: { marginLeft: 15 },
  img: { alignSelf: "flex-end" },
});
