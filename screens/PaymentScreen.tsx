import { ScrollView, StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import PaystackWebView, { Paystack } from 'react-native-paystack-webview';
import { BtnDefault, card } from '../components/btn';
import { color } from '../constants/Colors';
import React, { useState } from 'react';
import { Entypo, Ionicons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';

export default function PaymentScreen() {

  const merchantList = [
    { name: "Master Card" },
    { name: "Verve Card" },
    { name: "Vista Card" },
  ]
  const [merchant, setMerchant] = useState("Master Card")
  return (
    <View style={styles.container}>
      <Ionicons style={{ marginTop: 16 }} name="arrow-back-sharp" size={35} color="black" />
      <ScrollView>
        <View style={{ paddingTop: 16 }}>
          <Text style={[styles.text, { fontWeight: '700' }]}>Payment Method</Text>
          <View style={[styles.itemRow, { ...card, padding: 8, borderRadius: 10, backgroundColor: color.gray }]}>
            <MaterialIcons name="credit-card" size={40} color="black" />
            <TextInput style={styles.input} />
            <Entypo name="chevron-down" size={40} color="black" />
          </View>
          {/*<Dropdown
          style={styles.input}
          data={merchantList}
          maxHeight={250}
          labelField="name"
          valueField="name"
          value={merchant}
          placeholder={""}
          onChange={item => {
            setMerchant(item.name);
          }}
        />  */}
          <View style={styles.itemRow}>
            <Text style={styles.text}>Order</Text>
            <View style={[styles.itemRow, { flex: -1 }]}>
              <Entypo name="edit" size={24} color={color.blue} />
              <Text style={[styles.text, { color: color.blue }]}>Edit</Text>
            </View>
          </View>

          <View style={styles.itemRow}>
            <Text style={styles.text}>Nurse</Text>
            <Text style={styles.text}>Quantity</Text>
          </View>


          <View style={[card, styles.itemRow, { alignItems: 'center', paddingBottom: 16 }]}>
            <View style={styles.itemCol} >
              <Text style={styles.text}>Seun</Text>
              <Text style={styles.text}>250</Text>
            </View>
            <Text style={styles.text}>1</Text>
          </View>

          <View style={styles.itemRow}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>$250</Text>
          </View>

          <View style={styles.conDis}>
            <TextInput style={styles.inputDis} placeholder='Discount Code' />
          </View>

        </View>

      </ScrollView>


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
        autoStart={false}
      />

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <BtnDefault style={styles.pay} title={"Pay"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 32
  },

  itemCol: {
    flex: -1,
    justifyContent: "flex-start",
    alignItems: "flex-start"

  },

  itemRow: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginVertical: 12

  },
  text: {
    fontSize: 20,
  },
  inputDis: {
    textAlign: 'center'
    , textAlignVertical: "center"
    , fontSize: 20, height: 50
    , width: '100%'

  },
  input: {
    textAlign: 'center'
    , textAlignVertical: "center"
    , fontSize: 20, height: 50
    , backgroundColor: color.gray
  },
  conDis: {
    width: '100%', alignItems: "center", justifyContent:
      'center', borderWidth: 2, borderStyle: "dashed",
  },
  pay: {
    marginVertical: 8,
    backgroundColor: color.blue
  },
});









