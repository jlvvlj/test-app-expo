import { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import selectedIcon from "../assets/images/selected.png";
import { Button } from "../components/Button/Button";

interface propsType {
  title: string;
  type: string;
  pageNumber: number;
  isText?: boolean;
  data: dataType[];
  nextStepHandler: Function;
}
interface dataType {
  id: number;
  selected: boolean;
  img: any;
  text?: string;
}
const WhatYouLike = ({
  title,
  data,
  type,
  pageNumber,
  nextStepHandler,
}: propsType) => {
  const [departmentData, setDepartmentData] = useState(data);

  const selectedAount = departmentData.filter(
    (department: dataType) => department.selected == true
  ).length;
  const selectedHandler = (id: number) => {
    const toggleSelectedDepartment = departmentData.map(
      (department: dataType) => {
        if (department.id === id) {
          department.selected = !department.selected;
        }
        return department;
      }
    );
    setDepartmentData(toggleSelectedDepartment);
  };

  return (
    <SafeAreaView style={styles.departmentPage}>
      <View style={styles.pageHeader}>
        <View style={styles.pageHeaderTitle}>
          <Text style={styles.pageTitle}>{title}</Text>
          <Text style={styles.pageAmount}>({pageNumber}/2)</Text>
        </View>
        <Text style={styles.skipButton} onPress={() => nextStepHandler()}>
          Skip
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.list}>
        {departmentData.map((department: dataType) => (
          <View
            key={department.id}
            style={
              department.selected
                ? [styles.option, styles.selected]
                : styles.option
            }
            onTouchEnd={() => selectedHandler(department.id)}
          >
            <Image source={department.img} />
            {department.text && <Text>{department.text}</Text>}
            {department.selected && (
              <Image source={selectedIcon} style={styles.selectedIcon} />
            )}
          </View>
        ))}
      </ScrollView>
      <View style={styles.selectedBlock}>
        <View>
          <Text style={styles.selectedTitle}>{type}</Text>
          <Text style={styles.amountSelected}>{selectedAount} selected</Text>
        </View>
        <Button
          type="play"
          text="Next"
          onClick={() => nextStepHandler()}
        ></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  departmentPage: {
    width: "100%",
    backgroundColor: "#E5E5E5",
  },
  list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-around",
    height: "150%",
  },
  option: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    height: 150,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    marginTop: "1.5%",
    marginBottom: "1.5%",
    opacity: 0.5,
  },
  selected: {
    opacity: 1,
    borderWidth: 1,
    borderColor: "#0B1A65",
  },
  selectedIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  pageHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "30%",
    paddingRight: "10%",
    marginTop: 50,
  },
  pageHeaderTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
    marginBottom: 15,
  },
  pageTitle: {
    fontSize: 16,
    color: "#170A4B",
  },
  pageAmount: {
    fontSize: 10,
  },
  skipButton: {
    fontSize: 13,
    color: "#616691",
  },
  selectedBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    height: "10%",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 20,
  },
  selectedTitle: {
    fontSize: 22,
    color: "#170A4B",
  },
  amountSelected: {
    fontSize: 16,
    color: "#616691",
  },
});

export default WhatYouLike;
