import React, {ReactElement} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';

import {Api} from '../api/api';
import {SizeConfig} from '../config/size_config';

export default function PayDebtAlertModal({
  visible,
  setVisible,
  dividaId,
}: {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  dividaId: number;
}): ReactElement {
  async function payUserDebt() {
    if (dividaId) {
      const result: any = await Api.payDebt(dividaId);
      setVisible(false);
      if (result.status && result.message) {
        EventRegister.emit('canShowTheAlertModal', {
          canShowAlertModal: true,
          alertModalIsSuccess: false,
          alertModalMessage: result.message,
        });
      } else {
        EventRegister.emit('canShowTheAlertModal', {
          canShowAlertModal: true,
          alertModalIsSuccess: true,
          alertModalMessage: 'A dívida do cliente foi paga com sucesso!',
        });
      }

      EventRegister.emit('updateInfos', {
        canUpdate: true,
      });
    } else {
      EventRegister.emit('canShowTheAlertModal', {
        canShowAlertModal: true,
        alertModalIsSuccess: false,
        alertModalMessage:
          'Salve o cliente antes de atualizar o estado de sua dívida!',
      });
    }
  }

  return (
    <View
      className={`absolute ${
        visible ? '' : 'hidden'
      } h-full w-full items-center justify-center bg-[#0000006F]`}>
      <View className="w-[86%] items-center rounded-[12px] bg-[#E8E8E8] py-8">
        <Text
          className="w-[80%] text-center font-['OpenSans-Bold'] text-[#000000]"
          style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.2)}}>
          Ao confirmar, essa dívida será quitada. Deseja realmente confirmar?
        </Text>
        <View className="mt-8 flex flex-row items-center">
          <TouchableOpacity className="rounded-[10px] border-[1px] border-solid border-[#62A856] bg-[#E8E8E8] px-3 py-2">
            <Text
              className="font-['OpenSans-Bold'] text-[#62A856]"
              onPress={() => setVisible(false)}
              style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
              Cancelar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="ml-5 rounded-[10px] bg-[#62A856] px-3 py-2">
            <Text
              className="font-['OpenSans-Bold'] text-white"
              onPress={payUserDebt}
              style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
              Salvar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
