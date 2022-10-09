import { StyleSheet, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

import { colors, fonts } from '../../global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    color: colors.title,
    fontFamily: fonts.bold,
    marginTop: getStatusBarHeight() + 20,
    marginBottom: 40,
  },
});

export const Background = styled.View`
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 width: ${Dimensions.get('window').width}px;
 height: ${Dimensions.get('window').height}px;
 background-color: rgba(0,0,0,0.7);
`;
