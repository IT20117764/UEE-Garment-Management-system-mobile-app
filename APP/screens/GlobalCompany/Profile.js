import { Text, View, StyleSheet, ScrollView, Pressable, ImageBackground, Button, TextInput } from "react-native";
import React,{useEffect, useState} from "react";

import Header from "../../components/Header";

function Profile({navigation}) {

  const[clickedButton, setClickedButton] = useState(1);

    return ( 
        <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={{flex:1}}>
            <Header title={'Profile'} navigation={navigation} />

            <View style={{flex:0.05, flexDirection:'row', justifyContent:'space-evenly', paddingVertical:15,}}>
                  <Pressable onPress={()=>setClickedButton(1)} >
                      <Text style={clickedButton == 1 && {color:'grey'}}>Active</Text>
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
                      <Text style={styles.textContainer}>Company Name : </Text>
                      <Text style={styles.textContainer}>Email : </Text>
                      <Text style={styles.textContainer}>Mobile : </Text> 
                      <Text style={styles.textContainer}>Address : </Text> 
                      <Text style={styles.textContainer}>Description : </Text> 
                      <Text style={styles.textContainer}>Employee : </Text> 
                      </ScrollView>
                  </View>
              </View>
              
            }

            {clickedButton == 2 && 
              <View style={{flex:0.85}}>
                 <View style ={styles.cardBlue}>
                 <ScrollView>
                 <Text style ={styles.text_Input}>Company Name</Text>
                    <TextInput style={styles.input} placeholder='Comapany Name'/>
                    <Text style ={styles.text_Input}>Email</Text>
                    <TextInput style={styles.input} placeholder='Email'/>
                    <Text style ={styles.text_Input}>Mobile</Text>
                    <TextInput style={styles.input} placeholder='Mobile'/>
                    <Text style ={styles.text_Input}>Address</Text>
                    <TextInput style={styles.input} placeholder='Address'/>
                    <Text style ={styles.text_Input}>Description</Text>
                    <TextInput style={{height: 100, marginBottom: 20, backgroundColor: '#fff',borderRadius: 10}} placeholder='Description'/>
                    <Text style ={styles.text_Input}>Employee</Text>
                    <TextInput style={styles.input} placeholder='Employee'/>
                    <Button title="UPDATE" style={styles.button}/>
                 </ScrollView>
                 </View>
                  





                  
              </View>
            }
        </ImageBackground>
     );
}





export default Profile;

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
     
  });