import React, { useState } from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from '@rneui/themed';
import { ScrollView } from 'react-native';
import FundTransfer from './src/components/FundTransfer';

function App(): React.JSX.Element {
  function TransactionHistory() {
    return (
      <View style={style.containor}>
        <TopBar />
        <MiddleBar />
        <ScrollBar />
        <Footer />
      </View>
    );
  }
  const style = StyleSheet.create({
    containor: {
      backgroundColor: 'white',
      flex: 1,
      paddingTop: 15,
    },
    transactionBar: {
      flexDirection: 'row',
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: '#b3afaf',
    },
    middleBar: {
      flex: 2,
      flexDirection: 'column',
      paddingHorizontal: 35,
      paddingTop: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#b3afaf',
    },
    scrollBar: {
      flex: 8,
      flexDirection: 'column',
      paddingHorizontal: 20,
      paddingTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#b3afaf',
    },
    footer: {
      backgroundColor: 'white',
      flex: 1,
      flexDirection: 'column',
    },
  });
  function alert1() {
    Alert.alert('Button is woorking');
    console.log('Reloard button is working');
    // You can link to reloard page in here
  }
  function TopBar() {
    return (
      <View style={style.transactionBar}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <Icon size={30} name={'chevron-thin-left'} type="entypo"></Icon>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 5,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 20,
          }}>
          <Text
            style={{
              color: '#747ffd',
              fontSize: 27,
              fontWeight: '600',
            }}>
            Transaction History
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TouchableOpacity>
            <Icon
              size={40}
              name={'menu'}
              type="entypo"
              color={'#747ffd'}></Icon>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  const [balance, setbalance] = useState(154.54);
  const changeAmount = () => {
    setbalance(100);
  };
  function MiddleBar() {
    return (
      <View style={style.middleBar}>
        <Text style={{ fontSize: 18, color: 'black', fontWeight: 500 }}>
          Total Balance
        </Text>
        <Text style={{ fontSize: 30, color: 'black', fontWeight: 600 }}>
          Rs {balance}
        </Text>
        <View
          style={{
            width: 100,
            marginTop: 10,
          }}>
          <Button title="Relord" color={'#747ffd'} onPress={alert1} />
        </View>
      </View>
    );
  }
  function ScrollBar() {
    return (
      <View style={style.scrollBar}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'row',
            paddingRight: 20,
          }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#3b3b3b', paddingLeft: 20, fontWeight: 500 }}>
              Recent Transaction
            </Text>
          </View>
          <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
            <TouchableOpacity>
              <Text style={{ color: 'blue' }}>View All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 15 }}>
          <ListofTransaction />
        </View>
      </View>
    );
  }

  function ListofTransaction() {
    interface Transaction {
      id: number;
      amount: number;
      date: string;
      startLoc: string;
      endLoc: String;
    }
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const addTransaction = () => {
      const newTransaction = {
        id: transactions.length + 1,
        amount: 30,
        date: new Date().toLocaleString(),
        startLoc: 'Colombo',
        endLoc: 'Kadawatha',
      };
      setTransactions([...transactions, newTransaction]);
    };
    return (
      <View>
        <Button title="Add Transaction" onPress={addTransaction} />
        <ScrollView>
          {transactions.map(transaction => (
            <View
              key={transaction.id}
              style={{
                marginBottom: 10,
                flex: 1,
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: '#525151',
                paddingBottom: 10,
              }}>
              <View style={{ flex: 1 }}>
                <Icon name={'directions-bus-filled'} type="material"></Icon>
              </View>
              <View style={{ flex: 10, paddingLeft: 20 }}>
                <Text>
                  {transaction.startLoc} to {transaction.endLoc}
                </Text>
                <Text>{transaction.date}</Text>
              </View>
              <View style={{ justifyContent: 'center', flex: 3 }}>
                <Text>Rs.{transaction.amount}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }

  function Footer() {
    return (//Add footer here
      <View
        style={style.footer}>

      </View>
    );
  }

  return (
    <View style={style.containor}>
      <FundTransfer />
    </View>);
}
export default App;
