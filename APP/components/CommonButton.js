import { Pressable, Text, View, StyleSheet } from "react-native";

function CommonButton(props) {
    return ( 
        <View style={styles.buttonOuterContainer} >
            <Pressable style={[styles.container,{backgroundColor:props.color}]} android_ripple={{color:'#949494'}} onPress={()=> props.action} >
                <Text style={styles.buttonText} >{props.title}</Text>
            </Pressable>
        </View>
        
     );
}

export default CommonButton;

const styles = StyleSheet.create({
    buttonOuterContainer:{
        margin:4,
        borderRadius:28,
        overflow:'hidden',
        elevation:2
      },  
    container: {
        backgroundColor:'#72063c',
        paddingVertical:10,
        paddingHorizontal:20,

    },
    buttonText: {
        // fontWeight:'bold'
    }
  });