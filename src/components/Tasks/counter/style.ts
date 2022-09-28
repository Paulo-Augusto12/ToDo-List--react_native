import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({

    counters:{  
        display:'flex',
        flexDirection:'row',
        height:19,
        width:327,
        borderRadius:0,
        justify:'space-between',
        gap:10,
        marginBottom:20
      
    },

    counterContainer:{
        
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },

    counterIndex:{
        
        color:'#D9D9D9',
        backgroundColor:'#333333',
        fontSize:12,
        fontWeight:'700',
        textAlign:'center',
        width:25,
        height:19,
        borderRadius:999,
        marginLeft:8,
    },


    created:{
        color:'#4EA8DE',
        fontSize:14,
        fontWeight:'700',
    },

    done:{

        marginLeft:125,
        JustifyContent:'flex-end',
        color:'#4EA8DE',
        fontSize:14,
        fontWeight:'700'
    },


})