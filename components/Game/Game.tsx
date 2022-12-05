import React from "react";
import {Image, ImageSourcePropType, Text, StyleSheet} from "react-native";
import {View} from "../Themed";
import {Button} from "../Button/Button";

interface Props {
    title: string;
    text: string;
    img: ImageSourcePropType;
    isLastChild?: boolean;
    id: number
}

export const Game: React.FC<Props> = React.memo(({ title, text, img, isLastChild, id }) => {
    return (
        <View style={[styles.main, !isLastChild ? styles.borderBottom : {}]}>
            <View style={styles.content}>
                <Image source={img} />
                <View style={styles.contentText}>
                    <Text>{title}</Text>
                    <Text>{text}</Text>
                </View>
            </View>
            {id !== 3 ? <Button text="Get" type="apple"/> : <Button text="Get" type="play"/>}
        </View>
    )
})

const styles = StyleSheet.create({
    main: {
     paddingVertical: 8,
     flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    content: {
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    borderBottom: {
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    contentText: {
        marginLeft: 12,
    },
})
