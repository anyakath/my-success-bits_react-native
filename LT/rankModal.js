import React from 'react'
import {Modal} from 'react-native'
import moment from 'moment'

//styling 
import { Colors, InputColorButton, InputColorButtonContainer, ModelAction, ModelActionGroup, ModelButton, ModelContainer, ModelIcon, StyledInput } from '/Users/anyakathpalia/Desktop/MSB/temp/styles'

//icons
import {AntDesign, Ionicons} from '@expo/vector-icons'


const RankModal = ({ 
    modalVisible, 
    setModalVisible,
    rankInput,
    setRankInput, 
    handleAddRank
        }) => {
        
    const handleClose = () => {
        setModalVisible(false)
    }

    const handleSubmit = () => {
        handleAddRank()
    }

    return(
        <>
            
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleClose}
            >
                <ModelContainer>
                    <StyledInput
                        placeholder="Rank "
                        placeholderTextColor={Colors.alternative}
                        selectionColor={Colors.alternative}
                        autoFocus={true}
                        onChangeText={(text) => setRankInput(text)}
                        value={rankInput}
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

export default RankModal
