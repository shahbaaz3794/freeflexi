import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

const BottomtabContent = ({state, descriptors, navigation}) => {
  const [activeTab, setActiveTab] = useState('home');
  const insets = useSafeAreaInsets();

  return (
    <>
      <View
        style={{
          marginBottom: insets.bottom,
          height: 50,
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'row',
          borderTopWidth: 1,
          borderTopColor: 'lightgrey',
          justifyContent: "space-evenly"
        }}>
        <TouchableOpacity
          style={{
            height: '100%',
            width: '25%',
            display: 'flex',
            justifyContent: 'center',
          }}
          onPress={() => {
            setActiveTab('home');
            navigation.navigate('Home');
          }}>
          <View style={{display: 'flex', alignItems: 'center'}}>
            {/* <Icon
              name="home"
              size={20}
              color={activeTab === 'home' ? `#fff` : `grey`}
            /> */}
            <Text style={{color: `${activeTab === 'home' ? `#FA6650` : `grey`}`, fontWeight: "bold"}}>
              Home
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: '100%',
            width: '25%',
            display: 'flex',
            justifyContent: 'center',
          }}
          onPress={() => {
            setActiveTab('contacts');
            navigation.navigate('Contacts');
          }}>
          <View style={{display: 'flex', alignItems: 'center'}}>
            {/* <Icon
              name="heart"
              size={20}
              color={activeTab === 'contacts' ? `#fff` : `grey`}
            /> */}
            <Text
              style={{
                color: `${activeTab === 'contacts' ? `#FA5560` : `grey`}`, fontWeight: "bold"
              }}>
              Contacts
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

// const styles = StyleSheet.create({
//   bottomTabContainer: {
//     height: 50,
//     backgroundColor: '#fff',
//     display: 'flex',
//     flexDirection: 'row',
//     borderTopWidth: 1,
//     borderTopColor: 'lightgrey',
//   },
// });

export default BottomtabContent;
