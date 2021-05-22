import React, { useEffect, useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CONSTANT from "./navigationConstant.json";

import { navigationRef } from "./RootNavigation";
import { AuthConsumer } from "../context/auth";

import LoginScreen from "screen/auth/login";
import HomeScreen from "screen/main";

import color from "colors";

const Index = () => {
  const Stack = createStackNavigator();
  const [Loading, setLoading] = useState(true);
  const {
    state: { auth },
    setAuth,
  } = AuthConsumer();

  return (
    <NavigationContainer ref={navigationRef}>
      {!auth ? (
        <Stack.Navigator
          headerMode={false}
          screenOptions={{ animationEnabled: false }}
        >
          <Stack.Screen component={LoginScreen} name={CONSTANT.Login} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          headerMode={false}
          screenOptions={{ animationEnabled: false }}
        >
          <Stack.Screen component={HomeScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Index;
