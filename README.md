# react-native-reanimated-stretchy

react native lists implemented with a stretchy header image

### Motive

I am working on a project that was using `react-native-stretchy`, but it has type issues and the header component of the `SectionList` and `FlatList` were unusable due to implementing the image header inside the header component prop.

With `react-native-reanimated-stretchy`, the types should work fine, you can use the headerComponent prop, and it uses reanimated for animations

## Installation

```sh
// npm
npm install react-native-reanimated-stretchy

// yarn
yarn add react-native-reanimated-stretchy
```

## Usage

```js
import * as React from 'react';

import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { StretchyScrollView } from 'react-native-reanimated-stretchy';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StretchyScrollView
        imageHeight={200}
        contentContainerStyle={styles.content}
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
            <View style={styles.box} key={i}>
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
  content: {
    backgroundColor: 'gray',
  },
});
```

### Limitations

- `paddingTop` of `contentContainerStyle` will be overriden if passed

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
