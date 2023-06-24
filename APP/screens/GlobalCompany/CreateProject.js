import { Text, View, StyleSheet, ScrollView, Pressable, ImageBackground,TextInput, Button } from "react-native";
import Header from "../../components/Header";


function CreateProject({navigation}) {
    return ( 
        <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={{flex:1}}>
            <Header title={"Create Project"} />
            <View style={{flex:0.9}}>
            <View style ={styles.cardBlue}>
                 <ScrollView>
                    <Text style ={styles.text_Input}>Project Title</Text>
                    <TextInput style={styles.input} placeholder='Project Title'/>
                    <Text style ={styles.text_Input}>Project Description</Text>
                    <TextInput style={{height: 100, marginBottom: 20, backgroundColor: '#fff',borderRadius: 10}} placeholder='Project Description'/>
                    <Text style ={styles.text_Input}>City</Text>
                    <TextInput style={styles.input} placeholder='City'/>
                    <Text style ={styles.text_Input}>Deadline</Text>
                    <TextInput style ={styles.input} placeholder='Deadline'/>
                   
                    <Button title="CREATE" style={styles.button}/>
                 </ScrollView>
                 </View>



            </View>
        </ImageBackground>

     );
}



export default CreateProject;

const styles = StyleSheet.create({
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
      },
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