import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Home from "./src/component/Home";
import MainStss from "./src/component/stss/MainStss";

// screens premieres ST2S
import ScreenStss from "./src/component/stss/matieres/ScreenStss";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="stss"
          component={MainStss}
          options={{ headerShown: false }}
        />
        {/* tout les screens st2s premieres */}
        <Stack.Screen
          name="St2s_stss"
          component={ScreenStss}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
