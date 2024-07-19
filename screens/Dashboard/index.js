import React from 'react';
import {Image, Text, View, ScrollView, FlatList} from 'react-native';
import Todolist from '../../components/Todolist';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import Consistency from '../../components/Consistency';
const bgimage = require('../../assets/morning.png');
const girl = require('../../assets/girl.png');
function Dashboard(props) {
  return (
    <View>
      <View>
        <Image
          source={bgimage}
          style={{height: 150, width: 'auto', backgroundColor: 'red'}}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{margin: 10, color: '#CC8600B0'}}>Todays To Do List</Text>
        <Text style={{margin: 10, color: '#CC8600B0'}}>May 19 2021</Text>
      </View>
      <View style={{backgroundColor: '#DCCAB632', paddingHorizontal: 20}}>
        <Todolist />
        <Todolist />
        <Todolist />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{margin: 10, color: '#CC8600B0'}}>
          My Blaque Movement Consistency
        </Text>
        <Text style={{margin: 10, color: '#CC8600B0'}}>May 19 2021</Text>
      </View>
      <View>
        <FlatList
          data={[1, 2, 4]}
          renderItem={({item}) => (
            <Consistency percent={100 / item} name={'hammad'} />
          )}
          keyExtractor={item => item}
          numColumns={3}
        />
      </View>
      <View>
        <Text style={{margin: 10, color: '#CC8600B0'}}>
          Recommendation for today
        </Text>
        <Image
          source={girl}
          style={{height: 170, width: 'auto', backgroundColor: 'red'}}
        />
      </View>
    </View>
  );
}

export default Dashboard;
