import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DirectRequests from '../../screens/Garment/DirectRequests';
import ViewRequest from '../../screens/Garment/ViewRequest';


const Stack = createNativeStackNavigator();

function DirectRequestNavigator() {
    return ( 
        <NavigationContainer  independent={true}>
            <Stack.Navigator screenOptions={{headerShown: false}} >
                <Stack.Screen name="Requests" component={DirectRequests} />
                <Stack.Screen name="ViewRequest" component={ViewRequest} />
            </Stack.Navigator> 
        </NavigationContainer>
     );
}

export default DirectRequestNavigator;