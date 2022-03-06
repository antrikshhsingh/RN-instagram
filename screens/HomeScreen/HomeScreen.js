import React from 'react';
import {useRef, useState} from 'react';
import {FlatList} from 'react-native';
import FeedPost from '../../components/FeedPost';
import posts from '../../assets/posts.json';

const HomeScreen = () => {
  const [activePostID, setactivePostID] = useState(null);

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setactivePostID(viewableItems[0].item.id);
    }
  });
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => (
        <FeedPost isVisible={activePostID === item.id} post={item} />
      )}
      showsVerticalScrollIndicator={false}
      viewabilityConfig={{itemVisiblePercentThreshold: 51}}
      onViewableItemsChanged={onViewableItemsChanged.current}
    />
  );
};

export default HomeScreen;
