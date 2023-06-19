/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ClassCounter from './component/ClassCounter';
import HookCounter from './component/HookCounter';

function App() {

  return (
    <View style={styles.rootViewStyle}>
     <HookCounter/>
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
