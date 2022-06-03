
import img from '../assets/images/user1.png'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { BtnDefault, card } from '../components/btn';
import { color } from '../constants/Colors';
import { Image, SliderBase, SliderComponent, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Pressable } from 'react-native';
import { FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Agenda, Calendar } from 'react-native-calendars';
//import { Calendar } from 'react-native-paper-dates';
export const Profile1 = ({ style = null, src = null, name = "Aondohemba", sub = "Nurse", participant = "0" }) => {
  return <View style={style ? [styles.item, style] : styles.item}>
    {src ? <Image source={src}
      style={{ height: 100, width: 100, borderRadius: 10 }} /> :
      <View style={styles.item_ico_v} ><Text style={styles.item_ico_t}>{name[0]}</Text> </View>}
    <View style={styles.itemCol}>
      <Text style={styles.item_title}>{name}</Text>
      <Text style={styles.item_sub}>{sub}</Text>
      <View style={{ flexDirection: 'row', alignItems: "center" }}>
        <View style={{ ...card, flex: -1, backgroundColor: color.bgStar, borderRadius: 2 }}>
          <FontAwesome name="star" size={30} color={color.star} />
        </View>

        <View style={{ alignItems: "flex-start" }}>
          <Text style={styles.item_sub}>Rating</Text>
          <Text style={[styles.item_sub, { fontWeight: '700' }]}>4.75 out of 5</Text>
        </View>
      </View>
    </View>

  </View>
}


const Item = ({ src = null, title = "Cardiologist", sub = "Don Johnson" }) => <View style={{ width: '100%' }} >
  <View style={[styles.card_, { marginVertical: 8 }]}>
    <View style={{ flex: 1, backgroundColor: color.bg1, }}>
      <Text>{title}</Text>
      <Text>{sub}</Text>
    </View>
    <Image source={src} style={{ height: 24, width: 24, borderRadius: 24 }} />
  </View>
</View>
export const month = (i: number) => i === 0 ? "Jan" : i === 1 ? "Feb" : i === 2 ? "March" : i === 3 ? "Apr" :
  i === 4 ? "May" : i === 5 ? "Jun" : i === 6 ? "Jul" : i === 7 ? "Aug" :
    i === 8 ? "Sep" : i === 9 ? "Oct" : i === 10 ? "Nov" : i === 11 ? "Dec" : "none" + i

export default function TabAppointmentScreen() {
  const date = new Date()

  const showCalender = () => {

    const items = {
      "2022-05-06": [
        { date: "2022-05-15", title: "Cardiologist", time: '9:00AM', name: "Don Johnson", src: img },
        { date: "2022-05-16", title: "Cardiologist", time: '11:00AM', deesc: "true", src: null, },],

      '2022-05-13': [],

      '2022-05-12': [{
        date: "2022-05-12", title: "Cardiologist", time: '9:00AM',
        deesc: "Don Johnson", src: img
      }]
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
        return <View> <Item title={item?.title} time={item?.time}
          name={item?.name} src={item.src} />  </View>;
      }}
      renderDay={(day, item) => {
        return <View style={{ height: "100%", alignItems: "center", paddingEnd: 50, justifyContent: "space-around" }} >
          <Text>{item?.time}</Text>
        </View>

      }}
      // Specify how empty date content with no items should be rendered
      renderEmptyDate={() => {
        return <View />;
      }}
      // markedDates={{ '2022-04-15': { selected: true, marked: true }, }}

      renderKnob={() => <View style={{
        width: Dimensions.get('screen').width - 32,
        alignItems: "flex-start", flex: 1,
      }}><Text style={styles.title} >Shedule Today</Text></View>}
      renderEmptyData={() => {
        return <View style={{ backgroundColor: "blue", height: 2, width: "100%" }} />
      }}
      // Specify your item comparison function for increased performance
      rowHasChanged={(r1, r2) => {
        return r1.text !== r2.text;
      }}
      firstDay={3}
      hideKnob={false}
      // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
      showClosingKnob={true} onRefresh={() => console.log('refreshing...')}
      refreshing={false}
      // Agenda theme
      theme={{
        backgroundColor: '#ffffff',
        agendaDayTextColor: 'yellow',
        agendaDayNumColor: 'green',
        agendaTodayColor: 'red',
        agendaKnobColor: 'blue'
      }}
      // Agenda container style
      style={{
        flex: 2,
        borderColor: 'gray',
        minHeight: 350
      }}
    />
  }







  return (
    <View style={styles.container}>

      <View style={{ width: '100%', flexDirection: 'row', justifyContent: "space-between" }} >
        <View style={{ paddingBottom: 4 }}>
          <View><Text style={[styles.item_sub,
          { alignItems: "flex-start", alignSelf: 'flex-start' }]} >
            {month(date.getMonth())} {date.getDate()} {date.getFullYear()}</Text>
            <Text style={styles.title} >Today</Text></View>

        </View>
        <BtnDefault title={"+ Add"} style={[styles.btn, { borderRadius: 25, paddingHorizontal: 16 }]} />

      </View>
      <View style={{ width: '100%', flex: 1 }} >
        {showCalender()}
      </View>
      <View>
        <ScrollView
          showsVerticalScrollIndicator={Dimensions.get('screen').width >
            Dimensions.get('screen').height}>
          <View style={{ width: '100%' }} >
            <Text style={styles.title} >Reminder</Text>
            <Text>Don't foget to shedule fo upcoming appointment</Text>
          </View>
          <Profile1 name='Semo Olomide' name={"gbabaka"} style={{ flexDirection: "row-reverse" }} src={img} />
          <View style={styles.dateCon}>
            <Pressable onPress={() => {

            }}>
              <View style={{ flexDirection: "row", backgroundColor: "transparents" }}>
                <Ionicons name="md-calendar" size={24} color={color.blue} />
                <Text style={[styles.item_sub, { fontWeight: "700", }]}> Monday, Dec, 23</Text>
              </View>
            </Pressable>

            <View style={{ flexDirection: "row" }}>
              <Ionicons name="time" size={24} color={color.blue} />
              <Text style={[styles.item_sub, { fontWeight: "700", }]}> 12:00-13:00</Text>
            </View>
          </View>
          <View style={styles.actionCon}>
            <View style={{ flex: 1, marginRight: 8, }}>
              <BtnDefault title={"Shedule"} style={styles.btn} onPress={() => na} /></View>
            <View style={{ flex: 1, marginLeft: 8 }}>
              <BtnDefault style={[styles.btn, {
                color: color.blue, backgroundColor: "transparents"
              }]}
                title={"Cancel"} />
            </View>
          </View>
        </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16, paddingVertical: 32
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }, card_: {

    flexDirection: "row", backgroundColor: color.bg1,
    alignItems: "center", justifyContent: "space-between", padding: 8, borderRadius: 8
  },
  dateCon: {
    backgroundColor: color.gray
    , flexDirection: 'row',
    justifyContent: "space-between"
    , width: "100%"
    , padding: 8
  },
  actionCon: {
    flexDirection: "row", marginVertical: 8,
    justifyContent: 'space-between'
    , width: '100%'
  },

  btn: {

    flex: 1,
    borderWidth: 1,
    borderColor: color.blue,
    backgroundColor: color.blue,
    color: color.gray,
  },













  item: {
    ...card,
    flex: -1,
    width: "100%",
    flexDirection: "row"
    , paddingVertical: 8,
    borderRadius: 10
    , backgroundColor: color.white
  },
  itemCol: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 8,
    alignItems: "flex-start"

  },
  itemRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
    , alignItems: "center"
    , alignContent: "flex-start"


  },
  item_ico_v: {
    height: 100,
    width: 100,
    borderRadius: 10,
    backgroundColor: color.black,
    textAlignVertical: "center"
    , alignContent: "center",
    alignItems: "center",
    justifyContent: 'center'

  },
  item_ico_t: {
    textAlign: "center",
    fontSize: 35,
    color: color.gray,
    backgroundColor: color.black,
    textAlignVertical: "center"
    , alignContent: "center"

  },
  item_title: {
    fontSize: 20,
    fontWeight: '700',
    color: color.black,
    textAlignVertical: "center",
    textAlign: "center",
  },
  item_sub: {
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 18,
    color: color.black,
  },
});
