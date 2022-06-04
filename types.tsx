
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
///import   { StackScreenProps } from '@react-navigation/stack';
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  RootTab: NavigatorScreenParams<RootTabParamList> | undefined;
  NotFound: undefined;
  ViewNurse: { appId: string; name: string; desc: string; amt: number; };
  Signin: undefined;
  Signup: undefined;
  Welcome: undefined;
  PaystackWebView: { url: string }
};

export type AppointmentStackParamList = {
  MakeAppointment: { appId: string; amt: number };
  Payment: { appId: string; amt: number };
  Note: undefined;
  ViewAppointments: undefined;
};

export type RootTabParamList = {
  Home: undefined;
  Search: undefined;
  Appointment: NavigatorScreenParams<AppointmentStackParamList> | undefined;
  Profile: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList>
  = NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList>
  = CompositeScreenProps<BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>>;

export type AppointmettStackScreenProps<Screen extends keyof AppointmentStackParamList>
  = CompositeScreenProps<NativeStackScreenProps<AppointmentStackParamList, Screen>,
    CompositeScreenProps<BottomTabScreenProps<RootTabParamList>,
      NativeStackScreenProps<RootStackParamList>>>;
