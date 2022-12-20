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
import { useEffect, useState } from "react";

const LoginScreen = () => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [isPasswordVerified, setIsPasswordVerified] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    if (
      password.length >= 8 &&
      password.match(/\W/g) &&
      password.match(/[A-Z]/g) &&
      password.match(/[a-z]/g) &&
      password.match(/\d/g)
    ) {
      setIsPasswordVerified(true);
    } else if (isPasswordVerified === true) {
      setIsPasswordVerified(false);
    }
  }, [password]);

  useEffect(() => {
    if (email.match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")) {
      setIsEmailVerified(true);
    } else if (isEmailVerified === true) {
      setIsEmailVerified(false);
    }
  }, [email]);

  return (
    <SafeAreaView style={styles.logInScreen}>
      <View style={styles.header}>
        <View onTouchEnd={() => navigation.goBack()}>
          <Image source={goBackIcon} />
        </View>
        <View style={styles.title}>
          <Text style={styles.logInTitle}>Login</Text>
        </View>
        <Text
          style={styles.login}
          onPress={() => navigation.navigate("Registration")}
        >
          Register
        </Text>
      </View>
      <View style={styles.logInBlock}>
        <View>
          <Text style={styles.titleInput}>Email Address</Text>
          <TextInput
            placeholder="xyz@playember.com"
            style={styles.inputs}
            value={email}
            onChangeText={text => setEmail(text)}
            autoCapitalize="none"
          />
        </View>
        <View>
          <View style={styles.titleInputBlock}>
            <Text style={styles.titleInput}>Password</Text>
            <Text
              onPress={() => navigation.navigate("ForgotPasswordScreen")}
              style={styles.forgotPassword}
            >
              Forgot Password
            </Text>
          </View>
          <TextInput
            placeholder="********"
            style={styles.inputs}
            value={password}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            autoCapitalize="none"
          />
        </View>
      </View>
      <View style={styles.logInButton}>
        <TouchableOpacity
          style={
            isEmailVerified && isPasswordVerified
              ? styles.ableButton
              : styles.disableButton
          }
          onPress={() => {
            if (isPasswordVerified && isEmailVerified) {
              navigation.navigate("TabHomeScreen");
            }
          }}
        >
          <Text
            style={
              isEmailVerified && isPasswordVerified
                ? styles.ableText
                : styles.disableText
            }
          >
            Login »
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  logInScreen: {
    backgroundColor: "white",
    height: "100%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: 40,
  },
  title: {
    display: "flex",
    flexDirection: "row",
  },
  logInTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#170A4B",
  },
  login: {
    fontSize: 13,
    color: "#310CE3",
  },
  logInBlock: {
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
  titleInputBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  forgotPassword: {
    color: "#310CE3",
    fontSize: 13,
  },
  requirement: {
    display: "flex",
    flexDirection: "row",
    marginTop: 8,
  },
  requirementBlock: {
    display: "flex",
  },
  nonActive: {
    fontSize: 13,
    color: "#A6AAC9",
    width: 180,
  },
  successfully: {
    fontSize: 13,
    color: "#39BC64",
    width: 180,
    position: "relative",
  },
  rejected: {
    fontSize: 13,
    color: "#CE463E",
    width: 180,
  },
  logInButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    width: "100%",
    marginTop: 24,
  },
  ableButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0B1A65",
    width: 75,
    height: 33,
    borderRadius: 50,
    paddingHorizontal: 12,
  },
  disableButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EAECF6",
    width: 75,
    height: 33,
    borderRadius: 50,
    paddingHorizontal: 12,
  },
  ableText: {
    color: "#FFFFFF",
  },
  disableText: {
    color: "#A6AAC9",
  },
});
