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
    width: 165.6,
    height: 242.61,
  },
  imgWrapper: {
    alignItems: 'center',
    marginTop: 23,
    marginBottom: 35,
  },
  textsWrapper: {
    marginTop: 5,
    paddingHorizontal: 31,
  },
  form: {
    alignItems: 'center',
  },
  inputEmail: {
    width: 310,
    height: 50,
    fontSize: 18,
    borderRadius: 10,
    marginBottom: 27,
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
  forgotPassword: {
    fontSize: 14,
    fontFamily: fonts.medium,
    color: colors.title,
    marginTop: 10,
    marginLeft: 32,
  },
  wrapperSignUp: {
    marginTop: 20,
    flexDirection: 'row',
  },
  notAccount: {
    fontSize: 14,
    fontFamily: fonts.bold,
    color: colors.title,
  },
  signUpText: {
    fontSize: 14,
    marginLeft: 5,
    color: '#B2B9FF',
    fontFamily: fonts.bold,
  }
});
