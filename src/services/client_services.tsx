import {EventRegister} from 'react-native-event-listeners';

import {Api} from '../api/api';
import {
  validateCpf,
  validateEmail,
  validateNome,
} from '../validators/client_validators';
import {ClientInfos} from '../../App';

export async function saveClient(client: ClientInfos): Promise<number | null> {
  if (
    validateNome(client.nome) &&
    validateCpf(client.cpf) &&
    validateEmail(client.email)
  ) {
    const result: any = await Api.saveClient(client);

    if (result.status && result.message) {
      if (result.message.split(' ').length === 1) {
        EventRegister.emit('canShowTheAlertModal', {
          canShowAlertModal: true,
          alertModalIsSuccess: false,
          alertModalMessage: `Insira um ${result.message} válido e tente novamente!`,
        });
      } else {
        EventRegister.emit('canShowTheAlertModal', {
          canShowAlertModal: true,
          alertModalIsSuccess: false,
          alertModalMessage: 'Erro desconhecido. Tente novamente mais tarde!',
        });
      }
      return null;
    } else {
      EventRegister.emit('canShowTheAlertModal', {
        canShowAlertModal: true,
        alertModalIsSuccess: true,
        alertModalMessage: 'Cliente salvo com sucesso!',
      });
      return result.id;
    }
  } else {
    if (!validateNome(client.nome)) {
      EventRegister.emit('canShowTheAlertModal', {
        canShowAlertModal: true,
        alertModalIsSuccess: false,
        alertModalMessage: 'Digite um nome válido e tente novamente!',
      });
    } else if (!validateCpf(client.cpf)) {
      EventRegister.emit('canShowTheAlertModal', {
        canShowAlertModal: true,
        alertModalIsSuccess: false,
        alertModalMessage: 'Digite um CPF válido e tente novamente!',
      });
    } else if (!validateEmail(client.email)) {
      EventRegister.emit('canShowTheAlertModal', {
        canShowAlertModal: true,
        alertModalIsSuccess: false,
        alertModalMessage: 'Digite um email válido e tente novamente!',
      });
    }
    return null;
  }
}
