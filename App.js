// In App.js in a new project

import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Notification } from './src/Notification/Notifications';

import HomeScreen from './src/Screens/HomeScreen';
import OfferScreen from './src/Screens/OfferScreen';
import CupomScreen from './src/Screens/CupomScreen';

const Notify = Notification
const Stack = createNativeStackNavigator();


class App extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount()
  {
    Notify.configure()
    Notify.createChannel()
    Notify.NotificationScheduleNextFood()
    Notify.NotificationScheduleOffer()
    Notify.NotificationScheduleNextFood()
  }

  gesturenotificationUser = () =>{
    Notify.ShowNotification(
      1,
      "Cupom disponível",
      "Use o cupom e ganhe descontos",
      {}, //data action
      {}, //options action
    )
  }

  onPressCancelAllLocalNotification = () =>
  {
    Notify.cancelAllLocalNotifications()
  }

  render(){
    
    return(
      
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' options={{title: 'Home', headerStyle:{backgroundColor:'black'},headerTintColor: 'white'}}>
        {
            ({navigation}) =>{
              Notify.setNavegator(navigation)
              return(<HomeScreen
                gesturenotificationUser = {this.gesturenotificationUser}
                onPressCancelAllLocalNotification = {this.onPressCancelAllLocalNotification}
                />)
            }
          }
       </Stack.Screen>
        <Stack.Screen name = "Cupom" component={CupomScreen}/>
        <Stack.Screen name = "Ofertas" component={OfferScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
      
    )
  }
}

export default App;
