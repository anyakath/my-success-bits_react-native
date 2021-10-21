import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Colors , HabitMapContainer, MonthContainer, AdviceText, DateView, DateText} from '/Users/anyakathpalia/Desktop/MSB/temp/styles';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import HeatMap from 'react-native-heatmap-chart';

const Monthly = () => {
  const click = item => {
    //console.log(`Value: ${item.value}`);
    //console.log(`Index: ${item.index}`);
  };
  
  // const date = new Date 
  const date = new Date
  const dd = date.getDate()
  const [dateArr, setDateArr] = useState(['1/10/21','2/10/21','3/10/21','4/10/21','5/10/21','6/10/21','7/10/21','8/10/21','9/10/21','10/10/21','11/10/21','12/10/21','13/10/21','14/10/21','15/10/21','16/10/21','17/10/21','18/10/21','19/10/21','20/10/21'])
  
  //setDateArr([dd-5, dd-4, dd-3,dd-2,dd-1,dd,dd+1,dd+2,dd+3,dd+4,dd+5])

  // for (var i=dd-15; i< dd+15; i++) {
  //   setDateArr([...dateArr], i)
  //   console.log(i);
  // } 

  const habArr1 =[] 
  
  return (
    <MonthContainer>
      <ScrollView contentContainerStyle={{ flexDirection: 'row'}}>
        <DateView>
          {dateArr.map((item, key) => (
            <DateText> {item} </DateText>
          ))}
        </DateView>
        <HabitMapContainer> 
          <HeatMap 
            values= {habArr1}
            onBlockPress={click}
            maximumValue = {'10'}
            colors = {['#eddefd', '#dcd0ff', '#b39eb5', '#957dad']} 
            numberOfLines = {40} // no of days of current month
            blockSize= {100} />
        </HabitMapContainer>
        {/* <HabitMapContainer>
        <HeatMap 
          values= {[0, 10, 6, 1, 7, 3, 10, 8, 5, 2, 0, 10, 10, 2, 0,
            0, 10, 0, 17, 8, 0, 6, 0, 6, 10, 3,0, 10, 6, 1, 0, 10, 6, 1, 7, 3, 10, 8, 5, 2]}
          onBlockPress={click}
          maximumValue = {10}
          colors = {['#ffdfd3', '#ffdac8', '#ffcdb4', '#ffc0a1']} 
          numberOfLines = {40} // no of days of current month
          blockSize= {100} />
        </HabitMapContainer>

        <HabitMapContainer>
          <HeatMap 
            values= {[0, 10, 6, 1, 7, 3, 10, 8, 6, 2, 0, 10, 10, 2, 0,
             0, 10, 0, 17, 8, 0, 6, 0, 6, 10, 3,0, 10, 6, 1,0, 10, 6, 1, 7, 3, 10, 8, 5, 2]}
            onBlockPress={click}
            maximumValue = {10}
           colors = {['#cce1e3', '#a7cbcf', '#396469', '#2b4b4f']} 
            numberOfLines = {40} // no of days of current month
            blockSize= {100} />
        </HabitMapContainer>

        <HabitMapContainer>
          <HeatMap 
            values= {[0, 10, 6, 1, 7, 3, 10, 8, 5, 2, 0, 10, 10, 2, 0,
             0, 10, 0, 17, 8, 0, 6, 0, 6, 10, 3,0, 10, 6, 1,0, 10, 6, 1, 7, 3, 10, 8, 5, 2]}
            onBlockPress={click}
            maximumValue = {10}
           colors = {['#d7ffc2', '#a7e074', '#e1ffac', '#3b5c0a']} 
            numberOfLines = {40} // no of days of current month
            blockSize= {100} />
        </HabitMapContainer> */}
      </ScrollView>
    </MonthContainer>
     //work on scroll settingss


  )
}
 
export default Monthly;
