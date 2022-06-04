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
      PaystackWebView: "paystackweb/:url",
      RootTab: {
        screens: {
          Home: 'home',
          Search: 'search',
          Appointment: {
            screens: {
              MakeAppointment: "make_appointment",
              Payment: "payment",
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
