import React from 'react';
import {Pressable} from 'react-native';

const DoublePressable = ({onDoublePress, children}) => {
  let lastTap = 0;
  const handleDoublePress = () => {
    const now = Date.now(); //reutrns a timestamp
    if (now - lastTap < 300) {
      onDoublePress();
    }
    lastTap = now;
  };
  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
};

export default DoublePressable;
