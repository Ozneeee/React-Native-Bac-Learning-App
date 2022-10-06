import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import HeaderFiliere from "../../HeaderFiliere";
import Question from "../../Questions" 

export default function ScreenStss() {
    
  const navigation = useNavigation();

  return (
    <View style={styles.body}>
      <HeaderFiliere />
      <Question />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: "100%",
    backgroundColor: "#272727",
  },
});
