import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';
import database from '@react-native-firebase/database';
import { useNavigation } from '@react-navigation/native';
import { BottomSheetView, BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import { Header } from '../../components/Header';
import { FabButton } from '../../components/FabButton';
import { SelectButton } from '../../components/SelectButton';

import { SelectAccount } from '../../components/SelectAccount';
import { styles, Background } from './styles';
import { AddNewAccount } from '../../components/AddNewAccount';

interface Categories {
  id: string;
  key: string;
  icon: string;
  title: string;
  typeIcon: string;
}

interface AccountsProps {
  id: number;
  img: string;
  name: string;
  company: string;
  category: string;
}

interface Accounts {
  id: number;
  img: string;
  name: string;
  company: string;
  category: string;
}

interface CategoryProps {
  category: Categories[];
}

export function HomeApp() {
  const [ category, setCategory ] = useState<Categories[]>([]);
  const [ categorySelected, setCategorySelected ] = useState('Emails');
  const [ accounts, setAccounts ] = useState<Accounts[]>([]);
  const [ accountSelected, setAccountSelected ] = useState<Accounts>();
  const [ filteredAccounts, setFilteredAccounts ] = useState<Accounts[]>([]);
  const [ loading, setLoading ] = useState(true);
  const [ isSelected, setIsSelected ] = useState(false);

  const [ page, setPage ] = useState(1);
  const [ loadingMore, setLoadingMore ] = useState(false);

  const navigate = useNavigation()

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleSnapPress = () => {
    bottomSheetRef.current?.present();
  }

  async function fetchAccounts() {
    const accountsData = await database()
      .ref('/accounts')
      .on('value', snapshot => {
        const data = snapshot.val();
        const accounts = Object.keys(data).map(key => ({
          id: data[key].id,
          img: data[key].img,
          name: data[key].name,
          company: data[key].company,
          category: data[key].category
        }));
        setAccounts(accounts);
      })

    if(!accountsData) {
      return setLoading(true);
    }

    return () => database().ref(`/accounts`).off('value', accountsData);
  }

  function handleCategorySelected(category: string) {
    setCategorySelected(category);

    if(category === 'all') {
      return setFilteredAccounts(accounts);
    }

    const filtered = accounts.filter(account => {
      if(account.category === category) {
        return account;
      }
    });

    setFilteredAccounts(filtered);
  }

  function handleAccountSelected(account: Accounts) {
    // const accountSelected = accounts.filter(account => String(account.id) === String(account.id));
    // setAccount(accountSelected);
    // setIsSelected(true);
    setAccountSelected(account);
  }

  async function fetchCategory() {
    const categoryData = database()
      .ref('/category')
      .on('value', snapshot => {
        const data = snapshot.val();
        const category = Object.keys(data).map(key => ({
          id: data[key].id,
          key: data[key].key,
          icon: data[key].icon,
          title: data[key].title,
          typeIcon: data[key].typeIcon
        }));
        setCategory(category);
      })

    setCategory([
      {
        id: "0",
        key: 'all',
        title: 'Todos',
        icon: '',
        typeIcon: ''
      },
      ...categoryData
    ])
    
    return () => database().ref(`/category`).off('value', categoryData);
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <>
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.text}>
          Escolha uma conta
        </Text>
        <Text style={styles.subtext}>
          e guarde agora suas informações.
        </Text>
      </View>
      <View style={styles.categories}>
        <FlatList
          data={category}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <SelectButton
              size={24}
              name={item.icon}
              typeIcon={item.typeIcon}
              active={item.key == categorySelected}
              onPress={() => handleCategorySelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        />
      </View>

      <SafeAreaView style={styles.accounts}>
        <FlatList 
          data={filteredAccounts}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <SelectAccount
            data={item}
            onPress={() => {
              handleSnapPress(),
              handleAccountSelected(item)
            }}
            />
          )}
          numColumns={3}
          onEndReachedThreshold={0.1}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.accountsList}
        />
      </SafeAreaView>
      <FabButton
        style={{bottom: 80, right: 50}}
      />
    </View>
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={['60%']}
        style={{ padding: 24 }}
        enablePanDownToClose={true}
        backdropComponent={() => <Background /> }
      >
        <BottomSheetView>
          <AddNewAccount
            {...accountSelected}
          />
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  </>
  );
}
