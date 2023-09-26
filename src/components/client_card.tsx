import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {ReactElement} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {SizeConfig} from '../config/size_config';

export default function ClientCard({
  client,
  navigation,
}: {
  client: any;
  navigation: NativeStackNavigationProp<ParamListBase, 'ClientsScreen'>;
}): ReactElement {
  function navigateToClientDetailsPage() {
    navigation.navigate('ClientScreen', {client: client});
  }

  return (
    <TouchableOpacity
      key={client.cpf}
      className="mt-7 w-[90%] rounded-[8px] bg-[#FFFFFF] py-4"
      onPress={navigateToClientDetailsPage}>
      <Text
        className="pl-4 font-['OpenSans-Bold'] text-[#AFDA51]"
        style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
        {client.nome}
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
          {client.cpf}
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
          {client.email}
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
          R${' '}
          {client.dividas
            .reduce(
              (initialValue, currentValue) => initialValue + currentValue.valor,
              0,
            )
            .toFixed(2)
            .replace('.', ',')}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
