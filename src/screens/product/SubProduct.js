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
        height: 80,
        width: 80,
        borderRadius: 1000,
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
          width: 80,
          height: 150,
          left: 0,
        }}
      />
    </View>
  );
};

export default SubProduct;

const styles = StyleSheet.create({});
