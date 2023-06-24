import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Header(props) {
    return ( 
        <View style={styles.container}>
            <Pressable android_ripple={{color:'#333333'}} style={{justifyContent: 'center',paddingHorizontal:15}} onPress={() => props.navigation.goBack(null)} >
                <MaterialCommunityIcons name="arrow-left" size={26} color={'black'}   />
            </Pressable>

            <View style={{justifyContent: 'center',}} >
                <Text style={styles.title}>{props.title}</Text>
            </View>

            <Pressable android_ripple={{color:'#e3e3e3'}} style={{justifyContent: 'center',paddingHorizontal:15}} >
                <MaterialCommunityIcons name="dots-vertical" size={26} color={'black'}   />
            </Pressable>
        </View>
        
     );
}

export default Header;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:0.1,
        flexDirection:'row', 
        justifyContent:'space-between',
        elevation:1

    },
    image:{
        width:30,
        height:30,
        color:'white',
        margin:10,
        tintColor:'white'
    },
    title:{
        color:'black',
        textAlign:"center"
    },
    imageDot:{
        width:30,
        height:30,
        color:'white',
        margin:10,
        tintColor:'white',
        textAlign: 'right'
    },
});