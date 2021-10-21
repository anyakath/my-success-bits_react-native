import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import FocusHome from '/Users/anyakathpalia/Desktop/MSB/temp/Focus/FocusHome'
import NMFocus from '/Users/anyakathpalia/Desktop/MSB/temp/Focus/NMFocus'
import Pomodoro from '/Users/anyakathpalia/Desktop/MSB/temp/Focus/Pomodoro'
import FlowState from '/Users/anyakathpalia/Desktop/MSB/temp/Focus/FlowState'
import Meditation from '/Users/anyakathpalia/Desktop/MSB/temp/Focus/Meditation'
import { createDrawerNavigator, createAppContainer} from '@react-navigation/drawer';

const FocusDrawer = createDrawerNavigator();

function Drawer() {
  return (
    <FocusDrawer.Navigator>
      <FocusDrawer.Screen name="FocusHome" component={FocusHome}/>
      <FocusDrawer.Screen name="90 Minute Focus" component={NMFocus} />
      <FocusDrawer.Screen name="Pomodoro" component={Pomodoro} />
      <FocusDrawer.Screen name="FlowState" component={FlowState} />
      <FocusDrawer.Screen name="Meditation" component={Meditation} />
    </FocusDrawer.Navigator>
  );
}

export default Drawer 