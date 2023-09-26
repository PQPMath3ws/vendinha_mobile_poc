import {ParamListBase, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {ReactElement, useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import {SomeScreensProps} from '../../App';

import {SizeConfig} from '../config/size_config';
import ClientCard from '../components/client_card';

export default function ClientsScreen({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<ParamListBase, 'ClientsScreen'>;
  route: RouteProp<SomeScreensProps, 'ClientsScreen'>;
}): ReactElement {
  const [clientNameToSearch, setClientNameToSearch] = useState('');
  const [clientsList, setClientsList] = useState([]);

  function fillClientsList() {
    const clients: any = route.params.clients.map(client => {
      client.valorDividas = route.params.debts
        .filter(
          debt =>
            debt.cliente.cpf === client.cpf &&
            debt.cliente.nome === client.nome,
        )
        .reduce(
          (initialValue, currentValue) => initialValue + currentValue.valor,
          0,
        );
      return client;
    });
    setClientsList(clients);
  }

  useEffect(() => {
    fillClientsList();
  }, []);

  function navigateToAddClientScreen() {
    navigation.navigate('AddClientScreen');
  }

  const clientsToShow = () =>
    clientsList
      .filter(client =>
        clientNameToSearch.length > 0 && clientNameToSearch !== ''
          ? client.nome.toLowerCase().includes(clientNameToSearch.toLowerCase())
          : true,
      )
      .sort((a, b) =>
        a.valorDividas > b.valorDividas
          ? -1
          : a.valorDividas < b.valorDividas
          ? 1
          : 0,
      );

  return (
    <SafeAreaView className="relative h-full w-full bg-[#FAFAFA] pb-7">
      <ScrollView
        className="mt-6"
        contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
        <Text
          className="font-['OpenSans-Bold'] text-[#62A856]"
          style={{fontSize: Math.floor(SizeConfig.textMultiplier * 3)}}>
          Clientes
        </Text>
        <View className="relative mx-10 mt-7 h-10 w-[90%] items-end justify-center rounded-[8px] border-[1px] border-solid border-[#A4A6AC] pr-[10px]">
          <TextInput
            className="absolute w-full font-['OpenSans-Regular'] text-[#404040]"
            placeholderTextColor="#A4A6AC"
            placeholder="Digite o nome do cliente"
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2)}}
            value={clientNameToSearch}
            onChangeText={name => setClientNameToSearch(name)}
          />
          <Icon
            className="absolute mr-4"
            name="search-outline"
            size={24}
            color="#A4A6AC"
          />
        </View>
        {clientsToShow().map(client => (
          <ClientCard
            key={client.nome + '_' + client.cpf + '_' + client.criadoEm}
            client={client}
          />
        ))}
      </ScrollView>
      <TouchableOpacity
        className="absolute bottom-7 right-7 h-[60px] w-[60px] items-center justify-center rounded-[30px] bg-[#62A856]"
        onPress={navigateToAddClientScreen}>
        <Icon className="absolute mr-4" name="add" size={30} color="#FFFFFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
