import React from 'react';
import styled from 'styled-components/native';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { colors, fonts } from '../../global';

type Props = RectButtonProps & {
  title: string;
  background?: string;
  width: number | string;
  fontSize?: number;
  height: number | string;
  isLoading?: boolean;
}

export function Button({ title, background, width, height, fontSize, isLoading = false, ...rest } : Props) {
  return (
    <RectButton
      style={[styles.container, {backgroundColor: background, width: width, height: height}]}
      activeOpacity={.7}
      enabled={!isLoading}
      {...rest}
    >
      <Text style={[styles.title, {fontSize: fontSize}]}>
        { isLoading ? <Load /> :  title }
      </Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    color: colors.blue
  },
  title: {
    fontSize: 18,
    color: colors.white,
    fontFamily: fonts.bold,
  }
});

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: colors.white,
}))``;