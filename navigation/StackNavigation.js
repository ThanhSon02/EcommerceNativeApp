import { StyleSheet, } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Tabbar from "../components/Tabbar";
import SearchResult from "../screens/SearchResult";
import Detail from "../screens/Detail";


const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Tabbar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchResult"
          component={SearchResult}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
