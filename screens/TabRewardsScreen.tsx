import {StyleSheet, TouchableOpacity, Text, View, SafeAreaView, ScrollView} from 'react-native';

import {Button} from "../components/Button/Button";
import {SearchInput} from "../components/Input-Search/SearchInput";
import {SpaceFiltersSort} from "../components/SpaceFilltersSort/SpaceFilltersSort";
import {Card} from "../components/Card/Card";
import phone from "../assets/images/Phone.png";
import Green from "../assets/images/Green.png";
import Grubhub from "../assets/images/Grubhub.png";
import amazon from "../assets/images/amazon.png";
import fifa from "../assets/images/fifa.png";
import {useNavigation} from "@react-navigation/native";
import {RootTabScreenProps} from "../types";


export default function TabRewardsScreen({ navigation }: RootTabScreenProps<'TabRewardsScreen'>) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginHorizontal:16,margin:48}}>
      <View style={styles.header}>
         <Text style={styles.title}>
          Rewards
        </Text>
        <Button text="Create Account »"  onClick={()=>navigation.navigate('WelcomeScreen')} />
      </View>
      <SearchInput placeholder='Search brand, product, reward, etc'/>
          <View style={{marginTop:16}}>
              <SpaceFiltersSort
                  filterName='All Categories'
                  sortName='Relevance'
                  listName='Gallery View'
              />
          </View>
          <ScrollView  style={{marginTop:16,marginBottom:150}} showsVerticalScrollIndicator={false}>
              <View>
                  <Card mainImg={phone} text="Shine bright like a pro" title="Iphone 14 Pro Max" count="0" total="16.84" />
              </View>
              <View style={{marginTop:16}}>
                  <Card  mainImg={Green} text="Just do it!" title="Nike Shoes" count="0" total="16.84"  />
              </View>
              <View style={{marginTop:16}}>
                  <Card  mainImg={Grubhub} text="5% discount on any orders" title="Grubhub" count="0" total="16.84"  />
              </View>
              <View style={{marginTop:16}}>
                  <Card  mainImg={amazon} text="3 months free" title="Amazon Prime" count="0" total="16.84"  />
              </View>
              <View style={{marginTop:16}}>
                  <Card  mainImg={fifa} text="Free ticket for the final game" title="Fifa World Cup Qatar 2..." count="0" total="16.84"  />
              </View>
          </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor:'white',
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
});
