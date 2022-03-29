import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';

const Contacts = () => {
  const phoneNumber = 8755040728

  const makeCall = () => {
    Linking.openURL(`tel:${phoneNumber}`)
  }

  return (
    <TouchableOpacity 
    onPress={()=>makeCall()}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#F5821F',
        marginHorizontal: 20,
        borderRadius: 10,
      }}>
      <Text style={{color: '#fff'}}>Call</Text>
    </TouchableOpacity>
  );
};

export default Contacts;
