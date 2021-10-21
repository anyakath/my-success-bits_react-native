import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Home from '/Users/anyakathpalia/Desktop/MSB/temp/HomeScreen'
import LifeTracker from '/Users/anyakathpalia/Desktop/MSB/temp/LifeTrackerScreen'
import ToDo from '/Users/anyakathpalia/Desktop/MSB/temp/ToDoScreen'
import Focus from '/Users/anyakathpalia/Desktop/MSB/temp/FocusScreen'
import Login from '/Users/anyakathpalia/Desktop/MSB/temp/Login.js' 
import Signup from '/Users/anyakathpalia/Desktop/MSB/temp/SignUp'

import { createBottomTabNavigator, createAppContainer } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';


import Entypo from "@expo/vector-icons/Entypo"
import { SimpleLineIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import SignUp from '/Users/anyakathpalia/Desktop/MSB/temp/SignUp';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options = {{tabBarIcon: ()=> <Entypo name = "home" size ={25} />}} />
      <Tab.Screen name="Focus" component={Focus} options = {{tabBarIcon: () => <Fontisto name = "clock" size ={25}/>}} />
      <Tab.Screen name="LifeTracker" component={LifeTracker} options = {{tabBarIcon: () => <SimpleLineIcons name ="calendar" size ={25}/>} } />
      <Tab.Screen name="ToDo" component={ToDo} options = {{tabBarIcon: () => <Entypo name ="check" size ={25} /> }}/>
    </Tab.Navigator>
      )
}


function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator >
      {/* <Stack.Screen name="Sign Up" component={SignUp} /> 
      <Stack.Screen name="Log In" component={Login} /> */}
      <Stack.Screen name="Home" component={HomeNav} options = {{ title: ''}}  />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

export default App;


{/* <Stack.Navigator>
      {/* <Stack.Screen name="Sign Up" component={SignUp} /> */}
      {/* <Stack.Screen name="Log In" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator> */}
      
//<Tab.Navigator 
        // screenOptions = {{tabBarActiveTintColor: '#b39eb5',
        // tabBarInactiveTintColor: '#999999'
        // }}>
//</Tab.Navigator>