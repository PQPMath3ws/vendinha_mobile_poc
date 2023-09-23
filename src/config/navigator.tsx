import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Tabs from './tabs';

import SplashScreen from '../screens/splash_screen';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export default function MainStackNavigation(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="AppTabsScreen"
          component={Tabs}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
