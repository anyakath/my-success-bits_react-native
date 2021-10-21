import React from 'react';
import { useState} from 'react';
import { Text} from 'react-native';
import {Agenda} from 'react-native-calendars';
import { Button} from 'react-native-paper';
import { AgendaView, EventCard, Colors } from './styles';
import CalendarModal1  from '/Users/anyakathpalia/Desktop/MSB/temp/LT/CalendarModal1'

const CalendarView1 =()=> {
  const [modalVisible1, setModalVisible1] = useState(false)
  const [eventInput, setEventInput] = useState("")
  console.log(modalVisible1)
  const [events, setEvents]= useState(


      {
        '2021-10-19': [{name: 'work '}],
        '2021-10-20': [{name: 'meeting'}],
        '2021-10-22': [{name: 'appointment'}, {name: 'any object'}]
      }
      
      );

const renderItem = (item) => {
    return (
      <EventCard >
        <Text>{item.name}</Text>
        {/* <Button icon='bookmark-minus-outline' labelStyle={{fontSize: 30}} /> */}
        <Button icon='plus' labelStyle={{fontSize: 40}} onPress = {() => setModalVisible1(true)} />
      </EventCard> 
    )
    }


const handleAddEvent = (event) => {
    const today = new Date().toISOString().split('T')[0]
    const {date1, name}= event 
    setEvents(prevState=>({...prevState, [date1]: [{name:name}]}))
    setModalVisible1(false)
    setEventInput("")
    console.log(events)
}


const renderEmptyData = () => {
  return (
    <EventCard onPress= {() => setModalVisible1(true)}>
      <Text>No events planned. Click to add</Text>
      <Button icon='plus' labelStyle={{fontSize: 40}} />
    </EventCard>

  )

}   
  return (
    <>
    
    <AgendaView>
      <Agenda
        items={events}
        pastScrollRange={10}
        futureScrollRange={15}
        selected={new Date}
        renderItem={renderItem}
        renderEmptyData = {renderEmptyData}
        hideExtraDays= {true}
      />
    </AgendaView>

    <CalendarModal1
      modalVisible1={modalVisible1}
      setModalVisible1={setModalVisible1}     
      eventInput= {eventInput} 
      setEventInput= {setEventInput}
      handleAddEvent= {handleAddEvent}
    />

   

    </>
  )
}
  
export default CalendarView1;



      
  