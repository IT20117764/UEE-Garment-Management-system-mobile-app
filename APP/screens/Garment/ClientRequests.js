import { Text, View, StyleSheet, ScrollView, Pressable, ImageBackground } from "react-native";
import Header from "../../components/Header";


function ClientRequests({navigation}) {
    return ( 
        <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={{flex:1}}>
            <Header title={"Client Requests"} />

            <View style={{flex:0.9}}>
                <ScrollView>
                    <Pressable style={styles.requestCard }onPress={()=>navigation.navigate('ViewRequest')}>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>Brandix</Text>
                        <Text style={{marginTop:10}}>Budget : $25000</Text>
                    </Pressable>
                </ScrollView>
            </View>
        </ImageBackground>

     );
}



export default ClientRequests;

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