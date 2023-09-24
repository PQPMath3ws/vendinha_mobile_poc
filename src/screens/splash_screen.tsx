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
    <View className="h-full w-full items-center justify-center bg-[#F3F3F4]">
      <Image className="h-[60vw] w-[60vw]" source={icon} />
    </View>
  );
}
