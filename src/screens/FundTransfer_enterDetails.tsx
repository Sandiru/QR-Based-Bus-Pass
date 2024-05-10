import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from '@rneui/base';


const FundTransfer = () => {
  return (
    <View style={style1.fullpage}>
      <Top />
      <Middle />
      <Details />

      <Bottom />
    </View>
  );
};
const style1 = StyleSheet.create({
  fullpage: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 15,
  },
  top: {
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#b3afaf',
  },
  middle: {
    flex: 2,
    flexDirection: 'column',
    paddingHorizontal: 35,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#b3afaf',
  },
  details: {
    flex: 8,
    flexDirection: 'column',
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#b3afaf',
  },
  footer: {
    flex: 1,
  },
  textinput: {
    width: 350,
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 20,
    borderRadius: 40,
    color: 'black',
    borderBlockColor: 'black',
    borderWidth: 0.2,
  },
});
function Top() {
  return (
    <View style={style1.top}>
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
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#747ffd',
            fontSize: 27,
            fontWeight: 600,
          }}>
          Fund Transfer
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
          <Icon size={40} name={'menu'} type="entypo" color={'#747ffd'}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function Middle() {
  return (
    <View style={style1.middle}>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
          fontWeight: 500,
          paddingBottom: 10,
        }}>
        Total Balance
      </Text>
      <Text style={{ fontSize: 32, color: 'black', fontWeight: 600 }}>Rs</Text>
    </View>
  );
}
function Details() {
  return (
    <View style={style1.details}>
      <View
        style={{
          flex: 5,
          borderBottomColor: '#b3afaf',
          borderBottomWidth: 1,
          paddingHorizontal: 30,
        }}>
        <Text style={{ fontSize: 15, color: 'black' }}>User Name: </Text>
        <TextInput
          style={style1.textinput}
          placeholder="Enter Username "
          placeholderTextColor={'#a3a3a3'}
          secureTextEntry={false}
        />
        <Text style={{ fontSize: 15, color: 'black' }}>Phone Number:</Text>
        <TextInput
          style={style1.textinput}
          placeholder=" Enter Phone Number "
          placeholderTextColor={'#a3a3a3'}
          secureTextEntry={false}
          keyboardType="numeric"
        />
      </View>
      <View
        style={{
          flex: 4,
          flexDirection: 'row',
          paddingTop: 10,
          paddingHorizontal: 30,
        }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 15, color: 'black', fontWeight: 400 }}>
            Amount to Reload
          </Text>
          <View
            style={{
              height: 50,
              width: 140,
              marginTop: 20,
              borderWidth: 1,
              borderBlockColor: '#b3afaf',
              paddingHorizontal: 10,
              borderRadius: 10,
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 30, color: 'black' }}>Rs.</Text>
            </View>
            <View style={{ flex: 2 }}>
              <TextInput keyboardType="numeric" style={{ fontSize: 20 }} />
            </View>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <View
            style={{
              marginTop: 40,
              marginLeft: 30,
              width: 100,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button title="Reload"></Button>
          </View>
        </View>
      </View>
    </View>
  );
}
function Bottom() {
  return <View style={style1.footer}></View>;
}

export default FundTransfer;
