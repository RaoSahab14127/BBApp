import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';

function Primaryinput(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <Input
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
        secureTextEntry={props.secure}
        placeholder={props.placeholder}
        inputMode={props.type}
        underlineColorAndroid="transparent"
      />
    </View>
  );
}

export default Primaryinput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 15,
    backgroundColor: '#292929',
  },
  text: {
    fontSize: 14,
    marginLeft: 15,
    color: '#FFE',
    paddingTop: 5,
  },
  inputContainer: {
    borderBottomWidth: 0,
    paddingBottom: '0',
  },
  input: {
    color: '#FFE',
    fontSize: 16,
    marginBottom: -30,
  },
});
