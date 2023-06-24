import { Text, View, StyleSheet, ScrollView, Pressable, ImageBackground } from "react-native";
import Header from "../../components/Header";

import React,{useEffect, useState} from "react";


function MyProjects({navigation}) {

    const[clickedButton, setClickedButton] = useState(1)

    return ( 
        <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={{flex:1}}>
            
            <Header title={'My Projects'} />
            
                <View style={{flex:0.05, flexDirection:'row', justifyContent:'space-evenly', paddingVertical:15,}}>
                    <Pressable onPress={()=>setClickedButton(1)} >
                        <Text style={clickedButton == 1 && {color:'grey'}}>Active</Text>
                    </Pressable>
                    <Text>|</Text>
                    <Pressable  onPress={()=>setClickedButton(2)}>
                        <Text style={clickedButton == 2 && {color:'grey'}}>Completed</Text>
                    </Pressable>
                    <Text>|</Text>
                    <Pressable onPress={()=>setClickedButton(3)}>
                        <Text style={clickedButton == 3 && {color:'grey'}}>Canceled</Text>
                    </Pressable>
                </View>
                
                <View style={{flex:0.85}}>
                    <ScrollView>
                        <Pressable style={styles.requestCard }onPress={()=>navigation.navigate('ViewProject')}>
                            <Text style={{fontSize:18, fontWeight:'bold'}}>Brandix</Text>
                            <Text style={{marginTop:10}}>Budget : $25000</Text>
                        </Pressable>
                    </ScrollView>
                </View>
        </ImageBackground>
     );
}

export default MyProjects;

const styles = StyleSheet.create({
    requestCard: {
      backgroundColor:'#54C1FF',
      elevation:1,
      justifyContent: 'center',
      padding:25,
      marginTop:10,
      marginHorizontal:50,
      borderRadius:15
    },
  });