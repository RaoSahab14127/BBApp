import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function UserList(props) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={props.uri}
          style={[styles.height40width40, styles.avatarImage]}
        />
      </View>
      <View style={styles.container2}>
        <View>
          <Text style={styles.whiteColor}>{props.name}</Text>
        </View>
        <View>
          <Text style={styles.whiteColor}>{props.label}</Text>
        </View>
      </View>
    </View>
  );
}

export default UserList;

const styles = StyleSheet.create({
  height40width40: {
    height: 40,
    width: 40,
  },
  avatarImage: {
    width: 60,
    height: 60,
    borderRadius: 75,
  },
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
  },
  container2: {
    justifyContent: 'center',
    marginLeft: 20,
  },
  whiteColor: {
    color: 'white',
  },
});
