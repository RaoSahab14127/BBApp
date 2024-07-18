import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import LoginScreen from '../screens/LoginScreen';
import MainLoginScreen from '../screens/MainLoginScreen';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const img = require('../assets/profile.png');
const menu = require('../assets/menu.png');
const logout = require('../assets/out.png');
const cross = require('../assets/x-mark.png');
const noti = require('../assets/subscribe.png');
function CustomDrawerContent(props) {
  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image source={logout} style={{height: 40, width: 40}} />
        </TouchableOpacity>
        <Text style={{color: 'white', marginVertical: 20}}>MENU</Text>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image source={cross} style={{height: 40, width: 40}} />
        </TouchableOpacity>
      </View>
      <View style={styles.userAvatar}>
        <Image source={img} resizeMode="cover" style={styles.avatarImage} />
        <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>
          Eshaal
        </Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <LinearGradient
        colors={['orange', 'yellow']} // Same gradient for footer
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 40,
          paddingVertical: 20,
          backgroundColor: 'yellow',
        }}>
        <Text style={{color: 'white'}}>Complete your intake screen to</Text>
        <Text style={{color: 'white'}}>personalize your plan!</Text>
      </LinearGradient>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function DrawerGroup() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={({navigation}) => ({
        headerRight: props => (
          <TouchableOpacity
            onPress={() => navigation.getParent().openDrawer('RightDrawer')}>
            <Image
              source={noti}
              style={{height: 40, width: 40, marginLeft: 5}}
            />
          </TouchableOpacity>
        ),
        headerLeft: props => (
          <TouchableOpacity onPress={navigation.toggleDrawer}>
            <Image
              source={menu}
              style={{height: 40, width: 40, marginLeft: 5}}
            />
          </TouchableOpacity>
        ),
        drawerStyle: {
          backgroundColor: '#403935',
          width: '75%',
        },
        headerTitleAlign: 'center',
        drawerLabelStyle: {
          width: '100%',
        },
        drawerItemStyle: {
          height: 60,
          justifyContent: 'center',
        },
        drawerActiveBackgroundColor: '#DCCAB6',
        drawerActiveTintColor: '#403935',
        drawerInactiveTintColor: 'white',
      })}>
      <Drawer.Screen name="MY DASHBOARD" component={MainLoginScreen} />
      <Drawer.Screen name="MY BLAQUE MOVEMENT" component={LoginScreen} />
      <Drawer.Screen name="TALK TO A COACH" component={LoginScreen} />
      <Drawer.Screen name="MY PROGRESS" component={LoginScreen} />
      <Drawer.Screen name="CALENDER" component={LoginScreen} />
      <Drawer.Screen name="GROUP CHAT" component={LoginScreen} />
    </Drawer.Navigator>
  );
}
// right
function CustomDrawerContentR(props) {
  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <LinearGradient
        colors={['orange', 'yellow']} // Same gradient for footer
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 40,
          paddingVertical: 20,
          backgroundColor: 'yellow',
        }}>
        <Text style={{color: 'white'}}>Complete your intake screen to</Text>
        <Text style={{color: 'white'}}>personalize your plan!</Text>
      </LinearGradient>
    </View>
  );
}

const RightDrawer = createDrawerNavigator();

function RightDrawerScreen() {
  return (
    <RightDrawer.Navigator
      screenOptions={{drawerPosition: 'right'}}
      drawerContent={props => <CustomDrawerContentR {...props} />}>
      <RightDrawer.Screen
        options={{headerShown: false}}
        name="RightDrawer"
        component={DrawerGroup}
        id="RightDrawer"
      />
    </RightDrawer.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <RightDrawerScreen />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  userAvatar: {
    paddingVertical: '10%',
    alignItems: 'center',
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 75,
  },
});

export default Navigation;
