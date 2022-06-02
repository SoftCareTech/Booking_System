import { FlatList, ScrollView, StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { BtnDefault, BtnText, card } from '../components/btn';
import { color } from '../constants/Colors';
import React, { useState } from 'react';
import { Entypo, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Agenda } from 'react-native-calendars';
import { month } from './TabApointmentScreen';

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

export default function ViewAppointmentScreen() {

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
      { date: "2022-05-6", name: "Seun Olomide", time: '11:00AM', status: true },],

      '2022-05-03': [{ date: "2022-05-3", name: "Seun Olomide", time: '9:00AM', status: true },],

      '2022-05-12': [{ date: "2022-05-12", name: "Raphael", time: '9:00AM', status: true }]
    }
    const [selected, setSelected] = useState("2022-05-12")
    return <Agenda
      hideExtraDays={true}
      items={items}
      // Callback that gets called when items for a certain month should be loaded (month became visible)
      loadItemsForMonth={month => {
        // console.log('trigger items loading', month);
      }}
      // Callback that fires when the calendar is opened or closed
      onCalendarToggled={calendarOpened => {
        console.log("calendarOpened", calendarOpened);
      }}
      // Callback that gets called on day press
      onDayPress={day => {
        setSelected(day.dateString)
      }}
      // Callback that gets called when day changes while scrolling agenda list
      onDayChange={day => {
        // 
        console.log('day changed', day);
      }}
      selected={selected}
      pastScrollRange={50}
      futureScrollRange={50}
      renderItem={(item, firstItemInDay) => {
        return <View> <Item name={item?.name} time={item?.time} status={item?.status} />  </View>;
      }}
      renderDay={(day, item) => {
        return <View style={{ height: "100%", alignItems: "center", paddingEnd: 50, justifyContent: "space-around" }} >
          <MaterialCommunityIcons name="circle-slice-8" size={15} color={color.green} />
          <View style={{ height: "50%", width: 4, backgroundColor: color.green, }} />
        </View>

      }}
      // Specify how empty date content with no items should be rendered
      renderEmptyDate={() => {
        return <View />;
      }}
      // markedDates={{ '2022-04-15': { selected: true, marked: true }, }}


      renderEmptyData={() => {
        return <View><Text>`</Text></View>;
      }}
      // Specify your item comparison function for increased performance
      rowHasChanged={(r1, r2) => {
        return r1.text !== r2.text;
      }}
      firstDay={3}
      hideKnob={true}
      // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
      showClosingKnob={true} onRefresh={() => console.log('refreshing...')}
      refreshing={false}
      // Agenda theme
      theme={{
        agendaDayTextColor: 'yellow',
        agendaDayNumColor: 'green',
        agendaTodayColor: 'red',
        agendaKnobColor: 'blue'
      }}
      // Agenda container style
      style={{}}
    />
  }






  return (
    <View style={styles.container}>
      <Ionicons style={{ marginTop: 16 }} name="arrow-back-sharp" size={35} color="black" />
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



        {showCalender()}
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
  main: {
    flex: 1,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
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









