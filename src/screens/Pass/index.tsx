import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { BottomSheetView, BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import { AccountList } from '@components/AccountList';
import { AccountsList } from '@components/AccountsList';
import { styles, Background } from './styles';
import { MyAccount } from '@components/MyAccount';

interface AccountList {
  id: string;
  img: string;
  login: string;
  accountName: string;
  company: string;
  password: string;
}

interface AccountProps {
  img: string;
  name: string;
  login: string;
  company: string;
  password: string;
}

export function Pass() {
  const [ accounts, setAccounts ] = useState<AccountList[]>([]);
  const [ selectAccount, setSelectAccount ] = useState<AccountList>();

  const userId = auth().currentUser?.uid;

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleSnapPress = () => {
    bottomSheetRef.current?.present();
  }

  function handleSelectAccount(account: AccountList) {
    setSelectAccount(account);
  }

  useEffect(() => {
    const accountList = database()
      .ref(`users/${userId}/accounts`)
      .on('value', snapshot => {
        const accounts = snapshot.val();
        const listAccounts = [];
        for (const key in accounts) {
          listAccounts.push({
            id: key,
            img: accounts[key].img,
            login: accounts[key].login,
            company: accounts[key].company,
            accountName: accounts[key].accountName,
            password: accounts[key].password,
          });
        }
        // const data = snapshot.val();
        // const listAccounts = Object.keys(data).map(key => ({
        //   id: key,
        //   img: data[key].img,
        //   login: data[key].login,
        //   accountName: data[key].accountName,
        //   company: data[key].company,
        //   password: data[key].password,
        // }));
        setAccounts(listAccounts);
      });
      console.log(accounts)
      return () => database().ref(`/users/${userId}/accounts`).off('value', accountList);
  }, []);

  async function handleRemoveAccount(id: string) {
    await database().ref(`/users/${userId}/accounts/${id}`).remove();
    console.log(id);
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Minhas Contas</Text>

        <FlatList
          data={accounts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            // <AccountList
            //   img={item.img}
            //   login={item.login}
            //   account={item.name}
            //   handleView={() => {handleSnapPress(), handleSelectAccount(item)}}
            //   onPress={() => {}}
            // />
            <AccountsList 
              img={item.img}
              login={item.login}
              account={item.accountName}
              handleView={() => {handleSnapPress(), handleSelectAccount(item)}}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
        
      </SafeAreaView>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetRef}
          snapPoints={['60%']}
          style={{ padding: 24 }}
          enablePanDownToClose={true}
          backdropComponent={() => <Background /> }
        >
          <BottomSheetView>
            <MyAccount
              {...selectAccount}
            />
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </>
  );
}
