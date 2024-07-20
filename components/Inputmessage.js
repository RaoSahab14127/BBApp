import React from 'react';
import {Image, TextInput, View} from 'react-native';
const img = require('../assets/paper-pin.png');
const img2 = require('../assets/message.png');
function Inputmessage() {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'start',
        borderTopWidth: 1,
        borderTopColor: '#DDD',
        backgroundColor: 'white',
      }}>
      <View>
        <Image
          source={img}
          resizeMode="cover"
          style={{height: 25, width: 25, marginTop: 10}}
        />
      </View>
      <View
        style={{
          width: '80%',
          maxHeight: 100,
          overflow: 'scroll',
          justifyContent: 'center',
          alignItems: 'start',
        }}>
        <TextInput multiline style={{maxHeight: 100, overflow: 'scroll'}} />
      </View>
      <View>
        <Image
          source={img2}
          resizeMode="cover"
          style={{height: 25, width: 25, marginTop: 10}}
        />
      </View>
    </View>
  );
}

export default Inputmessage;
