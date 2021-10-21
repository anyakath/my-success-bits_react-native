import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { 
    InnerContainer ,
    WelcomeContainer,
    PageTitle,
    SubTitle,
    Colors,
    StyledButton,
    ButtonText
} from '../components/styles'
import CountDown from 'react-native-countdown-component'
import { Formik } from 'formik'

const Temp = () => {
    const [countRunning, setCountRunning] = useState(false)
    const [resetCount, setResetCount] = useState(null)
    const [counter, setCounter] = useState(0)

    return (
        <>
            <StatusBar style="light"/>
                <InnerContainer>
                    <WelcomeContainer>
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
                                    placeholder="Hours"
                                    onChangeText={handleChange('hours')}
                                    onBlur={handleBlur('hours')}
                                    keyboardType='number-pad'
                                    value={values.hours}
                                    />
                                    
                                    <TextInput 
                                    placeholder="Minutes"
                                    onChangeText={handleChange('minutes')}
                                    onBlur={handleBlur('minutes')}
                                    keyboardType='number-pad'
                                    value={values.minutes}
                                    />

                                    <TouchableOpacity 
                                        style={{
                                            backgroundColor: Colors.brand,
                                            height: 40,
                                        }}
                                        onPress={() => {handleSubmit()}}
                                    >
                                        <Text style={{fontSize: 30, color: '#fff'}}>Submit Counter</Text>

                                    </TouchableOpacity>
                                 </>
                                
                            )}

                        </Formik>               
                        <CountDown 
                            until={counter}
                            onFinish={ () => alert("Finished")}
                            onPress={() => alert('Clicked')}
                            size={35}
                            digitStyle={countStyles.coundownDigit}
                            digitTxtStyle={countStyles.countdownText}
                            timeToShow={['H', 'M', 'S']}
                            timeLabels={{m:'MM', s: 'SS', h: 'HH'}}
                            timeLabelStyle={countStyles.labelStyle}
                            showSeparator={true}
                            running={countRunning}
                            id={resetCount}
                        />
                    <View>
                        <StyledButton onPress={() => setCountRunning(true)}>
                            <ButtonText>
                                Start Timer
                            </ButtonText>
                        </StyledButton> 
                        <StyledButton onPress={() => setCountRunning(false)}>
                            <ButtonText>
                                Stop Timer
                            </ButtonText>
                        </StyledButton>   
                        <StyledButton onPress={() => setResetCount('yes')}>
                            <ButtonText>
                                Reset Counter
                            </ButtonText>
                        </StyledButton> 
                    </View>                                               
                    </WelcomeContainer>                      
                </InnerContainer>   
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
        fontSize: 20,
        fontWeight: 'bold',
    }
})


export default Temp