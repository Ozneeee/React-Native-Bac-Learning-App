import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import MainStss from "./stss/MainStss";

export default function Filieres() {

  const navigation = useNavigation();

  const [filiere, setFiliere] = useState([
    {
      logo: require("../../src/st2s.png"),
      name: "ST2S",
      press: () => navigation.navigate("stss"),
      key: 1,
    },
    {
      logo: require("../../src/sti2d.png"),
      name: "STI2D",
      press: () =>
        Alert.alert(
          "Information",
          "La section STI2D est en cour de développement",
          [{ text: "Compris !" }, { text: "M'avertir lors de sa sortie" }]
        ),
      key: 2,
    },
    {
      logo: require("../../src/stmg.png"),
      name: "STMG",
      press: () =>
        Alert.alert(
          "Information",
          "La section STMG est en cour de développement",
          [{ text: "Compris !" }, { text: "M'avertir lors de sa sortie" }]
        ),
      key: 3,
    },
  ]);

  return (
    <View style={styles.statsContainer}>
      <Text style={styles.title}>Choisissez votre Filiere</Text>

      {filiere.map((i) => {
        return (
          <LinearGradient
            colors={["#b0b0d6", "#f1f1f194"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1.5, y: 0.2 }}
            style={styles.filiere}
            key={i.key}
          >
            <TouchableOpacity onPress={i.press}>
              <Image style={styles.image} source={i.logo} />
              <Text style={styles.nom}>{i.name}</Text>
            </TouchableOpacity>
          </LinearGradient>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  statsContainer: {
    width: "90%",
    height: 320,
    marginTop: 20,
    alignSelf: "center",
  },
  title: {
    color: "#9C9C9C",
    fontSize: 22,
  },
  filiere: {
    width: "100%",
    height: 80,
    backgroundColor: "#b0b0d6",
    marginTop: 15,
    borderRadius: 8,
  },
  image: {
    height: 60,
    width: 60,
    top: 10,
    left: 10,
  },
  nom: {
    marginLeft: "28%",
    fontSize: 24,
    marginTop: -36,
    color: "#f1f1f1",
    letterSpacing: 1.5,
  },
});
