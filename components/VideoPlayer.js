import React from 'react';
import {useState} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';

const VideoPlayer = ({uri, paused}) => {
  const [muted, setmuted] = useState(true);

  const onProgres = data => {
    console.log(data);
  };

  return (
    <View>
      <Video
        source={{uri}}
        style={styles.video}
        resizeMode="cover"
        repeat
        muted={muted}
        paused={paused}
        onProgres={onProgres}
      />
      <Pressable onPress={() => setmuted(!muted)} style={styles.mutedButton}>
        <Ionicons
          name={muted || paused ? 'volume-mute' : 'volume-medium'}
          size={16}
          color={'white'}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  mutedButton: {
    backgroundColor: 'black',
    padding: 4,
    borderRadius: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 5,
  },
});

export default VideoPlayer;
