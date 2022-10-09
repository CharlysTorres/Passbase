import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../global';

export const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    backgroundColor: colors.square,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  img: {
    width: 55,
    height: 55,
  },
});
