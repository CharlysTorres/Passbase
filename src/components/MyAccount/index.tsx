import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import TouchID from 'react-native-touch-id';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { Button } from '../Button';

interface Props {
  id: string;
  img: string;
  login: string;
  account: string;
  company: string;
  password: string;
  name: string;
}

export function MyAccount(data: Props) {
  const [ editable, setEditable ] = useState(false);
  const [ hidePass, setHidePass ] = useState(true);
  const [ login, setLogin ] = useState(data.login);
  const [ password, setPassword ] = useState(data.password);
  const [ supported, setSupported ] = useState(false);

  const userID = auth().currentUser?.uid;
  const navigation = useNavigation();

  function handleRemove() {
    database()
      .ref(`users/${userID}/accounts/${data.id}`)
      .remove();
    
    console.log(data.id);
    navigation.navigate('Pass');
  }

  function handleChangeAccount() {
    
    setEditable(false);
  }

  function handleEdit() {
    setEditable(!editable);
  }

  function handleVisiblePass() {
    const config = {
      title: 'Touch ID',
      imageColor: '#7159c1',
      imageErrorColor: '#FF0000',
      sensorErrorDescription: 'Touch ID invalido',
      cancelText: 'Cancelar',
    }

    if(supported == false) {
      if(hidePass) {
        setHidePass(!hidePass)
      }else {
        setHidePass(!hidePass)
      }
    }

    if(hidePass == true) {
      TouchID.authenticate('Toque para ver sua senha', config)
      .then(() => {
        setHidePass(!hidePass);
      })
    } else {
      setHidePass(!hidePass);
    }
  }

  useEffect(() => {
    TouchID.isSupported()
      .then(success => {
        setSupported(true);
      })
      .catch(error => {
        console.log("TOUCH ID",error);
      })
  },[]);

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image
          width={24}
          height={24}
          style={styles.img}
          source={{uri: data.img}}
        />

        <View style={styles.wrapper}>
          <View style={styles.wrapperTexts}>
            <Text style={styles.title}>{data.accountName}</Text>
            <Text style={styles.text}>{data.company}</Text>
          </View>

          <TouchableOpacity
            onPress={() => {handleRemove()}}
          >
            <Feather name="trash" size={24} color={'#666'} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.wrapperContent}>
          <View style={styles.contentTexts}>
            <Text style={styles.login}>Login:</Text>
            {editable ? (
              <TextInput
                value={login}
                onChangeText={setLogin}
                defaultValue={data.login}
                style={styles.inputLogin}
              />
            ) : (
              <Text style={styles.dataLogin}>
                {data.login}
              </Text>
            )
            }
            
          </View>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleEdit}
          >
            {editable ? (
              <Feather name="x" size={24} color="#666" />
            ) : (
              <Feather name="edit" size={24} color="#666" />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.wrapperContent}>
          <View style={styles.contentTexts}>
            <Text style={styles.login}>Senha:</Text>
            {editable ? (
              <TextInput 
                value={password}
                onChangeText={setPassword}
                defaultValue={data.password}
                style={styles.inputPassword}
              />
            ) : (
              <Text style={styles.dataLogin}>
                {hidePass ? '********' : data.password}
              </Text>
            )}
          </View>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleVisiblePass}
          >
            {hidePass ? (
              <Feather name="eye" size={24} color="#666" />
            ) : (
              <Feather name="eye-off" size={24} color="#666" />
            )
            }
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          {editable ? (
            <Button
              title="Salvar Alterações"
              width={"60%"}
              height={45}
              background='#7159c1'
              onPress={() => {}}
            />
          ) : (
            <></>
          )}
        </View>
      </View>
    </View>
  );
}