import React, {useState, useRef} from 'react';
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
  Linking,
  Image,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/header';
import { banks } from '../data/dummyData';
import Company from '../components/company';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Thumbnail } from 'react-native-thumbnail-video';

const DetailPage = () => {

  const [selectedBank, setSelectedBank] = useState();
  const bankDetail = useRef();

  return (
    <SafeAreaView>
      <Header />
      <ScrollView contentContainerStyle={{paddingBottom: 50}}>
          <View
            style={{
              backgroundColor: '#1851E4',
              paddingTop: 25,
              paddingLeft: 16,
              paddingBottom: 60,
            }}>
            <Text style={{color: '#fff', fontSize: 18, marginBottom: 8}}>
              Good Evening, Sir
            </Text>
            <Text style={{color: '#fff', fontSize: 14}}>
              Looking for something amazing
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              height: 80,
              marginTop: -10,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              display: 'flex',
              justifyContent: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 15,
              }}>
              <Image
                source={require('../assests/bobopoints.png')}
                style={{width: 40, height: 40}}
                PlaceholderContent={<ActivityIndicator />}
              />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  paddingHorizontal: 10,
                }}>
                <Text style={{color: "#000"}}>Rainy</Text>
                <Text style={{color: "#000"}}>Noida Sector 4</Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#DDE4F6',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 25,
                }}>
                <Text style={{color: "#000"}}>Location</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 8, backgroundColor: '#fff'}}>
            <ScrollView horizontal={true} persistentScrollbar={true}
              style={{
                height: 110,
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "row"
              }}>
              {banks.map((value, ind)=> <Company name={value.name} setSelectedBank={setSelectedBank} bankDetail={bankDetail} />)}
            </ScrollView>
          </View>
          <RBSheet 
            ref={bankDetail}
            closeOnPressBack={true}
            closeOnPressMask={true}
            height={250}
            customStyles={{
              wrapper: {
                backgroundColor: 'transparent',
              },
            }}
          >
            <View style={{paddingVertical: 20}}>
              <View style={{flexDirection: "row", justifyContent:"space-between", paddingHorizontal: 20, marginBottom: 15}}>
                {/* <Text>{selectedBank}</Text> */}
                <Text style={{color:"gray"}}>ROI</Text><Text style={{color:"#000"}}>13 - 15%</Text>
              </View>
              <View style={{flexDirection: "row", justifyContent:"space-between", paddingHorizontal: 20, marginBottom: 15}}>
                <Text style={{color:"gray"}}>PF</Text><Text style={{color:"#000"}}>2%</Text>
              </View>
              <View style={{flexDirection: "row", justifyContent:"space-between", paddingHorizontal: 20, marginBottom: 15}}>
                <Text style={{color:"gray"}}>AMC</Text><Text style={{color:"#000"}}>0.255%</Text>
              </View>
              <Pressable onPress={()=>{navigation.navigate("ApplyForm"); bankDetail.current.close()}} style={{marginHorizontal: 20, justifyContent:"center", alignItems:"center",paddingVertical:10, backgroundColor:"#FA6650", marginBottom: 10, borderRadius: 8}}><Text style={{color: "#fff", fontWeight:"bold"}}>Apply</Text></Pressable>
              <Pressable onPress={()=>{navigation.navigate("DetailPage"); bankDetail.current.close()}} style={{marginHorizontal: 20, justifyContent:"center", alignItems:"center",paddingVertical:10, borderColor:"#FA6650", borderWidth: 1, borderRadius: 8}}><Text style={{color: "#FA6650", fontWeight:"bold"}}>View more</Text></Pressable>
            </View>
          </RBSheet>
          <View style={{shadowColor: 'black',shadowOffset: { width: 0, height: 2 },shadowRadius: 6,shadowOpacity: 0.26,elevation: 8,backgroundColor: 'white',padding: 20, margin: 20}}>
            <View><Text style={{color:"#000", fontSize: 18, fontWeight:"bold"}}>Play this YouTube tutorial</Text></View>
            <View style={{marginTop: 5, marginBottom: 15}}><Text style={{color:"gray", fontSize: 14, fontWeight: "400"}}>You will be directed to YouTube, are you sure?</Text></View>
            <Thumbnail onPress={()=> Linking.openURL( 'https://www.youtube.com/watch?v=9xwazD5SyVg' )} containerStyle={{display:"flex", justifyContent:"center", alignItems:"center"}} imageWidth={300} imageHeight={160} url="https://www.youtube.com/watch?v=9xwazD5SyVg" />
            <View style={{display:"flex", flexDirection:"row", justifyContent:"flex-end", marginTop: 10}}>
              <TouchableOpacity style={{paddingHorizontal: 10}}><Text>Cancel</Text></TouchableOpacity>
              <TouchableOpacity style={{paddingHorizontal: 10}}><Text style={{color:"#EA722D"}}>Yes</Text></TouchableOpacity>
            </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default DetailPage;