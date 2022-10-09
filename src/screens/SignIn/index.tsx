import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import { 
  View,
  Text,
  Image,
  Alert,
  Platform,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import { Button } from '../../components/Button';
import { styles } from './styles';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  function handleSignIn() {
    setIsLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => { 
        Toast.show({ 
          type: 'success', 
          text1: 'Bem vindo!',
          text2: 'Olá, deu tudo certo! 👋' 
        });
      })
      .catch(() => { 
        Toast.show({ 
          type: 'error', 
          text1: 'Algo deu errado',
          text2: 'Verifique seu email ou senha e tente novamente. 😕' 
        });
        setIsLoading(false)})
      .finally(() => setIsLoading(false));
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <View style={styles.textsWrapper}>
            <Text style={styles.title}>Entrar</Text>
            <Text style={styles.text}>Comece agora mesmo a gerenciar suas contas.</Text>
          </View>

          <View style={styles.imgWrapper}>
            <Image style={styles.img} source={require('../../assets/illustration1.png')} />
          </View>

          <View style={styles.form}>
            <TextInput 
              style={styles.inputEmail}
              placeholder="E-mail"
              onChangeText={setEmail}
              value={email}
            />
            <TextInput
              style={styles.inputPassword}
              secureTextEntry={true}
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
          </View>
          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => {navigation.navigate('RecoveryPassword')}}
          >
            <Text>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          <View style={styles.wrapperButton}>
            <Button 
              title="Entrar"
              width={222}
              height={50}
              background="#5965E0"
              isLoading={isLoading}
              onPress={handleSignIn}
            />

            <TouchableOpacity 
              style={styles.wrapperSignUp}
              onPress={() => {navigation.navigate('SignUp')}}
            >
              <Text style={styles.notAccount}>Não tem uma conta?</Text>
              <Text style={styles.signUpText}>Cadastre-se</Text>
            </TouchableOpacity>

          </View>

        </KeyboardAvoidingView>
      </SafeAreaView>
      <Toast />
    </>
  );
}
