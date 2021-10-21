import React, { useCallback, useEffect, useState } from 'react';
import { Colors , HabitMapContainer, MonthContainer, AdviceText, DayView, DateText, DateView} from '/Users/anyakathpalia/Desktop/MSB/temp/styles';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import HeatMap from 'react-native-heatmap-chart';
import moment from 'moment';
import axios from 'axios';
const Weekly = () => {

  const dayArr = ['M','T', 'W', 'T', 'F', 'S', 'S']
  const [habArr1, sethabArr1] = useState([2,4,5,10,6,8,9,10])
  const [habArr2, sethabArr2] = useState([6,4,3,2,1,10,3,10])
  const [habArr3, sethabArr3] = useState([2,1,0,6,3,10,3,5])

  // const getRankData=() => {
  //   const habits = ['Study', 'Code', 'Stay Hydrated']
  //   habits.map((item)=> {
  //     const today = new Date()
  //     const day = today.getDay()
  //     const week = moment().format('w')

  //     const data = {
  //       habit: item, 
  //       day:day,
  //       week:week
  //     } 
  //     const URL = "http://192.168.0.158/temp/getRank.php"

  //       axios.post(URL, data) 
  //       .then(response=> {
  //           const result= response.data
  //           console.log(item)
  //           console.log(result)
  //           if (item=='Study'){
  //             sethabArr1(oldArray=> [...oldArray, result ])
  //           }if (item=='Code'){
  //             sethabArr2(oldArray=> [...oldArray, result ])
  //           }
  //           if (item=='Stay Hydrated'){
  //             sethabArr3(oldArray=> [...oldArray, result ])
  //           } 

  //       }) 
  //       .catch(error=> console.log(error))

  //   })
  // }
  // useEffect(() => {
  //   getRankData()
  // })

  return (
      <>
      <ScrollView contentContainerStyle={{ flexDirection: 'row'}}>
      <DayView>
          {dayArr.map((item, key) => (
          <DateText> {item} </DateText>
         ))}</DayView> 
        <MonthContainer>
          <HabitMapContainer> 
            <HeatMap 
              values= {habArr1}
              //onBlockPress={('clicked')}
              maximumValue = {'10'}
              colors = {['#eddefd', '#dcd0ff', '#b39eb5', '#957dad']} 
              numberOfLines = {40} // no of days of current month
              blocksSize= {50} />
          </HabitMapContainer>
          <HabitMapContainer>
          <HeatMap 
            values= {habArr2}
            onBlockPress={console.log('blah')}
            maximumValue = {10}
            colors = {['#ffdfd3', '#ffdac8', '#ffcdb4', '#ffc0a1']} 
            numberOfLines = {40} // no of days of current month
            blocksSize= {50} />
          </HabitMapContainer>
          <HabitMapContainer>
          <HeatMap 
            values= {habArr3}
            onBlockPress={console.log('blah')}
            maximumValue = {10}
            colors = {['#d7ffc2', '#a7e074', '#e1ffac', '#3b5c0a']} 
            numberOfLines = {40} // no of days of current month
            blocksSize= {50} />
          </HabitMapContainer>
          
        </MonthContainer>
        </ScrollView>
        </>
  )
}

//contentContainerStyle={{ flexDirection: 'row'}]
 
export default Weekly;

        // {/* <HabitMapContainer>
        // <HeatMap 
        //   values= {[0, 10, 6, 1, 7, 3, 10, 8, 5, 2, 0, 10, 10, 2, 0,
        //     0, 10, 0, 17, 8, 0, 6, 0, 6, 10, 3,0, 10, 6, 1, 0, 10, 6, 1, 7, 3, 10, 8, 5, 2]}
        //   onBlockPress={click}
        //   maximumValue = {10}
        //   colors = {['#ffdfd3', '#ffdac8', '#ffcdb4', '#ffc0a1']} 
        //   numberOfLines = {40} // no of days of current month
        //   blocksSize= {50} />
        // </HabitMapContainer>

    //     <HabitMapContainer>
    //       <HeatMap 
    //         values= {[0, 10, 6, 1, 7, 3, 10, 8, 6, 2, 0, 10, 10, 2, 0,
    //          0, 10, 0, 17, 8, 0, 6, 0, 6, 10, 3,0, 10, 6, 1,0, 10, 6, 1, 7, 3, 10, 8, 5, 2]}
    //         onBlockPress={click}
    //         maximumValue = {10}
    //        colors = {['#cce1e3', '#a7cbcf', '#396469', '#2b4b4f']} 
    //         numberOfLines = {40} // no of days of current month
    //         blocksSize= {50} />
    //     </HabitMapContainer>

    //     <HabitMapContainer>
    //       <HeatMap 
    //         values= {[0, 10, 6, 1, 7, 3, 10, 8, 5, 2, 0, 10, 10, 2, 0,
    //          0, 10, 0, 17, 8, 0, 6, 0, 6, 10, 3,0, 10, 6, 1,0, 10, 6, 1, 7, 3, 10, 8, 5, 2]}
    //         onBlockPress={click}
    //         maximumValue = {10}
    //        colors = {['#d7ffc2', '#a7e074', '#e1ffac', '#3b5c0a']} 
    //         numberOfLines = {40} // no of days of current month
    //         blocksSize= {50} />
    //     </HabitMapContainer> */}
      
    //  //work on scroll settingss


