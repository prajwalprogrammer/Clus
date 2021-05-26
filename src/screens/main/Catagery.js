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
import { Text, RowView } from "Styles";
import colors from "colors";
import categoryData from "data/category";
import { StylesAll } from "../../Styles/Styles";

const WIDTH = Dimensions.get("screen").width;
const HEIGTH = Dimensions.get("screen").height;
const uri = "https://source.unsplash.com/random";

const Catagery = () => {
  const [catagery, setCatagery] = React.useState(categoryData);

  function renderCatagery(item, index) {
    var trendingStyle = {};

    if (index == 0) {
      trendingStyle = { marginLeft: 10 };
    } else {
      trendingStyle = {};
    }
    return (
      <ImageBackground
        source={{ uri }}
        style={{
          ...StylesAll.Input,
          ...styles.IMG1
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Text size={17}>{item.name}</Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <View style={{ marginLeft: 10 }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={catagery}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => renderCatagery(item, index)}
      />
    </View>
  );
};

export default Catagery;

const styles = StyleSheet.create({
  IMG1: {
    width: 250,
    height: 50,
    marginHorizontal: 7,
    borderRadius: 20,
    backgroundColor: colors.white,
    opacity: 0.7,
    overflow: "hidden",
    borderWidth: 5,
    borderColor: colors.white,
  },
});
