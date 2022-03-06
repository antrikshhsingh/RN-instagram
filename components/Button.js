import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const Button = ({text, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
    padding: 5,
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
  },
});

export default Button;
