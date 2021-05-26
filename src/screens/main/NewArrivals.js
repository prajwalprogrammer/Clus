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
import { Text, RowView } from "Styles";
import colors from "colors";
import MainCategory from "data/MainCategory";
import { StylesAll } from "../../Styles/Styles";
const WIDTH = Dimensions.get("screen").width;
const HEIGTH = Dimensions.get("screen").height;
const uri = "https://source.unsplash.com/random";

const NewArrivals = () => {
  const [MainCat, setMainCat] = React.useState(MainCategory);

  function renderMainCat(item, index) {
    var trendingStyle = {};

    if (index == 0) {
      trendingStyle = { marginLeft: 10 };
    } else {
      trendingStyle = {};
    }

    return (
      <View
        style={{
          ...StylesAll.MainCat,
          ...trendingStyle,
          ...StylesAll.trendingShadow,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <Image
            source={{ uri: item.img }}
            resizeMode="cover"
            style={StylesAll.ImageStyle}
          />
          <RowView style={{ justifyContent: "space-between", height: "20%" }}>
            <View>
              <Text size={20}>{item.name}</Text>
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
      </View>
    );
  }
  return (
    <View style={{ marginLeft: 10 }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={MainCat}
        snapToInterval={WIDTH * 0.85 + 12}
        decelerationRate="fast"
        contentContainerStyle={{ paddingBottom: 20 }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => renderMainCat(item, index)}
      />
    </View>
  );
};

export default NewArrivals;

const styles = StyleSheet.create({

});
