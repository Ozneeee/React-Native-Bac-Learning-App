import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Enzo</Text>
      <Text style={styles.subtitle}>Apprenez à votre rythme</Text>

      <View style={styles.imgContainer}>
        <Image style={styles.profil} source={require("../profil.png")} />
        <Image style={styles.setting} source={require("../setting.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 70,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  title: {
    color: "#f1f1f1",
    fontSize: 28,
    letterSpacing: 1.5,
  },
  subtitle: {
    color: "#9C9C9C",
  },
  imgContainer: {
    display: 'flex',
    flexDirection:'row',
    height: "100%",
    width: 90,
    marginLeft: "75%",
    marginTop: -55,
    justifyContent: "space-around"
  },
  profil: {
    width: 35, 
    height: 35,
  },
  setting: {
    marginTop: 3,
    width: 29,
    height: 29,
  },
});
