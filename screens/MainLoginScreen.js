import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import APPConstants from './utils/APPConstants';
import PrimaryButton from './components/button';

const MainLoginScreen = () => (
  <View style={styles.container}>
    <ImageBackground
      source={APPConstants.mainloginbackgroundimage}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.div}>
        <View style={styles.div1}>
          <View>
            <Text style={styles.text}>BLAQUE</Text>
            <Text style={styles.text2}>movement</Text>
          </View>
        </View>
        <View style={{height: '15%'}}>
          <View style={styles.div2}>
            <View style={{width: '50%'}}>
              <PrimaryButton title="SIGN IN" />
            </View>
            <View style={{width: '50%'}}>
              <PrimaryButton title="SIGN IN" />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#fdf5e1',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  div: {
    flex: 1,
    width: '90%',
    marginHorizontal: 20,
  },
  div1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  div2: {
    backgroundColor: '#fdf5e1',
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text2: {
    color: '#fdf5e1',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  textColor: {
    color: '#fdf5e1',
  },
});

export default MainLoginScreen;
