import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { colors, fonts } from '../../global';

export const styles = StyleSheet.create({
  container: {
    marginTop: getStatusBarHeight() + 30,
  },
  contentTitle: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.bold,
    color: colors.black
  },
  wrapper: {
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsContent: {
    width: 310,
    marginTop: 17,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 45,
    height: 45,
    borderRadius: 5,
    backgroundColor: "#C4C4C4",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    color: colors.title,
    marginLeft: 12,
    fontFamily: fonts.hiperTitle,
  },
  wrapperContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
