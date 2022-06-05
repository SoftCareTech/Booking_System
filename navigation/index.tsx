/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import * as React from 'react';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabHomeScreen from '../screens/TabHomeScreen';
import TabSearchScreen from '../screens/TabSearchScreen';
import TabAppointmentScreen from '../screens/MakeApointmentScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import PaymentScreen from '../screens/PaymentScreen';

import { RootStackParamList, RootStackScreenProps, RootTabParamList, RootTabScreenProps, AppointmentStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import TabProfileScreen from '../screens/TabProfileScreen';
import AppointmentDoneScreen from '../screens/AppointmentDone';
import ViewAppointmentScreen from '../screens/ViewAppointments';
import PaystackWebView from '../screens/PaystackWebViewScreen';
import ViewNurseScreen from '../screens/ViewNurseScreen';

/*eas whoiam
eas login
eas build:configure
eas build -p android --profile apk
*/
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const RootStack = createNativeStackNavigator<RootStackParamList>();
const StackAppointment = createNativeStackNavigator<AppointmentStackParamList>();

function RootNavigator() {
  const colorScheme = useColorScheme();
  return (
    <RootStack.Navigator initialRouteName={'Welcome'}  >
      <RootStack.Group screenOptions={{ presentation: 'modal', headerShown: false }}>
        <RootStack.Screen name="Welcome" component={WelcomeScreen} />
        <RootStack.Screen name="Signin" component={SigninScreen} />
        <RootStack.Screen name="Signup" component={SignupScreen} />
        <RootStack.Screen name="ViewNurse" component={ViewNurseScreen} />
        <RootStack.Screen name="PaystackWebView" component={PaystackWebView} />
      </RootStack.Group>

      <RootStack.Screen name="RootTab" component={BottomTabNavigator} options={{ headerShown: false }} />
      <RootStack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />

    </RootStack.Navigator>
  );
}
function AppointmentNavigator() {
  const colorScheme = useColorScheme();
  return (
    <StackAppointment.Navigator  >
      <StackAppointment.Group screenOptions={{ presentation: 'modal', headerShown: false }}>
        <StackAppointment.Screen name="MakeAppointment" component={TabAppointmentScreen} options={{ headerShown: false }} />
        <StackAppointment.Screen name="Payment" component={PaymentScreen} options={{ headerShown: false }} />
        <StackAppointment.Screen name="Note" component={AppointmentDoneScreen} options={{ headerShown: false }} />
        <StackAppointment.Screen name="ViewAppointments" component={ViewAppointmentScreen} options={{ headerShown: false }} />
      </StackAppointment.Group>
    </StackAppointment.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Search"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={TabHomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,

        })}
      />
      <BottomTab.Screen
        name="Search"
        component={TabSearchScreen}
        options={{
          headerShown: false,
          title: 'Search',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Appointment"
        component={AppointmentNavigator}
        options={{
          headerShown: false,
          title: 'Appointment',
          tabBarIcon: ({ color }) => <TabBarIcon name="file-text" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={TabProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}


function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}


