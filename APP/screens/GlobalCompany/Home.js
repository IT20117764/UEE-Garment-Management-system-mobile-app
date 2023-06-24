import { Text, View, StyleSheet, ScrollView, Pressable, ImageBackground } from "react-native";
import Header from "../../components/Header";
import Rating from '../../components/GlobalCompany/rating'

function Home({navigation}) {
    return ( 
        <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={{flex:1}}>
            <Header title={"Home"} />
            
            <View style={{flex:0.9}}>
                <ScrollView>
                    <Pressable style={styles.requestCard }onPress={()=>navigation.navigate('ViewRequest')}>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>Biliz Textile</Text>
                        <Text style={{marginTop:10}}>Colombo</Text>
                        <Rating/>
                    </Pressable>
                    <Pressable style={styles.requestCard }onPress={()=>navigation.navigate('ViewRequest')}>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>StarLight Clothing</Text>
                        <Text style={{marginTop:10}}>Colombo</Text>
                        <Rating/>
                    </Pressable>
                    <Pressable style={styles.requestCard }onPress={()=>navigation.navigate('ViewRequest')}>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>Style Fatshion</Text>
                        <Text style={{marginTop:10}}>Colombo</Text>
                        <Rating/>
                    </Pressable>
                    <Pressable style={styles.requestCard }onPress={()=>navigation.navigate('ViewRequest')}>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>Coment Fatshion</Text>
                        <Text style={{marginTop:10}}>Colombo</Text>
                        <Rating/>
                    </Pressable>
                    <Pressable style={styles.requestCard }onPress={()=>navigation.navigate('ViewRequest')}>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>Biliz Textile</Text>
                        <Text style={{marginTop:10}}>Colombo</Text>
                        <Rating/>
                    </Pressable>
                </ScrollView>
            </View>
        </ImageBackground>

     );
}



export default Home;

const styles = StyleSheet.create({
    requestCard: {
      backgroundColor:'#54C1FF',
      elevation:1,
      justifyContent: 'center',
      padding:25,
      marginTop:10,
      marginHorizontal:30,
      borderRadius:15
    },
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
      },
  });