/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App() {

  return (
    <View style={styles.rootViewStyle}>
      <Text>
        "Hellow World"
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
rootViewStyle:{
  justifyContent:'center',
  alignSelf:'center',
  flex:1
}
});

export default App;
