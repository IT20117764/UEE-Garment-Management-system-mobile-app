import { Text, View, StyleSheet, ScrollView, Pressable, TextInput, Button, ImageBackground } from "react-native";
import Header from "../../components/Header";

function ViewRequest(props) {
    return ( 
        <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={{flex:1}}>
            <Header title={"View Requests"} navigation={props.navigation} />
            <ScrollView style={{flex:0.9}}>
                <View style={styles.card}>
                    <Text style={styles.textContainer}>Company : Brandix</Text>
                    <Text style={styles.textContainer}>Budget : $25000</Text>
                    <Text style={styles.textContainer}>Deadline : 2022/12/12</Text>
                    <Text style={styles.textContainer}>Requirment : </Text>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and r including versions of Lorem Ipsum standard dummy text ever since the 1500s, when an unknown printer took a galley of type and r including versions of Lorem Ipsum</Text>
                </View>

                <View style={styles.offerCard}>
                    <Text style={styles.textContainer}>Budget : </Text>
                    <TextInput style={styles.textInput} />
                    <Text style={styles.textContainer}>Message : </Text>
                    <TextInput style={styles.textInput}  />

                    <View style={{marginTop:10}}>
                        <Button title="Send Offer" color='#54C1FF' />
                    </View>
                    
                </View>

            </ScrollView>
        </ImageBackground>

     );
}

export default ViewRequest;


const styles = StyleSheet.create({
    card: {
      backgroundColor:'#54C1FF',
      elevation:1,
      justifyContent: 'center',
      padding:25,
      marginTop:10,
      marginHorizontal:50,
      borderRadius:15
    },
    offerCard: {
        backgroundColor:'white',
        elevation:1,
        justifyContent: 'center',
        padding:25,
        marginTop:10,
        marginHorizontal:50,
        borderRadius:15,
        marginBottom:15
      },
    textContainer:{
        marginTop:8
    },
    textInput: {
        borderBottomWidth:1,
        borderBottomColor:'#a6dfff',
        marginTop:5,
    },
  });