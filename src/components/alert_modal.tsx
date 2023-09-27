import React, {ReactElement} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {SizeConfig} from '../config/size_config';

export default function AlertModal({
  visible,
  setVisible,
  isSuccess,
  message,
}: {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isSuccess: boolean;
  message: string;
}): ReactElement {
  return (
    <View
      className={`absolute ${
        visible ? '' : 'hidden'
      } h-full w-full items-center justify-center bg-[#0000006F]`}>
      <View className="w-[86%] items-center rounded-[12px] bg-[#E8E8E8] py-8">
        <Icon
          name={isSuccess ? 'checkmark-circle' : 'close-circle'}
          color={isSuccess ? '#62A856' : '#CE2929'}
          style={{fontSize: SizeConfig.textMultiplier * 12}}
        />
        <Text
          className="mt-6 w-[80%] text-center font-['OpenSans-SemiBold'] text-[#404040]"
          style={{fontSize: SizeConfig.textMultiplier * 2}}>
          {message}
        </Text>
        <TouchableOpacity
          className={`mt-10 rounded-[10px] ${
            isSuccess ? 'bg-[#62A856]' : 'bg-[#CE2929]'
          } px-3 py-2`}
          onPress={() => setVisible(false)}>
          <Text
            className="font-['OpenSans-Bold'] text-white"
            style={{fontSize: Math.floor(SizeConfig.textMultiplier * 2.4)}}>
            Fechar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
