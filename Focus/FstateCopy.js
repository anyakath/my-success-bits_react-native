import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { 
    TimerContainer ,
    TimerButtonContainer,
    Colors,
    StyledButton,
    ButtonText, 
    TimerButton,
    TimerButtonText,
    TimerInputContainer
} from '/Users/anyakathpalia/Desktop/MSB/temp/styles'

import CountDown from 'react-native-countdown-component'
import { Formik } from 'formik'

const NMFocus = () => {
    const [countRunning, setCountRunning] = useState(false)
    const [resetCount, setResetCount] = useState(null)
    const [counter, setCounter] = useState(0)

    return (
        <> 
          <StatusBar style="auto"/>
              <TimerContainer>
                    <CountDown 
                        until={90*60}
                        onFinish={ () => alert("Focus session ended! You deserve a break")}
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
                  <TimerButtonContainer>
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
                      <TimerButton onPress={() => setResetCount('yes')}>
                          <TimerButtonText>
                              Reset 
                          </TimerButtonText> 
                      </TimerButton> 
                  </TimerButtonContainer>                                               
              </TimerContainer>   
              <Formik
          initialValues={{ hours: '', minutes: ''}}
          onSubmit={(values) => {
              const hours = parseInt(values.hours)
              const minu = parseInt(values.minutes)
              const finalcount = hours * 3600 + minu * 60;
              console.log(finalcount)
              setCounter(finalcount)
              setResetCount('yes')
          }}
      >
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <>
              <TextInput 
              placeholder="Enter number of hours"
              onChangeText={handleChange('hours')}
              onBlur={handleBlur('hours')}
              keyboardType='number-pad'
              value={values.hours}
              />
              <TextInput 
              placeholder="Enter number of minutes"
              onChangeText={handleChange('minutes')}
              onBlur={handleBlur('minutes')}
              keyboardType='number-pad'
              value={values.minutes}
              />
              <TimerButton onPress={() => {handleSubmit()}}>
                <TimerButtonText> Submit </TimerButtonText>
              </TimerButton>
            </>
         )}
        </Formik>              
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

export default NMFocus

