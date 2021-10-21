import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, TouchableOpacity, Vibration,  View } from 'react-native'
import { 
    TimerContainer ,
    TimerButtonContainer,
    TimerText,
    TimerTextContainer,
    Colors,
    StyledButton,
    ButtonText, 
    TimerButton,
    TimerButtonText
} from '/Users/anyakathpalia/Desktop/MSB/temp/styles'

import CountDown from 'react-native-countdown-component'
import { Ionicons } from '@expo/vector-icons'
const ONE_SECOND_IN_MS = 1000; 

const NMFocus = () => {
    const [countRunning, setCountRunning] = useState(false)
    const [resetCount, setResetCount] = useState(null)
    const [counter, setCounter] = useState(0)

    return (
        <>
          <StatusBar style="auto"/>
              <TimerContainer color= {Colors.meditation}>
                    <CountDown 
                        until={20*60}
                        onFinish={ () => {alert("Hope that was soothing. Have a nice day :)"), Vibration.vibrate(10 * ONE_SECOND_IN_MS)} }
                        onPress={() => alert('Clicked')}
                        size={45}
                        digitStyle={countStyles.coundownDigit}
                        digitTxtStyle={countStyles.countdownText}
                        timeToShow={['H', 'M', 'S']}
                        timeLabels={{m:'Minutes', s: 'Seconds', h: 'Hours'}}
                        timeLabelStyle={countStyles.labelStyle}
                        showSeparator={true}
                        running={countRunning}
                        id={resetCount}
                    />
                  <TimerButtonContainer top ={30}>
                      <TimerButton onPress={() => setCountRunning(true)}>
                          <TimerButtonText>
                              Start 
                          </TimerButtonText>
                      </TimerButton>
                      <TimerButton onPress={() => setCountRunning(false)}>
                          <TimerButtonText>
                              Pause 
                          </TimerButtonText>
                      </TimerButton> 
                      <TimerButton onPress={() => setResetCount(Math.random().toString()) }>
                          <TimerButtonText>
                              Reset 
                          </TimerButtonText> 
                      </TimerButton> 
                  </TimerButtonContainer> 
                  <TimerTextContainer>     

                        <Ionicons name= 'leaf' size={20} color= '#909000'/>
                        <Ionicons name= 'water' size={20} color= '#909000'/>
                        
                        <TimerText>
                        Breathe. Focussing on your mental {"\n"}health is just as important. Try and take {"\n"}out time for meditating every day
                        </TimerText>
                    </TimerTextContainer>
                </TimerContainer> 
        </>
    )
}

const countStyles = StyleSheet.create({
    coundownDigit: {
        backgroundColor: '#fff',        
    },
    countdownText: {
        color: '#000000',
    },
    labelStyle: {
        color: '#000000',
        fontSize: 15,
        fontWeight: 'bold',
    }
})

export default NMFocus






// import * as React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

// export default function Meditation() {
//     return (
//       <View style={styles.container}>
//         <Text>Meditation</Text>
//         <StatusBar style="auto" />
//       </View>
//     );
//   }
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fac898',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });
  