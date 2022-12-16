import {StyleSheet, Image, ScrollView, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';

// @ts-ignore
import colorful from "../assets/images/ColorFul.png"

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
// @ts-ignore
import Logo from '../assets/images/LogoLockup.png'
// @ts-ignore
import phone from '../assets/images/Phone.png'
// @ts-ignore
import Green from '../assets/images/Green.png'
import {SafeAreaConsumer, SafeAreaView} from "react-native-safe-area-context";
import {Button} from "../components/Button/Button";
import {Card} from "../components/Card/Card";
import {CardBottom} from "../components/Card/CardBottom";
import {Game} from "../components/Game/Game";
// @ts-ignore
import imageBackground from '../assets/images/imageBackground.png'
import lockIcon from '../assets/images/lock-dark.png'



const gameData = [
  {id: 1, title: 'Hyper Cards', text: 'Trade & Collect!', img: require('../assets/images/game1.png')},
  {id: 2, title: 'Superhero Race!', text: 'Swap \'Em to Win the Race!', img: require('../assets/images/game2.png')},
  {id: 3, title: 'Cargo Parking', text: 'Test your Parking Skills', img: require('../assets/images/game3.png')},
  {id: 4, title: 'Raft Life', text: 'Can you survive Castaway?', img: require('../assets/images/game4.png')},
  {id: 5, title: 'Slingshot Crash', text: 'Pull Back and Smash!!', img: require('../assets/images/game5.png')},
]

export default function TabHomeScreen({ navigation }: RootTabScreenProps<'TabHomeScreen'>) {
  

  return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
       <View style={[styles.headerContainer, styles.topContainer]}>
         <Image source={Logo}/>
         <Button text="Create Account »" onClick={()=>navigation.navigate('WelcomeScreen')}/>
       </View>
        <View style={styles.headerContainer}>
          <Text style={styles.headText}>Hot Rewards</Text>
          <Text style={styles.seeAll}>See All »</Text>
        </View>
        <ScrollView
            style={styles.scrollViewHorizontal}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
          <Card mainImg={phone} text="Shine bright like a pro" title="Iphone 14 Pro Max" count="0" total="16.84" slider />
          <Card isSecond mainImg={Green} text="Shine bright like a pro" title="Iphone 14 Pro Max" count="0" total="16.84" slider />
        </ScrollView>
        <ScrollView
            style={[styles.scrollViewHorizontal, styles.mt24]}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
          <CardBottom mainImg={colorful} title="Instant win here" text="Spin and get rewards worth up to 500$" />
          <CardBottom mainImg={colorful} isSecond title="Instant win here" text="Spin and get rewards worth up to 500$" />
        </ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.headText}>Top Games</Text>
          <Text style={styles.seeAll}>See All »</Text>
        </View>
          <View style={styles.gameWrapper}>
            <View style={styles.gameContent}>
              {gameData.map(item => (
                  <Game key={item.id} id={item.id} isLastChild={item.id === gameData.length} img={item.img} title={item.title} text={item.text} />
              ))}
            </View>
          </View>
          <ImageBackground  source={imageBackground} style={styles.backgroundContainer}  >
            <View style={styles.backgroundContent}>
              <View style={{flexDirection:'column',backgroundColor:'transparent'}}>
                <Text style={styles.buttonText}>
                  Get 5 EMBR
                </Text>
                <Text style={[styles.buttonText,{fontSize: 14}]}>
                  Invite a friend
                </Text>
              </View>
              <TouchableOpacity style={styles.buttonInvite}>
                <Image source={lockIcon}/>
                <Text style={styles.buttonInviteText}>Invite</Text>
              </TouchableOpacity>
            </View>

          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 16,

  },
  backgroundContainer:{
    width: '100%',
    height: 76,
    marginTop: '5%',
    borderRadius:600,
    justifyContent:'center'
  },
  getButton:{
    backgroundColor: '#0B1A65',
    flexDirection: 'row',
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft: '15%'
  },
  phoneImage:{
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  headText: {fontWeight: 'bold', fontSize: 22},
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
  topContainer: { width: '69%'},
  headerContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    marginTop: '5%',
    padding: 16,
  },
  seeAll: {color: '#616691', fontSize: 16, marginLeft: '40%'},
  scrollViewHorizontal: {flexDirection: 'row', backgroundColor: '#F2F2F2'},
  mt24: { marginTop: 24 },
  gameContent: {
    padding: 16,
    borderRadius: 24,
    width: '100%',
    backgroundColor: '#fff',
  },
  gameWrapper: {justifyContent: 'center', alignItems: 'center', borderRadius: 24},
  buttonText:{
    fontSize:18,
    color: '#FFFFFF',
    backgroundColor:'transparent',
    fontWeight:'bold'
  },
  backgroundContent:{
    marginHorizontal:24,
   backgroundColor:'transparent',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'

  },
  buttonInvite:{
    backgroundColor:'#FFFFFF',
    borderRadius:600,
    height:33,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    paddingHorizontal:16
  },
  buttonInviteText:{
    color:'#0B1A65',
    fontSize:14,
    marginLeft:4
  }


});
