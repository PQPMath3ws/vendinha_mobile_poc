import React, {ReactElement} from 'react';
import {View} from 'react-native';
import {FadeLoading} from 'react-native-fade-loading';

import {SizeConfig} from '../config/size_config';

export default function ClientLoadingCard(): ReactElement {
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
      <FadeLoading
        animated={true}
        style={{
          width: SizeConfig.widthMultiplier * 30,
          height: SizeConfig.heightMultiplier * 1.8,
          marginTop: SizeConfig.heightMultiplier * 2,
          marginLeft: SizeConfig.widthMultiplier * 4,
        }}
        visible={true}
        duration={1500}
      />
      <FadeLoading
        animated={true}
        style={{
          width: SizeConfig.widthMultiplier * 35,
          height: SizeConfig.heightMultiplier * 1.8,
          marginTop: SizeConfig.heightMultiplier * 2,
          marginLeft: SizeConfig.widthMultiplier * 4,
        }}
        visible={true}
        duration={1500}
      />
      <View className="mt-4 flex w-[95%] flex-row justify-between">
        <FadeLoading
          animated={true}
          style={{
            width: SizeConfig.widthMultiplier * 20,
            height: SizeConfig.heightMultiplier * 2,
            marginLeft: SizeConfig.widthMultiplier * 4,
          }}
          visible={true}
          duration={1500}
        />
        <FadeLoading
          animated={true}
          style={{
            width: SizeConfig.widthMultiplier * 20,
            height: SizeConfig.heightMultiplier * 2,
          }}
          visible={true}
          duration={1500}
        />
      </View>
    </View>
  );
}
