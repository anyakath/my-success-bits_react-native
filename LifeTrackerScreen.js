import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from '@react-navigation/material-top-tabs';
import Daily from '/Users/anyakathpalia/Desktop/MSB/temp/LT/Daily'
import Weekly from '/Users/anyakathpalia/Desktop/MSB/temp/LT/Weekly'

const Tab = createMaterialTopTabNavigator();

function LifeTrackerTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Today" component={Daily} />
      <Tab.Screen name="This Week" component={Weekly} />
    </Tab.Navigator>
  );
}

export default LifeTrackerTabs
