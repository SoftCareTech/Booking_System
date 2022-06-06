
import React, { useRef, useState } from 'react';
import { Alert, Linking, Platform, Pressable, ScrollView, Dimensions, StyleSheet, TextInput } from 'react-native';

import { Text, View } from '../components/Themed';
import { BtnDefault, card } from '../components/btn';
import { color } from '../constants/Colors';
import { Entypo, Ionicons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';

import api from '../api/pay';


import { AppointmettStackScreenProps, RootStackScreenProps } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native-paper';


export default function PaymentScreen({ navigation, route }: AppointmettStackScreenProps<"Payment">) {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const amount = route.params.amt
  const quantity = 1
  const pay = async () => {
    try {
      setError("")
      if (loading) return
      setLoading(true)
      const jsonValue = await AsyncStorage.getItem('credential')
      const data = jsonValue != null ? JSON.parse(jsonValue) : null;
      let email = "goodemail@gmail.com";
      if (data != null) { email = data.email }
  
console.log(amount)
     const result = await api.get("/pay/:" + email + "/" + amount)

      const authorization_url = result.data.data.authorization_url// 'https://checkout.paystack.com/f1xbjc08qve0zka';
       setLoading(false)
;       if (Platform.OS === 'web') {
        const supported = await Linking.canOpenURL(authorization_url);
        if (supported) {
          navigation.replace("RootTab", { screen: "Appointment", params: { screen: 'Note' } })
          await Linking.openURL(authorization_url);
        } else {
          Alert.alert(`Unableto open this URL: ${authorization_url}`);
        }
      }
      else
        navigation.navigate("PaystackWebView", { url: authorization_url })
    } catch (e) {
      setError("Error ocurred")
      setLoading(false)
      console.log(e)
    }
  }
  const merchantList = [
    { name: "Master Card" },
    { name: "Verve Card" },
    { name: "Vista Card" },
  ]
  const [merchant, setMerchant] = useState("Master Card")
  const [errorMsg, setErrorMsg] = useState("")

  return (
    <View style={styles.container}>

      <Pressable onPress={() => navigation.jumpTo("Search")}>
        <Ionicons style={{ marginTop: 16 }} name="arrow-back-sharp" size={35} color="black" />

      </Pressable>
      {loading ? <View>
        <Text style={{
          textAlign: "center", fontSize: 30, color: color.blue
        }}>Loading </Text>
        <ActivityIndicator size={"large"} color={color.blue} />
      </View> : null}
      <ScrollView showsVerticalScrollIndicator={Platform.OS === "web" ?
        Dimensions.get("screen").width > 400 : false}
        style={{ paddingBottom: 32 }}>
        <View style={{ paddingTop: 16 }}>
          <Text style={[styles.text, { fontWeight: '700' }]}>Payment Method</Text>
          <View style={[styles.itemRow, { ...card, padding: 8, borderRadius: 10, backgroundColor: color.gray }]}>
            <MaterialIcons name="credit-card" size={40} color="black" />

            <Dropdown
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
              iconStyle={{ height: 40, width: 40 }}
            />

          </View>

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
              <Text style={styles.text}>${amount}</Text>
            </View>
            <Text style={styles.text}>1</Text>
          </View>

          <View style={styles.itemRow}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>${amount * quantity}</Text>
          </View>

          <View style={styles.conDis}>
            <TextInput style={styles.inputDis} placeholder='Discount Code' />
          </View>

        </View>

      </ScrollView >
      <Text style={{
        width: "100%", color: "red", alignSelf: "center", textAlign: 'center',
        justifyContent: "center", alignItems: "center",
      }}>{error}</Text>
      <Text style={styles.inputDis} > {errorMsg}</Text>


      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <BtnDefault style={styles.pay} title={"Pay"}
          onPress={() => pay()} />
      </View>
    </View >
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
    flex: 2,
    fontSize: 20, height: 50
    , backgroundColor: color.gray

  },
  conDis: {
    width: '100%', alignItems: "center", justifyContent:
      'center', borderWidth: 2, borderStyle: "dashed",
  },
  pay: {
    marginTop: 8,
    backgroundColor: color.blue
    , marginBottom: 16
  },
});









