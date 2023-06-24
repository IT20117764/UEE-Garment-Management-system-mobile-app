import { View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./LoginScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TabNav from "../navigations/TabNav";
import ClientRequests from "./Garment/ClientRequests";
import ClientRequestNavigator from "../navigations/GarmentNavigations/ClientRequestNavigator";
import DirectRequests from "./Garment/DirectRequests";
import DirectRequestNavigator from "../navigations/GarmentNavigations/DirectRequestNavigator";
import ProjectsNavigator from "../navigations/GarmentNavigations/ProjectsNavigator";


const Tab = createBottomTabNavigator();

function MainScreen() {
    return (
        <>
        <NavigationContainer  independent={true}>
          <Tab.Navigator screenOptions={{headerShown: false}} color>
            <Tab.Screen
              name="home"
              component={ClientRequestNavigator}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Direct"
              component={DirectRequestNavigator}
              options={{
                tabBarLabel: 'Requests',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="send" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Projects"
              component={ProjectsNavigator}
              options={{
                tabBarLabel: 'Projects',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="clipboard-file" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Test"
              component={LoginScreen}
              options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
        </> 
     );
}

export default MainScreen;