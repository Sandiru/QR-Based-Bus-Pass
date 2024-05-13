import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  Modal,
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
      startdate: string;
      enddate: string;
      startLoc: string;
      endLoc: String;
    }
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      const addTransaction = (
        index: number,
        amount: number,
        startdate: string,
        enddate: string,
        starttime: string,
        endtime: string,
        start: string,
        end: string,
      ) => {
        const startTimeAMPM = new Date(
          `2000-01-01T${starttime}`,
        ).toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        });
        const endTimeAMPM = new Date(`2000-01-01T${endtime}`).toLocaleString(
          'en-US',
          {hour: 'numeric', minute: 'numeric', hour12: true},
        );
        setTransactions(prevTransactions => [
          {
            id: index,
            amount: amount,
            startdate: startdate + ', ' + startTimeAMPM,
            enddate: endTimeAMPM,
            startLoc: start.split('_')[1],
            endLoc: end.split('_')[1],
          },
          ...prevTransactions,
        ]);
      };

      const fecthData = async () => {
        try {
          setIsLoading(true);
          if (userId) {
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
                  pickUp.date,
                  dropDown.date,
                  pickUp.time,
                  dropDown.time,
                  pickUp.location,
                  dropDown.location,
                );
              } else {
                console.log('Trip document data insuffient');
              }
            });
          } else {
            Alert.alert('Error', 'Your not a Registered user!');
          }
        } catch (error) {
          console.error('Error fetching transactions:', error);
        }
        setIsLoading(false);
      };
      fecthData();
    }, []);

    return (
      <View style={{height: 450}}>
        <Modal
          visible={isLoading}
          transparent={true}
          animationType="fade"
          onRequestClose={() => {}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}>
            <ActivityIndicator size={80} color="#0000ff" />
          </View>
        </Modal>
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
                    {transaction.startLoc}{' '}
                    <Text style={{color: 'black', fontWeight: '600'}}>To</Text>{' '}
                    {transaction.endLoc}
                  </Text>
                  <Text style={{color: 'black'}}>
                    {transaction.startdate}{' '}
                    <Text style={{color: 'black', fontWeight: '600'}}>-</Text>{' '}
                    {transaction.enddate}
                  </Text>
                </View>
                <View style={{flex: 3, justifyContent: 'center'}}>
                  <Text style={{color: 'black'}}>
                    Rs. {transaction.amount}.00
                  </Text>
                </View>
              </View>
            ))}
            <View style={{marginBottom: 150}}></View>
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

const style = StyleSheet.create({
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
