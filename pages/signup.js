import React, {useState} from 'react';
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
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image} from 'react-native-elements';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const userSignUp = async () => {
    // if (password === confirmPassword) {
    //   var {user} = await signUp(email, password, name);
    //   if (user) {
    //     navigation.replace('Drawer');
    //   }
    //   setLoader(false);
    // }
  };

  const signUpValidation = () => {
    if (name === '') {
      Alert.alert('Login error!','Please enter a name');
    } else if (email === '') {
      Alert.alert('Login error!','Please enter an email');
    } else if (reg.test(email) === false) {
      Alert.alert('Login error!','Please enter a valid email');
    } else if (password === '') {
      Alert.alert('Login error!',"Password can't be empty");
    } else if (confirmPassword !== password) {
      Alert.alert('Login error!','Confirm password and password does not match');
    } else {
      setLoader(true);
      userSignUp();
    }
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
          <View style={styles.center}>
            <ScrollView>
              <View style={styles.logoContainer}>
                <Image
                  source={require('../assests/freeflexiLogo.png')}
                  style={{width: 200, height: 100}}
                  PlaceholderContent={<ActivityIndicator />}
                />
              </View>
              <Text style={styles.loginText}>Sign Up</Text>
              <TextInput
                style={styles.inputStyle}
                selectionColor={'#1851E4'}
                placeholder="Name"
                placeholderTextColor={'#1851E4'}
                onChangeText={text => setName(text)}
                value={name}
                autoCapitalize="none"
              />
              <TextInput
                style={styles.inputStyle}
                selectionColor={'#1851E4'}
                placeholder="Email"
                placeholderTextColor={'#1851E4'}
                onChangeText={text => setEmail(text)}
                value={email}
                autoCapitalize="none"
              />
              <TextInput
                style={styles.inputStyle}
                selectionColor={'#1851E4'}
                placeholder="Password"
                placeholderTextColor={'#1851E4'}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
                value={password}
                autoCapitalize="none"
              />
              <TextInput
                style={styles.inputStyle}
                selectionColor={'#1851E4'}
                placeholder="Confirm Password"
                placeholderTextColor={'#1851E4'}
                onChangeText={text => setConfirmPassword(text)}
                secureTextEntry={true}
                value={confirmPassword}
                autoCapitalize="none"
              />
              <View style={styles.loginBtnContainer}>
                <TouchableOpacity onPress={() => signUpValidation()}>
                  <View style={styles.loginButton}>
                    {loader && (
                      <ActivityIndicator true size="small" color="#1851E4" />
                    )}
                    {!loader && (
                      <Text style={styles.loginButtonText}>Sign Up</Text>
                    )}
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Already a member?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <View style={styles.signUpButton}>
                    <Text style={styles.signUpButtonText}>Login</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    width: '90%',
  },
  logoContainer: {
    alignItems: 'center',
  },
  loginText: {
    color: '#1851E4',
    fontSize: 50,
    fontWeight: 'bold',
  },
  inputStyle: {
    height: 45,
    borderColor: '#1851E4',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 25,
    paddingLeft: 20,
    paddingRight: 20,
    color: '#1851E4',
    fontSize: 15,
  },
  loginBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#1851E4',
    height: 40,
    borderRadius: 25,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signUpText: {
    color: '#1851E4',
    fontSize: 14,
    marginRight: 5,
  },
  signUpButton: {
    backgroundColor: '#1851E4',
    height: 30,
    borderRadius: 10,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 15,
  },
});

export default SignUp;
