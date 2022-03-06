import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import user from '../../assets/user.json';
import FeedGridView from './FeedGridView';
import ProfileHeader from './ProfileHeader';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const userId = route.params?.userId;

  //query all information using UserId LATER FROM DB or GSM
  return (
    // grid posts
    <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />
  );
};

export default ProfileScreen;
