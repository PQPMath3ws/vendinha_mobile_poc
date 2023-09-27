import {ClientDebt} from '../../App';

export function checkForEmptyFields(debtInfos: ClientDebt): boolean {
  if (debtInfos.descricao.length === 0 || debtInfos.descricao === '') {
    return false;
  }
  if (
    debtInfos.valor === 0 ||
    debtInfos.valor < 0 ||
    debtInfos.valor === null ||
    debtInfos.valor === undefined
  ) {
    return false;
  }
  return true;
}
