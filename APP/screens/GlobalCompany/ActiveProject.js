import { Text, View, StyleSheet, ScrollView, Pressable, ImageBackground, Button, TextInput, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React,{useEffect, useState} from "react";
import Header from "../../components/Header";

function ActiveProject({navigation}) {

  const[clickedButton, setClickedButton] = useState(1);


    return ( 
        <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={{flex:1}}>
            <Header title={'Active Project'} navigation={navigation} />

            <View style={{flex:0.05, flexDirection:'row', justifyContent:'space-evenly', paddingVertical:15,}}>
                  <Pressable onPress={()=>setClickedButton(1)} >
                      <Text style={clickedButton == 1 && {color:'grey'}}>Active</Text>
                  </Pressable>
                  <Text>|</Text>
                  <Pressable  onPress={()=>setClickedButton(2)}>
                      <Text style={clickedButton == 2 && {color:'grey'}}>View Offer</Text>
                  </Pressable>
                  <Text>|</Text>
                  <Pressable  onPress={()=>setClickedButton(3)}>
                      <Text style={clickedButton == 3 && {color:'grey'}}>History</Text>
                  </Pressable>
              </View>
            
            {clickedButton == 1 && 
             
             <View style={{flex:0.85}}>
             <ScrollView>
                <Pressable style={styles.requestCard } onPress={()=>navigation.navigate('ViewRequest')}>
                    <Text style={{fontSize:18, fontWeight:'bold'}}>Biliz Textile</Text>
                    <Text style={{marginTop:10}}>Colombo</Text>
                    <View style={{marginLeft:'auto'}}>
                        <Text style={styles.active }>ACTIVE</Text>
                    </View>
                </Pressable>
             </ScrollView>
          </View>
              
            }

            {clickedButton == 2 && 
              <View style={{flex:0.85}}>
                <ScrollView>
                    <View style={styles.title }>
                        <Text style={{fontWeight: 'bold',fontSize:25, marginTop: 1,}}>Offers</Text>
                    </View>
                    <Pressable style={styles.viewOffer } onPress={()=>navigation.navigate('ViewRequest')}>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>Coment Fasion</Text>
                        <Text style={{marginTop:10}}>2022-11-11  02.00 pm</Text>
                        <View style={{marginLeft:'auto'}}>
                            <Text style={styles.active }>ACTIVE</Text>
                        </View>
                    </Pressable>
                    <Pressable style={styles.viewOffer } onPress={()=>navigation.navigate('ViewRequest')}>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>Coment Fasion</Text>
                        <Text style={{marginTop:10}}>2022-11-11  02.00 pm</Text>
                        <View style={{marginLeft:'auto'}}>
                            <Text style={styles.active }>ACTIVE</Text>
                        </View>
                    </Pressable>
                    <Pressable style={styles.viewOffer } onPress={()=>navigation.navigate('ViewRequest')}>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>Coment Fasion</Text>
                        <Text style={{marginTop:10}}>2022-11-11  02.00 pm</Text>
                        <View style={{marginLeft:'auto'}}>
                            <Text style={styles.active }>ACTIVE</Text>
                        </View>
                    </Pressable>
                    <Pressable style={styles.viewOffer } onPress={()=>navigation.navigate('ViewRequest')}>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>Coment Fasion</Text>
                        <Text style={{marginTop:10}}>2022-11-11  02.00 pm</Text>
                        <View style={{marginLeft:'auto'}}>
                            <Text style={styles.active }>ACTIVE</Text>
                        </View>
                    </Pressable>
             </ScrollView>              
              </View>
            }


            {clickedButton == 3 && 
              <View style={{flex:0.85}}>
                 <View style={styles.title }>
                        <Text style={{fontWeight: 'bold',fontSize:25, marginTop: 1,}}>History</Text>
                </View>
              </View>
            }
        </ImageBackground>
     );
}





export default ActiveProject;

const styles = StyleSheet.create({
    cardBlue: {
      backgroundColor:'#54C1FF',
      elevation:1,
      justifyContent: 'center',
      padding:25,
      marginTop:10,
      marginHorizontal:50,
      borderRadius:15,
      flex:2
    },
    cardWhite: {
      backgroundColor:'white',
      elevation:1,
      justifyContent: 'center',
      padding:5,
      marginTop:10,
      marginHorizontal:50,
      borderRadius:15,
      flex:1,
      marginBottom:15,
    },
    requestCard: {
        backgroundColor:'#54C1FF',
        elevation:1,
        justifyContent: 'center',
        padding:25,
        marginTop:10,
        marginHorizontal:30,
        borderRadius:15
      },
    textContainer:{
        marginTop:8,
        fontWeight: 'bold',
    },
    textContainerReasponse:{
        marginTop:8,
    },
    input: {
        height: 30,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
      },
      text_Input: {
        marginBottom: 10,
        fontWeight: 'bold',
      },
      title:{
        marginBottom: 1,
        backgroundColor:'#54C1FF',
        padding:15,
        marginTop:1,
        marginHorizontal:30,
        borderRadius:15
      },
      viewOffer: {
        backgroundColor:'#54C1FF',
        elevation:1,
        justifyContent: 'center',
        padding:25,
        marginTop:3,
        marginHorizontal:30,
        borderRadius:7
      },
  });