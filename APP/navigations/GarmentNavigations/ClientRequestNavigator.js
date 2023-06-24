import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ClientRequests from '../../screens/Garment/ClientRequests';
import MainScreen from '../../screens/MainScreen';
import ViewRequest from '../../screens/Garment/ViewRequest';



const Stack = createNativeStackNavigator();

function ClientRequestNavigator() {
    return ( 
        <NavigationContainer  independent={true}>
            <Stack.Navigator screenOptions={{headerShown: false}} >
                <Stack.Screen name="Requests" component={ClientRequests} />
                <Stack.Screen name="ViewRequest" component={ViewRequest} />
                <Stack.Screen name="MainScreen" component={MainScreen} />
            </Stack.Navigator> 
        </NavigationContainer>
     );
}

export default ClientRequestNavigator;