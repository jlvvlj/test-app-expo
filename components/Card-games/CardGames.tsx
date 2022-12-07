import {Image, ImageSourcePropType, StyleSheet, Text, View,TouchableOpacity} from "react-native";


import appleIcon from '../../assets/images/apple.png'
import React from "react";

interface Props {
    background: any;
    icon: any;
    text: string;
    subText: string;

}

export const CardGames: React.FC<Props>  = ({background,subText,text,icon}) => {



    return(
        <View style={styles.container}>
            <View style={{overflow:'hidden', borderTopLeftRadius:25,borderTopRightRadius:25}}>
                {background}
            </View>
            <View style={styles.bottomCard}>
                {icon}
                <View style={{marginLeft:8}}>
                    <Text style={styles.title}>
                        {text}
                    </Text>
                    <Text style={styles.text}>
                        {subText}
                    </Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Image source={appleIcon}/>
                    <Text style={{marginLeft:3}}>Get</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width:343,
        borderRadius:25,
        marginTop:16,
        backgroundColor:'white',
        shadowColor: "rgba(0, 0, 0, 0.08)",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 5.65,



    },
    bottomCard:{
        flexDirection:'row',
        position:'relative',
        margin:16,
        alignItems:'center'
    },
    button:{
        position:"absolute",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        right:10,
        top:13,
        height:33,
        width:76,
        borderRadius:25,
        borderWidth:1,
        borderColor:'#0B1A65'
    },
    image:{
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    icon:{
        position:'absolute',
        top:'30%',
        left:16,
    },
    element:{
        flexDirection:'row',
        height:20,
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        color:'#170A4B'
    },
    text:{
        color: '#616691'

    }

})

