import {Colors, AdviceContainer, AdviceView, AdviceButton, AdviceText, Tape1, Tape2, greenBG} from '/Users/anyakathpalia/Desktop/MSB/temp/styles'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Entypo} from '@expo/vector-icons'
import axios from 'axios';
import { Button } from 'react-native-elements/dist/buttons/Button';


function AdviceItem() {
    const [message, setMessage] = useState("")

    const getApiData = () => {
        const min = 1
        const max = 224

        const rand = min + Math.random() * (max - min)

        const url = "https://api.adviceslip.com/advice/" + rand.toString()
        console.log(url)

        axios.get(url)
            .then((result) => {
                const newData = result.data + "}"
                const data = JSON.parse(newData)
                const {advice, id} = data.slip
                setMessage(advice)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        
        <AdviceView>
            <AdviceButton onPress = {getApiData}> 
            <AdviceText> {message} </AdviceText>
            </AdviceButton>
        </AdviceView>
    )
}

export default AdviceItem 

