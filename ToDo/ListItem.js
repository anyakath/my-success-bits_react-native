import React from 'react'
import { Text } from 'react-native'

//import swiper list View
import { SwipeListView } from 'react-native-swipe-list-view'

//import styling
import { HiddenButton, ListView, ListViewHidden, TodoDate, TodoText, Colors } from '/Users/anyakathpalia/Desktop/MSB/temp/styles'

//icons import
import {Entypo} from '@expo/vector-icons'

const ListItem = ({todos, setTodos}) => {

    const handleDeleteTodo = (rowMap, rowKey) => {
        const TempTodo = [...todos];
        const todoIndex = todos.findIndex((todo) => todo.key === rowKey)
        TempTodo.splice(todoIndex, 1)
        setTodos(TempTodo)
    }

    if(todos.length == 0){
        return(
            <TodoText>You have no Todos Today</TodoText>
        )
    }
    
    return (
        <SwipeListView
            data={todos}
            renderItem={(data) => {
                return(
                    <ListView>
                    <>
                    <TodoText color= {Colors.black}>{data.item.title} </TodoText>
                    <TodoText> category: {data.item.category} </TodoText>
                    <TodoDate> TARGET DATE: {data.item.targetDate}</TodoDate>
                    {/* <TodoDate>{data.item.date}</TodoDate> */}
                    </>
                </ListView>
                )                
            }}

            renderHiddenItem={(data, rowMap) => {
                return(
                    <ListViewHidden>
                        <HiddenButton
                            onPress={() => handleDeleteTodo(rowMap, data.item.key)}
                        >
                            <Entypo name="trash" size={25} color={Colors.secondary} />
                        </HiddenButton>
                    </ListViewHidden>
                )
            }}

            leftOpenValue={80}
            previewOpenDelay={3000}
            previewOpenValue={80}
            disableLeftSwipe={true}
            showsVerticalScrollIndicator={false}
            style={{
                flex: 1, marginBottom: 30, paddingBottom:30
            }}
        />            
    )
}

export default ListItem