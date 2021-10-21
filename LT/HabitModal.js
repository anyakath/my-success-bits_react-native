import React from 'react'
import {Modal} from 'react-native'

//styling 
import { Colors, InputColorButton, InputColorButtonContainer, ModelAction, ModelActionGroup, ModelButton, ModelContainer, ModelIcon, StyledInput } from '/Users/anyakathpalia/Desktop/MSB/temp/styles'

//icons
import {AntDesign, Ionicons} from '@expo/vector-icons'


const HabitModal = ({ 
    habits, 
    modalVisible, 
    setModalVisible, 
    habitInput, 
    setHabitInput, 
    colorInput,
    setColorInput,
    handleAddHabit}) => {
        
    const handleClose = () => {
        setModalVisible(false)
    }

    const handleSubmit = () => {
        const TempHabit = {
            'title': habitInput,
            'color': colorInput,
            'date': new Date().toISOString().split('T')[0],
            'key': `${habits[habits.length - 1] && parseInt(habits[habits.length - 1].key) + 1 || 1}`,
            
        }
        handleAddHabit(TempHabit);
    }

    return(
        <>
            <ModelButton onPress={() => {setModalVisible(true)}}>
                <AntDesign name="plus" size={30} color={Colors.secondary} />
            </ModelButton>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleClose}
            >
                <ModelContainer>
                    <StyledInput
                        placeholder="Add a habit"
                        placeholderTextColor={Colors.alternative}
                        selectionColor={Colors.alternative}
                        autoFocus={true}
                        onChangeText={(text) => setHabitInput(text)}
                        value={habitInput}
                        onSubmitEditing={handleSubmit}   
                    />
                    <StyledInput
                        placeholder="Associate it with a color - hex value!"
                        placeholderTextColor={Colors.alternative}
                        selectionColor={Colors.alternative}
                        autoFocus={true}
                        onChangeText={(text) => setColorInput(text)}
                        value={colorInput}
                        onSubmitEditing={handleSubmit}   
                    />
                    {/* <InputColorButtonContainer>
                        <InputColorButton color= {Colors.primary}>
                        </InputColorButton>
                        <InputColorButton color= {Colors.secondary}>
                        </InputColorButton>
                        <InputColorButton color= {Colors.meditation}>
                        </InputColorButton>
                        <InputColorButton color= {Colors.quaternary}>
                        </InputColorButton>
                        <InputColorButton color= {Colors.beige}>
                        </InputColorButton>
                        <InputColorButton color= {Colors.alternative}>
                        </InputColorButton>
                    </InputColorButtonContainer> */}
                    <ModelActionGroup>
                        <ModelAction color={Colors.primary} onPress={handleClose}>
                            <AntDesign name='close' size={25} color={Colors.alternative} />
                        </ModelAction>
                        <ModelAction color={Colors.meditation} onPress={handleSubmit}>
                            <AntDesign name='check' size={25} color={Colors.alternative} />
                        </ModelAction>
                    </ModelActionGroup>
                </ModelContainer>
            </Modal>
        </>
    )
}

export default HabitModal
