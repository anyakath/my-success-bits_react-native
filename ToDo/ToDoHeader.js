import React from "react";

//styling import
import { 
    HeaderButton, 
    HeaderTitle, 
    ToDoHeaderView,
    Colors
 } from '/Users/anyakathpalia/Desktop/MSB/temp/styles';

//icons import
import {Entypo} from '@expo/vector-icons'

const ToDoHeader = ({handleClearTodos}) => {
    return (
        <ToDoHeaderView>
            <HeaderTitle>My To Do List</HeaderTitle>
            <HeaderButton
                onPress={handleClearTodos}
            >
                <Entypo name="trash" size={35} color={Colors.alternative} />
            </HeaderButton>
        </ToDoHeaderView>
    )
}

export default ToDoHeader