import { Text, TextInput, View, StyleSheet, Pressable, Button } from "react-native";
import React,{useEffect, useState} from "react";
import CommonButton from "../components/CommonButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import App from "../App";

function LoginScreen({navigation}) {

    
    const[username, setUserName] = useState("");
    const[password, setPassword] = useState("")

    async function authenticate() {
        if(username == "1" && password == "1"){
            // alert("Login Success");
            try{
                await AsyncStorage.setItem("isLogged", "true");
            } catch (err) {
                console.log(err);
            }
            
            navigation.navigate('MainScreen');
            
        } else {
            alert("Login failed") 
        }
    }
    function handleClick() {
        alert(1)
      }

    return ( 
        <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
                <Text style={{color:'white', fontSize:30}}>LOGIN</Text>
            </View>
            <View style={styles.inputContainer} >
                <Text style={{color:'white'}}>Username</Text>
                <TextInput style={styles.textInput} onChangeText={setUserName} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={{color:'white'}}>Password</Text>
                <TextInput style={styles.textInput} onChangeText={setPassword} />
            </View>
            <View style={{alignItems: 'center', marginTop:15}}>
                {/* <CommonButton title={'LOGIN'} color={'white'} handleClick={handleClick} /> */}
                <Button title="Login" onPress={authenticate} />
            </View>

            <View style={styles.registerContainer}>
                <Text>Don't have an account?</Text>
                {/* <CommonButton title={'SIGN UP'} color={'white'} action={()=>navigation.navigate('Register')} /> */}
                <Button title="Sign Up" onPress={()=>navigation.navigate('Register')} />
            </View>
        </View>
     );
}

export default LoginScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#54C1FF',
      // alignItems: 'center',
      justifyContent: 'center',
    },
    inputContainer : {
        marginHorizontal:50,
        marginTop:30
    },
    textInput: {
        borderBottomWidth:1,
        borderBottomColor:'#a6dfff',
        marginTop:15,
        // padding:15,
        // backgroundColor:'#bde7ff'
    },
    registerContainer: {
        alignItems: 'center', 
        marginTop:100, 
        marginHorizontal:20,
        padding:25,
        borderWidth:1, 
        borderColor:'#66c8ff',
        borderRadius:30,
        backgroundColor:'#66c8ff'
       
 
    }
  });
