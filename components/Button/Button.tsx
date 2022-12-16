import React, {useMemo} from "react";
import lock from "../../assets/images/lock.png"
import apple from "../../assets/images/apple.png"
import lockDark from "../../assets/images/lock-dark.png"
import {Text} from "../Themed";
import {TouchableOpacity, StyleSheet, Image} from "react-native";

export type ButtonType = 'default' | 'get' | 'apple' | 'primary' | 'play';

interface Props {
    text: string;
    type?: ButtonType;
    onClick:()=>void;
}

export const Button: React.FC<Props> = React.memo(({ text, type = 'default',onClick }) => {
    const renderStyleText = useMemo(() => {
        if (type === 'apple' || type === 'primary') {
            return styles.textDark
        }
        else if( type === 'play')
        {
            return styles.textPlay
        }
        return {}
    }, [])

    const renderStylesButton = useMemo(() => {
        if (type === 'default') {
            return styles.headerButton;
        } else if (type === 'apple') {
            return styles.appleType
        } else if (type === 'primary') {
            return styles.primaryType;
        }
        return styles.getType;
    }, [type]);

    const renderIcon = useMemo(() => {
        if (type === 'apple') {
            return apple;
        } else if (type === 'primary') {
            return lockDark;
        }
        return lock
    }, [type])
  return (
      <TouchableOpacity style={type === 'default' ? styles.headerButton : [styles.getButton, renderStylesButton]}
      onPress={()=>onClick()}
      >
          {type !== 'default' && type !== 'play' && <Image source={renderIcon}/>}
          <Text style={type !== 'default' ? [styles.text, styles.textWhite, renderStyleText] : styles.text}>{text}</Text>
      </TouchableOpacity>
  )
})

const styles = StyleSheet.create({
    getButton:{
        flexDirection: 'row',
        alignSelf: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    getType: { backgroundColor: '#0B1A65'},
    appleType: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#0B1A65' },
    primaryType: { backgroundColor: '#fff' },
    headerButton:{
        backgroundColor: '#EAECF6',
        width: 150,
        height: 35,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '0B1A65',
        borderWidth: 1,
        marginLeft: '20%',
        marginTop: '2%'
    },
    textWhite: {color: '#fff'},
    textDark: {color: '#0B1A65'},
    text: {marginLeft: 5},
    textPlay:{
        paddingHorizontal:7
    }
})
