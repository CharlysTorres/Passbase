import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { colors, fonts } from '../../global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight() + 20,
    marginHorizontal: 20,
  },
  header: {
    
  },
  title: {
    fontSize: 24,
    color: colors.title,
    fontFamily: fonts.bold,
  },
  text: {
    fontSize: 16,
    color: colors.text,
    fontFamily: fonts.medium,
  },
  input: {
    height: 50,
    fontSize: 16,
    width: '100%',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: colors.text,
    fontFamily: fonts.bold,
    backgroundColor: colors.white,
  },

  form: {
    marginTop: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    marginTop: 70,
    backgroundColor: '#5965E0',
    borderRadius: 10,
  },
});