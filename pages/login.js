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

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const userLogin = async () => {
    // var {user} = await login(email, password);
    // if (user) {
    navigation.replace('Bottomtab');
    // }
    // setLoader(false);
  };

  const loginValidation = () => {
    if (email === '') {
      Alert.alert('Login error!','Please enter an email');
    } else if (reg.test(email) === false) {
      Alert.alert('Login error!','Please enter a valid email');
    } else if (password === '') {
      Alert.alert('Login error!',"Password can't be empty");
    } else {
      setLoader(true);
      userLogin();
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
              <Text style={styles.loginText}>Login</Text>
              <TextInput
                onChangeText={text => setEmail(text)}
                placeholder="Email"
                placeholderTextColor="#1851E4"
                style={styles.inputStyle}
                selectionColor={'#1851E4'}
                autoCapitalize="none"
                value={email}
              />
              <TextInput
                onChangeText={text => setPassword(text)}
                placeholder="Password"
                placeholderTextColor="#1851E4"
                style={styles.inputStyle}
                selectionColor={'#1851E4'}
                autoCapitalize="none"
                value={password}
              />
              <View style={styles.loginBtnContainer}>
                <TouchableOpacity onPress={() => loginValidation()}>
                  <View style={styles.loginButton}>
                    {loader && (
                      <ActivityIndicator true size="small" color="#1851E4" />
                    )}
                    {!loader && (
                      <Text style={styles.loginButtonText}>Login</Text>
                    )}
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>First time here?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                  <View style={styles.signUpButton}>
                    <Text style={styles.signUpButtonText}>Sign Up</Text>
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
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

export default Login;
