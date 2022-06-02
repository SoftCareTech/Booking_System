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
      Welcome: {
        screens: {
          WelcomScreen: "Welcome"
        }
      },
      Profile: {
        screens: {
          TabProfileScreen: "Profile"
        }
      }
      ,
      Signin: {
        screens: {
          SigninScreen: "Signin"
        }
      },
      Signup: {
        screens: {
          SignupScreen: "Signup"
        }
      },

      Payment: {
        screens: {
          PaymentScreen: "Payment"
        }
      },
      Note: {
        screens: {
          NoteScreen: "Note"
        }
      },
      ViewAppointments: {
        screens: {
          ViewAppointmentsScreen: "ViewAppointments"
        }
      },

      Root: {
        screens: {
          Home: {
            screens: {
              TabHomeScreen: 'Home',
            },
          },
          Search: {
            screens: {
              TabSearchScreen: 'Search',
            },
          },
          Appointment: {
            screens: {
              AppointmentScreen: "Appointment"
            }
          },



        },
      },


      NotFound: '*',
    },
  },
};

export default linking;
