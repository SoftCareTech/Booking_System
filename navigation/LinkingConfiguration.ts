/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Welcome: "welcome/:name?",
      Signin: "signin",
      Signup: "signup",
      ViewNurse: "view_nurse/:appId?/:name/:desc/:amt",
      PaystackWebView: "paystackweb/:url",
      RootTab: {
        screens: {
          Home: 'home',
          Search: 'search',
          Appointment: {
            screens: {
              MakeAppointment: "make_appointment/:appId:amt?",
              Payment: "payment/:appId/:amt?",
              Note: "done_appointment",
              ViewAppointments: "view_appointments"
            }
          }

        }
      },

      NotFound: '*',
    },
  },
};

export default linking;
