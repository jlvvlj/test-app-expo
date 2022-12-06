import {Image, StyleSheet, TextInput,View} from "react-native";
import {ButtonType} from "../Registration-button/ButtonRegistrtion";
import React from "react";
import searchIcon from '../../assets/images/search.png'

interface Props {
    placeholder: string;
    type?: string;
    value?:string;
}
export const SearchInput: React.FC<Props> = ({placeholder,type,value}) => {



    return(
        <View style={{position:'relative'}}>
            <TextInput
                placeholder={placeholder}
                style={styles.inputStyle}
                placeholderTextColor="#616691"
                inlineImageLeft={searchIcon}

            />
            <Image source={searchIcon} style={styles.icon}/>
        </View>

    )
}
const styles = StyleSheet.create({
    inputStyle:{
      backgroundColor:'#EAECF6',
        height:48,
        borderRadius:16,
        borderWidth:1,
        borderColor:'#D9E0EC',
        color:'#616691',
        paddingLeft:42
    },
    icon:{
        position:'absolute',
        top:'30%',
        left:16,
    }

})
