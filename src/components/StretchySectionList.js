import React from 'react';
import Animated from 'react-native-reanimated';
import { SectionList } from 'react-native';
import { useStretchy } from '../useStretchy';
import { Container } from './Container';
const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);
export const StretchySectionList = ({ imageSource, imageHeight, foreground, ...props }) => {
    const { rImage, rView, scrollHandler } = useStretchy({ imageHeight });
    return (React.createElement(Container, null,
        React.createElement(AnimatedSectionList, { ...props, contentOffset: { x: 0, y: -imageHeight }, contentContainerStyle: { paddingTop: imageHeight }, scrollEventThrottle: 16, onScroll: scrollHandler }),
        React.createElement(Animated.View, { style: rView, pointerEvents: "none" },
            React.createElement(Animated.Image, { source: imageSource, style: rImage }),
            foreground)));
};
