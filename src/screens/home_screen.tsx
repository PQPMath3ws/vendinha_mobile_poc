import React, {ReactElement, useEffect, useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Api} from '../api/api';
import {SizeConfig} from '../config/size_config';
import ResumeCard from '../components/resume_card';
import ResumeLoadingCard from '../components/resume_loading_card';

export default function HomeScreen(): ReactElement {
  const [debts, setDebts] = useState<any>(null);

  async function getDebts() {
    const response: any = await Api.getAllDebts();
    setDebts(response.d.results);
  }

  useEffect(() => {
    getDebts();
  }, []);

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
        {debts ? (
          <>
            <ResumeCard
              title="Dívidas em aberto"
              qtde={debts
                .filter(
                  (debt: any) =>
                    debt.dataPagamento === null ||
                    debt.dataPagamento === undefined,
                )
                .length.toString()}
              totalValue={debts
                .filter(
                  (debt: any) =>
                    debt.dataPagamento === null ||
                    debt.dataPagamento === undefined,
                )
                .reduce(
                  (initialValue: any, currentValue: any) =>
                    initialValue + currentValue.valor,
                  0,
                )
                .toFixed(2)
                .toString()
                .replace('.', ',')}
            />
            <ResumeCard
              title="Dívidas pagas"
              qtde={debts
                .filter(
                  (debt: any) =>
                    debt.dataPagamento !== null &&
                    debt.dataPagamento !== undefined,
                )
                .length.toString()}
              totalValue={debts
                .filter(
                  (debt: any) =>
                    debt.dataPagamento !== null &&
                    debt.dataPagamento !== undefined,
                )
                .reduce(
                  (initialValue: any, currentValue: any) =>
                    initialValue + currentValue.valor,
                  0,
                )
                .toFixed(2)
                .toString()
                .replace('.', ',')}
            />
            <ResumeCard
              title="Dívidas cadastradas"
              qtde={debts.length.toString()}
              totalValue={debts
                .reduce(
                  (initialValue: any, currentValue: any) =>
                    initialValue + currentValue.valor,
                  0,
                )
                .toFixed(2)
                .toString()
                .replace('.', ',')}
            />
          </>
        ) : (
          <>
            <ResumeLoadingCard />
            <ResumeLoadingCard />
            <ResumeLoadingCard />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
