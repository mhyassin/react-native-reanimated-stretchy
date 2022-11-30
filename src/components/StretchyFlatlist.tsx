import React from 'react';
import Animated from 'react-native-reanimated';
import type { FlatListProps } from 'react-native';

import { useStretchy } from '../useStretchy';
import type { StretchyProps } from '../types';
import { Container } from './Container';

interface StretchyFlatListProps<T> extends FlatListProps<T>, StretchyProps {}
export const StretchyFlatList = <T,>({
  imageSource,
  imageHeight,
  foreground,
  ...props
}: StretchyFlatListProps<T>) => {
  const { rImage, rView, scrollHandler } = useStretchy({ imageHeight });

  return (
    <Container>
      <Animated.FlatList
        {...props}
        contentOffset={{ x: 0, y: -imageHeight }}
        contentContainerStyle={[
          props.contentContainerStyle,
          { paddingTop: imageHeight },
        ]}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
      />
      <Animated.View style={rView} pointerEvents="none">
        <Animated.Image source={imageSource} style={rImage} />
        {foreground}
      </Animated.View>
    </Container>
  );
};
