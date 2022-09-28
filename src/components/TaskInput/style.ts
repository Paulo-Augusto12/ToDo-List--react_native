import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({


    text:{
        
        fontSize:24,
        color:'#5E60CE',
        padding:6
    },

    textFields:{
        
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        marginTop:-30,
    },

    input:{
        
        borderRadius:6,
        color:'#F2F2F2',
        backgroundColor:'#262626',
        padding:16,
        width:271,
    },

    button:{
        
        width:52,
        height:52,
        backgroundColor:'#1E6F9F',
        borderRadius:6,
        padding:17,
        marginLeft:2,
    },

    counters:{  
        display:'flex',
        flexDirection:'row',
        height:19,
        borderRadius:0,
        gap:10,
        marginBottom:20,
        marginTop:18
      
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
        marginLeft:7,
    },


    created:{
        marginLeft:45,
        color:'#4EA8DE',
        fontSize:14,
        fontWeight:'700',
    },

    done:{
        marginLeft:125,
        color:'#4EA8DE',
        fontSize:14,
        fontWeight:'700'
    },

})