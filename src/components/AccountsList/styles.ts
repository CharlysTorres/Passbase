import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../global';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: colors.white,
    backgroundColor: '#F4F4F4',
    padding: 8,

  },
  image: {
    width: 60,
    height: 60,
  },
  info: {},
  account: {},
  login: {},
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: colors.title,
  },
  buttonRemove: {
    right: 0,
    width: 60,
    height: 76,
    paddingLeft: 0,
    borderRadius: 3,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.red,
  },
  buttonView: {
    left: 0,
    width: 60,
    height: 76,
    borderRadius: 3,
    paddingRight: 0,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray,
  }
});