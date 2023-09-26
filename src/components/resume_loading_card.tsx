import React, {ReactElement} from 'react';
import {View} from 'react-native';
import {FadeLoading} from 'react-native-fade-loading';

import {SizeConfig} from '../config/size_config';

export default function ResumeLoadingCard(): ReactElement {
  return (
    <View className="mt-7 w-[90%] rounded-[8px] bg-[#FFFFFF] py-4">
      <FadeLoading
        animated={true}
        style={{
          width: SizeConfig.widthMultiplier * 40,
          height: SizeConfig.heightMultiplier * 2,
          marginLeft: SizeConfig.widthMultiplier * 4,
        }}
        visible={true}
        duration={1500}
      />
      <View className="mt-4 flex w-[95%] flex-row justify-between">
        <FadeLoading
          animated={true}
          style={{
            width: SizeConfig.widthMultiplier * 10,
            height: SizeConfig.heightMultiplier * 1.8,
            marginLeft: SizeConfig.widthMultiplier * 4,
          }}
          visible={true}
          duration={1500}
        />
        <FadeLoading
          animated={true}
          style={{
            width: SizeConfig.widthMultiplier * 14,
            height: SizeConfig.heightMultiplier * 1.8,
          }}
          visible={true}
          duration={1500}
        />
      </View>
      <View className="mt-4 flex w-[95%] flex-row justify-between">
        <FadeLoading
          animated={true}
          style={{
            width: SizeConfig.widthMultiplier * 10,
            height: SizeConfig.heightMultiplier * 1.8,
            marginLeft: SizeConfig.widthMultiplier * 4,
          }}
          visible={true}
          duration={1500}
        />
        <FadeLoading
          animated={true}
          style={{
            width: SizeConfig.widthMultiplier * 14,
            height: SizeConfig.heightMultiplier * 1.8,
          }}
          visible={true}
          duration={1500}
        />
      </View>
    </View>
  );
}
