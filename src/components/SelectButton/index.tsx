import React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { colors, fonts } from '../../global';

interface CategoryButtonProps extends RectButtonProps {
    name: string;
    typeIcon: 'Ionicons' | 'Feather';
    active?: boolean;
}

export function SelectButton({
  name,
  typeIcon,
  active = false,
  ...rest
}: CategoryButtonProps) {
  return (
    <RectButton
      style={[
        styles.container,
        active && styles.containerActive
      ]}
      {...rest}
    >
      {
       typeIcon === 'Ionicons' ? (
        <Ionicons
          style={[styles.iconColor, active && styles.iconColorActive]}
          name={name}
          {...rest}
        />
       ) : (
        <Feather
          style={[styles.iconColor, active && styles.iconColorActive]}
          name={name}
          {...rest}
        />
       )
      }
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.square,
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  containerActive: {
    fontFamily: fonts.heading,
    color: colors.blue,
    backgroundColor: colors.blue_light,
  },
  iconColor: {
    color: colors.title,
  },
  iconColorActive: {
    color: colors.white,
  },
});