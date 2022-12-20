import {
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import FaceId from "../assets/images/FaceID.png";
import { useNavigation } from "@react-navigation/native";
import { View } from "../components/Themed";

const FaceIDSceen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.faceIDScreen}>
      <View style={styles.header}>
        <View style={styles.titleBlock}>
          <Text style={styles.title}>Activate Your Face ID </Text>
          <Text style={styles.pageAmount}>(2/2)</Text>
        </View>
        <Text
          style={styles.skip}
          onPress={() => navigation.navigate("TabHomeScreen")}
        >
          Skip
        </Text>
      </View>
      <Text style={styles.content}>
        Spookies is a ghost-themed NFT project that passed over to the OpenSea
        realm in July.
      </Text>
      <View style={styles.loginFaceId}>
        <Image source={FaceId} />
        <Text style={styles.loginFaceIdContent}>Login with Face ID</Text>
      </View>
      <View style={styles.enableButton}>
        <TouchableOpacity style={styles.ableButton}>
          <Text style={styles.ableText}>Enable Your Face ID »</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FaceIDSceen;
const styles = StyleSheet.create({
  faceIDScreen: {
    backgroundColor: "white",
    height: "100%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "30%",
    paddingRight: "5%",
    marginTop: 40,
    width: "100%",
  },
  pageAmount: {
    fontSize: 10,
  },
  titleBlock: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#170A4B",
  },
  skip: {
    fontSize: 13,
    color: "#616691",
  },
  content: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 27,
    textAlign: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  loginFaceId: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: 120,
  },
  loginFaceIdContent: {
    fontSize: 15,
    color: "#310CE3",
    marginTop: 14,
  },
  enableButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    width: "100%",
    marginTop: 120,
  },
  ableButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0B1A65",
    width: 170,
    height: 33,
    borderRadius: 50,
    padding: 8,
  },
  ableText: {
    color: "#FFFFFF",
  },
});
