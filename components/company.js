import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Pressable,
  ScrollView,
} from 'react-native';
import { useEffect } from 'react';

const Company = ({name, setSelectedBank, bankDetail}) => {

  const trimName = () => {
    let result = ""
    if(name.length > 6){
      result = name.substr(0, 6)+"..."
    } else {
      result = name;
    }
    return result;
  }

  return (
    <>
      <View style={{height: 100, width:100, paddingHorizontal: 20, justifyContent:"center", alignItems:"center"}}>
        <Pressable
          style={{
            height: 55,
            width: 55,
            borderRadius: 50,
            backgroundColor: 'lightblue',
          }} onPress={()=>{setSelectedBank(name);bankDetail.current.open()}}></Pressable>
        <Text style={{paddingTop: 8, color: "#000"}}>{trimName()}</Text>
      </View>
    </>
  );
};

export default Company;
