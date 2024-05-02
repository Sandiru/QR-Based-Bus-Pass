import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';



const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };



  const handleLogin = () => {
    console.log('Logging in with:', {username, password});
  
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
            size={24}
            color="#FFFFFF"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.rectangle}>
        <View style={styles.content}>
          <Text style={styles.CreateNewAccText1}>Create New</Text>
          <Text style={styles.CreateNewAccText2}>Account</Text>
          <Text style={styles.registeredText}>
            Already registered?{' '}
            <TouchableOpacity>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
          </Text>
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
              name={'lock-closed-outline'}
             
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
              <Icon
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              
                size={20}
                color="#000"
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer2}>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              value={password2}
              onChangeText={setPassword2}
              secureTextEntry={!showPassword2}
            />
            <TouchableOpacity onPress={togglePasswordVisibility2}>
              <Icon
                name={showPassword2 ? 'eye-off-outline' : 'eye-outline'}
               
                size={20}
                color="#000"
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.termsText}>
            {'By continuing, you agree with our Term &\n         Conditions and Privacy Policy'}
          </Text>
          <TouchableOpacity style={styles.signUpButton} onPress={handleLogin}>
            <Text style={styles.signUpButtonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  container: {
    height: 900, 
    width: 395,
    position: 'absolute',
    flex: 1,
  },
  settingsIcon: {
    position: 'absolute',
    top: 10,
    right: 20,
  },
  CreateNewAccText1: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 34,
    fontWeight: 'bold',
    color: '#747FFD',
  },
  CreateNewAccText2: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 34,
    fontWeight: 'bold',
    color: '#747FFD',
    marginTop: -10,
    marginBottom: 10,
  },
  registeredText: {
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
  inputContainer2: {
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

 
  signUpButton: {
    backgroundColor: '#747FFD',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 15,
    marginTop: 25,
  },
  signUpButtonText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#fff',
  },
  termsText: {
    alignSelf: 'center',
    //marginTop: 140,
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
  },
  login: {
    marginTop: 20,
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#747FFD',
  },
  
});

export default SignUpScreen;
