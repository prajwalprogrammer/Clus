import React, { useEffect, useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CONSTANT from "./navigationConstant.json";

import { navigationRef } from "./RootNavigation";
import { AuthConsumer } from "../context/auth";


import Home from "../screens/main/Home";
import PlayHome from "../screens/auth/login";
import PlayHome1 from "../screens/main/VideoPlay";
import Search from "../screens/product/Search";
import ProductDetails from "../screens/product/ProductDetails";
import Checkout from "../screens/product/Checkout";

const Index = () => {
  const Stack = createStackNavigator();
  const [Loading, setLoading] = useState(true);
  const {
    state: { auth },
    setAuth,
  } = AuthConsumer();

  return (
    <NavigationContainer ref={navigationRef}>
      {auth ? (
        <Stack.Navigator
          headerMode={false}
          screenOptions={{ animationEnabled: false }}
        >
          <Stack.Screen component={PlayHome} name={CONSTANT.LOGIN} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          headerMode={false}
          screenOptions={{ animationEnabled: false }}
        >
          <Stack.Screen component={Home} name={CONSTANT.HOME} />
          <Stack.Screen component={Search} name={CONSTANT.SEARCH} />
          <Stack.Screen component={ProductDetails} name={CONSTANT.PRODUCTDETAILS} />
          <Stack.Screen component={Checkout} name={CONSTANT.CHECKOUT} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Index;
