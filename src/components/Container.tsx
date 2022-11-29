import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

export const Container = (props: ViewProps) => {
  return <View {...props} style={[styles.container, props.style]} />;
};

const styles = StyleSheet.create({
  container: { flex: 1, overflow: 'hidden' },
});
