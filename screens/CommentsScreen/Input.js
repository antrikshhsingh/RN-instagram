import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import {useState} from 'react';

const Input = () => {
  const [input, setinput] = useState('');
  const onPost = () => {
    console.warn('posting the comment');
    setinput('');
  };

  const handleChange = newText => {
    setinput(newText);
  };
  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        }}
        style={styles.image}
      />
      <TextInput
        value={input}
        onChangeText={handleChange}
        placeholder="Write your comment..."
        style={styles.input}
        multiline={true}
      />
      <Text onPress={onPost} style={styles.text}>
        Post
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#dcdcdc',
  },
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },
  text: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    fontSize: 14,
    fontWeight: '700',
    color: '#00b8eb',
  },
  input: {
    flex: 1,
    borderColor: '#dcdcdcdc',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 5,
    paddingRight: 50,
  },
});

export default Input;
