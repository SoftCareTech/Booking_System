import React from 'react';
import { Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { View } from '../components/Themed';
export default function PaystackWebView() {

  const authorization_url = 'https://checkout.paystack.com/balhibqcs4jxnvs';

  return <View>
    <WebView
      style={{ height: "100%", width: "100%" }}
      source={{ uri: authorization_url }} />;

  </View>
}