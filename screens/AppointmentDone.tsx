
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';
import { BtnDefault, BtnText, card } from '../components/btn';
import { color } from '../constants/Colors';
import { Ionicons, } from '@expo/vector-icons';
import { AppointmettStackScreenProps } from '../types';

export default function AppointmentDoneScreen({ navigation }: AppointmettStackScreenProps<"Note">) {

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.replace("RootTab", { screen: "Search" })}>
        <Ionicons style={{ marginTop: 16 }} name="arrow-back-sharp" size={35} color="black" />
      </Pressable>
      <View style={styles.itemCol}>
        <View style={styles.itemCol}>
          <View style={{ justifyContent: "center", alignItems: "center" }} >
            <Ionicons name="checkmark-circle-sharp" size={100} color={color.green} />
            <Text style={styles.text}>Done</Text>
          </View>
        </View>
        <View style={styles.conDis}>
          <BtnText style={styles.inputDis} title={"View Appointments"}
            onPress={() => navigation.replace("RootTab", { screen: "Appointment", params: { screen: 'ViewAppointments' } })} />
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









