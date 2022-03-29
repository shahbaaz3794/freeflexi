import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../pages/login';
import SignUp from '../pages/signup';
import Home from '../pages/home';
import BottomNavigation from './bottomNavigation';
import DetailPage from '../pages/detailPage';
import ApplyForm from '../pages/applyForm';

const Routes = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <NavigationContainer independent={true} initialRouteName="Login">
        <Stack.Navigator>
          {/* <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Bottomtab"
            component={BottomNavigation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DetailPage"
            component={DetailPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ApplyForm"
            component={ApplyForm}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;