import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function Stats() {
  let points = 150;
  let series = 12;
  let matiere = "St2s";
  let moyenne = 14.5;

  return (
    <View style={styles.statsContainer}>
      <Text style={styles.points}>Points : {points}</Text>
      <Text style={styles.points}>Matiere : {series}</Text>
      <Text style={styles.series}>Series : {matiere}</Text>
      <Text style={styles.moyenne}>Moyenne : {moyenne}</Text>

      <LineChart
        data={{
          labels: [],
          datasets: [{ data: [14, 10, 13, 8, 12, 14, 20, 12, 14, 5, 17, 13 ] }],
        }}
        width={305}
        height={115}
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#b0b0d6",
          backgroundGradientFrom: "#b0b0d6",
          backgroundGradientTo: "#b0b0d6",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "lightgreen",
          },
        }}
        style={{
          borderRadius: 16,
          top: 15,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  statsContainer: {
    width: "90%",
    height: 200,
    marginTop: 20,
    backgroundColor: "#b0b0d6",
    alignSelf: "center",
    borderRadius: 8,
    display: "flex",
  },
  points: {
    color: "#f1f1f1",
    fontSize: 18,
    marginLeft: 10,
    marginTop: 10,
  },
  series: {
    position: "absolute",
    color: "#f1f1f1",
    fontSize: 18,
    top: 10,
    left: "60%",
  },
  moyenne: {
    position: "absolute",
    color: "#f1f1f1",
    fontSize: 18,
    top: 43,
    left: "60%",
  },
  futur: {
    width: "90%",
    height: 95,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 8,
    marginTop: 20,
  },
});
