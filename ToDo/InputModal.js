import React from 'react'
import {Modal} from 'react-native'

//styling 
import { Colors, ModelAction, ModelActionGroup, ModelButton, ModelContainer, ModelIcon, StyledInput } from '/Users/anyakathpalia/Desktop/MSB/temp/styles'

//icons
import {AntDesign, Ionicons} from '@expo/vector-icons'

const InputModal = ({todos, 
    modalVisible, 
    setModalVisible, 
    todoInput, 
    setTodoInput, 
    categoryInput,
    setCategoryInput,
    targetDateInput,
    setTargetDateInput,
    handleAddTodo}) => {
        
    const handleClose = () => {
        setModalVisible(false)
    }

    const handleSubmit = () => {
        const TempTodo = {
            'title': todoInput,
            'date': new Date().toUTCString(),
            'category': categoryInput,
            'targetDate': targetDateInput,
            'key': `${todos[todos.length - 1] && parseInt(todos[todos.length - 1].key) + 1 || 1} `
        }
        handleAddTodo(TempTodo);
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
                        placeholder="Add a task"
                        placeholderTextColor={Colors.alternative}
                        selectionColor={Colors.alternative}
                        autoFocus={true}
                        onChangeText={(text) => setTodoInput(text)}
                        value={todoInput}
                        onSubmitEditing={handleSubmit}
                        
                    />
                    <StyledInput
                        placeholder="Add a category"
                        placeholderTextColor={Colors.alternative}
                        selectionColor={Colors.alternative}
                        autoFocus={true}
                        onChangeText={(text) => setCategoryInput(text)}
                        value={categoryInput}
                        onSubmitEditing={handleSubmit}
                    />
                    <StyledInput
                        placeholder="Add a target date"
                        color= {Colors.beige}
                        placeholderTextColor={Colors.alternative}
                        selectionColor={Colors.alternative}
                        autoFocus={true}
                        onChangeText={(text) => setTargetDateInput(text)}
                        value={targetDateInput}
                        onSubmitEditing={handleSubmit}
                    />
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

export default InputModal

{/* <ModelIcon>
                        <AntDesign name="edit" size={30} color={Colors.secondary} />
                    </ModelIcon> */}