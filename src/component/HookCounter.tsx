import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
 import * as React from 'react';
 import { useState } from 'react';
 
  function HookCounter () {
    const [count, setCount] = useState(0)
    var fruitStateVariable = useState('banana'); // Returns a pair
    var fruit = fruitStateVariable[0]; // First item in a pair
    var setFruit = fruitStateVariable[1]; // Second item in a pair
    console.log('fruit'+fruit)

    function increment(){

      setCount(count+1)
    }


    function decrement(){

      setCount(count-1)
    }


    function incrementby5(){

      setCount(count+5)
      for(let i=0; i<5;i++) {
        setCount(count+1)
      }
    }


    return ( <View>
        <Text >{'Count => Hook UseState => ' + count }</Text>
        <TouchableOpacity onPress={()=>increment()} style={styles.buttonStyle}>
          <Text>Increment
          </Text>
                 </TouchableOpacity>
        <TouchableOpacity onPress={()=>decrement()} style={styles.buttonStyle}>
         
          <Text>Decrement
          </Text>
         
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>incrementby5()} style={styles.buttonStyle}>
          <Text>Increment by 5
          </Text>
        </TouchableOpacity>
    </View> );
 }

 const styles = StyleSheet.create({
  buttonStyle:{
    marginVertical:10,
    padding:10,
    backgroundColor:'#2424',
  }
  });
 
 export default HookCounter;