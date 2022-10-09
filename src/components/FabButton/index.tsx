import React, { useRef, Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text, Animated } from 'react-native';
import { BottomSheetView, BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { AntDesign, Feather } from '@expo/vector-icons';

import { colors } from '../../global';
import { Button } from '../Button';
import { Background } from './styles';
import { GeneretedPassword } from '@components/GeneretedPassword';

export function FabButton(props) {
  const animation = new Animated.Value(0);
  let open = false;

  const bottomSheetRef = useRef<BottomSheetModal>(null);
  
  const toggleMenu = () => {
    const toValue = open ? 0 : 1

    Animated.spring(animation, {
      toValue,
      friction: 6,
    }).start();

    open = !open;
  }

  const handleSnapPress = () => {
    bottomSheetRef.current?.present();
  }

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '45deg']
        })
      }
    ]
  }

  const keyStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -70]
        })
      }
    ]
  }

  return (
    <>
      <View style={[styles.container, props.style]}>
        <TouchableWithoutFeedback
          onPress={handleSnapPress}
        >
          <Animated.View 
            style={[styles.button, styles.subMenu, keyStyle]}
          >
            <Feather name="key" size={20} color="#FFF" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={toggleMenu}
        >
          <Animated.View style={[styles.button, rotation]}>
            <AntDesign name="plus" size={24} color="#FFF" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetRef}
          snapPoints={['50%']}
          style={{ padding: 24 }}
          enablePanDownToClose={true}
          backdropComponent={() => <Background /> }
        >
          <BottomSheetView>
            <GeneretedPassword />
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
  },
  button: {
    width: 60,
    height: 60,
    position: 'absolute',
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
    shadowRadius: 10,
    shadowColor: "#00213B",
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 10,
      width: 0,
    }
  },
  menu: {
    backgroundColor: '#00213B'
  },
  subMenu: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
  },
});