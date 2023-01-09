import React,{Component} from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import { Style } from '../Style/style';



export default function CupomScreen(){
    return(
        <View style={[Style.back]}>
        <Text style={[Style.txt]}> Cupom de desconto </Text>
        </View>
    )
}