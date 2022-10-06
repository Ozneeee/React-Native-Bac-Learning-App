import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function HeaderFiliere() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image style={styles.image} source={require("../left-arrow.png")} />
        </TouchableOpacity>
        <Text style={styles.text}>ST2S</Text>
        <Image style={styles.setting} source={require("../setting.png")} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    height: "100%",
    backgroundColor: "#272727",
  },
  header: {
    width: "100%",
    height: 60,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  image: {
    height: "30%",
    width: 20,
  },
  text: {
    color: "#f1f1f1",
    fontSize: 28,
  },
  setting: {
    height: 23,
    width: 23,
  },
});
