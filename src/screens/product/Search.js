import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import CONSTANT from "navigation/navigationConstant";
import { FontAwesome5, Feather, AntDesign, Ionicons,SimpleLineIcons } from "@expo/vector-icons";
import * as RootNavigation from "navigation/RootNavigation";
import colors from "colors";
import { Text, RowView } from "styles";
import { StylesAll } from "../../Styles/Styles";
import MainCategory from "data/MainCategory";
import SearchResult from "./SearchResult";
import Header from "../main/Header";
const HEIGHT = Dimensions.get("screen").height;
const WIDTH = Dimensions.get("screen").width;

const Search = () => {
 
 
  return (
    <View style={StylesAll.container}>
     <Header name="Search Product" navCom={CONSTANT.HOME} />
      <RowView
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginBottom: 10,
        }}
      >
        <RowView
          style={{
            backgroundColor: colors.white,
            borderRadius: 15,
            justifyContent: "space-between",
            alignSelf: "center",
          }}
        >
          <Feather
            name="search"
            size={27}
            color={colors.darkblack}
            style={{ paddingLeft: 14 }}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor={colors.inActive}
            style={styles.TextInput}
          />
        </RowView>
        <RowView
          style={styles.Search}
        >
        <SimpleLineIcons name="equalizer" size={24} color="black" />
        </RowView>
      </RowView>
      <ScrollView
        contentContainerStyle={styles.Scroll}
      >
        <SearchResult/>
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  Search:{
    backgroundColor: colors.white,
    borderRadius: 15,
    justifyContent: "center",
    alignSelf: "center",
    height: "100%",
    width: "15%",
  },
  TextInput: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 20,
    color: colors.white,
    width: "65%",
    height: "100%",
  },
  Scroll:{
    paddingTop: 20,
    marginHorizontal: 10,
    marginBottom: 20,
    flexDirection: "row",
  }
});
