import * as React from 'react';

import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {RootTabScreenProps} from "../types";
import IconButton from '../assets/images/buttonIcon.svg'
import {SearchInput} from "../components/Input-Search/SearchInput";
import {SpaceFiltersSort} from "../components/SpaceFilltersSort/SpaceFilltersSort";
import {CardGames} from "../components/Card-games/CardGames";
import RafLife from '../assets/images/rafLife.svg'
import Cardio from '../assets/images/cardoParking.svg'
import Sling from '../assets/images/SlingShotsvg.svg'
import SuperHero from '../assets/images/superhero.svg'
import HyperCards from '../assets/images/hyperCards.svg'

import RafLifeBack from '../assets/images/one.svg'
import CardioBack from '../assets/images/two.svg'
import SlingBack from '../assets/images/three.svg'
import SuperHeroBack from '../assets/images/Frame 66.svg'
import HyperCardsBack from '../assets/images/five.svg'
export default function TabGamesScreen({ navigation }: RootTabScreenProps<'TabGamesScreen'>) {

const arrayCard=[
    {
        background:<RafLifeBack/>,
        icon:<HyperCards />,
        text:'Hyper Cards',
        subText:'Trade & Collect!'
    },
    {
        background:<CardioBack/>,
        icon:<SuperHero/>,
        text:'Superhero Race',
        subText:'Swap Em to Win the Race!'
    },
    {
        background:<SuperHeroBack />,
        icon:<Cardio/>,
        text:'Cargo Parking',
        subText:'Test your Parking Skills'
    },
    {
        background:<HyperCardsBack/>,
        icon:<RafLife/>,
        text:'Raft Life',
        subText:'Can you survive...'
    },
    {
        background:<SlingBack/>,
        icon:<Sling/>,
        text:'Slingshot Crash',
        subText:'Pull Back and Smash!!'
    }

]

    return(
       <SafeAreaView style={styles.container}>
           <View style={{paddingHorizontal:16,marginTop:48}}>
           <View style={styles.header}>
               <Text style={styles.title}>
                   Games
               </Text>
               <TouchableOpacity>
                   <View style={styles.headerButton}>
                       <View style={styles.imgStyle}>
                           <IconButton />
                       </View>
                       <Text style={{color:'white',marginRight:8}}>
                           34.59 »
                       </Text>
                   </View>
               </TouchableOpacity>
           </View>
               <SearchInput placeholder='Search games, genres'/>
               <View style={{marginTop:16}}>
                   <SpaceFiltersSort
                       filterName='All Categories'
                       sortName='Relevance'
                       listName='Gallery View'
                   />
               </View>
               <ScrollView  style={{marginTop:10}}>
               {arrayCard.map((item:any,index:number)=>
                   <View key={item.text+index}>
                   <CardGames
                   background={item.background}
                   icon={item.icon}
                   text={item.text}
                   subText={item.subText}
                   />
                   </View>
               )}
               </ScrollView>
           </View>

       </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        marginBottom:180
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:19,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color:'#170A4B'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    headerButton:{
        flexDirection:'row',
        backgroundColor:'#0B1A65',
        alignItems:'center',
        borderRadius:25,
        height:34
    },
    imgStyle:{
        borderRadius:24,
        borderWidth:1,
        borderColor:'#0B1A65',
        backgroundColor:'white',
        height:34,
        width:32,
        alignItems:'center',
        justifyContent:'center',
        marginRight:4
    }
});
