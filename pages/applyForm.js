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
  Pressable,
  SafeAreaView,
  Image,
} from 'react-native';

const ApplyForm = ({navigation}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: '#fff',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          display: 'flex',
          flexDirection: 'row',
        }}>
        <Pressable onPress={()=>navigation.navigate("Home")} style={{paddingVertical: 12, paddingHorizontal: 5}}>
          <Image
            source={require('../assests/back.png')}
            style={{width: 20, height: 20}}
            PlaceholderContent={<ActivityIndicator />}
          />
        </Pressable>
      </View>
      <ScrollView
        style={{
          marginTop: 10,
          backgroundColor: 'white',
          paddingHorizontal: 20,
        }}>
        <View style={{paddingVertical: 10}}>
          <Text style={{paddingVertical: 10}}>Pan Card No.</Text>
          <TextInput
            style={{
              height: 45,
              borderColor: '#1851E4',
              borderWidth: 1,
              borderRadius: 25,
              paddingHorizontal: 20,
              color: '#000',
              fontSize: 15,
            }}
            autoCapitalize="none"
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{paddingVertical: 10}}>Date of Birth</Text>
          <TextInput
            style={{
              height: 45,
              borderColor: '#1851E4',
              borderWidth: 1,
              borderRadius: 25,
              paddingHorizontal: 20,
              color: '#000',
              fontSize: 15,
            }}
            autoCapitalize="none"
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{paddingVertical: 10}}>Current Company Name</Text>
          <TextInput
            style={{
              height: 45,
              borderColor: '#1851E4',
              borderWidth: 1,
              borderRadius: 25,
              paddingHorizontal: 20,
              color: '#000',
              fontSize: 15,
            }}
            autoCapitalize="none"
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{paddingVertical: 10}}>Take Home Salary</Text>
          <TextInput
            style={{
              height: 45,
              borderColor: '#1851E4',
              borderWidth: 1,
              borderRadius: 25,
              paddingHorizontal: 20,
              color: '#000',
              fontSize: 15,
            }}
            autoCapitalize="none"
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{paddingVertical: 10}}>
            Current Location with Pin Code
          </Text>
          <TextInput
            style={{
              height: 45,
              borderColor: '#1851E4',
              borderWidth: 1,
              borderRadius: 25,
              paddingHorizontal: 20,
              color: '#000',
              fontSize: 15,
            }}
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 45,
            backgroundColor: '#F5821F',
            borderRadius: 12,
            marginVertical: 20,
          }}>
          <Text style={{color:"white", fontWeight:"bold"}}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ApplyForm;
