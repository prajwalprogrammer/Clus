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

import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
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

const ProductDetails = ({ navigation }) => {
  const [images, setImages] = React.useState([
    require("../../assets/images/oil.png"),
    require("../../assets/images/oil.png"),
    require("../../assets/images/oil.png"),
  ]);
  const [MainCat, setMainCat] = React.useState();

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
          flex:1
        }}
      >
        {/* <SliderBox
          images={images}
          sliderBoxHeight={430}
          ImageComponentStyle={{
            width: "80%",
            height: 380,
            left: 0,
            backgroundColor: colors.gray,
          }}
          resizeMode="cover"
        /> */}
        <Image
          source={require('../../assets/images/oil.png')}
          style={{
            width:'100%',
            height:380
          }}
          resizeMode='contain'
        />
        <RowView style={{ justifyContent: "space-evenly", marginVertical: 20 }}>
          <SubProduct />
          <SubProduct />
          <SubProduct />
        </RowView>
        
      </View>
        <BottomSheet
          index={1}
          snapPoints={['24%', '24%']}
          style={{flex:1}}
        >
          <BottomSheetScrollView>
            <View style={{flex:1}}>
              <RowView
                style={{
                  marginBottom: 40,
                  marginHorizontal: 30,
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text size={25} bold color={colors.black} style={{width:'90%'}} headingBold>
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
                <Text size={35} bold>
                  $99.8
                </Text>

                <RowView style={styles.Cart}>
                  <Text bold>-</Text>
                  <Text>1</Text>
                  <Text>+</Text>
                </RowView>
                <>
                  <RowView style={styles.TextInput}>
                    <Pressable
                      onPress={() => RootNavigation.navigate(CONSTANT.CHECKOUT)}
                    >
                      <Text style={{ color: colors.white }} size={20} bold>
                        Cart
                      </Text>
                    </Pressable>
                  </RowView>
                </>
              </RowView>
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  TextInput: {
    width: "27%",
    height: "130%",
    borderRadius: 20,
    backgroundColor: colors.black,
    alignSelf: "center",
    justifyContent: "center",
  },
  Cart: {
    width: "30%",
    height: "80%",
    justifyContent: "space-evenly",
    borderRadius: 40,
    borderColor: colors.lighttext,
    borderWidth: 2,
    left: 10,
  },
});
