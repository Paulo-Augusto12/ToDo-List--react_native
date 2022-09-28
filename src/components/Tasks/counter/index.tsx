import { useState } from 'react'
import {Text, View} from 'react-native'

import { styles } from './style'


interface props {
    value:any
}
export function ListCounter(){

    

    const Counter = ({value}:props)=>{

        const [taskCounter, setTaskCounter] = useState(0)

        return(
            <View >
            <Text style={styles.counterIndex}>{value}</Text>
        </View>
        )
        
    }

    return(
    <View style={styles.counters}>
            <Text style={styles.created}>
                Criadas 
            </Text>
            <View style={styles.counterContainer}>
                <Counter value={5}/>
            </View>
            
            <Text style={styles.done}>
                Concluidas 
            </Text>
            <View style={styles.counterContainer}>
                <Counter value={2}/>
            </View>
    </View>
    )
}