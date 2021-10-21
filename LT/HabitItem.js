import React, {useState} from 'react'
import { Text } from 'react-native'

import { SwipeListView } from 'react-native-swipe-list-view'
import { HiddenButton, ListViewHidden, HabitText, HabitView, Colors, StyledInput, ProgInput, HabitTrash } from '/Users/anyakathpalia/Desktop/MSB/temp/styles'

//icons import
import {Entypo} from '@expo/vector-icons'

const HabitItem = ({rankModal, setRankModal, habits, setHabits, setCurrentHabit}) => {
    var prog= 0;
    const date = new Date; 

    // const handleDeleteHabit = (rowMap, rowKey) => {
    //     const TempHabit = [...habits];
    //     const habitIndex = habits.findIndex((habit) => habit.key === rowKey)
    //     TempHabit.splice(habitIndex, 1)
    //     setHabits(TempHabit)
    // }
    
    const handleProgSubmit = (values) =>  {
        console.log(values)
        // const url = "http://192.168.0.158/temp/login.php";
        // axios.post(url, values)
        //     .then((response) => {
        //         const result = response.data
        //         console.log(result)
        //         if(result == '0'){
        //             console.log("something went wrong")
        //         }
        //         else{
        //             console.log('progress val set ')
        //         }
        //     })
        //     .catch(error => console.log(error))
    }
    
    if( habits.length ==0 ){
        return(
            <HabitText>You have no Habits</HabitText>
        )
    }
    return (
        <SwipeListView
            data={habits}
            renderItem={(data) => {
                return(
                    <HabitView onPress={()=> {setRankModal(true)
                    setCurrentHabit(data.item.title.toString())
                    }} bgcolor={data.item.color}>
                    <>

                        <HabitText color= {Colors.black}> {data.item.title}</HabitText>
                        <ProgInput
                            placeholder= "___/10"
                            disabled= {true} 
                            placeholderTextColor={Colors.alternative}
                            selectionColor={Colors.alternative}
                            autoFocus={true} 
                            onChangeText={(text) => {
                                var prog= text
                            }} 
                            value={prog}
                            onSubmitEditing={handleProgSubmit()}   
                        /> 
                    </>
                    </HabitView>
                )                
            }}/>
    )
}

    
        
        //     renderHiddenItem={(data, rowMap) => {
        //         return(
        //             <ListViewHidden>
        //                 <HiddenButton
        //                     onPress={() => handleDeleteHabit(rowMap, data.item.key)}
        //                 >
        //                     <Entypo name="trash" size={25} color={Colors.secondary} />
        //                 </HiddenButton>
        //             </ListViewHidden>
        //         )
        //     }}

        //     leftOpenValue={80}
        //     previewOpenDelay={3000}
        //     previewOpenValue={80}
        //     disableLeftSwipe={true}
        //     showsVerticalScrollIndicator={false}
        //     style={{
        //         flex: 1, marginBottom: 30, paddingBottom:30
        //     }}
//         // />            
//     )
// }

export default HabitItem