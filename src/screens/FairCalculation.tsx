import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const BusTicketApp = () => {
  const [selectedRoute, setSelectedRoute] = useState('');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');

  const handleSearch = () => {
    // Implement search logic here (fetch data, calculate ticket price, etc.)
    // For now, let's assume the ticket price is Rs. 30.
  };

  return (
    <View style={styles.container}>
      {/* Dropdown for bus route */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Fair Calulation</Text>
        {/* Replace with your dropdown component */}
      </View>

      {/* Input fields for departure and arrival */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>From</Text>
        <TextInput
          style={styles.input}
          placeholder="Thorana Junction"
          value={departure}
          onChangeText={(text) => setDeparture(text)}
        />
        <Text style={styles.label}>To</Text>
        <TextInput
          style={styles.input}
          placeholder="Tyre Junction"
          value={arrival}
          onChangeText={(text) => setArrival(text)}
        />
      </View>

      {/* SEARCH button */}
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.buttonText}>SEARCH</Text>
      </TouchableOpacity>

      {/* Display ticket price */}
      <View style={styles.ticketPrice}>
        <Text style={styles.ticketText}>Bus Ticket</Text>
        <Text style={styles.ticketText}>From {departure} To {arrival}</Text>
        <Text style={styles.ticketText}>Rs. 30 Average</Text>
      </View>

      {/* Navigation bar icons */}
      <View style={styles.navigationIcons}>
        {/* Icons for Home, Reload, Search, and Profile */}
        {/* Replace with your icon components */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0074D9', // Blue background color
    padding: 16,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  searchButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#0074D9',
    fontWeight: 'bold',
  },
  ticketPrice: {
    backgroundColor: '#0074D9',
    padding: 16,
    borderRadius: 8,
  },
  ticketText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
  },
  navigationIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default BusTicketApp;
