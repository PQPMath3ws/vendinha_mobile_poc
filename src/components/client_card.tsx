import React, {ReactElement} from 'react';
import {Text, View} from 'react-native';

import {SizeConfig} from '../config/size_config';

export default function ClientCard({client}: {client: any}): ReactElement {
  return (
    <View
      key={client.cpf}
      className="mt-7 w-[90%] rounded-[8px] bg-[#FFFFFF] py-4">
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
          R$ {client.valorDividas.toFixed(2).replace('.', ',')}
        </Text>
      </View>
    </View>
  );
}
