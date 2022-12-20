import {
  ImageBackground,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import bannerImg from "../assets/images/banner.png";
import logoImg from "../assets/images/logo.png";
import CloseIcon from "../assets/images/close.png";

import { ButtonRegistrtion } from "../components/Registration-button/ButtonRegistrtion";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ImageBackground
        source={bannerImg}
        style={styles.bannerStyle}
        resizeMode="cover"
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={CloseIcon} style={styles.closeIcon} />
        </TouchableOpacity>
        <Image source={logoImg} style={styles.logoStyle} />
      </ImageBackground>
      <View style={styles.bodyStyle}>
        <Text style={styles.title}>Play, earn, redeem,</Text>
        <Text style={[styles.title, { color: "#310CE3" }]}>repeat.</Text>
      </View>
      <View style={[styles.bodyStyle, { marginTop: 32 }]}>
        <ButtonRegistrtion
          text="Continue with Apple"
          type="apple"
          logIn={() => console.log()}
        />
        <ButtonRegistrtion
          text="Continue with Google"
          type="google"
          logIn={() => console.log()}
        />
        <ButtonRegistrtion
          text="Continue with Twitter"
          type="twitter"
          logIn={() => console.log()}
        />
      </View>
      <Text
        style={styles.continueStyle}
        onPress={() => navigation.navigate("Registration")}
      >
        Continue with Email
      </Text>
    </SafeAreaView>
  );
};
export default WelcomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerStyle: {
    width: "100%",
    height: 325,
    position: "relative",
  },
  logoStyle: {
    position: "absolute",
    bottom: -90,
    left: "25%",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  bodyStyle: {
    marginTop: 68,
    marginHorizontal: 24,
    alignItems: "center",
  },
  continueStyle: {
    textAlign: "center",
    marginTop: 24,
    color: "#616691",
  },
  closeIcon: {
    position: "absolute",
    right: -10,
    top: -20,
  },
});
