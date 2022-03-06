import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Comment from './Comment';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Carousel from './Carousel';
import DoublePressable from './DoublePressable';
import VideoPlayer from './VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const FeedPost = ({post, isVisible}) => {
  const [isDescriptionExpanded, setisDescriptionExpanded] = useState(false);
  const [isLiked, setisLiked] = useState(false);

  const navigation = useNavigation();

  const navigateToUser = () => {
    navigation.navigate('Profile', {userId: post.user.id});
  };

  const toggle = () => {
    // setisDescriptionExpanded(!isDescriptionExpanded);
    setisDescriptionExpanded(e => {
      return !e;
    });
  };

  const toggleLike = () => {
    setisLiked(!isLiked);
  };

  let content = null;
  if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      </DoublePressable>
    );
  } else if (post.images) {
    content = <Carousel onDoublePress={toggleLike} images={post.images} />;
  } else if (post.video) {
    //checks if post.video exists
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <VideoPlayer uri={post.video} paused={!isVisible} />
      </DoublePressable>
    );
  }

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      {/* header section */}
      <View style={styles.container}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.avatarImage}
        />
        <Text onPress={navigateToUser} style={styles.title}>
          {post.user.username}
        </Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {content}

      <View style={styles.mainContainer}>
        {/* ICONS */}
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            {isLiked ? (
              <AntDesign
                name={'heart'}
                size={24}
                style={styles.icon}
                color={'#ED4956'}
              />
            ) : (
              <AntDesign name={'hearto'} size={24} style={styles.icon} />
            )}
          </Pressable>

          <Ionicons name="chatbubble-outline" size={24} style={styles.icon} />
          <Feather name="send" size={24} style={styles.icon} />
          <Feather name="bookmark" size={24} style={{marginLeft: 'auto'}} />
        </View>

        {/* Likes */}
        <Text>
          Liked by <Text style={{fontWeight: 'bold'}}>John</Text> and{' '}
          <Text style={{fontWeight: 'bold'}}>{post.nofLikes} </Text>others
        </Text>

        {/* Post Description */}
        <Text
          style={{marginTop: 5}}
          numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <Text style={{fontWeight: 'bold'}}>{post.user.username} </Text>
          {post.description}
        </Text>
        <Text onPress={toggle}>
          {isDescriptionExpanded ? 'less...' : 'more...'}
        </Text>

        {/* COMMENT */}
        <Text style={{marginTop: 5}}>View all {post.nofComments} comments</Text>
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
        <Text style={{marginTop: 3, color: 'grey'}}>{post.createdAt}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatarImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    marginHorizontal: 8,
    fontWeight: '700',
  },
  threeDots: {
    marginLeft: 'auto',
  },
  mainContainer: {
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  icon: {
    marginHorizontal: 4,
  },
});

export default FeedPost;
