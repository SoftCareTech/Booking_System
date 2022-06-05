import React, { useState } from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, TextInput } from 'react-native';

import { Text, View } from '../components/Themed';
import { BtnDefault, BtnText, card } from '../components/btn';
import { color } from '../constants/Colors';
import { Entypo, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Agenda } from 'react-native-calendars';
import { month } from './MakeApointmentScreen';
import { AppointmettStackScreenProps } from '../types';

const Item = ({ name = "Raph", time = "0:00", status = false }) => {

  return <View style={styles.item}>
    <View>
      <Text style={styles.item_name}>{name}</Text>
      <Text style={styles.item_time}>{time}</Text>
    </View>
    {status ? <Ionicons name="ios-checkbox" size={40} color="black" /> :
      <FontAwesome name="square" size={40} color="black" />}
  </View>
}

export default function ViewAppointmentScreen({ navigation }: AppointmettStackScreenProps<"ViewAppointments">) {

  const date = new Date()


  const showCalender = () => {

    const data = [
      { date: "2022-05-6", name: "Seun Olomide", time: '9:00AM', status: true },
      { date: "2022-05-6", name: "Seun Olomide", time: '11:00AM', status: true },
      { date: "2022-05-3", name: "Seun Olomide", time: '9:00AM', status: true },
      { date: "2022-05-8", name: "Seun Olomide", time: '9:00AM', status: true },
      { date: "2022-05-7", name: "Seun Olomide", time: '9:00AM', status: true },
      { date: "2022-05-12", name: "Raphael", time: '9:00AM', status: true }



    ]


    const items = {
      "2022-05-06": [{ date: "2022-05-6", name: "Seun Olomide", time: '9:00AM', status: true },
      { date: "2022-05-6", name: "Seun Olomide", time: '11:00AM', status: true },
      { date: "2022-05-6", name: "Seun Olomide", time: '9:00AM', status: true },
      { date: "2022-05-6", name: "Seun Olomide", time: '11:00AM', status: true }, { date: "2022-05-6", name: "Seun Olomide", time: '11:00AM', status: true },
      { date: "2022-05-6", name: "Seun Olomide", time: '9:00AM', status: true },
      { date: "2022-05-6", name: "Seun Olomide", time: '11:00AM', status: true },],

      '2022-05-03': [{ date: "2022-05-3", name: "Seun Olomide", time: '9:00AM', status: true },],

      '2022-05-12': [{ date: "2022-05-12", name: "Raphael", time: '9:00AM', status: true }]
    }
    const [selected, setSelected] = useState("2022-05-12")
    return <Agenda
      hideExtraDays={true}
      items={items}
      loadItemsForMonth={month => { }}
      onCalendarToggled={calendarOpened => {
        console.log("calendarOpened", calendarOpened);
      }}
      onDayPress={day => {
        setSelected(day.dateString)
      }}
      onDayChange={day => {
        console.log('day changed', day);
      }}
      selected={selected}
      pastScrollRange={50}
      futureScrollRange={50}
      renderItem={(item, firstItemInDay) => {
        return <View>
          <Item name={item?.name} time={item?.time} status={item?.status} />
        </View>
      }}
      renderDay={(day, item) => {
        return <View style={{
          height: "100%", alignItems: "center", paddingEnd: 50,
          justifyContent: "space-around"
        }} >
          <MaterialCommunityIcons name="circle-slice-8" size={15} color={color.green} />
          <View style={{ height: "50%", width: 4, backgroundColor: color.green, }} />
        </View>

      }}
      renderEmptyDate={() => {
        return <View />;
      }}
      renderEmptyData={() => {
        return <View><Text>`</Text></View>;
      }}
      rowHasChanged={(r1, r2) => {
        return r1.text !== r2.text;
      }}
      firstDay={3}
      hideKnob={false}
      showClosingKnob={true} onRefresh={() => console.log('refreshing...')}
      refreshing={false}
      theme={{
        backgroundColor: '#ffffff',
        agendaDayTextColor: 'yellow',
        agendaDayNumColor: 'green',
        agendaTodayColor: 'red',
        agendaKnobColor: 'blue'
      }}
      style={{ flex: 2, height: "100%", }}
    />
  }






  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.replace("RootTab", { screen: "Search" })}>
        <Ionicons style={{ marginTop: 16 }} name="arrow-back-sharp" size={35} color="black" />

      </Pressable>
      <View style={styles.main}>
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: "space-between" }} >
          <View style={{ paddingBottom: 4 }}>
            <View><Text style={[styles.item_time,
            { alignItems: "flex-start", alignSelf: 'flex-start' }]} >
              {month(date.getMonth())} {date.getDate()} {date.getFullYear()}</Text>
              <Text style={styles.title} >Today</Text></View>

          </View>
          <BtnDefault title={"+ Add"} style={[styles.btn, { borderRadius: 25, paddingHorizontal: 16 }]} onPress={undefined} />

        </View>
        <View style={{ flex: 1, }}>
          {showCalender()}
        </View>

        <View style={styles.conDis}>
          <BtnText style={styles.inputDis} title={"Add Appointment"} />
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
  main: {
    flex: 1,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputDis: {
    textAlign: 'center'
    , textAlignVertical: "center"
    , fontSize: 20, height: 50
    , width: '100%'

  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  item_name: {
    fontSize: 25,
    fontWeight: '500'
  },
  item_time: {
    fontSize: 18
  },

  btn: {

    flex: 1,
    borderWidth: 1,
    borderColor: color.blue,
    backgroundColor: color.blue,
    color: color.gray,
  },
  conDis: {
    marginVertical: 32,
    width: '100%', alignItems: "center", justifyContent:
      'center', borderWidth: 2, borderStyle: "dashed",
  },
});









