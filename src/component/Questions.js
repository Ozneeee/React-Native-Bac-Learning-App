import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Checkbox } from "react-native-paper";

export default function Questions() {
  const navigation = useNavigation();

  const [nbquestion, setnbquestion] = useState(0);

  let imgQuestions = require("../tension.jpg");

  const questions = [
    //0
    {
      questionText: "Lorsque nous accolons deux lentilles leurs vergences :",
      reponsesOptions: [
        { reponseText: "S'additionnent", correct: true },
        { reponseText: "Se soustraient", correct: false },
        { reponseText: "Se multiplient", correct: false },
        { reponseText: "Se divisent", correct: false },
      ],
    },

    // 1
    {
      questionText: "La tension artérielle se mesure en :",
      reponsesOptions: [
        { reponseText: "Centimètre", correct: false },
        { reponseText: "Centimètre de mercure", correct: true },
        { reponseText: "Millimètre", correct: false },
        { reponseText: "Millimètre de mercure", correct: false },
      ],
    },

    //2
    {
      questionText: "La surface pressé se mesure en :",
      reponsesOptions: [
        { reponseText: "ml²", correct: false },
        { reponseText: "km²", correct: false },
        { reponseText: "m²", correct: true },
        { reponseText: "cm²", correct: false },
      ],
    },
  ];

  const [checked, setCheked] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(false);
  const [points, setPoints] = useState(0);

  const selectReponse = (correct) => {
    if (correct === true) {
      setPoints(points + 1);
    }
  };

  const nextQuestion = () => {
    const thisquestion = currentQuestion + 1;
    if (thisquestion < questions.length) {
      setCurrentQuestion(thisquestion);
      setnbquestion(nbquestion + 1);
    } else {
      setScore(true);
    }
  };

  const validez = () => {
    if (checked) {
      nextQuestion();
      setCheked(!checked)
    } else {
      Alert.alert("Erreur", "Merci de sélectionner au moins une réponse.");
    }
  };

  const onCheck = () => {
    questions[currentQuestion].reponsesOptions.forEach((i) => {
      console.log(i.reponseText);
      setCheked(!checked)
    });
  };

  return (
    <View style={styles.body}>
      {score ? (
        <View>
          <Text style={styles.noteFinale}>
            Votre note est de {points} / {questions.length}
          </Text>
        </View>
      ) : (
        <>
          <Text style={styles.nbquestion}>{nbquestion} / 20</Text>
          <View style={styles.box}>
            <ImageBackground
              source={imgQuestions}
              style={styles.imgQuestions}
            />
          </View>
          <View style={styles.question}>
            <Text style={styles.text}>
              {questions[currentQuestion].questionText}
            </Text>
          </View>

          <View style={styles.chekbox}>
            {questions[currentQuestion].reponsesOptions.map(
              (reponsesOptions) => {
                return (
                  <Checkbox.Item
                    label={reponsesOptions.reponseText}
                    uncheckedColor="#f1f1f1"
                    status={checked ? "checked" : "unchecked"}
                    onPress={onCheck}
                    labelStyle={styles.textQuestions}
                    mode="android"
                  />
                );
              }
            )}
          </View>

          <TouchableOpacity style={styles.submit} onPress={validez}>
            <Text style={styles.text}>Valider</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: "100%",
    backgroundColor: "#272727",
  },
  nbquestion: {
    color: "#C6C6C6",
    marginTop: 10,
    marginLeft: 20,
    fontSize: 16,
  },
  box: {
    width: "90%",
    height: 200,
    alignSelf: "center",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#f1f1f1",
  },
  imgQuestions: {
    width: "100%",
    height: "100%",
  },
  question: {
    width: "90%",
    height: 50,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#f1f1f1",
    borderTopWidth: 0,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#f1f1f1",
    fontSize: 18,
  },
  chekbox: {
    height: 185,
    width: "90%",
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 30,
  },
  textQuestions: {
    color: "#f1f1f1",
    fontSize: 18,
    marginLeft: -12,
  },
  submit: {
    alignSelf: "center",
    width: 120,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "lightgreen",
    borderRadius: 8,
    marginTop: 15,
  },
  noteFinale: {
    alignSelf: "center",
    marginTop: "50%",
    color: "#f1f1f1",
    fontSize: 32,
  },
});
