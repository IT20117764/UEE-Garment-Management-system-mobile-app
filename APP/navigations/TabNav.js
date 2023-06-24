import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from '../screens/LoginScreen';
import React,{useEffect, useState} from "react";
import ClientRequests from '../screens/Garment/ClientRequests';

const Tab = createBottomTabNavigator();
function TabNav() {

    const[role, setRole] = useState(0)

    return ( 

        <>
        {role ==0 && 
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false}} color>
                <Tab.Screen
                name="home"
                component={ClientRequests}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
                />

                <Tab.Screen
                name="Orders"
                component={LoginScreen}
                options={{
                    tabBarLabel: 'Orders',
                    tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
                    ),
                }}
                />


                <Tab.Screen
                name="Materials"
                component={LoginScreen}
                options={{
                    tabBarLabel: 'Materials',
                    tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="store" color={color} size={26} />
                    ),
                }}
                />
            </Tab.Navigator>
          </NavigationContainer>
          }
          </>
     );
}

export default TabNav;