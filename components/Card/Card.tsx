import React from "react";
import {StyleSheet, Image, ImageSourcePropType} from "react-native";
import {Text, View} from "../Themed";
import {Button} from "../Button/Button";
import progress from "../../assets/images/Progress.png";

interface Props {
    mainImg: ImageSourcePropType;
    title: string;
    text: string;
    count: string;
    total: string
    isSecond?: boolean;
}

export const Card: React.FC<Props> = React.memo(({ mainImg, title, text, total, count, isSecond }) => {
    return (
        <View style={isSecond ? [styles.main, styles.mainSecond] : styles.main}>
            <Image source={mainImg} style={styles.phoneImage}/>
            <View style={styles.contentText}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={[styles.largeText, styles.colorfulText]}>{text}</Text>
                </View>
                <Button type="get" text="Get"/>
            </View>
            <View style={{width: '100%', paddingHorizontal: 16}}>
                <Image source={progress} style={{width: '100%', paddingHorizontal: 16}}/>
            </View>
            <View style={styles.contentText}>
                <Text style={[styles.largeText, styles.colorfulText]}>{count}{' '}
                    <Text style={[styles.smallText, styles.colorfulText]}>
                        EMBR
                    </Text>
                </Text>
                <Text style={styles.largeText}>{total}{' '}
                    <Text style={styles.smallText}>
                        EMBR
                    </Text></Text>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    main: {
        borderRadius: 20,
        width: 315,
    },
    mainSecond: {
      marginLeft: 15,
    },
    phoneImage:{
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    contentText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        padding: 16
    },
    title: {fontWeight: 'bold', fontSize: 18, marginBottom: 5},
    largeText: {fontSize: 18},
    smallText: {fontSize: 12},
    colorfulText: {color: '#616691'},
})
