import {RouteProp} from '@react-navigation/native';
import React, {ReactElement} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {SomeScreensProps} from '../../App';

import {SizeConfig} from '../config/size_config';
import ResumeCard from '../components/resume_card';

export default function HomeScreen({
  route,
}: {
  route: RouteProp<SomeScreensProps, 'HomeScreen'>;
}): ReactElement {
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
        <ResumeCard
          title="Dívidas em aberto"
          qtde={route.params.debts
            .filter(
              debt =>
                debt.dataPagamento === null || debt.dataPagamento === undefined,
            )
            .length.toString()}
          totalValue={route.params.debts
            .filter(
              debt =>
                debt.dataPagamento === null || debt.dataPagamento === undefined,
            )
            .reduce(
              (initialValue, currentValue) => initialValue + currentValue.valor,
              0,
            )
            .toFixed(2)
            .toString()
            .replace('.', ',')}
        />
        <ResumeCard
          title="Dívidas pagas"
          qtde={route.params.debts
            .filter(
              debt =>
                debt.dataPagamento !== null || debt.dataPagamento !== undefined,
            )
            .length.toString()}
          totalValue={route.params.debts
            .filter(
              debt =>
                debt.dataPagamento !== null || debt.dataPagamento !== undefined,
            )
            .reduce(
              (initialValue, currentValue) => initialValue + currentValue.valor,
              0,
            )
            .toFixed(2)
            .toString()
            .replace('.', ',')}
        />
        <ResumeCard
          title="Dívidas cadastradas"
          qtde={route.params.debts.length.toString()}
          totalValue={route.params.debts
            .reduce(
              (initialValue, currentValue) => initialValue + currentValue.valor,
              0,
            )
            .toFixed(2)
            .toString()
            .replace('.', ',')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
