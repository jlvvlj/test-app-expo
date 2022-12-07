import {Image, StyleSheet, TouchableOpacity, View,Text} from "react-native";
import filterIcon from  '../../assets/images/filter.png'
import galleryIcon from  '../../assets/images/landscape.png'
import sortIcon from  '../../assets/images/arrow-sort.png'
import ListIcon from  '../../assets/images/list.svg'

import React from "react";



interface Props {
    filterName?:string,
    sortName?:string,
    listName?:string

}
export const SpaceFiltersSort: React.FC<Props> = ({filterName,sortName,listName}) => {
    const renderFilter = () => {
            return (
                <TouchableOpacity>
                    <View style={styles.element}>
                        <>
                        <Image source={filterIcon}/>
                        <Text style={styles.text}>
                            {filterName}
                        </Text>
                        </>
                    </View>
                </TouchableOpacity>
            )
    }
    const renderSort = () => {
            return (
                <TouchableOpacity>
                    <View style={styles.element}>
                        <>
                        <Image source={sortIcon}/>
                        <Text style={styles.text}>
                            {sortName}
                        </Text>
                        </>
                    </View>
                </TouchableOpacity>
            )
    }
    const renderGallery = () => {
            return (
                <TouchableOpacity>
                    <View style={styles.element}>
                        <>
                            {listName === 'List View'?<ListIcon/>:<Image source={galleryIcon}/>}
                        <Text style={styles.text}>
                            {listName}
                        </Text>
                        </>
                    </View>
                </TouchableOpacity>
            )
   }


    return(
        <View style={styles.container(filterName && listName && sortName)}>
            {filterName?renderFilter():null}
            {listName?renderGallery():null}
            {sortName?renderSort():null}
        </View>
    )
}
const styles = StyleSheet.create({
    container:(position) => ({
        width:'100%',
        backgroundColor:'white',
        height:48,
        borderTopColor:'#D9E0EC',
        borderBottomColor:'#D9E0EC',
        borderTopWidth:1,
        borderBottomWidth:1,
        justifyContent:position?'space-between':'space-around',
        flexDirection:'row',
        alignItems:'center',
        paddingTop:5

    }),
    icon:{
        position:'absolute',
        top:'30%',
        left:16,
    },
    element:{
       flexDirection:'row',
        height:20,
    },
    text:{
        color:'#616691',
        marginLeft:4

    }

})

