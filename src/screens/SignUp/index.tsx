import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { useNavigation } from '@react-navigation/native';
import { 
  View,
  Text,
  Image,
  Platform,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

import { Button } from '../../components/Button';
import { styles } from './styles';

export function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  async function handleNewAccount() {
    setIsLoading(true);

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => Alert.alert("Conta", "Cadastrado com sucesso!"))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));

    navigation.navigate('SignIn');
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.textsWrapper}>
          <Text style={styles.title}>Entrar</Text>
          <Text style={styles.text}>Comece agora mesmo a gerenciar suas contas.</Text>
        </View>

        <View style={styles.imgWrapper}>
          <Image style={styles.img} source={require('../../assets/illustration2.png')} />
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

        <View style={styles.wrapperButton}>
          <Button 
            title="Criar Conta"
            width={222}
            height={50}
            background="#5965E0"
            isLoading={isLoading}
            onPress={handleNewAccount}
          />

          <TouchableOpacity 
            style={styles.wrapperSignIn}
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={styles.existAccount}>Já tem uma conta?</Text>
            <Text style={styles.signInText}>Entrar</Text>
          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>

    </SafeAreaView>
  );
}
