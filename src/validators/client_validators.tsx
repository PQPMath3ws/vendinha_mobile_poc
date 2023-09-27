import {validate} from 'gerador-validador-cpf';

import {ClientInfos} from '../../App';

export function checkForEmptyFields(clientInfos: ClientInfos): boolean {
  if (clientInfos.cpf.length === 0 || clientInfos.cpf === '') {
    return false;
  }
  if (
    clientInfos.dataNascimento === null ||
    clientInfos.dataNascimento === undefined
  ) {
    return false;
  }
  if (clientInfos.email.length === 0 || clientInfos.email === '') {
    return false;
  }
  if (clientInfos.nome.length === 0 || clientInfos.nome === '') {
    return false;
  }
  return true;
}

export function validateNome(nome: string) {
  if (nome === null || nome === undefined || nome === '' || nome.length < 4) {
    return false;
  }
  return true;
}

export function validateCpf(cpf: string) {
  if (
    cpf === null ||
    cpf === undefined ||
    cpf.length !== 11 ||
    !validate(cpf)
  ) {
    return false;
  }
  return true;
}

export function validateEmail(email: string) {
  if (
    email === null ||
    email === undefined ||
    email.length < 12 ||
    email === '' ||
    !/^\w+([\.-]?\w+)*.{2,}@\w+([\.-]?\w+)*.{1,}(\.\w{2,3})+$/.test(email)
  ) {
    return false;
  }
  return true;
}
