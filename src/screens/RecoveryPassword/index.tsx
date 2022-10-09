import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import { Button } from '../../components/Button';
import { styles } from './styles';

export function RecoveryPassword() {
  const [email, setEmail] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);

  const navigation = useNavigation();

  function handleForgotPassword() {
    const showSuccess = () => { 
      Toast.show({ 
        type: 'success', 
        text1: 'Enviado com sucesso',
        text2: 'Verifique sua caixa de entrada 👋' 
      });
    };

    const showError = () => {
      Toast.show({ 
        type: 'error', 
        text1: 'Error',
        text2: 'Alguma coisa deu errado, tente novamente mais tarde. 😕' 
      });
    }

    setIsLoading(true);
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        showSuccess()
        navigation.navigate('SignIn')
      })
      .catch((error) => {
        console.log(error)
        showError()
      })
      .finally(() => {
        setIsLoading(false)
      });
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Vamos lá!</Text>
          <Text style={styles.text}>Digite seu email para recuperar sua senha</Text>
        </View>
        <View style={styles.form}>
          <TextInput 
            value={email}
            placeholder="Email"
            style={styles.input}
            onChangeText={setEmail}
          />

          <View style={styles.button}>
            <Button 
              height={50}
              width={200}
              title="Recuperar"
              isLoading={isLoading}
              background="#5965E0"
              onPress={handleForgotPassword}
            />
          </View>
        </View>
      </View>
      <Toast />
    </>
  );
}