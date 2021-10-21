import { Formik } from 'formik'
import React, { useState } from 'react'
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons'
//import * as Google from 'expo-google-app-auth'
import axios from 'axios'
import { TextInput } from 'react-native-gesture-handler'
import { ActivityIndicator, View } from 'react-native'
import { InnerContainer, 
    LeftIcon, 
    PageLogo, 
    PageTitle, 
    LoginContainer, 
    SubTitle, 
    Colors,
    StyledFormArea, 
    StyledInputLabel, 
    StyledTextInput,
    RightIcon, 
    MsgBox, 
    StyledButton, 
    ButtonText, 
    Line } from '/Users/anyakathpalia/Desktop/MSB/temp/styles'

const SignUp = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    const [googleLoading, setGoogleLoading] = useState(false)

    const handleLogin = (values) => {
        setLoading(true)
        
        const url = "http://192.168.0.158/temp/login.php";
        axios.post(url, values)
            .then((response) => {
                const result = response.data
                console.log(result)
                if(result == '0'){
                    setMessage("Username or password is wrong. Please try again")
                }
                else{
                    data = {email: values.email, user: result}
                    navigation.navigate('Home', data)
                }
            })
            .catch(error => console.log(error))
        setLoading(false)
    }

    return (
        <LoginContainer>
            <InnerContainer>
                <PageLogo resizeMode='cover' source={require('/Users/anyakathpalia/Desktop/MSB/temp/Login/icon.png')}/>
                <PageTitle>My Success Bits</PageTitle>
                <SubTitle>Welcome</SubTitle>

                <Formik
                    initialValues={{ username: '', email: '', password: ''}}
                    onSubmit={(values) => {
                        setLoading(true);
                        if(values.username == '' || values.email == '' || values.password == ''){
                            //setLoading(true)
                            console.log("Fill all details")
                            setMessage("Fill all details")
                            setLoading(false)
                        }
                        else{
                            setLoading(true)
                            handleLogin(values)
                        }
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => (
                        <StyledFormArea>
                            <MyTextInput 
                                label="Username"
                                icon="person"
                                placeholder="Enter username"
                                placeholderTextColor={Colors.alternative}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                                keyboardType="email-address"
                                
                            />
                            <MyTextInput 
                                label="Email Address"
                                icon="mail"
                                placeholder="Enter email"
                                placeholderTextColor={Colors.alternative}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                                
                            />
                            
                            <MyTextInput 
                                label="Password"
                                icon="lock"
                                placeholder="password"
                                placeholderTextColor={Colors.alternative}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                                
                            />
                            <MsgBox>{message}</MsgBox>

                                {loading &&
                                    <StyledButton disbaled={true}>
                                        <ActivityIndicator size="large" color="#ffffff" />
                                    </StyledButton>
                                }
                                {!loading &&
                                    <StyledButton onPress={handleSubmit}>
                                        <ButtonText>Sign up</ButtonText>
                                    </StyledButton>
                                }
                            <Line />
                            <StyledButton onPress={() => navigation.navigate('Log In')}>
                                <ButtonText>Already a member? Login</ButtonText>
                            </StyledButton>
                        </StyledFormArea> 
                    )}
                </Formik>
            </InnerContainer>
        </LoginContainer>
    )
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={Colors.alternative} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            { isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={Colors.alternative} />
                </RightIcon>
            )}
        </View>
        
    )
}

export default SignUp