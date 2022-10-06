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
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import HeaderFiliere from "../../component/HeaderFiliere";

export default function MainStss() {
  const navigation = useNavigation();

  const [premiere, setPremiere] = useState([
    { nom: "Stss", key: 1, onpress: () => navigation.navigate("St2s_stss") },
    { nom: "Biologie", key: 2, onpress: () => console.log("bio") },
    { nom: "Sante", key: 3, onpress: () => console.log("sante") },
    { nom: "Histoire Géo", key: 4, onpress: () => console.log("hg") },
    { nom: "Anglais", key: 5, onpress: () => console.log("anglais") },
    { nom: "Espagnol", key: 6, onpress: () => console.log("espagnol") },
    { nom: "Maths", key: 7, onpress: () => console.log("maths") },
    { nom: "Français", key: 8, onpress: () => console.log("fr") },
  ]);

  const [terminale, setTerminale] = useState([
    { nom: "Stss", key: 1, onpress: () => console.log("stss") },
    { nom: "Biologie", key: 2, onpress: () => console.log("bio") },
    { nom: "P.C", key: 3, onpress: () => console.log("pc") },
    { nom: "Histoire Géo", key: 4, onpress: () => console.log("hg") },
    { nom: "Anglais", key: 5, onpress: () => console.log("anglais") },
    { nom: "Espagnol", key: 6, onpress: () => console.log("espagnol") },
    { nom: "Maths", key: 7, onpress: () => console.log("maths") },
    { nom: "Philo", key: 8, onpress: () => console.log("philo") },
  ]);

  let notes = "13 - 9 - 16 - 20 - 14 - 12 - 10";
  let meilleureMatiere = "Biologie";
  let pireMatiere = "Espagnol";

  return (
    <View style={styles.body}>
      <HeaderFiliere />

      {/* premiere */}
      <Text style={styles.premiereTitle}>Première</Text>
      <ScrollView horizontal>
        {premiere.map((i) => {
          return (
            <TouchableOpacity
              style={styles.matieres}
              key={i.key}
              onPress={i.onpress}
            >
              <Text style={styles.nom}>{i.nom}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* terminale */}
      <Text style={styles.premiereTitle}>Terminale</Text>
      <ScrollView horizontal>
        {terminale.map((i) => {
          return (
            <TouchableOpacity
              style={styles.matieres}
              key={i.key}
              onPress={i.onpress}
            >
              <Text style={styles.nom}>{i.nom}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* boutons all */}

      <TouchableOpacity style={styles.allBtn}>
        <Text style={styles.nom}>Toute la Première</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.allBtn}>
        <Text style={styles.nom}>Toute la Terminale</Text>
      </TouchableOpacity>

      {/* stats */}
      <View style={styles.stats}>
        <Text style={styles.statsTab}>Notes : {notes}</Text>
        <Text style={styles.statsTab}>
          Meilleure Matiere : {meilleureMatiere}
        </Text>
        <Text style={styles.statsTab}>Pire Matière : {pireMatiere}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: "100%",
    backgroundColor: "#272727",
  },
  premiereTitle: {
    color: "#B4B4B4",
    fontSize: 16,
    marginTop: 10,
    marginLeft: 20,
  },
  matieres: {
    width: 100,
    height: "85%",
    marginTop: 7,
    marginHorizontal: 15,
    borderBottomLeftRadius: 28,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#b0b0d6",
  },
  nom: {
    textAlign: "center",
    color: "#f1f1f1",
  },
  allBtn: {
    display: "flex",
    justifyContent: "center",
    width: "89%",
    height: 40,
    backgroundColor: "#666666",
    alignSelf: "center",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#bcbcbc",
    marginTop: 20,
  },
  stats: {
    width: "89%",
    height: 120,
    backgroundColor: "#b0b0d6",
    alignSelf: "center",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#bcbcbc",
    marginTop: 20,
    marginBottom: 10,
  },
  statsTab: {
    marginLeft: 10,
    marginTop: 10,
    color: "#f1f1f1",
    fontSize: 18,
  },
});
