import React, {ReactElement} from 'react';

import MainStackNavigation from './src/config/navigator';

type ApiClientsType = {
  id: number;
  ultimaAlteracao: string;
  criadoEm: string;
  nome: string;
  email: string;
  cpf: string;
  dataNascimento: string;
  dividas?: Object;
};

type ApiDebtsType = {
  cliente: ApiClientsType;
  id: number;
  ultimaAlteracao: string;
  criadoEm: string;
  valor: number;
  dataPagamento?: string;
  descricao: string;
};

export type ClientInfos = {
  cpf: string;
  dateOfBirth: Date | null;
  email: string;
  name: string;
};

export type SomeScreensProps = {
  HomeScreen: {
    debts: Array<ApiDebtsType>;
  };
  ClientScreen: {
    client: ApiClientsType;
  };
  ClientsScreen: {
    clients: Array<ApiClientsType>;
    debts: Array<ApiDebtsType>;
  };
  AddClientScreen: {
    cpf?: string;
    dateOfBirth?: number;
    email?: string;
    name?: string;
  };
  CreateDebtScreen: undefined;
  AllClientDebtsScreen: {
    debts: Array<ApiDebtsType>;
  };
};

export default function App(): ReactElement {
  return <MainStackNavigation />;
}
