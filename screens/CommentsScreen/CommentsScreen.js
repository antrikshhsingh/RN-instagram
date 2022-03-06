import React from 'react';
import {FlatList} from 'react-native';
import {View, Text, SafeAreaView, TextInput} from 'react-native';
import comments from '../../assets/comments.json';
import Comment from '../../components/Comment';
import Input from './Input';

const CommentsScreen = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <FlatList
        style={{padding: 10}}
        data={comments}
        renderItem={({item}) => <Comment comment={item} includeDetails />}
      />
      <Input />
    </SafeAreaView>
  );
};

export default CommentsScreen;
