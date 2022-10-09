import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import { Button } from '@components/Button';
import { styles } from './styles';

interface AccountsProps {
  img: string;
  name: string;
  company: string;
  category: string;
}

export function AddNewAccount(account: AccountsProps) {
  const [ login, setLogin ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);
  const [ hidePass, setHidePass ] = useState(true);

  const userId = auth().currentUser?.uid;

  async function handleAddAccount() {
    setIsLoading(true);
    const accountRef = database().ref(`users/${userId}/accounts`);

    try{
      await accountRef.push({
        login,
        password,
        img: account.img,
        accountName: account.name,
        company: account.company,
      });
      setIsLoading(false);
    } catch (error) {}

    setLogin('');
    setPassword('');
  }

  function handleVisiblePass() {
    setHidePass(!hidePass);
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            style={styles.img}
            source={{uri: account.img}}
            width={45}
            height={45}
          />

          <View style={styles.wrapperTexts}>
            <Text style={styles.title}>
              {account.name}
            </Text>
            <Text style={styles.subtitle}>
              {account.company}
            </Text>
          </View>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={login}
            onChangeText={setLogin}
            placeholder="Login da conta"
          />

          <View style={styles.inputArea}>
            <TextInput
              style={styles.inputPassword}
              value={password}
              secureTextEntry={hidePass}
              onChangeText={setPassword}
              placeholder="Senha da conta"
            />
            <TouchableOpacity
              style={styles.iconButton}
              onPress={handleVisiblePass}
            >
              {hidePass ? (
                <Ionicons name="eye" size={24} color="#666" />
              ) : (
                <Ionicons name="eye-off" size={24} color="#666" />
              )
              }
              
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <Button
              width={200}
              height={40}
              title="Salvar"
              background='#7159c1'
              onPress={handleAddAccount}
              isLoading={isLoading}
            />
          </View>
        </View>
      </View>
    </>
  );
}