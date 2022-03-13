import {View ,Image} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CommentsScreen from '../screens/CommentsScreen/CommentsScreen';
import instagram from '../assets/instagram.png';
import BottomTabNavigator from './BottomTabNavigator';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStackNavigator from './AuthStackNavigator';

const Stack = createNativeStackNavigator();

export default Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          initialRouteName:"Auth",
          headerShown: false,
          headerTitleAlign: 'left',
        }}>
          <Stack.Screen
            name="Auth"
            component={AuthStackNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={BottomTabNavigator}
            options={{headerShown: false}}
          />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerTitleAlign: 'left',
            headerShadowVisible: false,
            headerTitle: props => <LogoTitle {...props} />,
          }}
        />
        <Stack.Screen name="comments" component={CommentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const LogoTitle = () => {
  return (
    <View>
      <Image
        resizeMode="contain"
        style={{width: 150, height: 40}}
        source={instagram}
      />
    </View>
  );
};
