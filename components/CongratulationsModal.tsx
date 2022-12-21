import React from "react";
import { Image, StyleSheet, Text, View, Modal } from "react-native";
import { Button } from "./Button/Button";
import Gift from "../assets/images/gift.png";
import FortuneWheel from "../assets/images/Congratulations.png";
import youwon from "../assets/images/youwon.png";


const CongratulationsModal = ({ goToNextStep }: any) => {
  return (
    <Modal visible={true} transparent={true}>
      <View style={styles.backdrop}></View>
      <View style={styles.modalLogo}>
        <Image source={Gift} />
      </View>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>You just won!</Text>
         <Image source={youwon} style={styles.modalImage} />
         <Text style={styles.modalText}>
        Congrats! You can spend EMBER on getting REWARDS like your favorite gift cards!{" "}
        </Text>
        <Button
          text="Start Using PlayEmber  »"
          type="play"
          onClick={() => goToNextStep()}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "#000000",
    opacity: 0.64,
  },
  modalContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: 540,
    width: "90%",
    borderRadius: 24,
    position: "absolute",
    top: "20%",
    left: "5%",
  },
  modalTitle: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 31,
    lineHeight: 27,
    textAlign: "center",
    letterSpacing: -0.3,
    color: "#170A4B",
    width: 200,
    marginBottom: 20,
    marginTop: 10
  },
  modalText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 30,
    width: 260,
  },
  modalLogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: "40%",
    top: "15%",
    width: "20%",
    height: "10%",
    zIndex: 2,
    borderRadius: 16,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    backgroundColor: "white",
    padding: 10,
  },
  specialText: {
    display: "flex",
    flexDirection: "row",
    height: 15,
  },
  boldText: {
    fontWeight: "bold",
  },
  smallText: {
    fontSize: 8,
    fontWeight: "400",
  },
  modalImage: {
    marginTop: 26,
  },
  subtext: {
    color: "#616691",
    fontSize: 13,
    width: "90%",
    textAlign: "center",
    marginBottom: 24,
  },
});

export default CongratulationsModal;
