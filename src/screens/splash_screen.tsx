import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {ReactElement, useEffect} from 'react';
import {Image, View} from 'react-native';

const icon = require('../../assets/images/icon.png');

export default function SplashScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<ParamListBase, 'SplashScreen'>;
}): ReactElement {
  async function loadApplication() {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'AppTabsScreen',
          },
        ],
      });
    }, 4000);
  }

  useEffect(() => {
    loadApplication();
  }, []);

  return (
    <View className="w-full h-full bg-[#F3F3F4] items-center justify-center">
      <Image className="w-[60vw] h-[60vw]" source={icon}></Image>
    </View>
  );
}
