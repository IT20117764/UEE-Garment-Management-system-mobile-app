import { Text, View, StyleSheet, ScrollView, Pressable, ImageBackground, Button } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React,{useEffect, useState} from "react";

import Header from "../../components/Header";

function ViewProject({navigation}) {

  const[clickedButton, setClickedButton] = useState(1);
  const[viewVisible, setViewVisible] = useState('SUPPLIER')

    return ( 
        <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={{flex:1}}>
            <Header title={'Brandix'} navigation={navigation} />

            <View style={{flex:0.05, flexDirection:'row', justifyContent:'space-evenly', paddingVertical:15,}}>
                  <Pressable onPress={()=>setClickedButton(1)} >
                      <Text style={clickedButton == 1 && {color:'grey'}}>Overview</Text>
                  </Pressable>
                  <Text>|</Text>
                  <Pressable  onPress={()=>setClickedButton(2)}>
                      <Text style={clickedButton == 2 && {color:'grey'}}>Update</Text>
                  </Pressable>
              </View>
            
            {clickedButton == 1 && 
              <View style={{flex:0.85}}>
                  <View style ={styles.cardBlue}>
                    <ScrollView>
                      <Text style={styles.textContainer}>Budget : $25000</Text>
                      <Text style={styles.textContainer}>Deadline : 2022/12/12</Text>
                      <Text style={styles.textContainer}>Requirment : </Text>
                      <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and r including versions of Lorem Ipsum standard dummy text ever since the 1500s, when an unknown printer took a galley of type and r including versions of Lorem Ipsum</Text>
                    </ScrollView>
                  </View>
                  <View style ={styles.cardWhite}>
                    <ScrollView>
                      <Text style={styles.textContainer}>Supplier : JK Suppliers</Text>
                      <Text style={styles.textContainer}>Delivery Service : Domex</Text>
                      <View  style={{marginTop:20}} > 
                        <Button title='Mark As Completed' color='#54C1FF' />
                      </View>
                    </ScrollView>
                  </View>
              </View>
            }

            {clickedButton == 2 && 
              <View style={{flex:0.85}}>
                  <View style={{flex:0.1, flexDirection:'row',justifyContent:'space-evenly'}}>
                      <Pressable onPress={()=>setViewVisible('SUPPLIER')} >
                          <MaterialCommunityIcons name="arrow-left" size={26} color={ viewVisible == 'SUPPLIER' ?  'grey' : 'black'}   />
                      </Pressable>
                      {viewVisible == 'SUPPLIER' &&  <Text>Supplier</Text>}
                      {viewVisible == 'DELIVERY' &&  <Text>Delivery</Text>}
                      <Pressable  onPress={()=>setViewVisible('DELIVERY')}>
                          <MaterialCommunityIcons name="arrow-right" size={26} color={ viewVisible == 'DELIVERY' ?  'grey' : 'black'}   />
                      </Pressable>
                  </View>

                  {viewVisible == 'SUPPLIER' && 
                    <View style ={styles.cardWhite}>
                      <ScrollView>
                          <View style={{borderBottomWidth:0.5, marginBottom:20}}>
                              <Text style={{fontWeight:'bold', fontSize:20, marginBottom:10}} > JK Suppliers</Text>
                              <View style={{flex:1,flexDirection:'row', justifyContent:'center', marginBottom:10}}>
                                <View style={{flex:1, marginHorizontal:2}}>
                                  <Button title='View' color='#54C1FF' />
                                </View>
                                <View  style={{flex:1, marginHorizontal:2}}>
                                  <Button title='Accept' color='#54C1FF' />
                                </View>
                              </View>
                          </View>
                      </ScrollView>
                    </View>
                  }
                  {viewVisible == 'DELIVERY' && 
                    <View style ={styles.cardWhite}>
                      <ScrollView>
                          <View style={{borderBottomWidth:0.5, marginBottom:20}}>
                              <Text style={{fontWeight:'bold', fontSize:20, marginBottom:10}} > Domex</Text>
                              <View style={{flex:1,flexDirection:'row', justifyContent:'center', marginBottom:10}}>
                                <View style={{flex:1, marginHorizontal:2}}>
                                  <Button title='View' color='#54C1FF' />
                                </View>
                                <View  style={{flex:1, marginHorizontal:2}}>
                                  <Button title='Accept' color='#54C1FF' />
                                </View>
                              </View>
                          </View>
                      </ScrollView>
                    </View>
                  }
                  
              </View>
              
            }

        </ImageBackground>
     );
}





export default ViewProject;

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
      padding:25,
      marginTop:10,
      marginHorizontal:50,
      borderRadius:15,
      flex:1,
      marginBottom:15,
     
    },
    textContainer:{
        marginTop:8
    },
  });