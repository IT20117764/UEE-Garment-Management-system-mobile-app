import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MyProjects from '../../screens/Garment/MyProjects';
import ViewProject from '../../screens/Garment/ViewProject';


const Stack = createNativeStackNavigator();

function ProjectsNavigator() {
    return ( 
        <NavigationContainer  independent={true}>
            <Stack.Navigator screenOptions={{headerShown: false}} >
                <Stack.Screen name="Requests" component={MyProjects} />
                <Stack.Screen name="ViewProject" component={ViewProject} />
            </Stack.Navigator> 
        </NavigationContainer>
     );
}

export default ProjectsNavigator;