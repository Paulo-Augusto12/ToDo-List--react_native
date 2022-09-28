import { View, Text, Image, StatusBar, TextInput, TouchableOpacity } from "react-native";
import React, {useState} from 'react';
import { SvgXml } from 'react-native-svg';
import {styles} from './style';

import {Tasks} from '../Tasks';
import { LogoSvg } from "../Logo";
import { Plus } from "../Logo/PlusButton";




interface HomeProps {
    newTasks:()=> void
}

export function TaskInput ({newTasks}:HomeProps) {

    const [taskValue, setTaskValue]=useState('')
    
    return(
    <>
       
        <View style={styles.textFields}>
       
            <TextInput 
                style={styles.input}
                placeholder={'Adicione uma nova tarefa'}
                placeholderTextColor={'#808080'}
            />
                
                <TouchableOpacity onPress={newTasks}>
                    
                    <Text style={styles.button}> 
                    <Image 
                    source={require('../../../assets/plus.png')} 
                    /> 
                    </Text>
                
                </TouchableOpacity>
       
        </View>
        
    </>
    )
}