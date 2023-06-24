import {View, StyleSheet, Text} from "react-native";

function CustomFooter() {
    return (  
        <View style = {styles.container}>
            <Text>Footer</Text>
        </View>
    );
}

export default CustomFooter;

const styles = StyleSheet.create({
    container:{
        flex:0.08,
        backgroundColor:'grey',
        alignItems:'center',
        justifyContent:'center',
    },
});