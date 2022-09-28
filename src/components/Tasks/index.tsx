import { useState } from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'


import { styles } from './style'

interface TaskProps{
    description:string;
}

export function Tasks({description}:TaskProps){

    const [taskStatus , setTaskStatus] = useState(false)


    function handleChangeTaskStatus(){
        
        setTaskStatus(!taskStatus)
        console.log('Task status : ' , taskStatus)
    }

    function taskIcon(){
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
  <>
        <View style={styles.tasksContainer}>


            <View style={styles.checkMark}>
        
                <TouchableOpacity onPress={handleChangeTaskStatus}>
                    
                    {taskIcon()}
                    
                </TouchableOpacity>
           
            </View>
                
            <View style={styles.tasks}>
                
                <Text style={ taskStatus === true ? styles.taskCompleted : styles.tasks}>
                    {description}
                </Text>
            
            </View>
                
            
            <View>
                            
            <TouchableOpacity style={styles.trash}>
                
                <Image source={require('../../../assets/trash.png')} />

            </TouchableOpacity>

            </View>

        </View>

            

</>
  
    )
}