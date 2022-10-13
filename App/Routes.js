import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SplashScreen,
  LoginScreen,
  HomeScreen,
  Vaksin,
} 
from "./Pages";

const Stack = createStackNavigator();

export default Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Vaksin"
        component={Vaksin}
        options={{ headerShown: true, title:"Vaccine and Immunization" }}
      />

    </Stack.Navigator>
  );
};