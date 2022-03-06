import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Comment = ({comment, includeDetails}) => {
  const [isLiked, setisLiked] = useState(false);

  const toggleLike = () => {
    setisLiked(!isLiked);
  };
  return (
    <View style={styles.comment}>
      {includeDetails && (
        <Image source={{uri: comment.user.image}} style={styles.avatar} />
      )}
      <View style={styles.middleColumn}>
        <Text style={styles.commentText}>
          <Text style={{fontWeight: 'bold'}}>{comment.user.username}</Text>{' '}
          {comment.comment}
        </Text>
        {includeDetails && (
          <View style={styles.footer}>
            <Text style={styles.footerText}>2d</Text>
            <Text style={styles.footerText}>5 likes</Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        )}
      </View>
      {/* HIT SLOP INCREASE THE AREA OF CLICK IF WE HAVE HUGE THUMBS */}
      <Pressable onPress={toggleLike} hitSlop={5}>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          size={14}
          style={styles.icon}
          color={isLiked ? '#ED4956' : 'black'}
        />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 4,
  },
  comment: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
    marginRight: 5,
  },
  commentText: {
    flex: 1,
    marginBottom: 3,
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  footerText: {
    marginRight: 5,
  },
  middleColumn: {
    flex: 1,
  },
});

export default Comment;
