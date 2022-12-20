import {
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import goBackIcon from "../assets/images/goBackIcon.png";
import { useNavigation } from "@react-navigation/native";
import { View } from "../components/Themed";
import { useState } from "react";

const ForgotPasswordScreen = () => {
  const [isInstructionsSend, setIsInstructionsSend] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.regisScreen}>
      <View style={styles.header}>
        <View onTouchEnd={() => navigation.goBack()}>
          <Image source={goBackIcon} />
        </View>
        <View style={styles.title}>
          <Text style={styles.forgotPasswordTitle}>Forgot Password</Text>
        </View>
      </View>
      {!isInstructionsSend ? (
        <>
          <View style={styles.forgotPasswordBlock}>
            <View>
              <Text style={styles.titleInput}>Email Address</Text>
              <TextInput
                placeholder="xyz@playember.com"
                style={styles.inputs}
                autoCapitalize="none"
              />
            </View>
          </View>
          <View style={styles.forgotPasswordButton}>
            <TouchableOpacity
              style={styles.ableButton}
              onPress={() => setIsInstructionsSend(true)}
            >
              <Text style={styles.ableText}>Send Instructions »</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View style={styles.forgotPasswordBlock}>
            <Text style={styles.instruction}>
              You receive an email soon if the email address you’ve entered is
              in our database.
            </Text>
          </View>
          <View style={styles.forgotPasswordButton}>
            <TouchableOpacity
              style={styles.backToLoginButton}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.ableText}>Back to Login »</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
const styles = StyleSheet.create({
  regisScreen: {
    backgroundColor: "white",
    height: "100%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "5%",
    paddingRight: "5%",
    width: "70%",
    marginTop: 40,
  },
  title: {
    display: "flex",
    flexDirection: "row",
  },
  forgotPasswordTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#170A4B",
  },
  forgotPasswordBlock: {
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  inputs: {
    borderWidth: 1,
    borderColor: "#D9E0EC",
    padding: 16,
    borderRadius: 16,
    marginTop: 8,
  },
  titleInput: {
    color: "#0B1A65",
    fontSize: 15,
    marginTop: 25,
  },
  instruction: {
    color: "#170A4B",
    fontSize: 16,
    textAlign: "center",
    marginTop: 27,
  },
  forgotPasswordButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    width: "100%",
    marginTop: 24,
  },
  backToLoginButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0B1A65",
    width: 128,
    height: 33,
    borderRadius: 50,
    padding: 8,
  },
  ableButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0B1A65",
    width: 150,
    height: 33,
    borderRadius: 50,
    padding: 8,
  },
  ableText: {
    color: "#FFFFFF",
  },
});
