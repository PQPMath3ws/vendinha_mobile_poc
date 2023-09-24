import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {ReactElement, useState} from 'react';
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

type ClientInfos = {
  cpf: string;
  dateOfBirth: Date | null;
  email: string;
  name: string;
};

type ClientFields = 'cpf' | 'dateOfBirth' | 'email' | 'name';

export default function AddClientScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<ParamListBase, 'AddClientScreen'>;
}): ReactElement {
  const [clientInfos, setClientInfos] = useState<ClientInfos>({
    cpf: '',
    dateOfBirth: null,
    email: '',
    name: '',
  });
  const [canOpenTheModal, setCanOpenTheModal] = useState<boolean>(false);
  const [canSaveTheClient, setCanSaveTheClient] = useState<boolean>(false);
  const [clientDebts, setClientDebts] = useState([]);

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

  function validateAllFields(infos: ClientInfos): boolean {
    if (
      infos.name === null ||
      infos.name === undefined ||
      infos.name === '' ||
      infos.name.length < 6
    ) {
      return false;
    }
    if (
      infos.cpf === null ||
      infos.cpf === undefined ||
      infos.cpf.length !== 11
    ) {
      return false;
    }
    if (
      infos.dateOfBirth === null ||
      infos.dateOfBirth === undefined ||
      infos.dateOfBirth >= new Date()
    ) {
      return false;
    }
    if (
      infos.email === null ||
      infos.email === undefined ||
      infos.email.length < 12 ||
      infos.email === '' ||
      !/^\w+([\.-]?\w+)*.{2,}@\w+([\.-]?\w+)*.{1,}(\.\w{2,3})+$/.test(
        infos.email,
      )
    ) {
      return false;
    }
    if (clientDebts.length === 0) {
      return false;
    }
    return true;
  }

  function verifyAndSetClientInfos(name: ClientFields, value: string | Date) {
    let canSaveInfos = true;
    if (name === 'cpf') {
      if (
        typeof value === 'string' &&
        value.length > 11 &&
        value !== clientInfos.cpf
      ) {
        canSaveInfos = false;
      }
    }
    if (canSaveInfos) {
      setClientInfos({
        ...clientInfos,
        [`${name}`]: value,
      });
    }
    const infosToCheck = {
      ...clientInfos,
      [`${name}`]: value,
    };
    setCanSaveTheClient(validateAllFields(infosToCheck));
  }

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
            value={clientInfos.name}
            inputMode="text"
            onChangeText={name => verifyAndSetClientInfos('name', name)}
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
                onChangeText={cpf => verifyAndSetClientInfos('cpf', cpf)}
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
                  clientInfos.dateOfBirth
                    ? clientInfos.dateOfBirth.toLocaleDateString()
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
            onChangeText={email => verifyAndSetClientInfos('email', email)}
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}
          />
          <Text
            className="mt-7 font-['OpenSans-Bold'] text-[#62A856]"
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
            Dívidas
          </Text>
          {clientDebts && clientDebts.length > 0 ? (
            <View className="relative mt-7 w-full rounded-[8px] bg-[#FFFFFF] py-4">
              <Text
                className="ml-4 mt-1 font-['OpenSans-Bold'] text-[#AFDA51]"
                style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
                Dívida 1
              </Text>
              <TouchableOpacity className="absolute right-5 top-4 rounded-[10px] bg-[#CE2929] px-3 py-2">
                <Text
                  className="font-['OpenSans-Bold'] text-white"
                  style={{
                    fontSize: Math.floor(SizeConfig.textMultiplier * 2),
                  }}>
                  Pagar
                </Text>
              </TouchableOpacity>
              <View className="mt-7 flex w-[95%] flex-row justify-between pl-4">
                <Text
                  className="font-['OpenSans-Bold'] text-[#404040]"
                  style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
                  Valor da dívida:
                </Text>
                <Text
                  className="font-['OpenSans-Bold'] text-[#707070]"
                  style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}>
                  R$ 250,00
                </Text>
              </View>
            </View>
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
          disabled={!canSaveTheClient}>
          <Text
            className="font-['OpenSans-Bold'] text-white"
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
            Salvar
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="absolute bottom-7 right-7 h-[60px] w-[60px] items-center justify-center rounded-[30px] bg-[#62A856]">
        <Icon className="absolute mr-4" name="add" size={30} color="#FFFFFF" />
      </TouchableOpacity>
      <DatePicker
        modal
        open={canOpenTheModal}
        mode="date"
        date={clientInfos.dateOfBirth ? clientInfos.dateOfBirth : new Date()}
        onConfirm={date => {
          verifyAndSetClientInfos('dateOfBirth', date);
          setCanOpenTheModal(false);
        }}
        onCancel={() => {
          setCanOpenTheModal(false);
        }}
      />
    </SafeAreaView>
  );
}
