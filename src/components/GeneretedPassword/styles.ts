import { StyleSheet, Dimensions } from 'react-native';

import { colors, fonts } from '../../global';

export const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapplePassword: {
    height: 30,
    width: 294,
    borderBottomWidth: 1,
    borderBottomColor: '#DADADA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pass: {
    fontSize: 20,
    fontFamily: fonts.bold,
    color: colors.title,
  },
  button: {
    marginTop: 90,
  },
});