import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Clipboard } from 'react-native';
import { Feather } from '@expo/vector-icons';
// import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-toast-message';

import { styles } from './styles';
import { Button } from '@components/Button';

export function GeneretedPassword() {
  const [password, setPassword] = useState('');
  const [ isGenereted, setIsGenereted ] = useState(false);

  function handleGeneretedPassword() {
    var generatePassword = "";
    var characters = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?-";

    for (var i = 0; i < 10; i++) {
      generatePassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setPassword(generatePassword);
    setIsGenereted(true);
  }

  const copyToClipboard = () => {
    Clipboard.setString(password);
  }

  async function handleCopyPassword() {
    Clipboard.setString(password);
    Toast.show({
      type: 'success', 
      text1: 'Copiado com sucesso',
      text2: 'Sua senha gerada foi copiada para a área de transferência 👋' 
    });
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.wrapplePassword}>
          <Text style={styles.pass}>{password}</Text>
          
          { isGenereted ? (
            <TouchableOpacity
            onPress={handleCopyPassword}
            >
              <Feather name="copy" size={24} color="#DADADA" />
            </TouchableOpacity>
          ): null
          }
          
        </View>
        <View style={styles.button}>
          <Button 
            title="Gerar" 
            onPress={handleGeneretedPassword}
            width={130}
            height={50}
            background="#5965E0"  
          />
        </View>
      </View>
      <Toast />
    </>
  );
}