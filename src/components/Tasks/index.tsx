
import { useState } from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'


import { styles } from './style'

interface TaskProps{
    description:string;
}

export function Tasks({description}:TaskProps){

    const [taskStatus , setTaskStatus] = useState(false)


    function handleAddTask(){
        
        setTaskStatus(!taskStatus)
        console.log('Task status : ' , taskStatus)
    }

    function handleResetTask(){
        if (taskStatus === true){
            return(
                <Image source={require('../../../assets/completed.png')} />
            )
        }else{
            return(
                <Image source={require('../../../assets/check.png')} />
            )
        }
    }
    
    return(

        <View style={styles.tasksContainer}>

            <View style={styles.elements}>
        
                <TouchableOpacity onPress={handleAddTask}>
                    
                    {handleResetTask()}
                    
                </TouchableOpacity>
                
                <Text style={ taskStatus === true ? styles.taskCompleted : styles.tasks}>
                    {description}
                </Text>

            </View>

                <View style={styles.trash}>
                        <TouchableOpacity >
                            <Text>
                                <Image source={require('../../../assets/trash.png')} />
                            </Text>
                        </TouchableOpacity>
                </View>

        </View>
    )
}