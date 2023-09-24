import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {ReactElement} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import ClientsScreen from '../screens/clients_screen';
import HomeScreen from '../screens/home_screen';

const Tab = createBottomTabNavigator();

const containerStyle = {
  backgroundColor: '#FAFAFA',
};

const screenOptions = {
  headerShown: false,
  tabBarActiveBackgroundColor: '#FFFFFF',
  tabBarActiveTintColor: '#62A856',
  tabBarInactiveBackgroundColor: '#FFFFFF',
  tabBarInactiveTintColor: '#62A856',
  tabBarShowLabel: false,
  tabBarStyle: {
    height: 60,
  },
  tabBarIconStyle: {
    width: 38,
    height: 38,
  },
};

export default function Tabs(): ReactElement {
  return (
    <Tab.Navigator sceneContainerStyle={containerStyle}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          ...screenOptions,
          tabBarItemStyle: {
            alignItems: "flex-end",
            paddingRight: 70,
          },
          tabBarIcon: ({color}) => (
            <Icon name="home-outline" color={color} size={34} />
          ),
        }}
      />
      <Tab.Screen
        name="ClientsScreen"
        component={ClientsScreen}
        options={{
          ...screenOptions,
          tabBarItemStyle: {
            alignItems: "flex-start",
            paddingLeft: 70,
          },
          tabBarIcon: ({color}) => (
            <Icon name="person-outline" color={color} size={34} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
