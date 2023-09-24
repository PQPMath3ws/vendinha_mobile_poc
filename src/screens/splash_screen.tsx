import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {ReactElement, useEffect} from 'react';
import {Image, View, useWindowDimensions} from 'react-native';

import {SizeConfig} from '../config/size_config';

const icon = require('../../assets/images/icon.png');

export default function SplashScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<ParamListBase, 'SplashScreen'>;
}): ReactElement {
  const {width, height}: {width: number; height: number} =
    useWindowDimensions();

  width > height
    ? new SizeConfig(height, width)
    : new SizeConfig(width, height);

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
      <Image
        source={icon}
        style={{
          height: Math.floor(SizeConfig.widthMultiplier * 65),
          width: Math.floor(SizeConfig.widthMultiplier * 65),
        }}
      />
    </View>
  );
}
