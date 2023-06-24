import { Text, View, StyleSheet, ScrollView, Pressable, ImageBackground } from "react-native";
import Header from "../../components/Header";

function SampleScreen({navigation}) {
    return ( 
        <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={{flex:1}}>
            <Header title={'Screen Title'} />
            
            <View style={{flex:0.9}}>
                {/* Your UI */}
            </View>
        </ImageBackground>
     );
}

export default SampleScreen;

const styles = StyleSheet.create({
    container: {
      
    },
  });