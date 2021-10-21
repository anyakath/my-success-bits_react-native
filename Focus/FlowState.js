import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Keyboard, StyleSheet, Text, TextInput, Vibration, TouchableOpacity, View } from 'react-native'
import { 
    TimerContainer ,
    TimerButtonContainer,
    TimerTextContainer, 
    TimerText,
    Colors,
    StyledButton,
    ButtonText, 
    TimerButton,
    TimerButtonText,
    TimerInputContainer
} from '/Users/anyakathpalia/Desktop/MSB/temp/styles'

import CountDown from 'react-native-countdown-component'
import { Formik } from 'formik'

const ONE_SECOND_IN_MS = 1000;

const FlowState = () => {
    const [countRunning, setCountRunning] = useState(false)
    const [resetCount, setResetCount] = useState(null)
    const [counter, setCounter] = useState(0)

    const handleFinish =() => {
        setResetCount(null)
        setCountRunning(false)
        Vibration.vibrate(10 * ONE_SECOND_IN_MS)
        alert("Flow State session ended! You deserve a break. ")
         
    }
    

    return (
        <> 
          <StatusBar style="auto"/>
              <TimerContainer color={Colors.primary}>
                <Formik
                    initialValues={{ hours: '', minutes: ''}}
                    
                    onSubmit={(values) => {
                    const hours = parseInt(values.hours)
                    const minu = parseInt(values.minutes)
                    const finalcount = hours * 3600 + minu * 60;
                    console.log(finalcount)
                    setCounter(finalcount)
                    setResetCount('yes')
                    }}>
            
                    {({handleChange, handleBlur, handleSubmit, values}) => (
                        <>
                        <TextInput fontSize ={20}
                        placeholder="Enter number of hours"
                        onChangeText={handleChange('hours')}
                        onBlur={handleBlur('hours')}
                        keyboardType='number-pad'
                        value={values.hours} 
                        />
                        <TextInput fontSize ={20}
                        placeholder="Enter number of minutes"
                        onChangeText={handleChange('minutes')}
                        onBlur={handleBlur('minutes')}
                        keyboardType='number-pad' 
                        value={values.minutes}
                        />

                        <TimerButton onPress={() => {handleSubmit(Keyboard.dismiss())}}>
                            <TimerButtonText> Set timer </TimerButtonText>
                        </TimerButton>
                    </>
            )}
                 </Formik>
                 <Text> {"\n"} </Text>    
                    <CountDown 
                        until={counter}
                        onFinish={ () => handleFinish()}
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
                  <TimerButtonContainer top= {60} >
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
                      <TimerButton onPress={() => setResetCount(Math.random().toString())}>
                          <TimerButtonText>
                              Reset 
                          </TimerButtonText> 
                      </TimerButton> 
                  </TimerButtonContainer>       
                  <TimerTextContainer bgcolor={Colors.beige}>
                    <TimerText>
                    Have your own study routine? Flow State is for you. 
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
        color: Colors.brand,
    },
    labelStyle: {
        color: Colors.darkLight,
        fontSize: 15,
        fontWeight: 'bold',
    }
})

export default FlowState

