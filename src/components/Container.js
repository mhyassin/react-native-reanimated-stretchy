import React from 'react';
import { StyleSheet, View } from 'react-native';
export const Container = (props) => {
    return React.createElement(View, { ...props, style: [styles.container, props.style] });
};
const styles = StyleSheet.create({
    container: { flex: 1 },
});
