import React, {ReactElement} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {SizeConfig} from '../config/size_config';

export default function HomeScreen(): ReactElement {
  return (
    <SafeAreaView className="h-full w-full bg-[#FAFAFA] pb-7">
      <ScrollView
        className="mt-6"
        contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
        <Text
          className="font-['OpenSans-Bold'] text-[#62A856]"
          style={{fontSize: Math.floor(SizeConfig.textMultiplier * 3)}}>
          Resumo de dívidas
        </Text>
        <View className="mt-7 w-[90%] rounded-[8px] bg-[#FFFFFF] py-4">
          <Text
            className="pl-4 font-['OpenSans-Bold'] text-[#AFDA51]"
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
            Dívidas em aberto
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
              0
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
              R$ 0
            </Text>
          </View>
        </View>
        <View className="mt-7 w-[90%] rounded-[8px] bg-[#FFFFFF] py-4">
          <Text
            className="pl-4 font-['OpenSans-Bold'] text-[5vw] text-[#AFDA51]"
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
            Dívidas pagas
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
              0
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
              R$ 0
            </Text>
          </View>
        </View>
        <View className="mt-7 w-[90%] rounded-[8px] bg-[#FFFFFF] py-4">
          <Text
            className="pl-4 font-['OpenSans-Bold'] text-[5vw] text-[#AFDA51]"
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
            Dívidas cadastradas
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
              0
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
              R$ 0
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
