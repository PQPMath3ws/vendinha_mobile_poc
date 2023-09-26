import {ParamListBase, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {ReactElement, useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import {SomeScreensProps} from '../../App';

import DebtCard from '../components/debt_card';

import {SizeConfig} from '../config/size_config';

export default function AllClientDebtsScreen({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<ParamListBase, 'AllClientDebtsScreen'>;
  route: RouteProp<SomeScreensProps, 'AllClientDebtsScreen'>;
}): ReactElement {
  const [canPayTheDebt, setCanPayTheDebt] = useState(false);

  function navigateBackToClientScreen() {
    navigation.goBack();
  }

  useEffect(() => {
    console.log('ok');
    setCanPayTheDebt(
      route.params.debts.filter(
        debt => debt.dataPagamento === null || debt.dataPagamento === undefined,
      ).length > 0,
    );
  }, [route.params.debts, canPayTheDebt]);

  return (
    <SafeAreaView
      className="relative h-full w-full bg-[#FAFAFA]"
      style={{paddingBottom: Math.floor(SizeConfig.heightMultiplier * 12)}}>
      <ScrollView
        className="relative mt-6"
        contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
        <Text
          className="mb-3 font-['OpenSans-Bold'] text-[#62A856]"
          style={{fontSize: Math.floor(SizeConfig.textMultiplier * 3)}}>
          Listagem de Dívidas
        </Text>
        <TouchableOpacity
          className="absolute left-8 h-[30px] w-[30px] items-center justify-center rounded-[8px] border-[2px] border-solid border-[#62A856]"
          onPress={navigateBackToClientScreen}>
          <Icon
            className="absolute"
            name="arrow-back"
            size={15}
            color="#62A856"
          />
        </TouchableOpacity>
        <View className="w-[90%]">
          {route.params.debts.length === 0 ? (
            <View className="mt-8 items-center">
              <Text
                className="font-['OpenSans-Regular'] text-black"
                style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
                Cliente não possui dívidas.
              </Text>
            </View>
          ) : (
            route.params.debts
              .sort((a, b) =>
                (a.dataPagamento === null || a.dataPagamento === undefined) &&
                b.dataPagamento !== null &&
                b.dataPagamento !== undefined
                  ? -1
                  : a.dataPagamento !== null && a.dataPagamento !== undefined
                  ? 1
                  : 0,
              )
              .map((debt: any) => <DebtCard key={debt.id} debt={debt} />)
          )}
        </View>
      </ScrollView>
      <View className="absolute bottom-4 w-full items-center">
        <View className="flex w-[90%] flex-row justify-between">
          <Text
            className="mb-3 font-['OpenSans-SemiBold'] text-[#404040]"
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
            Listagem de Dívidas
          </Text>
          <Text
            className="mb-3 font-['OpenSans-Regular'] text-[#404040]"
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
            R${' '}
            {route.params.debts
              .filter(
                debt =>
                  debt.dataPagamento === null ||
                  debt.dataPagamento === undefined,
              )
              .reduce(
                (initialValue, currentValue) =>
                  initialValue + currentValue.valor,
                0,
              )
              .toFixed(2)
              .toString()
              .replace('.', ',')}
          </Text>
        </View>
        <View className="mt-2 justify-center">
          <TouchableOpacity
            className={`rounded-[10px] ${
              canPayTheDebt ? 'bg-[#62A856]' : 'bg-[#E8E8E8]'
            } px-3 py-2`}
            disabled={!canPayTheDebt}>
            <Text
              className="font-['OpenSans-Bold'] text-white"
              style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
              Pagar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
