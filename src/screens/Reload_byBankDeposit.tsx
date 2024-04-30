import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Switch } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icon library

const ReloadMyAccountPage = ({ navigation }) => {
  const [reloadMethod, setReloadMethod] = useState('Card Payment');
  const [amount, setAmount] = useState('');
  const [reloadHistory, setReloadHistory] = useState([]);
  const [rememberCard, setRememberCard] = useState(false);
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCVV] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const [bank, setBank] = useState('');
  const [branch, setBranch] = useState('');

  const handleReload = () => {
    const newEntry = {
      method: reloadMethod,
      amount: amount,
      timestamp: new Date().toLocaleString(),
    };
    setReloadHistory([...reloadHistory, newEntry]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Heading */}
      <Text style={styles.heading}>Reload My Account</Text>
      {/* Method selector buttons */}
      <View style={styles.methodSelector}>
        <Button
          title="Card Payment"
          onPress={() => setReloadMethod('Card Payment')}
          color={reloadMethod === 'Card Payment' ? '#007bff' : '#cccccc'}
          style={reloadMethod === 'Card Payment' ? styles.selectedButton : null}
        />
        <Button
          title="Bank Deposit"
          onPress={() => setReloadMethod('Bank Deposit')}
          color={reloadMethod === 'Bank Deposit' ? '#007bff' : '#cccccc'}
          style={reloadMethod === 'Bank Deposit' ? styles.selectedButton : null}
        />
      </View>
      {/* Card payment fields */}
      {reloadMethod === 'Card Payment' && (
        <View>
          <Text style={styles.subHeading}>Card Payment</Text>
          {/* Cardholder Name */}
          <Text style={styles.attributeName}>Cardholder Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Cardholder Name"
            value={cardholderName}
            onChangeText={text => setCardholderName(text)}
          />
          {/* Card Number */}
          <Text style={styles.attributeName}>Card Number</Text>
          <TextInput
            style={[styles.input, styles.cardNumberInput]}
            placeholder="Enter Card Number"
            value={cardNumber}
            onChangeText={text => setCardNumber(text)}
          />
          {/* Expiry Date and CVV */}
          <Text style={styles.attributeName}>Expiry Date</Text>
          
          <View style={styles.rowContainer}>
            <TextInput
              style={[styles.input, styles.expiryMonthInput]}
              placeholder="MM"
              value={expiryMonth}
              onChangeText={text => setExpiryMonth(text)}
            />
            <Text style={styles.divider}>/</Text>
            <TextInput
              style={[styles.input, styles.expiryYearInput]}
              placeholder="YYYY"
              value={expiryYear}
              onChangeText={text => setExpiryYear(text)}
            />
             
            <TextInput
            
              style={[styles.input, styles.cvvInput]}
              placeholder="CVV"
              value={cvv}
              onChangeText={text => setCVV(text)}
            />
          </View>
          {/* Remember Card Details */}
          <View style={styles.rememberCheckbox}>
            <Text>Remember Card Details</Text>
            <Switch
              value={rememberCard}
              onValueChange={value => setRememberCard(value)}
            />
          </View>
        </View>
      )}
      {/* Bank deposit fields */}
      {reloadMethod === 'Bank Deposit' && (
        <View>
          <Text style={styles.subHeading}>Bank Deposit</Text>
          {/* Account Number */}
          <Text style={styles.attributeName}>Account Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Account Number"
            value={accountNumber}
            onChangeText={text => setAccountNumber(text)}
          />
          {/* Account Name */}
          <Text style={styles.attributeName}>Account Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Account Name"
            value={accountName}
            onChangeText={text => setAccountName(text)}
          />
          {/* Bank */}
          <Text style={styles.attributeName}>Bank</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Bank"
            value={bank}
            onChangeText={text => setBank(text)}
          />
          {/* Branch */}
          <Text style={styles.attributeName}>Branch</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Branch"
            value={branch}
            onChangeText={text => setBranch(text)}
          />
          {/* Upload payment slip button */}
          <Button
            title="Upload Payment Slip"
            onPress={() => {}}
            color="#007bff"
          />
        </View>
      )}
      {/* Amount input field */}
      <TextInput
        style={styles.input}
        placeholder="Amount to Reload"
        keyboardType="numeric"
        value={amount}
        onChangeText={text => setAmount(text)}
      />
      {/* Reload button */}
      <Button
        title="Reload"
        onPress={handleReload}
        color="#28a745"
      />
      {/* Reload history */}
      <Text style={styles.historyHeading}>Reload History</Text>
      <View>
        {reloadHistory.map((entry, index) => (
          <Text key={index} style={styles.historyItem}>
            {entry.method} - {entry.amount} - {entry.timestamp}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007bff',
    textAlign: 'center',
  },
  methodSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  selectedButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#007bff',
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  attributeName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  cardNumberInput: {
    marginBottom: 30, // Increase the gap between card number and expiry date/CVV
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  expiryMonthInput: {
    flex: 1,
    marginRight: 2, // Add some margin to separate from the divider
  },
  expiryYearInput: {
    flex: 1,
    marginLeft: 1,
    marginRight:20, // Add some margin to separate from the divider
  },
  cvvInput: {
    flex: 1,
    marginLeft: 15,
  },
  divider: {
    alignSelf: 'center',
    marginHorizontal: 5,
    fontSize: 24,
  },
  rememberCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  historyHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  historyItem: {
    marginBottom: 5,
  },
});

export default ReloadMyAccountPage;
