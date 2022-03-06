import React from 'react';
import {FlatList} from 'react-native';
import FeedGridItem from './FeedGridItem';

export default function FeedGridView({data, ListHeaderComponent}) {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <FeedGridItem post={item} />}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={ListHeaderComponent}
      style={{marginHorizontal:-1}}
    />
  );
}
