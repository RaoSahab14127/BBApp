//All imports in one jaga
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import MainLoginScreen from '../screens/MainLoginScreen';
import LinearGradient from 'react-native-linear-gradient';
import APPConstants from '../utils/APPConstants';
import UserList from '../components/UserList.js';
import Dashboard from '../screens/Dashboard/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TalktoCouch from '../screens/TalktoCouch/index.js';
// All const in aik jaga
const img = require('../assets/profile.png');
const menu = require('../assets/menu.png');
const logout = require('../assets/out.png');
const cross = require('../assets/x-mark.png');
const noti = require('../assets/subscribe.png');
const bgimage = require('../assets/morning.png');
const LOGO = require('../assets/LOGO.png');
const Drawer = createDrawerNavigator();
const RightDrawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const StackCouch = createNativeStackNavigator();

//my blaque movement
function CouchStack() {
  return (
    <StackCouch.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: () => (
          <Text
            style={{
              fontFamily: 'ibarra-regular',
              border: 0,
            }}>
            TALK TO A COACH
          </Text>
        ),
      }}>
      <StackCouch.Screen
        name="hammad"
        options={{
          headerShadowVisible: false,
          shadowOffset: {height: 0, width: 0},
        }}
        component={TalktoCouch}
      />
    </StackCouch.Navigator>
  );
}

//dash stack
function DashStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="hammad"
        options={{headerShown: false}}
        component={Dashboard}
      />
    </Stack.Navigator>
  );
}

// All function in one jaga
function CustomDrawerContent(props) {
  return (
    <View style={[styles.flexone, styles.justicontentbetween]}>
      <View
        style={[
          styles.alignitemscenter,
          styles.justicontentbetween,
          styles.flexdirectionrow,
          styles.marginHorizontal10,
        ]}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image source={logout} style={styles.height40width40} />
        </TouchableOpacity>
        <Text style={{color: APPConstants.white, marginVertical: 20}}>
          {APPConstants.Menu}
        </Text>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image source={cross} style={styles.height40width40} />
        </TouchableOpacity>
      </View>
      <View style={styles.userAvatar}>
        <Image
          source={img}
          resizeMode={APPConstants.cover}
          style={styles.avatarImage}
        />
        <Text style={styles.textstyleboldwhitetwozerosize}>Eshaal</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <LinearGradient
        colors={[APPConstants.orange, APPConstants.yellow]}
        style={[
          styles.alignitemscenter,
          styles.justicontentcenter,
          styles.paddding40horizontal,
          styles.padding20Vertical,
          styles.bgColourYellow,
        ]}>
        <Text style={styles.colorWhite}>{APPConstants.drawerdesone}</Text>
        <Text style={styles.colorWhite}>{APPConstants.drawerdesTwo}</Text>
      </LinearGradient>
    </View>
  );
}

function DrawerGroup() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={({navigation}) => ({
        headerRight: props => (
          <TouchableOpacity
            onPress={() =>
              navigation.getParent().openDrawer(APPConstants.RightDrawer)
            }>
            <Image
              source={noti}
              style={[styles.maginleftfive, styles.height40width40]}
            />
          </TouchableOpacity>
        ),
        headerLeft: props => (
          <TouchableOpacity onPress={navigation.toggleDrawer}>
            <Image
              source={menu}
              style={[styles.maginleftfive, styles.height40width40]}
            />
          </TouchableOpacity>
        ),
        drawerStyle: [styles.drawerbackgroundcolour, styles.width75per],
        headerTitleAlign: APPConstants.center,
        drawerLabelStyle: styles.width100per,
        drawerItemStyle: [styles.justicontentcenter, styles.height60],
        drawerActiveBackgroundColor: APPConstants.drawerActiveBackgroundColor,
        drawerActiveTintColor: APPConstants.drawerActiveTintColor,
        drawerInactiveTintColor: APPConstants.white,
        headerStatusBarHeight: 30,
        headerTitle: props => (
          <Image
            source={LOGO}
            style={{
              height: 150,
              width: 150,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        ),
      })}>
      <Drawer.Screen name="MY DASHBOARD" component={DashStack} />
      <Drawer.Screen name="MY BLAQUE MOVEMENT" component={CouchStack} />
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
    <View style={{flex: 1, justifyContent: 'flex-start'}}>
      <View
        style={[
          styles.alignitemscenter,
          styles.justicontentbetween,
          styles.flexdirectionrowreverse,
          styles.marginHorizontal10,
        ]}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image source={logout} style={styles.height40width40} />
        </TouchableOpacity>
        <Text style={{color: APPConstants.white, marginVertical: 20}}>
          {APPConstants.notification}
        </Text>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image source={cross} style={styles.height40width40} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={[styles.colorWhite, styles.marginVertical5]}>
          Morning movement
        </Text>
        <Image source={bgimage} style={{height: 150, width: 'auto'}} />
      </View>
      <View>
        <Text
          style={[
            styles.whitecolor,
            styles.maginleftfive,
            styles.marginTopfive,
          ]}>
          Talk to a coach
        </Text>
        <UserList uri={img} name="anabia" label="lorem..." />
      </View>
      <View>
        <Text
          style={[
            styles.whitecolor,
            styles.maginleftfive,
            styles.marginTopfive,
          ]}>
          Group messages
        </Text>
        <FlatList
          data={[1, 2, 3]}
          renderItem={({item}) => (
            <TouchableOpacity>
              <UserList uri={img} name="mughees" label="lorem lespem" />
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{gap: 10}}
          numColumns={1}
        />
      </View>
    </View>
  );
}

function RightDrawerScreen() {
  return (
    <RightDrawer.Navigator
      screenOptions={({navigation}) => ({
        drawerStyle: [styles.drawerbackgroundcolour, styles.width75per],
        headerTitleAlign: APPConstants.center,
        headerStatusBarHeight: 500,
        drawerLabelStyle: styles.width100per,
        drawerItemStyle: [styles.justicontentcenter, styles.height60],
        drawerActiveBackgroundColor: APPConstants.drawerActiveBackgroundColor,
        drawerActiveTintColor: APPConstants.drawerActiveTintColor,
        drawerInactiveTintColor: APPConstants.white,
        drawerPosition: APPConstants.right,
      })}
      drawerContent={props => <CustomDrawerContentR {...props} />}>
      <RightDrawer.Screen
        options={styles.headershownfalse}
        name={APPConstants.RightDrawer}
        component={DrawerGroup}
        id={APPConstants.RightDrawer}
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

//all Styles

const styles = StyleSheet.create({
  flexone: {
    flex: 1,
  },
  justicontentbetween: {
    justifyContent: 'space-between',
  },
  alignitemscenter: {
    alignItems: 'center',
  },
  userAvatar: {
    paddingVertical: '10%',
    alignItems: 'center',
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 75,
  },
  flexdirectionrow: {
    flexDirection: 'row',
  },
  flexdirectionrowreverse: {
    flexDirection: 'row-reverse',
  },
  marginHorizontal10: {
    marginHorizontal: 10,
  },
  height40width40: {
    height: 40,
    width: 40,
  },
  whitecolor: {
    color: 'white',
  },
  fontSize20: {
    fontSize: '20',
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  textstyleboldwhitetwozerosize: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  paddding40horizontal: {
    paddingHorizontal: 40,
  },
  padding20Vertical: {
    paddingVertical: 20,
  },
  justicontentcenter: {
    justifyContent: 'center',
  },
  bgColourYellow: {
    backgroundColor: 'yellow',
  },
  colorWhite: {
    color: 'white',
  },
  maginleftfive: {
    marginLeft: 5,
  },
  drawerbackgroundcolour: {
    backgroundColor: '#403935',
  },
  width75per: {
    width: '75%',
  },
  width100per: {
    width: '100%',
  },
  height60: {
    height: 60,
  },
  headershownfalse: {
    headerShown: false,
  },
  marginTopfive: {
    marginTop: 5,
  },
  marginVertical5: {
    marginVertical: 5,
  },
});

export default Navigation;
