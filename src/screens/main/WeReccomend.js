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
import {  SimpleLineIcons } from "@expo/vector-icons";

import { Text, RowView } from "Styles";
import colors from "colors";
import categoryData from "data/category";
import MainCategory from "data/MainCategory";
import { StylesAll } from "../../Styles/Styles";
const WIDTH = Dimensions.get("screen").width;
const HEIGTH = Dimensions.get("screen").height;
const uri = "https://source.unsplash.com/random";

const WeReccomend = () => {
  const [catagery, setCatagery] = React.useState(categoryData);

  function renderReccomdCat(item, index) {
    var trendingStyle = {};

    if (index == 0) {
      trendingStyle = { marginLeft: 10 };
    } else {
      trendingStyle = {};
    }

    return (
      <View
        style={{
          ...StylesAll.Input,
          width: WIDTH * 0.85,
          height: 100,
          marginHorizontal: 7,
          borderRadius: 20,
          backgroundColor: colors.white,
          ...StylesAll.trendingShadow,
          marginBottom: 30,
        }}
      >
        <RowView style={{ justifyContent: "space-evenly" }}>
          <Image
            source={{ uri }}
            style={{ height: 70, width: 70, borderRadius: 20 }}
          />
          <View style={{ width: "50%" }}>
            <Text size={17} color={colors.black} bold>
              {item.name}
            </Text>
            <RowView>
              <Text bold size={13}>
                ${" "}
              </Text>
              <Text bold size={20}>
                {item.price}
              </Text>
            </RowView>
          </View>
          <Pressable
            style={StylesAll.BagStyle}
          >
            <SimpleLineIcons name="bag" size={20} color={colors.white} />
          </Pressable>
        </RowView>
      </View>
    );
  }

  return (
    <View style={{ marginLeft: 10 }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={catagery}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => renderReccomdCat(item, index)}
      />
    </View>
  );
};

export default WeReccomend;

const styles = StyleSheet.create({
});
