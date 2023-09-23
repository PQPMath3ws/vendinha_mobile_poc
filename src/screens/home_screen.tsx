import React, {ReactElement} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const viewShadow = {
  shadowColor: "#000000",
  shadowOffset: {
    width: 10,
    height: -10,
  },
  shadowOpacity: 0.25,
  shadowRadius: 16.00,
  elevation: 24,
};

export default function HomeScreen(): ReactElement {
  return (
    <SafeAreaView className="w-full h-full bg-[#FAFAFA] pb-7">
      <ScrollView
        className="mt-6"
        contentContainerStyle={{flexGrow: 1, alignItems: "center"}}>
        <Text className="font-['OpenSans-Bold'] text-[6vw] text-[#62A856]">
          Resumo de dívidas
        </Text>
        <View className="mt-7 bg-[#FFFFFF] w-[90%] rounded-[8px] py-4">
          <Text className="font-['OpenSans-Bold'] text-[5vw] text-[#AFDA51] pl-4">Dívidas em aberto</Text>
          <View className="w-[95%] mt-3 flex flex-row justify-between pl-4">
            <Text className="font-['OpenSans-Bold'] text-[4vw] text-[#404040]">Qtde:</Text>
            <Text className="font-['OpenSans-Regular'] text-[4vw] text-[#404040]">0</Text>
          </View>
          <View className="w-[95%] mt-3 flex flex-row justify-between pl-4">
            <Text className="font-['OpenSans-Bold'] text-[4vw] text-[#404040]">Valor total:</Text>
            <Text className="font-['OpenSans-Regular'] text-[4vw] text-[#404040]">R$ 0</Text>
          </View>
        </View>
        <View className="mt-7 bg-[#FFFFFF] w-[90%] rounded-[8px] py-4">
          <Text className="font-['OpenSans-Bold'] text-[5vw] text-[#AFDA51] pl-4">Dívidas pagas</Text>
          <View className="w-[95%] mt-3 flex flex-row justify-between pl-4">
            <Text className="font-['OpenSans-Bold'] text-[4vw] text-[#404040]">Qtde:</Text>
            <Text className="font-['OpenSans-Regular'] text-[4vw] text-[#404040]">0</Text>
          </View>
          <View className="w-[95%] mt-3 flex flex-row justify-between pl-4">
            <Text className="font-['OpenSans-Bold'] text-[4vw] text-[#404040]">Valor total:</Text>
            <Text className="font-['OpenSans-Regular'] text-[4vw] text-[#404040]">R$ 0</Text>
          </View>
        </View>
        <View className="mt-7 bg-[#FFFFFF] w-[90%] rounded-[8px] py-4">
          <Text className="font-['OpenSans-Bold'] text-[5vw] text-[#AFDA51] pl-4">Dívidas cadastradas</Text>
          <View className="w-[95%] mt-3 flex flex-row justify-between pl-4">
            <Text className="font-['OpenSans-Bold'] text-[4vw] text-[#404040]">Qtde:</Text>
            <Text className="font-['OpenSans-Regular'] text-[4vw] text-[#404040]">0</Text>
          </View>
          <View className="w-[95%] mt-3 flex flex-row justify-between pl-4">
            <Text className="font-['OpenSans-Bold'] text-[4vw] text-[#404040]">Valor total:</Text>
            <Text className="font-['OpenSans-Regular'] text-[4vw] text-[#404040]">R$ 0</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
