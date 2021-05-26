import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../../Styles/color";
import { StylesAll } from "../../Styles/Styles";
import { Text, RowView } from "styles";
import { Entypo, AntDesign } from "@expo/vector-icons";
const CartProduct = () => {
  return (
    <View
      style={{
        height: 120,
        width: "90%",
        borderRadius: 26,
        alignItems: "center",
      }}
    >
      <RowView>
        <View
          style={{
            ...styles.Row,
            ...StylesAll.trendingShadow,
          }}
        >
          <>
            <Image
              source={require("../../assets/images/oil.png")}
              resizeMode="cover"
              style={{
                // position: 'absolute',
                borderRadius: 10,
                width: "85%",
                height: "95%",
              }}
            />
          </>
        </View>
        <View style={{ width: "45%" }}>
          <Text size={20} color={colors.black} heading>
            Facial Cleanser
          </Text>
          <Text color={colors.lighttext} style={{ marginTop: 5 }}>
            Size: 7.60
          </Text>
          <Text
            color={colors.lighttext}
            style={{ marginTop: 5 }}
            size={20}
            headingBold
          >
            $ 19.99
          </Text>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            //alignItems: "flex-start",
            width: "24%",
            height: "70%",
          }}
        >
          <Entypo
            name="cross"
            size={20}
            color={colors.black}
            style={{
              justifyContent: "flex-end",
              alignSelf: "flex-end",
            }}
          />
          <RowView>
            <AntDesign
              name="minuscircleo"
              size={29}
              color="black"
              style={{ paddingHorizontal: 3 }}
            />
            <Text headingBold style={{ paddingHorizontal: 3 }}>
              02
            </Text>
            <AntDesign
              name="pluscircle"
              size={29}
              color="black"
              style={{ paddingHorizontal: 3, ...StylesAll.trendingShadow }}
            />
          </RowView>
        </View>
      </RowView>
    </View>
  );
};

export default CartProduct;

const styles = StyleSheet.create({
  Row: {
    width: "22%",
    borderRadius: 20,
    height: "85%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.gray,
    marginRight: 22,
  },
});
