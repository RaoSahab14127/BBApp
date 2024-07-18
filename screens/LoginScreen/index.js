import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import APPConstants from '../../utils/APPConstants';
import PrimaryButton from '../../components/button';
import Primaryinput from '../../components/input';
import {Link} from '@react-navigation/native';
import {Checkbox} from 'react-native-paper';
const LoginScreen = () => (
  <View style={styles.container}>
    <ImageBackground
      source={APPConstants.loginbackgroundimage}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.div}>
        <View style={styles.div1}>
          <View>
            <Text style={styles.text}>BLAQUE</Text>
            <Text style={styles.text2}>movement</Text>
          </View>
          <View>
            <Text style={styles.text2}>SIGN IN</Text>
          </View>
        </View>
        <View style={styles.div2}>
          <Primaryinput
            title={'Email'}
            placeholder={'abc@gmail.com'}
            secure={false}
            type={'email'}
          />
          <Primaryinput
            title={'Password'}
            placeholder={'******'}
            secure={true}
            type={'text'}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Checkbox />
              <Text style={styles.textColor}>Remember me</Text>
            </View>

            <Link to={''} style={{color: '#Fd8'}}>
              Forgot password?
            </Link>
          </View>
          <PrimaryButton title="SIGN IN" />
          <Text style={{marginBottom: -40, color: '#fdf5e1'}}>
            Sign in using
          </Text>
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
    justifyContent: 'space-evenly',
  },
  div2: {
    flex: 2,
    alignItems: 'center',
    width: 'auto',
    justifyContent: 'space-evenly',
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

export default LoginScreen;
