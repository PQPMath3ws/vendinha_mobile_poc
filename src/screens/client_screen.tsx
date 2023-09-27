import {ParamListBase, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {ReactElement} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import DebtCard from '../components/debt_card';

import {SomeScreensProps} from '../../App';

import {SizeConfig} from '../config/size_config';

export default function ClientScreen({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<ParamListBase, 'ClientScreen'>;
  route: RouteProp<SomeScreensProps, 'ClientScreen'>;
}): ReactElement {
  function navigateBackToClientsScreen(): void {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'ClientsScreen',
        },
      ],
    });
  }

  function navigateToAllClientDebtsScreen() {
    navigation.navigate('AllClientDebtsScreen', {
      debts: route.params.client.dividas,
    });
  }

  function navigateToCreateDebtScreen() {
    navigation.navigate('CreateDebtScreen', {
      client: {
        id: route.params.client.id,
        ultimaAlteracao: route.params.client.ultimaAlteracao,
        criadoEm: route.params.client.criadoEm,
        nome: route.params.client.nome,
        email: route.params.client.email,
        cpf: route.params.client.cpf,
        dataNascimento: route.params.client.dataNascimento
          ? new Date(route.params.client.dataNascimento).getTime()
          : new Date().getTime(),
        dividas: route.params.client.dividas,
      },
      prevScreenRoute: 'ClientScreen',
    });
  }

  return (
    <SafeAreaView className="relative h-full w-full bg-[#FAFAFA] pb-6">
      <ScrollView
        className="mt-6"
        contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
        <Text
          className="font-['OpenSans-Bold'] text-[#62A856]"
          style={{fontSize: Math.floor(SizeConfig.textMultiplier * 3)}}>
          Clientes
        </Text>
        <TouchableOpacity
          className="absolute left-8 h-[30px] w-[30px] items-center justify-center rounded-[8px] border-[2px] border-solid border-[#62A856]"
          onPress={navigateBackToClientsScreen}>
          <Icon
            className="absolute"
            name="arrow-back"
            size={15}
            color="#62A856"
          />
        </TouchableOpacity>
        <View className="w-[90%]">
          <Text
            className="mt-7 font-['OpenSans-SemiBold'] text-[#62A856]"
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
            Nome
          </Text>
          <Text
            className="mt-4 font-['OpenSans-Regular'] text-[#404040]"
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
            {route.params.client.nome}
          </Text>
          <View className="flex flex-row">
            <View className="w-[50%]">
              <Text
                className="mt-4 font-['OpenSans-SemiBold'] text-[#62A856]"
                style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
                CPF
              </Text>
              <Text
                className="mt-4 font-['OpenSans-Regular'] text-[#404040]"
                style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
                {route.params.client.cpf.replace(
                  /(\d{3})(\d{3})(\d{3})(\d{2})/,
                  '$1.$2.$3-$4',
                )}
              </Text>
            </View>
            <View className="w-[50%]">
              <Text
                className="mt-4 font-['OpenSans-SemiBold'] text-[#62A856]"
                style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
                Nascimento
              </Text>
              <Text
                className="mt-4 font-['OpenSans-Regular'] text-[#404040]"
                style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
                {new Date(
                  route.params.client.dataNascimento,
                ).toLocaleDateString()}
              </Text>
            </View>
          </View>
          <Text
            className="mt-4 font-['OpenSans-SemiBold'] text-[#62A856]"
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
            Email
          </Text>
          <Text
            className="mt-4 font-['OpenSans-Regular'] text-[#404040]"
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
            {route.params.client.email}
          </Text>
          <View className="flex flex-row justify-between">
            <Text
              className="mt-7 font-['OpenSans-Bold'] text-[#62A856]"
              style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
              Dívidas
            </Text>
            <TouchableOpacity onPress={navigateToAllClientDebtsScreen}>
              <Text
                className="mt-7 border-b-2 border-solid border-b-[#62A856] pb-1 font-['OpenSans-Bold'] text-[#62A856]"
                style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
                Ver todas
              </Text>
            </TouchableOpacity>
          </View>
          {route.params.client.dividas &&
          route.params.client.dividas.length === 0 ? (
            <View className="mt-20 items-center">
              <Text
                className="font-['OpenSans-Regular'] text-black"
                style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
                Cliente não possui dívidas.
              </Text>
            </View>
          ) : (
            route.params.client.dividas
              .sort((a, b) =>
                (a.dataPagamento === null || a.dataPagamento === undefined) &&
                b.dataPagamento !== null &&
                b.dataPagamento !== undefined
                  ? -1
                  : a.dataPagamento !== null && a.dataPagamento !== undefined
                  ? 1
                  : 0,
              )
              .slice(0, 3)
              .map((debt: any) => <DebtCard key={debt.id} debt={debt} />)
          )}
        </View>
      </ScrollView>
      {route.params.client.dividas.filter(
        (debt: any) =>
          debt.dataPagamento === null || debt.dataPagamento === undefined,
      ).length === 0 && (
        <TouchableOpacity
          className="absolute bottom-32 right-7 h-[60px] w-[60px] items-center justify-center rounded-[30px] bg-[#62A856]"
          onPress={navigateToCreateDebtScreen}>
          <Icon
            className="absolute mr-4"
            name="add"
            size={30}
            color="#FFFFFF"
          />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}
