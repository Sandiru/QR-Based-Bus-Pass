import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import BottomSheet from './BottomSheet';
import Icon from 'react-native-vector-icons/Ionicons';

const Loginscreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleForgotPassword = () => {
    setShowBottomSheet(true);
  };

  const handleLogin = () => {
    console.log('Logging in with:', {username, password});
    // login logic
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Image
          style={{width: '100%', height: '100%', position: 'absolute'}}
          source={require('../assets/img/app_background.png')}
          resizeMode="cover"
        />
        <TouchableOpacity style={styles.settingsIcon}>
        <Icon
              name="settings-outline"
              size={20}
              color="#FFFFFF"
        
            />
        </TouchableOpacity>
      </View>
      <View style={styles.rectangle}>
        <View style={styles.content}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.signInText}>Sign in to Continue</Text>
          <View style={styles.inputContainer}>
            <Icon
              name="person-outline"
              size={20}
              color="#FFFFFF"
              style={styles.iconcontainer}
            />
            <TextInput
              style={styles.input}
              placeholder="User Name"
              value={username}
              onChangeText={setUsername}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon
              name="lock-closed-outline"
              size={20}
              color="#FFFFFF"
              style={styles.iconcontainer}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              {showPassword ? (
                <Icon
                  name="eye-off-outline"
                  size={20}
                  color="#000"
                  style={styles.eyeIcon}
                />
              ) : (
                <Icon
                  name="eye-outline"
                  size={20}
                  color="#000"
                  style={styles.eyeIcon}
                />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              onPress={toggleRememberMe}
              style={styles.checkboxContainer}>
              <View
                style={[styles.checkbox, rememberMe && styles.checkedCheckbox]}
              />
            </TouchableOpacity>
            <Text style={styles.rememberText}>Remember me</Text>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.forgotText}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
          <Text style={styles.createAccountText}>Don't have account?</Text>
          <TouchableOpacity>
            <Text style={styles.createAccountText2}>Create a new account</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Sheet */}
      {showBottomSheet && <BottomSheet setStatus={setShowBottomSheet} />}
    </View>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
    backgroundColor: '#FFFFFF',
    height: 50,
    width: 395,
    top: 120,
    flex: 2,
    marginTop: 50,
  },
  content: {
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  container: {
    height: 900, // Change as per your preference
    width: 395,
    position: 'absolute',
    flex: 1,
  },
  settingsIcon: {
    position: 'absolute',
    top: 10,
    right: 20,
  },
  welcomeText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 34,
    fontWeight: 'bold',
    color: '#747FFD',
  },
  signInText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#747FFD',
    borderRadius: 25,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
  },
  eyeIcon: {
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15,
    width: '100%',
  },
  iconcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#747FFD',
    borderRadius: 25,
    marginRight: 20,
    paddingLeft:5,
    paddingTop: 3,
  },
  rememberText: {
    marginLeft: 10,
    marginRight: 100,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#747FFD',
  },
  forgotText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#747FFD',
    //paddingRight: 500,
  },
  loginButton: {
    backgroundColor: '#747FFD',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 15,
    marginTop: 25,
  },
  loginButtonText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#fff',
  },
  createAccountText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
  },
  createAccountText2: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#747FFD',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#747FFD',
    borderRadius: 4,
  },
  checkedCheckbox: {
    backgroundColor: '#747FFD',
  },
});

export default Loginscreen;
