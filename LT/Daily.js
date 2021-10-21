import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Colors} from '/Users/anyakathpalia/Desktop/MSB/temp/styles'
import { SwipeListView } from 'react-native-swipe-list-view'
import {Entypo} from 'react-native-elements'
import {useState} from 'react';
import HabitModal from '/Users/anyakathpalia/Desktop/MSB/temp/LT/HabitModal'
import HabitItem from '/Users/anyakathpalia/Desktop/MSB/temp/LT/HabitItem';
import axios from 'axios'
import RankModal from './rankModal';
import moment from 'moment';
// export const habitColors = {
//     lavendar: '#dcd0ff', 
//     peach: '#ffdac8',
//     blue: '#a7cbcf', 
//     lime: '#d0febe', 
// }
// export const habitColor = habitColors.lime
 
const Daily = () => { 
    const [rankModalVisible, setRankModalVisible] =  useState(false)
    const [rankInput, setRankInput] = useState("")

    const handleAddHabit = (habit) => {
        //setHabit 
        const url = "http://192.168.0.158/temp/setHabit.php";
        console.log(habit.title)
        console.log(habit.date)
        axios.post(url, habit)
            .then((response) => {
                const result_data = response.data;
                console.log(result_data)
                // if(result_data === "Yes"){
                //     //setMessage("Your habit is set")
                //     console.log("Your habit is set")
                // }
                // else{
                //     //setMessage("Server Error")
                //     //console.log("Server Error")
                // }
            })
            .catch(error => console.log(error))
        //server work done 
        const newHabit = [...habits, habit];
        
        setHabits(newHabit)
        setModalVisible(false)
        setHabitInput("")
        setColorInput("")

    }
    const initialhabits = [
        {
            'title': 'Study',
            'key': '1',
            'color': '#ffdac8',
        },
        {
            'title': 'Code',
            'key': '2',
            'color' : '#a7cbcf',
        },
        {
            'title': 'Stay Hydrated',
            'key': '3',
            'color': '#fefebe',
        },
        
    ]
    const [modalVisible, setModalVisible] = useState(false)
    const [habitInput, setHabitInput] = useState("")
    const [habits, setHabits] = useState(initialhabits)
    const [colorInput, setColorInput] = useState("")
    const [currentHabit, setCurrentHabit] = useState("")

    const handleAddRank =() => {
        const today = new Date()
        const day = today.getDay()
        const week = moment().format('w')
        const data= {
            habit: currentHabit,
            rank: rankInput,
            day: day,
            week: week
        } 
        const URL = "http://192.168.0.158/temp/setRank.php"

        axios.post(URL, data) 
        .then(response=> {
            const result= response.data
            console.log(result)
        })
        .catch(error=> console.log(error))
        
        setRankModalVisible(false)
        setCurrentHabit("")
        setRankInput("")
    }
    
    return(
        <>
        <HabitItem 
            rankModal = {rankModalVisible}
            setRankModal = {setRankModalVisible}
            habits = {habits}
            setHabits = {setHabits}
            setCurrentHabit = {setCurrentHabit}
        />
        <HabitModal
            habits = {habits}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            habitInput={habitInput}
            setHabitInput={setHabitInput}
            setColorInput = {setColorInput}
            handleAddHabit={handleAddHabit}
            colorInput={colorInput}
        />

        <RankModal
            modalVisible= {rankModalVisible}
            setModalVisible= {setRankModalVisible}
            rankInput= {rankInput}
            setRankInput= {setRankInput}
            handleAddRank = {handleAddRank}

        />
        </>
    )
    
}
export default Daily



