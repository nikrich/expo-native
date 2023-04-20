import { StyleSheet, Text, View } from 'react-native';

import * as ExpoNative from 'expo-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoNative.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
