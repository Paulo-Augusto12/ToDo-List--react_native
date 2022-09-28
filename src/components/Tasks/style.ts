import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({

  tasksContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    width:327,
    height:64,
    backgroundColor:'#333333',
    borderRadius:8,
    marginTop:18,
    marginLeft:35,

},



  elements:{
    display:'flex',
    flexDirection:'row',
    marginTop:12,
    marginBottom:12

},
    
    tasks:{
    color:'#F2F2F2',
    justifyContent:'flex-start',
    fontSize:16
      
},

  taskCompleted:{
    marginLeft:8,
    marginRight:8,
    color:'#808080',
    fontSize:16,
    justifyContent:'flex-start',
    textDecorationLine:'line-through'
  
},

  trash:{
    position:'relative',
    justifyContent:'flex-end',
    marginRight:8,
    marginBottom:16,
    width:32,
    height:32,
  
}

})

