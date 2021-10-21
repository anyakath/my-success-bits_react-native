import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, TouchableOpacity, Vibration, View } from 'react-native'
import { 
    TimerContainer ,
    TimerButtonContainer,
    Colors,
    StyledButton,
    ButtonText, 
    TimerButton,
    TimerButtonText,
    TimerTextContainer,
    TimerText
} from '/Users/anyakathpalia/Desktop/MSB/temp/styles'

import { Ionicons } from '@expo/vector-icons'
import CountDown from 'react-native-countdown-component'

const ONE_SECOND_IN_MS = 1000; 

const NMFocus = () => {
    const [countRunning, setCountRunning] = useState(false)
    const [breakRunning, setBreakRunning] = useState(true)
    const [resetCount, setResetCount] = useState(null)
    const [counter, setCounter] = useState(0)
    const [timerSwitch, setTimerSwitch] = useState(false)

    const handleFinish = () => {
        setCountRunning(false)
        setTimerSwitch(!timerSwitch)
        Vibration.vibrate(10 * ONE_SECOND_IN_MS )
    }

    return (
        <>
          <StatusBar style="auto"/>
              {!timerSwitch && (
              <>
              <TimerContainer color={Colors.secondary} >
                    <CountDown 
                        until={90*60}
                        onFinish={ () => {alert('Phew! Time for a break!'), handleFinish()}}
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
                <TimerButtonContainer top = {30}>
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
                    <TimerText>
                    Psst.. In a habit of working for longer stretches?{"\n"}Try the 90 minute focus session.{"\n"}Work for 90 minutes and take 15 minute breaks {"\n"}in between sessions! 
                    </TimerText>
                </TimerTextContainer>
            </TimerContainer >
            </>
            )}

            {timerSwitch && (
                 <TimerContainer color={Colors.secondary} >
                     <Text color= {'#999999'} fontSize= {40}>
                            b r e a k {"\n"}
                     </Text>
                    <CountDown 
                        until={15*60}
                        onFinish={ () => {alert('Your Focus session just ended! Got more work left? Start another one :)'), handleFinish()}}
                        size={45}
                        digitStyle={countStyles.coundownDigit}
                        digitTxtStyle={countStyles.countdownText}
                        timeToShow={['H', 'M', 'S']}
                        timeLabels={{m:'Minutes', s: 'Seconds', h: 'Hours'}}
                        timeLabelStyle={countStyles.labelStyle}
                        showSeparator={true}
                        running={breakRunning}
                        id={resetCount}
                    />
                    <TimerTextContainer>
                        <Ionicons name= 'leaf' size={20} color= '#909000'/>
                        <Ionicons name= 'water' size={20} color= '#909000'/>
                        <TimerText>
                            Take a break.  Stay hydrated.  Get some {"\n"}fresh air.  Avoid screens 
                        </TimerText>
                    </TimerTextContainer>
                </TimerContainer>
                )}  
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

