
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
  PaystackWebView: { url: string }
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
  Appointment: NavigatorScreenParams<AppointmentStackParamList> | undefined;

  Profile: undefined;
};

export type RootStackScreenProps<Screen extends
  keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    Screen>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type AppointmettStackScreenProps<Screen extends keyof AppointmentStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<AppointmentStackParamList, Screen>,
  BottomTabScreenProps<RootStackParamList>
>;
