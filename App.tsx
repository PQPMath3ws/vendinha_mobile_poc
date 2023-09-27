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

export type ClientDebt = {
  descricao: string;
  clienteId: number;
  dataPagamento: string | null;
  valor: number;
};

export type ClientInfos = {
  cpf: string;
  dataNascimento: Date | null;
  email: string;
  nome: string;
  dividas: Array<ClientDebt>;
};

export type SomeScreensProps = {
  ClientScreen: {
    client: ApiClientsType;
  };
  AddClientScreen: {
    debt: ClientDebt;
  };
  CreateDebtScreen: {
    client?: ApiClientsType;
    prevScreenRoute: string;
  };
  AllClientDebtsScreen: {
    debts: Array<ApiDebtsType>;
  };
};

export default function App(): ReactElement {
  return <MainStackNavigation />;
}
