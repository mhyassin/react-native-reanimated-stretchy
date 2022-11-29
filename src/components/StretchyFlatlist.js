import Animated from "react-native-reanimated";
import "react-native";
import { useStretchy } from "../useStretchy";
import "../types";
import { Container } from "./Container";
export const StretchyFlatList = ({ imageSource, imageHeight, foreground, ...props }) => {
    const { rImage, rView, scrollHandler } = useStretchy({ imageHeight });
    return (React.createElement(Container, null,
        React.createElement(Animated.FlatList, { ...props, contentOffset: { x: 0, y: -imageHeight }, contentContainerStyle: { paddingTop: imageHeight }, scrollEventThrottle: 16, onScroll: scrollHandler }),
        React.createElement(Animated.View, { style: rView, pointerEvents: "none" },
            React.createElement(Animated.Image, { source: imageSource, style: rImage }),
            foreground)));
};
