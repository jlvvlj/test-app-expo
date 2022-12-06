import {ImageBackground, StyleSheet, Text, SafeAreaView, Image, View, Dimensions} from "react-native";
import bannerImg from '../assets/images/banner.png'
import logoImg from '../assets/images/logo.png'
import {Button} from "../components/Button/Button";
import {ButtonRegistrtion} from "../components/Registration-button/ButtonRegistrtion";


const WelcomeScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={bannerImg} style={styles.bannerStyle} resizeMode='cover'>
                <Image source={logoImg} style={styles.logoStyle}/>
            </ImageBackground>
            <View style={styles.bodyStyle}>
                <Text style={styles.title}>
                    Play, earn, redeem,
                </Text>
                <Text style={[styles.title,{color:'#310CE3'}]}>
                    repeat.
                </Text>

            </View>
            <View style={[styles.bodyStyle,{marginTop: 32}]}>
                <ButtonRegistrtion text='Continue with Apple' type='apple'/>
                <ButtonRegistrtion text='Continue with Google' type='google'/>
                <ButtonRegistrtion text='Continue with Twitter' type='twitter'/>
            </View>
            <Text style={styles.continueStyle}>Continue with Email</Text>

        </SafeAreaView>
    )
}
export default WelcomeScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bannerStyle:{
        width:'100%',
        height:325,
        position:"relative"
    },
    logoStyle:{
        position:'absolute',
        bottom:-90,
        left:'25%'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    bodyStyle: {
        marginTop:68,
        marginHorizontal:24,
        alignItems:"center",
    },
    continueStyle:{
        textAlign:'center',
        color:'continueStyle',
        marginTop:24,
        color:'#616691'
    }
});
