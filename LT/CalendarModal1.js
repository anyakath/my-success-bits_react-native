import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Modal } from 'react-native-paper'
import {useState} from 'react'
import { ModelButton, 
    ModelContainer,
    Colors,
    ModelIcon,
    StyledInput,
    ModelActionGroup,
    ModelAction,
    HeaderButton,
    ModelContainer2
} from '/Users/anyakathpalia/Desktop/MSB/temp/styles'

import DateTimePicker from '@react-native-community/datetimepicker';
import { Text } from 'react-native'

const CalendarModal1 = ({modalVisible1, setModalVisible1, eventInput, setEventInput, handleAddEvent}) => {
    
    const handleClose = () => {
        setModalVisible1(false)
    }

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
  };
    const showDatepicker = () => {
        showMode('date');
  };

    const handleSubmit= ()=> {
        const dateKey= date.toISOString().split('T')[0].toString()
        // console.log(eventInput)
        // console.log(dateKey)
        const event = {
            date1: dateKey,
            name: eventInput
        }
        handleAddEvent(event)
    }


    return (
        <>
        
        <Modal 
            animationType= 'slide'
            transparent = {false}
            visible= {modalVisible1}
            onRequestClose = {handleClose}
        
        >
            <ModelContainer2>
                    
                    <StyledInput
                        placeholder="Add an event"
                        placeholderTextColor={Colors.alternative}
                        selectionColor={Colors.secondary}
                        autoFocus={true}
                        onChangeText={(text) => setEventInput(text)}
                        value={eventInput}
                        onSubmitEditing={handleSubmit}
                    />
                    <HeaderButton onPress = {showDatepicker}> 

                    </HeaderButton>
                    {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}

                        />
                    )}

                    <ModelActionGroup>
                        <ModelAction color={Colors.primary} onPress={handleClose}>
                            <AntDesign name='close' size={25} color={Colors.alternative} />
                        </ModelAction>
                        <ModelAction color={Colors.beige} onPress={handleSubmit}>
                            <AntDesign name='check' size={25} color={Colors.alternative} />
                        </ModelAction>
                    </ModelActionGroup>
                </ModelContainer2>
        </Modal>
        </>

        
    )
}

export default CalendarModal1
