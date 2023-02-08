import React from 'react';
import Animated from 'react-native-reanimated';
import type { ScrollViewProps } from 'react-native';

import { BgImage } from './BgImage';
import { Container } from './Container';
import { useStretchy } from '../useStretchy';
import type { StretchyProps } from '../types';

interface StretchyScrollViewProps extends ScrollViewProps, StretchyProps {}
export const StretchyScrollView = ({
  imageSource,
  imageHeight,
  foreground,
  ...props
}: StretchyScrollViewProps) => {
  const { rView, scrollHandler } = useStretchy({ imageHeight });

  return (
    <Container>
      <Animated.ScrollView
        {...props}
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
