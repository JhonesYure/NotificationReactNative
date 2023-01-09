import React, {Component} from "react";
import { View, Text, ScrollView, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Style } from "../Style/style";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default class HomeScreen extends Component{
    
    render(){
        return(
        <ScrollView style={[Style.back]}>
        <View>
            <Text style={[Style.txt]}>Bem vindo a tela de testes!</Text>
        </View>
            
        <View>
            <TouchableOpacity onPress={this.props.gesturenotificationUser} style={[Style.botao]}>
                <Text style={[Style.txtButton]}>Testar Notificação</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity onPress={this.props.onPressCancelAllLocalNotification} style={[Style.botao]}>
            <Text style={[Style.txtButton]}>Cancelar Notificação</Text>
            </TouchableOpacity>
        </View>

        </ScrollView>
        
        )
    }
}