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

const HealthAdvisory = ({}) => {
  return (
    <>
      <View style={{backgroundColor:"#FFBB00", marginHorizontal: 25, borderRadius: 5}}>
        <Text style={{padding: 12, color: "#000"}}>
          Your health and safety are our priority. See our response to Covid-19. Learn More
        </Text>
      </View>
    </>
  )
}

export default HealthAdvisory