import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {Image} from 'react-native-elements';

const Services = () => {
  return (
    <>
      <View
        style={{
          paddingHorizontal: 15,
          paddingTop: 25,
          backgroundColor: '#fff',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../assests/fireIcon.png')}
            style={{width: 16, height: 20}}
            PlaceholderContent={<ActivityIndicator />}
          />
          <Text style={{fontSize: 15, marginLeft: 12, color:"#000"}}>Services</Text>
        </View>
        <ScrollView horizontal={true} style={{paddingTop: 10,paddingBottom: 15}}>
          {[1, 2, 3, 4, 5].map((value, ind) => (
            <View style={{marginRight: 15, border: 1, borderColor:"lightgrey"}}>
              <Image
              source={require('../assests/serviceImage.png')}
              style={{width: 250, height: 150, borderRadius: 20}}
              PlaceholderContent={<ActivityIndicator />}
            />
            <View style={{flexDirection: "column", width: 250, marginTop: 10, alignItems:"center", paddingHorizontal: 10}}>
              <Text style={{flexWrap: "wrap", color:"#000"}}>Part Release and Full Release of Gold at your Doorstep ...</Text>
              <TouchableOpacity style={{marginTop: 10}}><Text style={{fontWeight: "bold", color:"#000"}}>View more</Text></TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Services;
