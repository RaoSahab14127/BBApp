import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';

function Couchcomp(props) {
  return (
    <View>
      <View>
        <Text>Exercise feedback</Text>
      </View>
      <View>
        <Text>
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem
        </Text>
      </View>
      <View>
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
