import React, {ReactElement} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {SizeConfig} from '../config/size_config';

export default function DebtCard({debt}: {debt: any}): ReactElement {
  return (
    <View className="relative mt-5 w-full rounded-[8px] bg-[#FFFFFF] py-4">
      <Text
        className="ml-4 mt-1 font-['OpenSans-Bold'] text-[#AFDA51]"
        style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
        {debt.descricao}
      </Text>
      {debt.dataPagamento !== null && debt.dataPagamento !== undefined ? (
        <View className="absolute right-5 top-4">
          <Icon name="checkmark-circle-outline" color="#AFDA51" size={22} />
        </View>
      ) : (
        <TouchableOpacity className="absolute right-5 top-3 rounded-[10px] bg-[#CE2929] px-3 py-2">
          <Text
            className="font-['OpenSans-Bold'] text-white"
            style={{
              fontSize: Math.floor(SizeConfig.textMultiplier * 2),
            }}>
            Pagar
          </Text>
        </TouchableOpacity>
      )}
      <View className="mt-4 flex w-[95%] flex-row justify-between pl-4">
        <Text
          className="font-['OpenSans-Bold'] text-[#404040]"
          style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
          Valor da dívida:
        </Text>
        <Text
          className="font-['OpenSans-Bold'] text-[#707070]"
          style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
          R$ {debt.valor.toFixed(2).toString().replace('.', ',')}
        </Text>
      </View>
    </View>
  );
}
