import React from 'react';
import {View, Image} from 'react-native';

const FeedGridItem = ({post}) => {
  return (
    <View style={{flex: 1, padding: 1, aspectRatio: 1, maxWidth: '33.33%'}}>
      <Image source={{uri: post.image || post.images[0]}} style={{flex: 1}} />
    </View>
  );
};

export default FeedGridItem;
