import { StyleSheet, Dimensions } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

import { colors, fonts } from '../../global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    paddingHorizontal: 30,

  },
  text: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtext: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
  },
  categories: {},
  categoryList: {
    paddingHorizontal: 25,
    marginVertical: 32,
  },
  accounts: {
    marginHorizontal: 20,
    marginBottom: getBottomSpace() + 110,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  accountsList: {
    marginBottom: 60,
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