import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../../Styles/color";
import { Text, RowView } from "styles";
import { StylesAll } from "../../Styles/Styles";

const SubProduct = () => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        height: 100,
        width: 93,
        borderRadius: 26,
        alignItems: "center",
        ...StylesAll.trendingShadow,
        justifyContent: "center",
      }}
    >
      <Image
        source={require("../../assets/images/oil.png")}
        resizeMode="cover"
        style={{
          // position: 'absolute',
          borderRadius: 10,
          top: 5,
          width: "50%",
          height: "80%",
          left: 0,
        }}
      />
      <Text color={colors.black} regular>
        OIL
      </Text>
    </View>
  );
};

export default SubProduct;

const styles = StyleSheet.create({});
