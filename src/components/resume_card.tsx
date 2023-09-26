import React, {ReactElement} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {SizeConfig} from '../config/size_config';

export default function ResumeCard({
  title,
  qtde,
  totalValue,
}: {
  title: string;
  qtde: string;
  totalValue: string;
}): ReactElement {
  return (
    <View className="mt-7 w-[90%] rounded-[8px] bg-[#FFFFFF] py-4">
      <Text
        className="pl-4 font-['OpenSans-Bold'] text-[#AFDA51]"
        style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
        {title}
      </Text>
      <View className="mt-3 flex w-[95%] flex-row justify-between pl-4">
        <Text
          className="font-['OpenSans-Bold'] text-[#404040]"
          style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
          Qtde:
        </Text>
        <Text
          className="font-['OpenSans-Regular'] text-[#404040]"
          style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
          {qtde}
        </Text>
      </View>
      <View className="mt-3 flex w-[95%] flex-row justify-between pl-4">
        <Text
          className="font-['OpenSans-Bold'] text-[#404040]"
          style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
          Valor total:
        </Text>
        <Text
          className="font-['OpenSans-Regular'] text-[#404040]"
          style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
          R$ {totalValue}
        </Text>
      </View>
    </View>
  );
}
