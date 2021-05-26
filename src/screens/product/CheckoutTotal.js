import React from 'react'
import { StyleSheet, View } from 'react-native'
import colors from '../../Styles/color'
import { Text, RowView } from "styles";

const CheckoutTotal = (props) => {
  return (
    <RowView
          style={{
            justifyContent: "space-between",
            height: "30%",
            borderBottomWidth: 1,
            borderColor: colors.white,
          }}
        >
          <Text color={colors.black} bold size={18}>{props.pname}</Text>
          <RowView>
          <Text color={colors.lighttext}>{props.Item?(props.Item):null} </Text>

            <Text color={colors.black} bold size={20}>
              {props.Price}{" "}
            </Text>
            <Text color={colors.inActive} size={12}>
              USD
            </Text>
          </RowView>
        </RowView>
  )
}

export default CheckoutTotal

const styles = StyleSheet.create({})
