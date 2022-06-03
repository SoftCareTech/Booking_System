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
      Welcome: "welcome:name?",
      Signin: "signin",
      Signup: "/signup",
      PaystackWebView: "PaystackWebView:/url",

      Root: {
        screens: {
          Home: 'Home',
          Search: 'Search',
          Appointment: {
            screens: {
              Appointment: {
                screens: {
                  PaymentScreen: "Appointment",

                  Payment: "Payment",
                  Note: "Note",
                  ViewAppointments: "ViewAppointments"
                }
              }
            }
          }
        }
      },

      NotFound: '*',
    },
  },
};

export default linking;
