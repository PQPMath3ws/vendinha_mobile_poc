import {EventRegister} from 'react-native-event-listeners';

import {Api} from '../api/api';
import {ClientDebt} from '../../App';

export async function saveDebt(debtInfos: ClientDebt): Promise<number | null> {
  const result: any = await Api.saveDebt(debtInfos);

  if (result.status && result.message) {
    EventRegister.emit('canShowTheAlertModal', {
      canShowAlertModal: true,
      alertModalIsSuccess: false,
      alertModalMessage: 'Cliente salvo com sucesso!',
    });
    return null;
  } else {
    EventRegister.emit('canShowTheAlertModal', {
      canShowAlertModal: true,
      alertModalIsSuccess: true,
      alertModalMessage: 'Dívida salva com sucesso!',
    });
    return result.id;
  }
}
