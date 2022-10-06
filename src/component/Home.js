import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from './Header';
import Stats from './Stats';
import Filieres from './Filieres';

import HeaderFiliere from "./HeaderFiliere";
import Questions from "./Questions";

export default function Home() {
  return (
    <View style={styles.body}>
      <StatusBar hidden />
      <Header />
      <Stats />
      <Filieres />
      <HeaderFiliere />
      <Questions />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: "100%",
    backgroundColor: "#272727",
  },
});
