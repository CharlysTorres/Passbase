import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../global';

export const styles = StyleSheet.create({
  container: {},
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 55,
    height: 55,
  },
  wrapperTexts: {
    marginLeft: 5,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.bold,
    color: colors.title
  },
  subtitle: {
    fontFamily: fonts.light,
    color: colors.title
  },
  form: {
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    fontSize: 16,
    borderRadius: 5,
    marginBottom: 18,
    color: '#C4C4C4',
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontFamily: fonts.bold,
    backgroundColor: '#F2F3F5',
  },
  button: {
    marginTop: 35
  },
  inputPassword: {
    width: '85%',
    height: 50,
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: '#C4C4C4',
    fontFamily: fonts.bold,
  },
  inputArea: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    backgroundColor: '#F2F3F5',
    borderRadius: 5,
  },
  iconButton: {
    width: '15%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',

  },
});