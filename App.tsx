import React from 'react';
import { View, StyleSheet } from 'react-native';
import Loginscreen from './screens/Loginscreen';
import SignUpScreen from './screens/SignUpScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <SignUpScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default App;
