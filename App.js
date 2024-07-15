import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
function App() {
  return (
    <View style={styles.container}>
      <Text>boilerplate</Text>
    </View>
  );
}

export default App;
