import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../global';

export const styles = StyleSheet.create({
  container: {},
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 52,
    height: 52,
  },
  wrapperTexts: {
    marginLeft: 8,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.bold,
    color: colors.title,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.title,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    width: '100%',
    marginTop: 16,
  },
  wrapperContent: {
    height: 40,
    borderRadius: 4,
    marginBottom: 15,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 8,
    backgroundColor: '#F4F4F4',
    justifyContent: 'space-between',
  },
  contentTexts: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  login: {
    fontSize: 14,
    marginRight: 8,
    color: colors.title,
    fontFamily: fonts.bold,
  },
  dataLogin: {
    fontSize: 12,
    color: colors.title,
    fontFamily: fonts.medium,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputLogin: {
    width: '75%',
  },
  inputPassword: {
    width: '73%',
  },
  footer: {
    marginTop: '18%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});