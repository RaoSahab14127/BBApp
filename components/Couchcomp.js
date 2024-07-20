import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';

function Couchcomp(props) {
  return (
    <View
      style={{
        padding: 20,
        borderColor: '#DDD',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
      }}>
      <View style={{paddingBottom: 10}}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>Exercise feedback</Text>
      </View>
      <View
        style={{
          borderBottomColor: '#DDD',
          borderBottomWidth: 1,
          paddingBottom: 10,
        }}>
        <Text>loremlorem loremsdfasas lorem lorem lorem lorem DDD</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 10,
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View>
          <Text>1 answers</Text>
        </View>
        <View>
          <Text>1 new</Text>
        </View>
      </View>
    </View>
  );
}

export default Couchcomp;
{
  /* <View>
<View>
  <Text>{props.Header}</Text>
</View>
<View>
  <Text>{props.Desc}</Text>
</View>
<View>
  <View>
    <Text>{props.Ans} answers</Text>
  </View>
  <View>
    <Text>{props.New} new</Text>
  </View>
</View>
</View> */
}
