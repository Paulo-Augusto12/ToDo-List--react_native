import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({

  tasksContainer:{
    position:'relative',
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



  checkMark:{
    display:'flex',
    flexDirection:'row',
    marginTop:12,
    marginBottom:16,
    marginLeft:12,

},
    
    tasks:{
      color:'#F2F2F2',
      justifyContent:'flex-start',
      alignItems:'center',
      marginLeft:7,
      fontSize:16,
      fontWeight:'700',
      height:47,
      maxWidth:235      
},

  taskCompleted:{
    marginLeft:8,
    marginRight:8,
    color:'#808080',
    fontSize:16,
    fontWeight:'700',
    textDecorationLine:'line-through'
  
},

  trash:{
    alignItems:'center',
    justifyContent:'center',
    marginRight:8,
    marginBottom:16,
    width:32,
    height:32,
  
}

})

