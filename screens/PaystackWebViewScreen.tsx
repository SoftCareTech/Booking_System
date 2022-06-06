import React, {useState} from 'react';
import { Dimensions, Pressable } from 'react-native';
import { WebView } from 'react-native-webview';
import { View, Text } from '../components/Themed';
import { RootStackScreenProps } from '../types';
export default function PaystackWebView({ route, navigation }: RootStackScreenProps<"PaystackWebView">) {
 const [isLoading, setLoading]=useState("Please wait a moment")
  const authorization_url = route.params.url
  console.log(authorization_url)
  const onNavigationStateChange = (state: { url: any; }) => {
    //callback from back end not available
    const callback_url = 'https://www.linkedin.com/in/aondoakula-raphael-gbenge-b616011b0/';// 
     if(state.loading==false)
setLoading("")
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

    <Text style={{ padding: 16, textAlign: "center" }}>{isLoading}</Text> 
  </View>)

}