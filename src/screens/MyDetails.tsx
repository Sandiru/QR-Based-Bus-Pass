import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Icon } from '@rneui/themed'
import { Image } from 'react-native'
import { Button } from 'react-native'
import { TextInput } from 'react-native'

const MyDetails = () => {
  return (
    <View style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
         <View style={{
          flex: 1,
          backgroundColor: 'white'
        }}>
          <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
            <HeaderMyDetails />
            <Balance />
            <Details />
          </KeyboardAwareScrollView>
        </View>
        
       
      </View>
  )
}

    
    const HeaderMyDetails = () => {
      return (
        <View style={{
          flex: 1,
          flexDirection: 'row',
          padding: '2%',
          paddingBottom: '4%',
          alignItems: 'center',
          marginTop: '2%',
          borderBottomWidth: 1,
          borderBottomColor: '#D9D9D9'
        }}>
    
          <View style={{
            width: 30,
            height: 30,
            borderRadius: 100,
            paddingTop: '3%'
          }} >
            <Icon size={20} name={'arrow-back-ios-new'} type='MaterialIcons' />
          </View>
    
          <View style={{
            flex: 1,
            alignItems: 'center'
          }}>
            <Text style={{
              fontSize: 25,
              fontFamily: 'Montserrat-Bold',
              color: '#747FFD',
              paddingTop: '4%'
            }}>My Details</Text>
          </View>
    
          <View style={{
            width: 30,
            height: 30,
            alignSelf: 'flex-start',
          }}>
            <Icon color={'#747FFD'} size={35} name={'menu'} type='MaterialIcons' />
          </View>
    
        </View>
      );
    }
    
    const Balance = () => {
      return (
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          borderBottomWidth: 1,
          borderBottomColor: '#D9D9D9',
          height: 150,
        }}>
          <View style={{
            width: '60%',
            justifyContent: 'center',
            paddingLeft: '10%',
          }} >
            <View>
              <Text style={{
                fontFamily: 'Montserrat-Regular',
                fontSize: 20,
                color: '#000000'
              }}> Total balance </Text>
            </View>
            <View>
              <Text style={{
                fontFamily: 'Montserrat-Bold',
                fontSize: 20,
                color: '#000000',
              }}> Rs. 149.868 </Text>
            </View>
            <View style={{
              marginTop: 7
            }}>
              <Button title={'Reload'}
                titleStyle={{
                  color: '#FFF7F0',
                  fontFamily: 'Montserrat-Bold',
                  fontSize: 15,
                  padding: '1%',
                }}
                buttonStyle={{
                  borderRadius: 20,
                  width: '50%',
                  backgroundColor: '#747FFD'
                }}
              />
            </View>
          </View>
    
          <View style={{
            width: '35%',
            alignItems: 'center',
            justifyContent: 'center'
          }} >
            <View >
            <Image style={{
              width: 90,
              height: 90,
              borderColor:'#747FFD',
              borderWidth:3,
              borderRadius: 100
            }} source={require('./assets/img/pic.jpg')} />
            </View>
            
            <View style={{
              width: 30, height: 30, 
              backgroundColor: '#747FFD',
              marginRight:25, 
              borderRadius: 100, 
              justifyContent: 'center',
              position:'relative',
              alignSelf:'flex-end',
            }}  >
              <Icon size={15} color={'white'} name={'edit'} type='MaterialIcons' />
            </View>
          </View>
    
        </View>
      );
    }
    
    const Details = () => {
      return (
        <View style={{
          height: 500,
          borderBottomWidth: 1,
          borderBottomColor: '#D9D9D9'
        }}>
    
          <View>
            <View style={{
              height: 50,
              marginHorizontal: 30,
              justifyContent: 'center',
            }}>
              <Text style={{
                color: 'black',
                fontSize: 16,
                fontFamily: "Poppins-Regular",
              }}>Name </Text>
            </View>
            <View style={{
              backgroundColor: 'white',
              borderRadius: 20,
              height: 40,
              marginHorizontal: 30,
              justifyContent: 'center',
              paddingLeft: 20,
              borderWidth: 1,
              borderColor: '#E8E8E8'
            }}>
              <TextInput
                placeholderTextColor={'#989193'}
                style={{
                  fontSize: 10,
                  fontFamily: 'Poppins-Regular',
                  color: 'black',
                  borderColor: 'black'
                }} />
            </View>
          </View>
    
          <View>
            <View style={{
              height: 50,
              marginHorizontal: 30,
              justifyContent: 'center',
            }}>
              <Text style={{
                color: 'black',
                fontSize: 16,
                fontFamily: 'Poppins-Regular',
              }}>Birthday </Text>
            </View>
            <View style={{
              backgroundColor: 'white',
              borderRadius: 20,
              height: 40,
              marginHorizontal: 30,
              justifyContent: 'center',
              paddingLeft: 20,
              borderWidth: 1,
              borderColor: '#E8E8E8'
            }}>
              <TextInput
                placeholderTextColor={'#989193'}
                style={{
                  fontSize: 10,
                  fontFamily: 'Poppins-Regular',
                  color: 'black',
                  borderColor: 'black'
                }} />
            </View>
          </View>
    
          <View>
            <View style={{
              height: 50,
              marginHorizontal: 30,
              justifyContent: 'center',
            }}>
              <Text style={{
                color: 'black',
                fontSize: 16,
                fontFamily: 'Poppins-Regular',
              }}>Phone number </Text>
            </View>
            <View style={{
              backgroundColor: 'white',
              borderRadius: 20,
              height: 40,
              marginHorizontal: 30,
              justifyContent: 'center',
              paddingLeft: 20,
              borderWidth: 1,
              borderColor: '#E8E8E8'
            }}>
              <TextInput
                placeholderTextColor={'#989193'}
                style={{
                  fontSize: 10,
                  fontFamily: 'Poppins-Regular',
                  color: 'black',
                  borderColor: 'black'
                }} />
            </View>
          </View>
    
          <View>
            <View style={{
              height: 50,
              marginHorizontal: 30,
              justifyContent: 'center',
            }}>
              <Text style={{
                color: 'black',
                fontSize: 16,
                fontFamily: 'Poppins-Regular',
              }}>Email </Text>
            </View>
            <View style={{
              backgroundColor: 'white',
              borderRadius: 20,
              height: 40,
              marginHorizontal: 30,
              justifyContent: 'center',
              paddingLeft: 20,
              marginTop: '0%',
              borderWidth: 1,
              borderColor: '#E8E8E8'
            }}>
              <TextInput
                placeholderTextColor={'#989193'}
                style={{
                  fontSize: 10,
                  fontFamily: 'Poppins-Regular',
                  color: 'black',
                  borderColor: 'black'
                }} />
            </View>
          </View>
    
        </View>
      );
    }

export default MyDetails

const styles = StyleSheet.create({})
