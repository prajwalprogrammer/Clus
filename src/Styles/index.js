import React, {useState, useEffect} from 'react'
import {Text as RNText, View as RNView, Image} from 'react-native'
import color from 'colors'

const Text = ({children, style, bold=false,light=false,white=false, size=15, adjustsFontSizeToFit=false, numberOfLines=10000})=>{
    let font = 'os-R'
    var colorTheme = color.black
    if (bold) font=('pl-B')
    if(white) colorTheme = color.white
    if (light) font=('os-L')

    return <RNText style={{color:colorTheme,fontSize:size, fontFamily:font, ...style}} numberOfLines={numberOfLines} adjustsFontSizeToFit={adjustsFontSizeToFit}>{children}</RNText>
}

const RowView = ({children, style})=><RNView style={{flexDirection:'row',alignItems:'center',...style}}>{children}</RNView>

export {Text, RowView}