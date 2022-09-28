import React , { useState } from 'react'
import { View, StatusBar, Image, Text,  FlatList } from 'react-native'
import { Header } from './src/components/header'

import { TaskInput } from './src/components/TaskInput/Index'
import { Tasks } from './src/components/Tasks'
import { Home } from './src/components/Home'

import { styles } from './style'

export default function App() {

  const [newTask , setNewTask] = useState<string[]>([''])
    
  function newTasks(){
    console.log('nova tarefa adicionada -> ', newTask)
  } 

  return(
    <>
      <StatusBar 
          barStyle="light-content" 
          backgroundColor="transparent" 
          translucent
        />

      <View style={styles.header}>
          <Header />
      </View>
    
    
    <View style={styles.body}>
  
      <TaskInput />

          
          
    </View>
         
          <Home />
  
    </>
  )
}

