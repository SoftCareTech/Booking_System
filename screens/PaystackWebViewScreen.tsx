import React from 'react';
import { Dimensions, Pressable } from 'react-native';
import { WebView } from 'react-native-webview';
import { View, Text } from '../components/Themed';
import { RootStackScreenProps } from '../types';
export default function PaystackWebView({ route, navigation }: RootStackScreenProps<"PaystackWebView">) {

  const authorization_url = route.params.url
  console.log(authorization_url)
  const onNavigationStateChange = (state: { url: any; }) => {
    //callback from back end not available
    const callback_url = 'https://www.linkedin.com/in/aondoakula-raphael-gbenge-b616011b0/';// 

    const { url } = state;
    if (!url) return;
    if (url === 'https://standard.paystack.co/close') {
      navigation.replace("RootTab", { screen: "Appointment", params: { screen: 'Note' } })
    }
    if (url.includes(callback_url)) {
      // get transaction reference from url and verify transaction, then redirect
      // const redirectTo = 'window.location = "' + callback_url + '"';
      // this.webview.injectJavaScript(redirectTo);
      console.log("Move back no verification")
      navigation.replace("RootTab", { screen: "Appointment", params: { screen: 'Note' } })
    }
    console.log("State Change")
  };

  return (<View style={{ flex: 1 }}><WebView
    style={{ height: "95%", width: "100%", marginVertical: 32, flex: 2 }}
    source={{ uri: authorization_url }}
    onNavigationStateChange={onNavigationStateChange} />
    <Pressable onPress={() => navigation.replace("RootTab",
      { screen: "Appointment", params: { screen: 'Note' } })}>

    <Text style={{ padding: 16, textAlign: "center" }}>Note if refernce is used you can purchased again, implenting
      the backend for query refernce pin will remove. Press on this is any error ocuured to moe next</Text>
    </Pressable>
  </View>)

}