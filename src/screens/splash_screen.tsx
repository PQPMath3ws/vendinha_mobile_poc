import React, {ReactElement} from 'react';
import {Image, View} from 'react-native';

const icon = require('../../assets/images/icon.png');

export default function SplashScreen(): ReactElement {
  return (
    <View className="w-full h-full bg-[#F3F3F4] items-center justify-center">
      <Image className="w-[60vw] h-[60vw]" source={icon}></Image>
    </View>
  );
}
