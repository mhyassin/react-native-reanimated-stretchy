import React from 'react';
import Animated from 'react-native-reanimated';
import { SectionList, SectionListProps } from 'react-native';

import { BgImage } from './BgImage';
import { Container } from './Container';
import { useStretchy } from '../useStretchy';
import type { StretchyProps } from '../types';

const AnimatedSectionList =
  Animated.createAnimatedComponent<SectionListProps<any, any>>(SectionList);

interface StretchySectionListProps<T, K>
  extends SectionListProps<T, K>,
    StretchyProps {
  sRef?: React.Ref<SectionList>;
}
export const StretchySectionList = <T, K>({
  imageSource,
  imageHeight,
  foreground,
  sRef,
  ...props
}: StretchySectionListProps<T, K>) => {
  const { rView, scrollHandler } = useStretchy({ imageHeight });

  return (
    <Container>
      <AnimatedSectionList
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
