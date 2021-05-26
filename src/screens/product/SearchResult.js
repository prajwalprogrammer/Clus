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
import { Ionicons } from "@expo/vector-icons";
import * as RootNavigation from "navigation/RootNavigation";
import colors from "colors";
import { Text, RowView } from "styles";
import { StylesAll } from "../../Styles/Styles";
import MainCategory from "data/MainCategory";
const HEIGHT = Dimensions.get("screen").height;
const WIDTH = Dimensions.get("screen").width;

const SearchResult = ({ navigation }) => {
 
  function renderMainCat(item, index) {
    var trendingStyle = {};

    if (index == 0) {
      trendingStyle = { marginLeft: 10 };
    } else {
      trendingStyle = {};
    }

    return (
      <Pressable
        style={{
          ...styles.PressableStyle,
          ...trendingStyle,
          ...StylesAll.trendingShadow,
        }}
        onPress={() => RootNavigation.navigate(CONSTANT.PRODUCTDETAILS)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/images/oil.png")}
            resizeMode="cover"
            style={styles.imageStyle}
          />
          <View style={{ width:'80%', height: "20%", justifyContent: "center" }}>
            <Text color={colors.lighttext} size={20} adjustsFontSizeToFit headingBold>
              {item.name}
            </Text>
            <Text color={colors.lighttext} size={15} adjustsFontSizeToFit  numberOfLines={1} regular>
              {item.dis}
            </Text>
          </View>
          <RowView
            style={{
                width:'80%',
               height: "15%",
              justifyContent: "space-between",
            }}
          >
            <RowView>
                <Text bold size={13} headingBold>
                  ${" "}
                </Text>
                <Text bold size={20} headingBold>
                  {item.price}
                </Text>
              </RowView>
          </RowView>
          <View style={{position:'absolute',top:10, right:10}}>
            <Ionicons name="heart-circle-sharp" size={30} color="black" style={StylesAll.trendingShadow} />
          </View>
        </View>
      </Pressable>
    );
  }

  return (
    <>
        <View style={{ flexDirection: "column", width: "50%" }}>
          <Text color={colors.lighttext} size={35} numberOfLines={2} adjustsFontSizeToFit bold>
            10 Results Found
          </Text>
          <FlatList
            //columnWrapperStyle={{justifyContent:'space-evenly'}}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ marginTop: 10, marginBottom: 50 }}
            numColumns={1}
            data={MainCategory.slice(0,MainCategory.length/2)}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => renderMainCat(item, index)}
          />
        </View>
        <View style={{ width: "50%", flexDirection: "column" }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ marginTop: 10, paddingBottom: 50 }}
            //numColumns={2}
            data={MainCategory.slice(MainCategory.length/2,MainCategory.length)}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => renderMainCat(item, index)}
          />
        </View>
      </>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  PressableStyle:{height: 280,
    width: WIDTH * 0.41,
    backgroundColor: colors.white,
    borderRadius: 25,
    margin: 6,
    marginTop: 20,},
  TextInput: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 20,
    color: colors.white,
    width: "65%",
    height: "100%",
  },
  imageStyle:{
    position: "absolute",
    borderRadius: 20,
    top: 0,
    width: "90%",
    height: "75%",
  }
});
