import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import user from '../../assets/user.json';

import Button from '../../components/Button';
import navigation from '../../navigation/navigation';
import { useNavigation } from '@react-navigation/core';
import {Auth} from 'aws-amplify';

const ProfileHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        {/* PROFILE IMAGE */}
        <Image source={{uri: user.image}} style={styles.image} />

        {/* FOLLOWERS , POST AND FOLLOWING */}
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>2142</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>1432</Text>
          <Text>Following</Text>
        </View>
      </View>

      {/* buttons */}
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
      <Button text={'Edit Profile'} onPress={()=>navigation.navigate('EditProfile')} />
      <Button text={'Signout'} onPress={()=>Auth.signOut()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
  root: {
    padding: 8,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  numberContainer: {
    alignItems: 'center',
  },
  numberText: {
    fontSize: 16,
    fontWeight: '700',
  },
  name: {
    fontWeight: '600',
    fontSize: 14,
    marginVertical: 3,
  },
});

export default ProfileHeader;
