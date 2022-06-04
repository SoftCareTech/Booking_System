import React from 'react';
import { Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
export default function PaystackWebView({ route, navigation }: RootStackScreenProps<"PaystackWebView">) {

  const authorization_url = route.params.url
  console.log(authorization_url)
  const onNavigationStateChange = (state: { url: any; }) => {
    //callback from back end not available
    const callback_url = 'https://www.linkedin.com/in/aondoakula-raphael-gbenge-b616011b0/';// 

    const { url } = state;
    if (!url) return;
    if (url === callback_url) {
      // get transaction reference from url and verify transaction, then redirect
      // const redirectTo = 'window.location = "' + callback_url + '"';
      // this.webview.injectJavaScript(redirectTo);
      console.log("Move back no verification")
      navigation.replace("RootTab", { screen: "Appointment", params: { screen: 'Note' } })
    }
    console.log("State Change")
  };

  return (<WebView
    style={{ height: "100%", width: "100%" }}
    source={{ uri: authorization_url }}
    onNavigationStateChange={onNavigationStateChange} />)

}