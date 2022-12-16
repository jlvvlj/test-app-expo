import {
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
  Modal,
} from "react-native";

// @ts-ignore
import colorful from "../assets/images/ColorFul.png";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
// @ts-ignore
import Logo from "../assets/images/LogoLockup.png";
// @ts-ignore
import phone from "../assets/images/Phone.png";
// @ts-ignore
import Green from "../assets/images/Green.png";
import { SafeAreaConsumer, SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Button/Button";
import { Card } from "../components/Card/Card";
import { CardBottom } from "../components/Card/CardBottom";
import { Game } from "../components/Game/Game";
// @ts-ignore
import imageBackground from "../assets/images/imageBackground.png";
import WhatYouLike from "./WhatYouLike";
import { useState } from "react";
import WheelModal from "../components/WheelModal";
import CongratulationsModal from "../components/CongratulationsModal";
import WelcomeModal from "../components/WelcomeModel";

const hotRevards = [
  {
    id: 1,
    text: "Shine bright like a pro",
    title: "Iphone 14 Pro Max",
    count: "0",
    total: "16.84",
    img: require("../assets/images/Phone.png"),
    isSecond: false,
  },
  {
    id: 2,
    text: "Shine bright like a pro",
    title: "Nike sport",
    count: "0",
    total: "16.84",
    img: require("../assets/images/Green.png"),
    isSecond: true,
  },
];

const spinData = [
  {
    id: 1,
    title: "Instant win here",
    text: "Spin and get rewards worth up to 500$",
    isSecond: false,
    img: require("../assets/images/ColorFul.png"),
  },
  {
    id: 2,
    title: "Instant win here",
    text: "Spin and get rewards worth up to 500$",
    isSecond: true,
    img: require("../assets/images/ColorFul.png"),
  },
];
const gameData = [
  {
    id: 1,
    title: "Hyper Cards",
    text: "Trade & Collect!",
    img: require("../assets/images/game1.png"),
  },
  {
    id: 2,
    title: "Superhero Race!",
    text: "Swap 'Em to Win the Race!",
    img: require("../assets/images/game2.png"),
  },
  {
    id: 3,
    title: "Cargo Parking",
    text: "Test your Parking Skills",
    img: require("../assets/images/game3.png"),
  },
  {
    id: 4,
    title: "Raft Life",
    text: "Can you survive Castaway?",
    img: require("../assets/images/game4.png"),
  },
  {
    id: 5,
    title: "Slingshot Crash",
    text: "Pull Back and Smash!!",
    img: require("../assets/images/game5.png"),
  },
];

const brandData = [
  { id: 1, img: require("../assets/images/Brand_1.png"), selected: false },
  { id: 2, img: require("../assets/images/Brand_2.png"), selected: false },
  { id: 3, img: require("../assets/images/Brand_3.png"), selected: false },
  { id: 4, img: require("../assets/images/Brand_4.png"), selected: false },
  { id: 5, img: require("../assets/images/Brand_5.png"), selected: false },
  { id: 6, img: require("../assets/images/Brand_6.png"), selected: false },
  { id: 7, img: require("../assets/images/Brand_7.png"), selected: false },
  { id: 8, img: require("../assets/images/Brand_8.png"), selected: false },
  { id: 9, img: require("../assets/images/Brand_9.png"), selected: false },
  { id: 10, img: require("../assets/images/Brand_10.png"), selected: false },
  { id: 11, img: require("../assets/images/Brand_11.png"), selected: false },
  { id: 12, img: require("../assets/images/Brand_12.png"), selected: false },
];

const categoriesData = [
  {
    id: 1,
    img: require("../assets/images/categories_1.png"),
    text: "Fashion",
    selected: false,
  },
  {
    id: 2,
    img: require("../assets/images/categories_2.png"),
    text: "Electronics",
    selected: false,
  },
  {
    id: 3,
    img: require("../assets/images/categories_3.png"),
    text: "Traveling",
    selected: false,
  },
  {
    id: 4,
    img: require("../assets/images/categories_4.png"),
    text: "Movies",
    selected: false,
  },
  {
    id: 5,
    img: require("../assets/images/categories_5.png"),
    text: "Personal Care",
    selected: false,
  },
  {
    id: 6,
    img: require("../assets/images/categories_6.png"),
    text: "Camping",
    selected: false,
  },
  {
    id: 7,
    img: require("../assets/images/categories_7.png"),
    text: "DIY",
    selected: false,
  },
  {
    id: 8,
    img: require("../assets/images/categories_8.png"),
    text: "Parties",
    selected: false,
  },
  {
    id: 9,
    img: require("../assets/images/categories_11.png"),
    text: "Shopping",
    selected: false,
  },
  {
    id: 10,
    img: require("../assets/images/categories_12.png"),
    text: "Gardening",
    selected: false,
  },
  {
    id: 11,
    img: require("../assets/images/categories_9.png"),
    text: "Music",
    selected: false,
  },
  {
    id: 12,
    img: require("../assets/images/categories_10.png"),
    text: "Baby & Kids",
    selected: false,
  },
];

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [step, setStep] = useState(0);

  const goToNextStep = () => setStep(step + 1);
  return (
    <View>
      {step == 1 && (
        <WhatYouLike
          data={brandData}
          title="Brands you like"
          type="Brand"
          pageNumber={1}
          nextStepHandler={goToNextStep}
        />
      )}
      {step == 2 && (
        <WhatYouLike
          data={categoriesData}
          title="Categories you like"
          type="Categories"
          pageNumber={2}
          nextStepHandler={goToNextStep}
        />
      )}
      {(step == 0 || step > 2) && (
        <SafeAreaView style={styles.container}>
          {step == 0 && <WelcomeModal goToNextStep={() => goToNextStep()} />}
          {step == 3 && <WheelModal goToNextStep={() => goToNextStep()} />}
          {step == 4 && (
            <CongratulationsModal goToNextStep={() => goToNextStep()} />
          )}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[styles.headerContainer, styles.topContainer]}>
              <Image source={Logo} />
              <Button text="Create Account »" />
            </View>
            <View style={styles.headerContainer}>
              <Text style={styles.headText}>Hot Rewards</Text>
              <Text style={styles.seeAll}>See All »</Text>
            </View>
            <ScrollView
              style={styles.scrollViewHorizontal}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {hotRevards.map(reward => (
                <Card
                  key={reward.id}
                  mainImg={reward.img}
                  text={reward.text}
                  title={reward.title}
                  count={reward.count}
                  total={reward.total}
                  isSecond={reward.isSecond}
                />
              ))}
            </ScrollView>
            <ScrollView
              style={[styles.scrollViewHorizontal, styles.mt24]}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {spinData.map(spin => (
                <CardBottom
                  key={spin.id}
                  mainImg={spin.img}
                  title={spin.title}
                  text={spin.text}
                  isSecond={spin.isSecond}
                />
              ))}
            </ScrollView>
            <View style={styles.headerContainer}>
              <Text style={styles.headText}>Top Games</Text>
              <Text style={styles.seeAll}>See All »</Text>
            </View>
            <View style={styles.gameWrapper}>
              <View style={styles.gameContent}>
                {gameData.map(item => (
                  <Game
                    key={item.id}
                    id={item.id}
                    isLastChild={item.id === gameData.length}
                    img={item.img}
                    title={item.title}
                    text={item.text}
                  />
                ))}
              </View>
            </View>
            <ImageBackground
              source={imageBackground}
              style={styles.backgroundContainer}
            ></ImageBackground>
          </ScrollView>
        </SafeAreaView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  backgroundContainer: {
    width: "100%",
    height: 76,
    marginTop: "5%",
  },
  getButton: {
    backgroundColor: "#0B1A65",
    flexDirection: "row",
    width: 70,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginLeft: "15%",
  },
  phoneImage: {
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headText: { fontWeight: "bold", fontSize: 22 },
  headerButton: {
    backgroundColor: "#EAECF6",
    width: 150,
    height: 35,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "0B1A65",
    borderWidth: 1,
    marginLeft: "20%",
    marginTop: "2%",
  },
  topContainer: { width: "85%" },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    marginTop: "5%",
    padding: 16,
  },
  seeAll: { color: "#616691", fontSize: 16, marginLeft: "40%" },
  scrollViewHorizontal: { flexDirection: "row", backgroundColor: "#F2F2F2" },
  mt24: { marginTop: 24 },
  gameContent: {
    padding: 16,
    borderRadius: 24,
    width: "100%",
    backgroundColor: "#fff",
  },
  gameWrapper: {
    borderRadius: 24,
  },
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
    height: 260,
    width: "90%",
    borderRadius: 24,
    position: "absolute",
    top: "30%",
    left: "5%",
  },
  modalTitle: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 22,
    lineHeight: 27,
    textAlign: "center",
    letterSpacing: -0.3,
    color: "#170A4B",
    marginTop: 24,
    marginBottom: 16,
  },
  modalText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    color: "#170A4B",
    marginTop: 16,
    marginBottom: 24,
    width: 250,
  },
  modalLogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: "40%",
    top: "25%",
    width: "20%",
    height: "10%",
    zIndex: 2,
    borderRadius: 16,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
});
