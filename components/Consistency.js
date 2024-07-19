import React from 'react';
import {Text, View} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

function Consistency(props) {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: '#FFCAB680',
        paddingHorizontal: 12,
      }}>
      <AnimatedCircularProgress
        size={110}
        width={6}
        fill={props.percent}
        tintColor="#CC8600BF"
        backgroundColor="lightgrey">
        {fill => (
          <View style={{paddingHorizontal: 3}}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text>{props.percent}%</Text>
              <Text>{props.name}</Text>
            </View>
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  );
}

export default Consistency;
