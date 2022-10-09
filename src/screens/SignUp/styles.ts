import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { colors, fonts } from '../../global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight(),
  },
  title: {
    fontSize: 24,
    color: colors.black,
    fontFamily: fonts.bold,
  },
  text: {
    fontSize: 12,
    color: colors.title,
    fontFamily: fonts.bold,
  },
  img: {
    width: 247.36,
    height: 246.43,
  },
  imgWrapper: {
    alignItems: 'center',
    marginTop: 23,
    marginBottom: 15,
  },
  textsWrapper: {
    marginTop: 5,
    paddingHorizontal: 31,
  },
  form: {
    alignItems: 'center',
  },
  inputName: {
    width: 310,
    height: 50,
    fontSize: 18,
    borderRadius: 10,
    marginBottom: 17,
    fontFamily: fonts.bold,
    color: colors.title,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: colors.white
  },
  inputEmail: {
    width: 310,
    height: 50,
    fontSize: 18,
    borderRadius: 10,
    marginBottom: 17,
    fontFamily: fonts.bold,
    color: colors.title,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: colors.white
  },
  inputPassword: {
    width: 310,
    height: 50,
    fontSize: 18,
    borderRadius: 10,
    fontFamily: fonts.bold,
    color: colors.title,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: colors.white
  },
  wrapperButton: {
    alignItems: 'center',
    marginTop: 25,
  },
  wrapperSignIn: {
    marginTop: 20,
    flexDirection: 'row',
  },
  existAccount: {
    fontSize: 14,
    fontFamily: fonts.bold,
    color: colors.title,
  },
  signInText: {
    fontSize: 14,
    color: '#B2B9FF',
    marginLeft: 5,
    fontFamily: fonts.bold,
  }
});
