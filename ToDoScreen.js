import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

//import Header
import ToDoHeader from '/Users/anyakathpalia/Desktop/MSB/temp/ToDo/ToDoHeader';
import ListItem from '/Users/anyakathpalia/Desktop/MSB/temp/ToDo/ListItem';
import InputModal from '/Users/anyakathpalia/Desktop/MSB/temp/ToDo/InputModal';

const ToDo = () => {

    const initialtodos = [
        {
            'title': 'Todo 1',
            'date': '24 aug, 2000',
            'category': 'work',
            'targetDate': '1/1/01',
            'key': '1'
        },
        {
            'title': 'Todo 2',
            'date': 'this is my date',
            'category': 'work',
            'targetDate': '1/1/01',
            'key': '2'
        },
        {
            'title': 'Todo 3',
            'date': 'this is my date',
            'category': 'work',
            'targetDate': '1/1/01',
            'key': '3'
        },
        
    ]

    const [modalVisible, setModalVisible] = useState(false)
    const [todoInput, setTodoInput] = useState("")
    const [categoryInput, setCategoryInput] = useState("")
    const [targetDateInput, setTargetDateInput] = useState("")
    const [todos, setTodos] = useState(initialtodos)

    const handleClearTodos = () => {
        setTodos([])
    }

    const handleAddTodo = (todo) => {
        console.log(todo)
        const newTodo = [...todos, todo];
        setTodos(newTodo)
        setModalVisible(false)
        setTodoInput("")
        setTargetDateInput("")
        setCategoryInput("")
    }

    return(
        <>
        <ToDoHeader handleClearTodos={handleClearTodos} />
        <ListItem 
            todos = {todos}
            setTodos = {setTodos}
        />
        <InputModal
            todos = {todos}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            todoInput={todoInput}
            setTodoInput={setTodoInput}
            categoryInput= {categoryInput}
            setCategoryInput={setCategoryInput}
            targetDateInput={targetDateInput}
            setTargetDateInput={setTargetDateInput}
            handleAddTodo={handleAddTodo}
        />
        </>
    )
}

export default ToDo

