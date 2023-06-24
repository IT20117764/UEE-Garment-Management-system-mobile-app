import { Pressable, Text, View, StyleSheet } from "react-native";
import React,{useEffect, useState} from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function RegisterScreen(props) {


    return ( 
        <View style={styles.container}>
            <View style={{flex:0.20}}>
                <View style={{padding:15}}>
                    <Pressable onPress={() => props.navigation.goBack(null)}>
                        <MaterialCommunityIcons name="arrow-left" size={26} color={'white'}   />
                    </Pressable>
                </View>
                <View style={{alignItems: 'center',}}>
                    <Text style={{fontSize:40, padding:15, color:'white'}}> Register as a </Text>
                </View>
            </View>
            <View style={{flex:0.75}}>
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={styles.buttonOuterContainer}>
                        <Pressable style={styles.buttonInnercontainer} android_ripple={{color:'#54C1FF'}}>
                            <Text style={styles.textContainer} >Global Company</Text>
                        </Pressable>
                    </View>
                    <View style={styles.buttonOuterContainer}>
                        <Pressable style={styles.buttonInnercontainer} android_ripple={{color:'#54C1FF'}}>
                            <Text style={styles.textContainer} >Garment</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={styles.buttonOuterContainer}>
                        <Pressable style={styles.buttonInnercontainer} android_ripple={{color:'#54C1FF'}}>
                            <Text style={styles.textContainer} >Supplier</Text>
                        </Pressable>
                    </View>
                    <View style={styles.buttonOuterContainer}>
                        <Pressable style={styles.buttonInnercontainer} android_ripple={{color:'#54C1FF'}}>
                            <Text style={styles.textContainer} >Delivery</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
     );
}

export default RegisterScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#54C1FF',
      // alignItems: 'center',
      justifyContent: 'center',
    },
    userContainer : {
        // borderWidth:1,
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        margin:5,
        borderRadius:15,
        elevation:1,
        backgroundColor:'#bfe8ff',
        padding:25
    },
    textContainer: {
        fontSize:25,
        padding:15
    },
    buttonOuterContainer:{
        flex:1,
        margin:4,
        borderRadius:28,
        overflow:'hidden',
        elevation:2
      },
      buttonInnercontainer: {
        backgroundColor:'#72063c',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#bfe8ff',
    },
  });