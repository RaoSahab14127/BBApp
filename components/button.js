import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fdf5e1',
    padding: 10,
    alignItems: 'center',
    borderRadius: 15,
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 15,
    fontStyle: 'normal',
  },
});

function PrimaryButton(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default PrimaryButton;
