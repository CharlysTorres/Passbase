import React from 'react';
import {
  View,
  Text,
  Image,
  Animated
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { colors } from '../../global';
import { styles } from './styles';

interface AccountSelectProps extends RectButtonProps {
  img: string;
  login: string;
  account: string
  company?: string;
  password?: string;
  handleView: () => void;
  handleRemove?: () => void;
}

export function AccountList({
  img,
  login,
  account,
  company,
  password,
  handleView,
  handleRemove,
}: AccountSelectProps) {
  return (
    <Swipeable
      overshootLeft={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton
              style={styles.buttonView}
              onPress={handleView}
            >
              <Feather name="eye" size={24} color={colors.white} />
            </RectButton>
          </View>
        </Animated.View>
      )}
    >
      <RectButton
        style={styles.container}
      >
        <View style={styles.content}>
          <View style={styles.wrapper}>
            <Image
              style={styles.image}
              source={{ uri: img }}
              width={45}
              height={45}
            />
            <View style={styles.info}>
              <Text style={styles.account}>{account}</Text>
              <Text style={styles.login}>{login}</Text>
            </View>
          </View>
          <Feather
            size={32}
            style={styles.icon}
            name="chevron-right"
          />
        </View>
      </RectButton>
    </Swipeable>
  );
}