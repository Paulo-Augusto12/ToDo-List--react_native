import { View, Text, Image, StatusBar, TextInput, TouchableOpacity } from "react-native";
import React, {useState} from 'react';
import { SvgXml } from 'react-native-svg';
import {styles} from './style';

import {Tasks} from '../Tasks';
import { LogoSvg } from "../Logo";
import { Plus } from "../Logo/PlusButton";




export function TaskInput () {

    const [taskValue, setTaskValue]=useState('')
    const [taskCounter, setTaskCounter] = useState(0)

    function incrementTaskCounter(){
        console.log('task adicionada na categoria criadas' , taskCounter )
        setTaskCounter(taskCounter + 1)
    }

    const CreatedCounter = () =>{


        return(
            <View >
            <Text style={styles.counterIndex}>{taskCounter}</Text>
        </View>
        )
        
    }

    const DoneCounter = () => {
        return(
            <View >
            <Text style={styles.counterIndex}>{2}</Text>
        </View>
        )
    }
    
    return(
    <>
       
        <View style={styles.textFields}>
       
            <TextInput 
                style={styles.input}
                placeholder={'Adicione uma nova tarefa'}
                placeholderTextColor={'#808080'}
            />
                
                <TouchableOpacity onPress={incrementTaskCounter}>
                    
                    <Text style={styles.button}> 
                    <Image 
                    source={require('../../../assets/plus.png')} 
                    /> 
                    </Text>
                
                </TouchableOpacity>
       
        </View>
        
        <View style={styles.counters}>
            <Text style={styles.created}>
                Criadas 
            <View style={styles.counters}>
                <CreatedCounter />
            </View>
            </Text>
            <Text style={styles.done}>
                Concluidas 
                <View style={styles.counters}>
                <DoneCounter />
                </View>
            </Text>
   
    </View>
        
    </>
    )
}