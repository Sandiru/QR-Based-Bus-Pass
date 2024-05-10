import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from '../components/navigationBar';
import {collection, getDocs} from 'firebase/firestore';
import {db3} from '../../firebase/firebaseinitPassengers';
import {SafeAreaView} from 'react-native-safe-area-context';

const TransactionHistory = (a: any) => {
  const stack = a.navigation;
  const {userId, userAmount} = a.route.params;

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
            <Icon size={30} name={'chevron-back'} />
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
            <Icon size={40} name={'menu'} color={'#747ffd'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function MiddleBar() {
    function GoToReload() {
      stack.navigate('Reload');
    }

    return (
      <View style={style.middleBar}>
        <Text style={{fontSize: 18, color: 'black', fontWeight: 500}}>
          Total Balance
        </Text>
        <Text style={{fontSize: 30, color: 'black', fontWeight: 600}}>
          Rs. {userAmount}.00
        </Text>
        <View
          style={{
            width: 100,
            marginTop: 10,
          }}>
          <Button title="Reload" color={'#747ffd'} onPress={GoToReload} />
        </View>
      </View>
    );
  }
  function ScrollBar() {
    return (
      <View style={style.scrollBar}>
        <Text
          style={{
            flex: 2,
            color: '#3b3b3b',
            textAlign: 'left',
            marginLeft: 20,
            fontSize: 16,
            fontWeight: '500',
          }}>
          Recent Transaction
        </Text>

        <TouchableOpacity style={{flex: 1}}>
          <Text
            style={{
              flex: 1,
              color: 'blue',
              fontSize: 16,
              textAlign: 'center',
            }}>
            View All
          </Text>
        </TouchableOpacity>
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

    useEffect(() => {
      const addTransaction = (
        index: number,
        amount: number,
        date: string,
        time: string,
        start: string,
        end: string,
      ) => {
        setTransactions(prevTransactions => [
          {
            id: index,
            amount: amount,
            date: date + ', ' + time,
            startLoc: start,
            endLoc: end,
          },
          ...prevTransactions,
        ]);
      };

      const fecthData = async () => {
        try {
          const tripDocs = await getDocs(
            collection(db3, 'Users', userId, 'Trips'),
          );
          tripDocs.forEach(doc => {
            const tripData = doc.data();
            const {charge, dropDown, pickUp} = tripData;
            if (dropDown && pickUp) {
              addTransaction(
                parseInt(doc.id.split('-')[1]),
                charge,
                dropDown.date,
                dropDown.time,
                pickUp.location,
                dropDown.location,
              );
            } else {
              console.log('Trip document data insuffient');
            }
          });
        } catch (error) {
          console.error('Error fetching transactions:', error);
        }
      };
      fecthData();
    }, []);

    return (
      <View style={{height: 350}}>
        <SafeAreaView>
          <ScrollView>
            {transactions.map(transaction => (
              <View
                key={transaction.id}
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 20,
                  marginBottom: 20,
                  height: 80,
                  elevation: 5,
                  borderRadius: 15,
                  backgroundColor: '#e4e8f7',
                }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 5,
                  }}>
                  <Icon name={'bus'} size={20} color={'blue'} />
                </View>
                <View
                  style={{flex: 9, marginLeft: 10, justifyContent: 'center'}}>
                  <Text style={{color: 'black'}}>
                    {transaction.startLoc} to {transaction.endLoc}
                  </Text>
                  <Text style={{color: 'black'}}>{transaction.date}</Text>
                </View>
                <View style={{flex: 3, justifyContent: 'center'}}>
                  <Text style={{color: 'black'}}>
                    Rs. {transaction.amount}.00
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }

  return (
    <View style={style.container}>
      <TopBar />
      <MiddleBar />
      <View
        style={{
          borderBottomColor: '#bbc4c9',
          borderBottomWidth: 1,
          width: '100%',
        }}
      />
      <ScrollBar />

      <ListofTransaction />

      <NavigationBar routeName={a.route.name} stack={stack} />
    </View>
  );
};

export const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  transactionBar: {
    flexDirection: 'row',
    marginTop: 20,
  },
  middleBar: {
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  scrollBar: {
    flexDirection: 'row',
    marginTop: 20,
    height: 50,
  },
});
export default TransactionHistory;
