import { StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { colors, fonts } from '../../global';

export const styles = StyleSheet.create({
  container: {},
  background: {
    backgroundColor: colors.white,
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