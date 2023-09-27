import {ParamListBase, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {ReactElement, useEffect, useState} from 'react';
import {
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import {SizeConfig} from '../config/size_config';

import {checkForEmptyFields} from '../validators/debt_validators';
import {SomeScreensProps} from '../../App';
import { saveDebt } from '../services/debt_services';

type DebtFields = 'descricao' | 'dataPagamento' | 'valor';

export default function CreateDebtScreen({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<ParamListBase, 'CreateDebtScreen'>;
  route: RouteProp<SomeScreensProps, 'CreateDebtScreen'>;
}): ReactElement {
  const [debtInfos, setDebtInfos] = useState({
    descricao: '',
    dataPagamento: null,
    valor: '0',
  });
  const [canOpenTheModal, setCanOpenTheModal] = useState(false);
  const [canSaveTheDoubt, setCanSaveTheDoubt] = useState(false);

  function navigateBackToScreen(
    addDebtToClient: boolean,
    debtId: number | null,
  ) {
    if (route.params.prevScreenRoute === 'AddClientScreen') {
      navigation.navigate('AddClientScreen');
    } else {
      if (addDebtToClient) {
        route.params.client!.dividas.push({
          descricao: debtInfos.descricao,
          dataPagamento: debtInfos.dataPagamento
            ? debtInfos.dataPagamento.toISOString()
            : null,
          valor: Number(debtInfos.valor),
          cliente: {
            id: route.params.client?.id,
          },
          id: debtId,
        });
      }
      navigation.navigate('ClientScreen', {client: route.params.client});
    }
  }

  function getAndSetDebtInfos(
    name: DebtFields,
    value: string | Date | number | null,
  ) {
    const infos = {
      ...debtInfos,
      [`${name}`]: value,
    };
    setDebtInfos(infos);
    setCanSaveTheDoubt(
      checkForEmptyFields({
        descricao: infos.descricao,
        dataPagamento: infos.dataPagamento,
        valor: Number(infos.valor),
        clienteId: 0,
      }),
    );
  }

  async function tryToSaveNewDebt() {
    if (route.params.prevScreenRoute === 'AddClientScreen') {
      navigation.navigate('AddClientScreen', {
        debt: {
          descricao: debtInfos.descricao,
          dataPagamento: debtInfos.dataPagamento
            ? debtInfos.dataPagamento.toISOString()
            : null,
          valor: Number(debtInfos.valor),
        },
      });
    } else {
      const debt = {
        descricao: debtInfos.descricao,
        dataPagamento: debtInfos.dataPagamento
          ? debtInfos.dataPagamento.toISOString()
          : null,
        valor: Number(debtInfos.valor),
        clienteId: route.params.client!.id,
      };
      const result = await saveDebt(debt);
      navigateBackToScreen(true, result);
    }
  }

  useEffect(() => {
    setDebtInfos({
      descricao: '',
      dataPagamento: null,
      valor: '0',
    });
  }, []);

  return (
    <SafeAreaView className="relative h-full w-full bg-[#FAFAFA] pb-[100px]">
      <ScrollView
        className="relative mt-6"
        contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
        <Text
          className="font-['OpenSans-Bold'] text-[#62A856]"
          style={{fontSize: Math.floor(SizeConfig.textMultiplier * 3)}}>
          Nova dívida
        </Text>
        <TouchableOpacity
          className="absolute left-8 top-1 h-[30px] w-[30px] items-center justify-center rounded-[8px] border-[2px] border-solid border-[#62A856]"
          onPress={() => navigateBackToScreen(false, null)}>
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
          <TextInput
            className="mt-2 h-[40px] rounded-[8px] border-[1px] border-solid border-[#E8E8E8] pl-3 font-['OpenSans-Regular'] text-[#707070]"
            value={debtInfos.descricao}
            inputMode="text"
            onChangeText={descricao =>
              getAndSetDebtInfos('descricao', descricao)
            }
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}
          />
          <View className="flex flex-row">
            <View className="w-[50%]">
              <Text
                className="mt-4 font-['OpenSans-SemiBold'] text-[#62A856]"
                style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
                Data de criação
              </Text>
              <TextInput
                className="mt-2 h-[40px] w-[90%] rounded-[8px] border-[1px] border-solid border-[#E8E8E8] pl-3 font-['OpenSans-Regular'] text-[#707070]"
                focusable={false}
                onFocus={() => {
                  Keyboard.dismiss();
                }}
                value={new Date().toLocaleDateString()}
                style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}
              />
            </View>
            <View className="w-[50%]">
              <Text
                className="mt-4 font-['OpenSans-SemiBold'] text-[#62A856]"
                style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
                Valor
              </Text>
              <TextInput
                className="mt-2 h-[40px] rounded-[8px] border-[1px] border-solid border-[#E8E8E8] pl-3 font-['OpenSans-Regular'] text-[#707070]"
                value={`R$ ${
                  Number(debtInfos.valor) !== 0
                    ? debtInfos.valor.toString().replace('.', ',')
                    : ''
                }`}
                inputMode="numeric"
                onChangeText={valor =>
                  getAndSetDebtInfos(
                    'valor',
                    valor !== null &&
                      valor !== undefined &&
                      !isNaN(
                        Number(
                          valor
                            .replace('R$', '')
                            .replaceAll(' ', '')
                            .replace(',', '.'),
                        ),
                      )
                      ? valor
                          .replace('R$', '')
                          .replaceAll(' ', '')
                          .replace(',', '.')
                      : 0,
                  )
                }
                style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}
              />
            </View>
          </View>
          <Text
            className="mt-4 font-['OpenSans-SemiBold'] text-[#62A856]"
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
            Data do pagamento
          </Text>
          <TextInput
            className="mt-2 h-[40px] rounded-[8px] border-[1px] border-solid border-[#E8E8E8] pl-3 font-['OpenSans-Regular'] text-[#707070]"
            onFocus={() => {
              setCanOpenTheModal(true);
              Keyboard.dismiss();
            }}
            value={
              debtInfos.dataPagamento
                ? debtInfos.dataPagamento.toLocaleDateString()
                : ''
            }
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}
          />
        </View>
      </ScrollView>
      <View className="absolute bottom-5 flex w-full flex-row justify-center">
        <TouchableOpacity className="rounded-[10px] border-[1px] border-solid border-[#62A856] bg-white px-3 py-2">
          <Text
            className="font-['OpenSans-Bold'] text-[#62A856]"
            onPress={() => navigateBackToScreen(false, null)}
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
            Cancelar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`ml-5 rounded-[10px] ${
            canSaveTheDoubt ? 'bg-[#62A856]' : 'bg-[#E8E8E8]'
          } px-3 py-2`}
          onPress={tryToSaveNewDebt}
          disabled={!canSaveTheDoubt}>
          <Text
            className="font-['OpenSans-Bold'] text-white"
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
            Salvar
          </Text>
        </TouchableOpacity>
      </View>
      <DatePicker
        modal
        open={canOpenTheModal}
        mode="date"
        date={debtInfos.dataPagamento ? debtInfos.dataPagamento : new Date()}
        onConfirm={date => {
          getAndSetDebtInfos('dataPagamento', date);
          setCanOpenTheModal(false);
        }}
        onCancel={() => {
          getAndSetDebtInfos('dataPagamento', null);
          setCanOpenTheModal(false);
        }}
      />
    </SafeAreaView>
  );
}
