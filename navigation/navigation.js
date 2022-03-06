import {View, Text, Image} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CommentsScreen from '../screens/CommentsScreen/CommentsScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import instagram from '../assets/instagram.png';
import BottomTabNavigator from './BottomTabNavigator';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditProfileScreen from '../screens/EditProfileScreen/EditProfileScreen';
import PostUploadScreen from '../screens/PostUploadScreen/PostUploadScreen';
const Stack = createNativeStackNavigator();

export default Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'left',
        }}>
        {/* <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerTitleAlign: 'left',
            headerShadowVisible: false,
            headerTitle: props => <LogoTitle {...props} />,
          }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        {/* <Stack.Screen name="EditProfile" component={EditProfileScreen} /> */}
        <Stack.Screen name="PostUploadScreen" component={PostUploadScreen} />
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
