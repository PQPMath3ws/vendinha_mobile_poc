import {ParamListBase, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {ReactElement, useEffect, useState} from 'react';
import {
  BackHandler,
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
import DebtCard from '../components/debt_card';
import {saveClient} from '../services/client_services';
import {saveDebt} from '../services/debt_services';
import {checkForEmptyFields} from '../validators/client_validators';
import {ClientInfos, SomeScreensProps} from '../../App';

type ClientFields = 'cpf' | 'dataNascimento' | 'email' | 'nome' | 'dividas';

export default function AddClientScreen({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<ParamListBase, 'AddClientScreen'>;
  route: RouteProp<SomeScreensProps, 'AddClientScreen'>;
}): ReactElement {
  const [clientInfos, setClientInfos] = useState<ClientInfos>({
    cpf: '',
    dataNascimento: null,
    email: '',
    nome: '',
    dividas: [],
  });
  const [canOpenTheModal, setCanOpenTheModal] = useState<boolean>(false);
  const [canSaveTheClient, setCanSaveTheClient] = useState<boolean>(false);

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

  function navigateToCreateDebtScreen() {
    navigation.navigate('CreateDebtScreen', {
      client: {
        cpf: clientInfos.cpf,
        dataNascimento: clientInfos.dataNascimento
          ? clientInfos.dataNascimento.getTime()
          : new Date().getTime(),
        email: clientInfos.email,
        nome: clientInfos.nome,
      },
      prevScreenRoute: 'AddClientScreen',
    });
  }

  function getAndSetClientInfos(name: ClientFields, value: string | Date) {
    const infos = {
      ...clientInfos,
      [`${name}`]: value,
    };
    setClientInfos(infos);
    setCanSaveTheClient(checkForEmptyFields(infos));
  }

  async function tryToSaveClient() {
    Keyboard.dismiss();

    const client: number | null = await saveClient(clientInfos);

    if (client) {
      if (clientInfos.dividas.length > 0) {
        const orderedDebtsArray = clientInfos.dividas.sort((a, b) =>
          (a.dataPagamento === null || a.dataPagamento === undefined) &&
          b.dataPagamento !== null &&
          b.dataPagamento !== undefined
            ? 1
            : a.dataPagamento !== null && a.dataPagamento !== undefined
            ? -1
            : 0,
        );
        orderedDebtsArray.forEach(async debt => {
          debt.clienteId = client;
          await saveDebt(debt);
        });
        navigateBackToClientsScreen();
      }
      navigateBackToClientsScreen();
    }
  }

  useEffect(() => {
    if (route.params) {
      let debts = clientInfos.dividas;
      if (route.params.debt) {
        debts.push(route.params.debt);
      }
      setClientInfos(prev => ({
        ...prev,
        dividas: debts,
      }));
    }

    const backPressedAction = () => {
      navigateBackToClientsScreen();
      return true;
    };

    const backPressedHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backPressedAction,
    );

    return () => backPressedHandler.remove();
  }, [route.params]);

  return (
    <SafeAreaView className="relative h-full w-full bg-[#FAFAFA] pb-[100px]">
      <ScrollView
        className="relative mt-6"
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
          <TextInput
            className="mt-2 h-[40px] rounded-[8px] border-[1px] border-solid border-[#E8E8E8] pl-3 font-['OpenSans-Regular'] text-[#707070]"
            value={clientInfos.nome}
            inputMode="text"
            onChangeText={nome => getAndSetClientInfos('nome', nome)}
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}
          />
          <View className="flex flex-row">
            <View className="w-[50%]">
              <Text
                className="mt-4 font-['OpenSans-SemiBold'] text-[#62A856]"
                style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
                CPF
              </Text>
              <TextInput
                className="mt-2 h-[40px] w-[90%] rounded-[8px] border-[1px] border-solid border-[#E8E8E8] pl-3 font-['OpenSans-Regular'] text-[#707070]"
                value={clientInfos.cpf}
                inputMode="numeric"
                onChangeText={cpf => getAndSetClientInfos('cpf', cpf)}
                style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}
              />
            </View>
            <View className="w-[50%]">
              <Text
                className="mt-4 font-['OpenSans-SemiBold'] text-[#62A856]"
                style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
                Nascimento
              </Text>
              <TextInput
                className="mt-2 h-[40px] rounded-[8px] border-[1px] border-solid border-[#E8E8E8] pl-3 font-['OpenSans-Regular'] text-[#707070]"
                onFocus={() => {
                  setCanOpenTheModal(true);
                  Keyboard.dismiss();
                }}
                value={
                  clientInfos.dataNascimento
                    ? clientInfos.dataNascimento.toLocaleDateString()
                    : ''
                }
                style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}
              />
            </View>
          </View>
          <Text
            className="mt-4 font-['OpenSans-SemiBold'] text-[#62A856]"
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
            Email
          </Text>
          <TextInput
            className="mt-2 h-[40px] rounded-[8px] border-[1px] border-solid border-[#E8E8E8] pl-3 font-['OpenSans-Regular'] text-[#707070]"
            value={clientInfos.email}
            autoComplete="off"
            inputMode="email"
            onChangeText={email => getAndSetClientInfos('email', email)}
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}
          />
          <Text
            className="mt-7 font-['OpenSans-Bold'] text-[#62A856]"
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
            Dívidas
          </Text>
          {clientInfos.dividas && clientInfos.dividas.length > 0 ? (
            clientInfos.dividas.map(divida => (
              <DebtCard
                key={divida.descricao + '_' + divida.valor}
                debt={divida}
              />
            ))
          ) : (
            <View className="mt-20 items-center">
              <Text
                className="font-['OpenSans-Regular'] text-black"
                style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
                Cliente não possui dívidas.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
      <View className="absolute bottom-5 flex w-full flex-row justify-center">
        <TouchableOpacity className="rounded-[10px] border-[1px] border-solid border-[#62A856] bg-white px-3 py-2">
          <Text
            className="font-['OpenSans-Bold'] text-[#62A856]"
            onPress={navigateBackToClientsScreen}
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
            Cancelar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`ml-5 rounded-[10px] ${
            canSaveTheClient ? 'bg-[#62A856]' : 'bg-[#E8E8E8]'
          } px-3 py-2`}
          onPress={tryToSaveClient}
          disabled={!canSaveTheClient}>
          <Text
            className="font-['OpenSans-Bold'] text-white"
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
            Salvar
          </Text>
        </TouchableOpacity>
      </View>
      {clientInfos.dividas &&
        clientInfos.dividas.filter(
          divida =>
            divida.dataPagamento === null || divida.dataPagamento === undefined,
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
      <DatePicker
        modal
        open={canOpenTheModal}
        mode="date"
        date={
          clientInfos.dataNascimento ? clientInfos.dataNascimento : new Date()
        }
        onConfirm={date => {
          getAndSetClientInfos('dataNascimento', date);
          setCanOpenTheModal(false);
        }}
        onCancel={() => {
          setCanOpenTheModal(false);
        }}
      />
    </SafeAreaView>
  );
}
