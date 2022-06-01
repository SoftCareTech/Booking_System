import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import PaystackWebView, { Paystack } from 'react-native-paystack-webview';
export default function PaymentScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Paystack
        paystackKey="pk_test_dc3af5c32c444790b0ec4d0a7fad69fb3fb4fb5e"
        amount={'25000.00'}
        billingEmail="gbengeraphael@gmail.com"
        activityIndicatorColor="green"
        onCancel={(e: any) => {
          // handle response here
          console.log("User cancel or ended", e)
        }}
        onSuccess={(res: any) => {
          console.log("On success", res)
          // handle response here
        }}
        autoStart={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});









