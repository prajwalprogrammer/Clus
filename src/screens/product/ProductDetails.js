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

import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetFlatList,
} from "@gorhom/bottom-sheet";
import { FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import CONSTANT from "navigation/navigationConstant";

import colors from "colors";
import { Text, RowView } from "styles";
import { StylesAll } from "../../Styles/Styles";
import Header from "../main/Header";
import SubProduct from "./SubProduct";
import * as RootNavigation from "navigation/RootNavigation";
const HEIGHT = Dimensions.get("screen").height;
const WIDTH = Dimensions.get("screen").width;
import ProductPrices from "data/ProductPrices";
import ManufacturalDetails from "./ManufacturalDetails";
import ClusDetails from "./ClusDetails";
import OtherCompanyProducts from "./OtherCompanyProducts";

const ProductDetails = () => {
  return (
    <View style={StylesAll.container}>
      <Header
        navCom={CONSTANT.SEARCH}
        Avatar={<Ionicons name="grid-outline" size={30} color={colors.black} />}
      />
      <View
        Style={{
          backgroundColor: colors.gray,
          marginHorizontal: 10,
          flex: 1,
        }}
      >
        <Image
          source={require("../../assets/images/oil.png")}
          style={{
            width: "100%",
            height: 380,
          }}
          resizeMode="contain"
        />
        <RowView style={{ justifyContent: "space-evenly", marginVertical: 20 }}>
          <SubProduct />
          <SubProduct />
          <SubProduct />
        </RowView>
      </View>
      <BottomSheet
        initialSnapIndex={1}
        snapPoints={["24%", "80%"]}
        style={{ flex: 1 }}
      >
        <BottomSheetScrollView>
          <View style={{ flex: 1 }}>
            <RowView
              style={{
                marginBottom: 20,
                marginHorizontal: 30,
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text
                  size={25}
                  bold
                  color={colors.black}
                  style={{ width: "90%" }}
                  headingBold
                >
                  Facial Cleanser
                </Text>
                <Text color={colors.lighttext} style={{ marginTop: 5 }}>
                  Size: 7.60
                </Text>
              </View>
              <View>
                <RowView>
                  <FontAwesome name="star" size={24} color="black" />
                  <FontAwesome name="star" size={24} color="black" />
                  <FontAwesome name="star" size={24} color="black" />
                  <FontAwesome name="star" size={24} color="black" />
                  <FontAwesome name="star-half-empty" size={24} color="black" />
                </RowView>
                <Text style={{ marginTop: 10 }}>(132 Reviews)</Text>
              </View>
            </RowView>
            <RowView
              style={{ marginHorizontal: 30, justifyContent: "space-between" }}
            >
              <View>
                <Text size={35} bold>
                  $99.8
                </Text>
                <Text
                  style={{
                    textDecorationLine: "line-through",
                    textDecorationStyle: "solid",
                  }}
                  size={17}
                >
                  $100
                </Text>
              </View>
              <View>
                <Text
                  style={{ color: colors.black, marginBottom: 12 }}
                  size={17}
                  bold
                >
                  Your Sale 2%
                </Text>
                <RowView style={styles.Cart}>
                  <AntDesign
                    name="minuscircleo"
                    size={32}
                    color="black"
                    style={{ paddingHorizontal: 3 }}
                  />
                  <Text headingBold style={{ paddingHorizontal: 3 }} size={20}>
                    02
                  </Text>
                  <AntDesign
                    name="pluscircle"
                    size={32}
                    color="black"
                    style={{
                      paddingHorizontal: 3,
                      ...StylesAll.trendingShadow,
                    }}
                  />
                </RowView>
              </View>
            </RowView>
            <OtherCompanyProducts />
            <RowView
              style={{
                ...styles.Apply,
                width: "80%",
                borderRadius: 30,
                height: 60,
                marginTop: 10,
              }}
            >
              <Pressable
                onPress={() => RootNavigation.navigate(CONSTANT.CHECKOUT)}
              >
                <Text style={{ color: colors.lighttext }} size={20} bold>
                  Buy Now
                </Text>
              </Pressable>
            </RowView>
            <RowView
              style={{
                ...styles.Apply,
                width: "80%",
                borderRadius: 30,
                height: 60,
                marginTop: 10,
              }}
            >
              <Pressable
                onPress={() => RootNavigation.navigate(CONSTANT.CHECKOUT)}
              >
                <Text style={{ color: colors.lighttext }} size={20} bold>
                  Add To Cart
                </Text>
              </Pressable>
            </RowView>
            <RowView style={{ margin: 15, marginHorizontal: 30 }}>
              <Text size={25} headingBold>
                From Clus
              </Text>
            </RowView>
            <ClusDetails />
            <RowView style={{ margin: 15, marginHorizontal: 30 }}>
              <Text size={25} headingBold>
                From Manufactural
              </Text>
            </RowView>
            <ManufacturalDetails />
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  Apply: {
    width: 100,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.black,
    alignSelf: "center",
    justifyContent: "center",
  },
  TextInput: {
    width: "27%",
    height: "100%",
    borderRadius: 20,
    backgroundColor: colors.black,
    alignSelf: "center",
    justifyContent: "center",
  },
  Cart: {
    //width: "30%",
    //height: "80%",
    justifyContent: "space-evenly",
    borderRadius: 40,
    // borderColor: colors.lighttext,
    // borderWidth: 2,
    //left: 10,
  },
});
