import React from 'react';
import axios from 'axios'
import { StyleSheet, Text, View } from 'react-native';
import {CalendarContainer, Colors, Container} from '/Users/anyakathpalia/Desktop/MSB/temp/styles'
import HomeHeader from '/Users/anyakathpalia/Desktop/MSB/temp/HomeHeader'
import AdviceItem from '/Users/anyakathpalia/Desktop/MSB/temp/AdviceItem'
import CalendarView1 from './CalendarView1';
//import CalendarView1  from '/Users/anyakathpalia/Desktop/MSB/temp/CalendarView1'; 

function Home() {
    
    return (
    
    <Container>
        <HomeHeader/>
        <AdviceItem/>
        <CalendarView1/>
    </Container>
    
)
}
   
export default Home

// <CalendarContainer>
//             <CalendarView/>
//         </CalendarContainer>