import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Pressable,
  FlatList,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import * as RootNavigation from "navigation/RootNavigation";
import CONSTANT from "navigation/navigationConstant";
import { Text, RowView } from "Styles";
import colors from "colors";
import NewArrivals from "./NewArrivals";
import WeReccomend from './WeReccomend'
import Catagery from "./Catagery";
import { StylesAll } from "StylesAll";

const Home = ({ navigation }) => {

  // Render

  return (
    <View style={StylesAll.container}>
      <ScrollView>
        <RowView style={{ justifyContent: "center", margin: 30, height: 45 }}>
          <Pressable onPress={() => RootNavigation.navigate(CONSTANT.SEARCH)}>
            <RowView style={StylesAll.Input}>
              <Feather
                name="search"
                size={27}
                color={colors.darkblack}
                style={{ paddingRight: 10 }}
              />
              <Text size={17} color={colors.lighttext}>
                What are you looking for ?
              </Text>
            </RowView>
          </Pressable>
        </RowView>
        <Catagery />
        <RowView style={{ margin: 15 }}>
          <Text size={20}>New Arrivals</Text>
        </RowView>
        <NewArrivals />       
        <RowView style={{ margin: 15 }}>
          <Text size={20}>We Recommend</Text>
        </RowView>
        <WeReccomend />        
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
});
