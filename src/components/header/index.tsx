import { View, Text, Image, StatusBar, TextInput, TouchableOpacity } from "react-native";

import { LogoSvg } from "../Logo";

import {styles} from './style';



export function Header(){

return(

    <View style={styles.homeTitle}>

            <LogoSvg />

        </View>

)


}            
        