import React from 'react';
import { StyleSheet, Image, ImageProps } from 'react-native';

export const BgImage = (props: ImageProps) => {
  return <Image {...props} style={styles.image} />;
};

export const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
