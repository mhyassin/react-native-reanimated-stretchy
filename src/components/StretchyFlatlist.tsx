import React from 'react';
import Animated from 'react-native-reanimated';
import type { FlatListProps } from 'react-native';

import { BgImage } from './BgImage';
import { Container } from './Container';
import { useStretchy } from '../useStretchy';
import type { StretchyProps } from '../types';

interface StretchyFlatListProps<T> extends FlatListProps<T>, StretchyProps {
  sRef?: React.Ref<Animated.FlatList<T>>;
}
export const StretchyFlatList = <T,>({
  imageSource,
  imageHeight,
  foreground,
  sRef,
  ...props
}: StretchyFlatListProps<T>) => {
  const { rView, scrollHandler } = useStretchy({ imageHeight });

  return (
    <Container>
      <Animated.FlatList
        {...props}
        ref={sRef}
        contentOffset={{ x: 0, y: -imageHeight }}
        contentContainerStyle={[
          props.contentContainerStyle,
          { paddingTop: imageHeight },
        ]}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
      />
      <Animated.View style={rView}>
        <BgImage source={imageSource} />
        {foreground}
      </Animated.View>
    </Container>
  );
};
