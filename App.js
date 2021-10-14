/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Provider} from './src/context/AppContext';
import {font, image, color} from './res';
import {Icon} from './src/components';
import {
  Map,
  ProductLoop,
  Quests,
  Form,
  MyBalance,
  Notifications,
  Profile,
  Onboarding,
} from './src/screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function QuestsStacksScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Quests"
      screenOptions={{
        headerStyle: {
          backgroundColor: color.mainBlue,
          height: 10,
        },
        headerTitleStyle: {
          color: color.white,
          fontSize: 18,
          fontFamily: font.AppBold,
        },
        headerBackTitleStyle: {
          color: color.white,
        },
      }}>
      <Stack.Screen
        name="Quests"
        component={Quests}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Products" component={ProductLoop} />
      <Stack.Screen
        name="Form"
        component={Form}
        options={({navigation, route}) => ({
          headerTitle: 'Formulario',
          headerRightContainerStyle: {
            paddingRight: 16,
          },
          headerLeftContainerStyle: {
            paddingLeft: 16,
          },
        })}
      />
    </Stack.Navigator>
  );
}

function ProfileStacksScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: color.mainBlue,
          height: 100,
        },
        headerTitleStyle: {
          color: color.white,
          fontSize: 18,
          fontFamily: font.AppBold,
        },
        headerBackTitleStyle: {
          color: color.white,
        },
      }}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;
            if (route.name === 'Map') {
              iconName = image.icon.Zubale;
            } else if (route.name === 'Quests') {
              iconName = image.icon.Reservations;
            } else if (route.name === 'Balance') {
              iconName = image.icon.Balance;
            } else if (route.name === 'Notifications') {
              iconName = image.icon.Notifications;
            } else if (route.name === 'Profile') {
              iconName = image.icon.Profile;
            }
            return <Icon icon={iconName} isFocused={focused} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: color.white,
          inactiveTintColor: color.mediumGray,
          activeBackgroundColor: color.mainBlue,
          labelStyle: {
            fontSize: 11,
          },
        }}>
        <Tab.Screen name="Map" component={Map} options={{title: 'Tareas'}} />
        <Tab.Screen
          name="Balance"
          component={MyBalance}
          options={{title: 'Mi Dinero'}}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{title: 'Notificaciones'}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStacksScreen}
          options={{title: 'Perfil'}}
        />
        <Tab.Screen
          name="Quests"
          component={QuestsStacksScreen}
          options={{title: 'Reservas'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = EStyleSheet.create({});

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
