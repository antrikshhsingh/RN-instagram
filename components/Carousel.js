import React from 'react';
import {useState, useRef} from 'react';
import {
  View,
  FlatList,
  Image,
  useWindowDimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import DoublePressable from './DoublePressable';

const Carousel = ({images, onDoublePress}) => {
  const {width} = useWindowDimensions();
  const [activeImageIndex, setactiveImageIndex] = useState(0);

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setactiveImageIndex(viewableItems[0].index || 0);
    }
  });

  return (
    <ScrollView>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <DoublePressable onDoublePress={onDoublePress}>
            <Image source={{uri: item}} style={{width, aspectRatio: 1}} />
          </DoublePressable>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={{itemVisiblePercentThreshold: 51}}
      />
      <View style={styles.indicators}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              width: 8,
              borderRadius: 4,
              aspectRatio: 1,
              backgroundColor: activeImageIndex === index ? '#515BD4' : 'white',
              marginHorizontal: 5,
            }}
          />
        ))}

        <View
          style={{
            width: 10,
            borderRadius: 5,
            aspectRatio: 1,
            marginHorizontal: 3,
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  indicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 4,
    width: '100%',
  },
});
export default Carousel;
