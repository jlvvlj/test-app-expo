import React from "react";
import { StyleSheet, Image, ImageSourcePropType } from "react-native";
import { Text, View } from "../Themed";
import { Button } from "../Button/Button";
import progress from "../../assets/images/Progress.png";
import { useNavigation } from "@react-navigation/native";

interface Props {
  mainImg: ImageSourcePropType;
  title: string;
  text: string;
  count: string;
  total: string;
  isSecond?: boolean;
  slider: boolean;
}

export const Card: React.FC<Props> = React.memo(
  ({ mainImg, title, text, total, count, isSecond, slider }) => {
    const navigation = useNavigation();
    return (
      <View
        style={
          isSecond
            ? [styles.main(slider), styles.mainSecond]
            : styles.main(slider)
        }
      >
        <Image source={mainImg} style={styles.phoneImage} />
        <View style={styles.contentText}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={[styles.largeText, styles.colorfulText]}>{text}</Text>
          </View>
          <Button
            type="get"
            text="Get"
            onClick={() => navigation.navigate("TabRewardsScreen")}
          />
        </View>
        <View style={{ width: "100%", paddingHorizontal: 16 }}>
          <Image
            source={progress}
            style={{ width: "100%", paddingHorizontal: 16 }}
          />
        </View>
        <View style={styles.contentText}>
          <Text style={[styles.largeText, styles.colorfulText]}>
            {count}{" "}
            <Text style={[styles.smallText, styles.colorfulText]}>EMBR</Text>
          </Text>
          <Text style={styles.largeText}>
            {total} <Text style={styles.smallText}>EMBR</Text>
          </Text>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  main: (slider: boolean): boolean => ({
    width: slider ? 315 : "100%",
    borderRadius: 24,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 5.65,
  }),
  mainSecond: {
    marginLeft: 15,
  },
  phoneImage: {
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  contentText: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    padding: 16,
    borderRadius: 20,
  },
  title: { fontWeight: "bold", fontSize: 18, marginBottom: 5 },
  largeText: { fontSize: 18 },
  smallText: { fontSize: 12 },
  colorfulText: { color: "#616691" },
});
