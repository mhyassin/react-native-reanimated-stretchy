import * as React from 'react';

import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { StretchyScrollView } from 'react-native-reanimated-stretchy';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StretchyScrollView
        imageHeight={200}
        imageSource={require('../assets/image.jpg')}
        foreground={
          <View style={styles.foreground}>
            <Text style={styles.txt}>something here</Text>
          </View>
        }
      >
        {Array(20)
          .fill(0)
          .map((_, i) => (
            <View style={styles.box}>
              <Text>{i}</Text>
            </View>
          ))}
      </StretchyScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  foreground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  box: {
    height: 100,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'orange',
  },
});
