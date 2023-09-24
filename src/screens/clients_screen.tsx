import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {ReactElement, useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import {SizeConfig} from '../config/size_config';

export default function ClientsScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<ParamListBase, 'ClientsScreen'>;
}): ReactElement {
  const [clientNameToSearch, setClientNameToSearch] = useState('');

  function navigateToAddClientScreen() {
    navigation.navigate('AddClientScreen');
  }

  return (
    <SafeAreaView className="relative h-full w-full bg-[#FAFAFA] pb-7">
      <ScrollView
        className="mt-6"
        contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
        <Text
          className="font-['OpenSans-Bold'] text-[#62A856]"
          style={{fontSize: Math.floor(SizeConfig.textMultiplier * 3)}}>
          Clientes
        </Text>
        <View className="relative mx-10 mt-7 h-10 w-[90%] items-end justify-center rounded-[8px] border-[1px] border-solid border-[#A4A6AC] pr-[10px]">
          <TextInput
            className="absolute w-full font-['OpenSans-Regular'] text-[#404040]"
            placeholderTextColor="#A4A6AC"
            placeholder="Digite o nome do cliente"
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}
            value={clientNameToSearch}
            onChangeText={name => setClientNameToSearch(name)}
          />
          <Icon
            className="absolute mr-4"
            name="search-outline"
            size={24}
            color="#A4A6AC"
          />
        </View>
        <View className="mt-7 w-[90%] rounded-[8px] bg-[#FFFFFF] py-4">
          <Text
            className="pl-4 font-['OpenSans-Bold'] text-[#AFDA51]"
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
            Um nome aleatório aqui
          </Text>
          <View className="mt-3 flex w-[95%] flex-row gap-x-2 pl-4">
            <Text
              className="font-['OpenSans-Bold'] text-[#404040]"
              style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
              CPF:
            </Text>
            <Text
              className="font-['OpenSans-Regular'] text-[#404040]"
              style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
              12345678901
            </Text>
          </View>
          <View className="mt-3 flex w-[95%] flex-row gap-x-2 pl-4">
            <Text
              className="font-['OpenSans-Bold'] text-[#404040]"
              style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
              E-mail:
            </Text>
            <Text
              className="font-['OpenSans-Regular'] text-[#404040]"
              style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
              email@temporario.com
            </Text>
          </View>
          <View className="mt-3 flex w-[95%] flex-row justify-between pl-4">
            <Text
              className="font-['OpenSans-Bold'] text-[#AFDA51]"
              style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
              Valor total:
            </Text>
            <Text
              className="font-['OpenSans-Bold'] text-[#404040]"
              style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
              R$ 0.0
            </Text>
          </View>
        </View>
        <View className="mt-7 w-[90%] rounded-[8px] bg-[#FFFFFF] py-4">
          <Text
            className="pl-4 font-['OpenSans-Bold'] text-[#AFDA51]"
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
            Um nome aleatório aqui
          </Text>
          <View className="mt-3 flex w-[95%] flex-row gap-x-2 pl-4">
            <Text
              className="font-['OpenSans-Bold'] text-[#404040]"
              style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
              CPF:
            </Text>
            <Text
              className="font-['OpenSans-Regular'] text-[#404040]"
              style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
              12345678901
            </Text>
          </View>
          <View className="mt-3 flex w-[95%] flex-row gap-x-2 pl-4">
            <Text
              className="font-['OpenSans-Bold'] text-[#404040]"
              style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
              E-mail:
            </Text>
            <Text
              className="font-['OpenSans-Regular'] text-[#404040]"
              style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
              email@temporario.com
            </Text>
          </View>
          <View className="mt-3 flex w-[95%] flex-row justify-between pl-4">
            <Text
              className="font-['OpenSans-Bold'] text-[#AFDA51]"
              style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
              Valor total:
            </Text>
            <Text
              className="font-['OpenSans-Bold'] text-[#404040]"
              style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
              R$ 0.0
            </Text>
          </View>
        </View>
        <View className="mt-7 w-[90%] rounded-[8px] bg-[#FFFFFF] py-4">
          <Text
            className="pl-4 font-['OpenSans-Bold'] text-[#AFDA51]"
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
            Um nome aleatório aqui
          </Text>
          <View className="mt-3 flex w-[95%] flex-row gap-x-2 pl-4">
            <Text
              className="font-['OpenSans-Bold'] text-[#404040]"
              style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
              CPF:
            </Text>
            <Text
              className="font-['OpenSans-Regular'] text-[#404040]"
              style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
              12345678901
            </Text>
          </View>
          <View className="mt-3 flex w-[95%] flex-row gap-x-2 pl-4">
            <Text
              className="font-['OpenSans-Bold'] text-[#404040]"
              style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
              E-mail:
            </Text>
            <Text
              className="font-['OpenSans-Regular'] text-[#404040]"
              style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
              email@temporario.com
            </Text>
          </View>
          <View className="mt-3 flex w-[95%] flex-row justify-between pl-4">
            <Text
              className="font-['OpenSans-Bold'] text-[#AFDA51]"
              style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
              Valor total:
            </Text>
            <Text
              className="font-['OpenSans-Bold'] text-[#404040]"
              style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
              R$ 0.0
            </Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        className="absolute bottom-7 right-7 h-[60px] w-[60px] items-center justify-center rounded-[30px] bg-[#62A856]"
        onPress={navigateToAddClientScreen}>
        <Icon className="absolute mr-4" name="add" size={30} color="#FFFFFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
