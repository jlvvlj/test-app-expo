import {Image, StyleSheet, TouchableOpacity} from "react-native";
import {Text} from "../Themed";
import React, {useMemo} from "react";
import appleIcon from '../../assets/images/appleWhite.png'
import googleIcon from '../../assets/images/google.png'
import twitterIcon from '../../assets/images/twitter.png'



export type ButtonType = 'apple' | 'google' | 'twitter';

interface Props {
    text: string;
    type: ButtonType;
    logIn:()=>(void);
}
export const ButtonRegistrtion: React.FC<Props> =  ({text,type,logIn}) => {

    const renderIcon = useMemo(() => {
       switch (type) {
           case 'apple':
               return appleIcon
           case 'google':
               return googleIcon
           case 'twitter':
               return twitterIcon
       }
    }, [type]);
    const renderStyleIcon = useMemo(()=>{
        switch (type) {
            case 'apple':
                return styles.iconApple
            case 'google':
                return styles.iconGoogle
            case 'twitter':
                return styles.iconTwitter
        }

    },[type])



    return(
        <TouchableOpacity style={styles.styleButton} onPress={()=>logIn()}>
             <Image source={renderIcon} style={renderStyleIcon} resizeMode='contain'/>
             <Text style={styles.textStyle}   >{text}</Text>
        </TouchableOpacity>
    )}

const styles = StyleSheet.create({
  styleButton:{
      width:'100%',
      backgroundColor:'#0B1A65',
      flexDirection:'row',
      alignItems:'center',
      borderRadius:50,
      height:51,
      paddingHorizontal:18,
      position:"relative",
      marginBottom:10
  },
    textStyle:{
        color:'#FFFFFF',
        fontSize:16,
        fontWeight:'500',
        paddingLeft:50
    },
    iconApple:{
        width:24,
        height:24
    },
    iconGoogle:{
      width:24,
      height:24
    },
    iconTwitter:{

    }

})
