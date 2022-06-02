import { ScrollView, StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { BtnDefault, BtnText, card } from '../components/btn';
import { color } from '../constants/Colors';
import React, { useState } from 'react';
import { Entypo, Ionicons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';

export default function AppointmentDoneScreen() {

  const merchantList = [
    { name: "Master Card" },
    { name: "Verve Card" },
    { name: "Vista Card" },
  ]
  const [merchant, setMerchant] = useState("Master Card")
  return (
    <View style={styles.container}>
      <Ionicons style={{ marginTop: 16 }} name="arrow-back-sharp" size={35} color="black" />
      <View style={styles.itemCol}>
        <View style={styles.itemCol}>
          <View style={{ justifyContent: "center", alignItems: "center" }} >
            <Ionicons name="checkmark-circle-sharp" size={100} color={color.green} />
            <Text style={styles.text}>Done</Text>
          </View>
        </View>
        <View style={styles.conDis}>
          <BtnText style={styles.inputDis} title={"View Appointments"} />
        </View>

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
    flex: 1,
    justifyContent: "center",
    alignItems: "center"

  },

  text: {
    fontSize: 30,
    fontWeight: '500'
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
});









