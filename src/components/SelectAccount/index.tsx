import React, { useRef } from 'react';
import { View, Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

interface AccountProps extends RectButtonProps {
  data: {
    img: string;
    category?: string;
  }
}

export function SelectAccount({
  data,
  ...rest
}: AccountProps) {

  return (
    <>
      <RectButton
        style={styles.container}
        {...rest}
      >
        <View>
          <Image
            style={styles.img}
            source={{uri: data.img}}
            width={70}
            height={60}
          />
        </View>
      </RectButton>
    </>
  );
}