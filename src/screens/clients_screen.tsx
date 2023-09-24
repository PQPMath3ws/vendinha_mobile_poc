import React, {ReactElement, useState} from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ClientsScreen(): ReactElement {
  const [clientNameToSearch, setClientNameToSearch] = useState('');

  return (
    <SafeAreaView className="h-full w-full bg-[#FAFAFA] pb-7 relative">
      <ScrollView
        className="mt-6"
        contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
        <Text className="font-['OpenSans-Bold'] text-[6vw] text-[#62A856]">
          Clientes
        </Text>
        <View className="relative mx-10 mt-7 h-10 w-[90%] items-end justify-center rounded-[8px] border-[1px] border-solid border-[#A4A6AC] pr-[10px]">
          <TextInput
            className="absolute w-full font-['OpenSans-Regular'] text-[4vw] text-[#404040]"
            placeholderTextColor="#A4A6AC"
            placeholder="Digite o nome do cliente"
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
          <Text className="pl-4 font-['OpenSans-Bold'] text-[5vw] text-[#AFDA51]">
            Um nome aleatório aqui
          </Text>
          <View className="mt-3 flex w-[95%] flex-row gap-x-2 pl-4">
            <Text className="font-['OpenSans-Bold'] text-[4vw] text-[#404040]">
              CPF:
            </Text>
            <Text className="font-['OpenSans-Regular'] text-[4vw] text-[#404040]">
              12345678901
            </Text>
          </View>
          <View className="mt-3 flex w-[95%] flex-row gap-x-2 pl-4">
            <Text className="font-['OpenSans-Bold'] text-[4vw] text-[#404040]">
              E-mail:
            </Text>
            <Text className="font-['OpenSans-Regular'] text-[4vw] text-[#404040]">
              email@temporario.com
            </Text>
          </View>
          <View className="mt-3 flex w-[95%] flex-row justify-between pl-4">
            <Text className="font-['OpenSans-Bold'] text-[5vw] text-[#AFDA51]">
              Valor total:
            </Text>
            <Text className="font-['OpenSans-Bold'] text-[5vw] text-[#404040]">
              R$ 0.0
            </Text>
          </View>
        </View>
        <View className="mt-7 w-[90%] rounded-[8px] bg-[#FFFFFF] py-4">
          <Text className="pl-4 font-['OpenSans-Bold'] text-[5vw] text-[#AFDA51]">
            Um nome aleatório aqui
          </Text>
          <View className="mt-3 flex w-[95%] flex-row gap-x-2 pl-4">
            <Text className="font-['OpenSans-Bold'] text-[4vw] text-[#404040]">
              CPF:
            </Text>
            <Text className="font-['OpenSans-Regular'] text-[4vw] text-[#404040]">
              12345678901
            </Text>
          </View>
          <View className="mt-3 flex w-[95%] flex-row gap-x-2 pl-4">
            <Text className="font-['OpenSans-Bold'] text-[4vw] text-[#404040]">
              E-mail:
            </Text>
            <Text className="font-['OpenSans-Regular'] text-[4vw] text-[#404040]">
              email@temporario.com
            </Text>
          </View>
          <View className="mt-3 flex w-[95%] flex-row justify-between pl-4">
            <Text className="font-['OpenSans-Bold'] text-[5vw] text-[#AFDA51]">
              Valor total:
            </Text>
            <Text className="font-['OpenSans-Bold'] text-[5vw] text-[#404040]">
              R$ 0.0
            </Text>
          </View>
        </View>
        <View className="mt-7 w-[90%] rounded-[8px] bg-[#FFFFFF] py-4">
          <Text className="pl-4 font-['OpenSans-Bold'] text-[5vw] text-[#AFDA51]">
            Um nome aleatório aqui
          </Text>
          <View className="mt-3 flex w-[95%] flex-row gap-x-2 pl-4">
            <Text className="font-['OpenSans-Bold'] text-[4vw] text-[#404040]">
              CPF:
            </Text>
            <Text className="font-['OpenSans-Regular'] text-[4vw] text-[#404040]">
              12345678901
            </Text>
          </View>
          <View className="mt-3 flex w-[95%] flex-row gap-x-2 pl-4">
            <Text className="font-['OpenSans-Bold'] text-[4vw] text-[#404040]">
              E-mail:
            </Text>
            <Text className="font-['OpenSans-Regular'] text-[4vw] text-[#404040]">
              email@temporario.com
            </Text>
          </View>
          <View className="mt-3 flex w-[95%] flex-row justify-between pl-4">
            <Text className="font-['OpenSans-Bold'] text-[5vw] text-[#AFDA51]">
              Valor total:
            </Text>
            <Text className="font-['OpenSans-Bold'] text-[5vw] text-[#404040]">
              R$ 0.0
            </Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity className="bg-[#62A856] w-[60px] h-[60px] rounded-[30px] absolute justify-center items-center bottom-7 right-7">
        <Icon className="absolute mr-4" name="add" size={30} color="#FFFFFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
