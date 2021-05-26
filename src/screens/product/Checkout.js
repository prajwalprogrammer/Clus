import React from "react";
import { StyleSheet, View, TextInput, Pressable } from "react-native";
import { StylesAll } from "../../Styles/Styles";
import Header from "../main/Header";
import { Text, RowView } from "styles";
import * as RootNavigation from "navigation/RootNavigation";
import CONSTANT from "navigation/navigationConstant";
import { FontAwesome5, Feather, SimpleLineIcons } from "@expo/vector-icons";
import CartProduct from "./CartProduct";
import colors from "../../Styles/color";
import CheckoutTotal from "./CheckoutTotal";
const Checkout = () => {
  return (
    <View style={StylesAll.container}>
      <Header
        name="Shopping Bag"
        navCom={CONSTANT.PRODUCTDETAILS}
        Avatar={<FontAwesome5 name="shopping-bag" size={27} color="black" />}
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </View>
      <RowView
        style={{
          justifyContent: "center",
          marginVertical: 20,
        }}
      >
        <RowView
          style={{
            backgroundColor: colors.white,
            borderRadius: 15,
            alignSelf: "center",
            ...StylesAll.trendingShadow,
          }}
        >
          <TextInput
            placeholder="Promo Code"
            placeholderTextColor={colors.inActive}
            style={styles.TextInput}
          />
          <RowView style={styles.Apply}>
            <Pressable
              onPress={() => RootNavigation.navigate(CONSTANT.CHECKOUT)}
            >
              <Text style={{ color: colors.lighttext }} size={20} bold>
                Apply
              </Text>
            </Pressable>
          </RowView>
        </RowView>
      </RowView>
      <View style={{ width: "85%", height: 170, alignSelf: "center" }}>
        <CheckoutTotal pname="Subtotal" Price="$45.99"/>
        <CheckoutTotal pname="Shipping" Price="$4.99"/>
        <CheckoutTotal pname="Bag Total" Price="$50.99" Item="(4 items) "/>
        
      </View>
      <RowView style={{...styles.Apply,width:'80%',borderRadius:30,height:60,marginTop:10}}>
            <Pressable
              onPress={() => RootNavigation.navigate(CONSTANT.CHECKOUT)}
            >
              <Text style={{ color: colors.lighttext }} size={20} bold>
                Proceed To Checkout
              </Text>
            </Pressable>
          </RowView>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  Apply: {
    width: 100,
    height: 50,
    borderRadius: 15,
    backgroundColor: colors.black,
    alignSelf: "center",
    justifyContent: "center",
  },
  Search: {
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
    height: 70,
  },
});
