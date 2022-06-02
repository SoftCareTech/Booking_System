
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  NotFound: undefined;
  Profile: { name: string; desc: string; amt: number; s: string; };
  Signin: undefined;
  Signup: undefined;
  Welcome: undefined;


  Payment: undefined;//
  Note: undefined;
  ViewAppointments: undefined;
};

export type AppointmentStackParamList = {
  Appointment: undefined; //make Appointment
  Payment: undefined;
  Note: undefined;
  ViewAppointments: undefined;
};

export type RootTabParamList = {
  Home: undefined;
  Search: undefined;
  Appointment: undefined; //make Appointment

  Profile: undefined;
};

export type RootStackScreenProps<Screen extends
  keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    Screen
  >;
/*
export type RootStackScreenProps<Screen extends
  keyof RootStackParamList> = CompositeScreenProps<
    BottomTabScreenProps<RootStackParamList, Screen>,
    NativeStackScreenProps<RootTabParamList>
  >;
*/
export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
