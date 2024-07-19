import {AnimatedCircularProgress} from 'react-native-circular-progress';
import React from 'react';
import {Image, Text, View} from 'react-native';

const imag = require('../assets/arrow-right.png');
function Todolist() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 30,
        marginVertical: 10,
      }}>
      <View>
        <AnimatedCircularProgress
          size={25}
          width={4}
          fill={80}
          tintColor="#CC8600BF"
        />
      </View>
      <View style={{width: '80%', overflow: 'hidden'}}>
        <Text>Task</Text>
      </View>
      <View>
        <Image source={imag} style={{height: 30, width: 30}} />
      </View>
    </View>
  );
}

export default Todolist;
