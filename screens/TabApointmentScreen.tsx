
import img from '../assets/images/user1.png'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { BtnDefault, card } from '../components/btn';
import { color } from '../constants/Colors';
import { Image, SliderBase, SliderComponent, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Calendar } from 'react-native-calendars';
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



const month = (i: number) => i === 0 ? "Jan" : i === 1 ? "Feb" : i === 2 ? "March" : i === 3 ? "Apr" :
  i === 4 ? "May" : i === 5 ? "Jun" : i === 6 ? "Jul" : i === 7 ? "Aug" :
    i === 8 ? "Sep" : i === 9 ? "Oct" : i === 10 ? "Nov" : i === 11 ? "Dec" : "none" + i

export default function TabAppointmentScreen() {
  const date = new Date()

  const showCalender = () => {
    <Calendar
      current={date.toString()}
      // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
      minDate={date.setDate(date.getDate() - 3).toString()}
      // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
      maxDate={date.setDate(date.getDate() + 3).toString()}
      // Handler which gets executed on day press. Default = undefined
      onDayPress={day => {
        console.log('selected day', day);
      }}
      // Handler which gets executed on day long press. Default = undefined
      onDayLongPress={day => {
        console.log('selected day', day);
      }}
      // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
      monthFormat={'yyyy MM'}
      // Handler which gets executed when visible month changes in calendar. Default = undefined
      onMonthChange={month => {
        console.log('month changed', month);
      }}
      // Hide month navigation arrows. Default = false
      hideArrows={true}
      // Replace default arrows with custom ones (direction can be 'left' or 'right')
      renderArrow={direction => <Arrow />}
      // Do not show days of other months in month page. Default = false
      hideExtraDays={true}
      // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
      // day from another month that is visible in calendar page. Default = false
      disableMonthChange={true}
      // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
      firstDay={1}
      // Hide day names. Default = false
      hideDayNames={true}
      // Show week numbers to the left. Default = false
      showWeekNumbers={true}
      // Handler which gets executed when press arrow icon left. It receive a callback can go back month
      onPressArrowLeft={subtractMonth => subtractMonth()}
      // Handler which gets executed when press arrow icon right. It receive a callback can go next month
      onPressArrowRight={addMonth => addMonth()}
      // Disable left arrow. Default = false
      disableArrowLeft={true}
      // Disable right arrow. Default = false
      disableArrowRight={true}
      // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
      disableAllTouchEventsForDisabledDays={true}
      // Replace default month and year title with custom one. the function receive a date as parameter
      renderHeader={date => {
        /*Return JSX*/
      }}
      // Enable the option to swipe between months. Default = false
      enableSwipeMonths={true}
    />
  }







  return (
    <View style={styles.container}>

      <View style={{ width: '100%', flexDirection: 'row', justifyContent: "space-between" }} >
        <View>
          <View><Text style={[styles.item_sub,
          { alignItems: "flex-start", alignSelf: 'flex-start' }]} >
            {month(date.getMonth())} {date.getDate()} {date.getFullYear()}</Text>
            <Text style={styles.title} >Today</Text></View>
          {showCalender()}
        </View>
        <BtnDefault title={"+ Add"} style={[styles.btn, { borderRadius: 25, paddingHorizontal: 16 }]} />

        {//<Calendar date={new Date()} /> paper
        }

      </View>
      <View style={{ width: '100%' }} >
        <Text style={styles.title} >Shedule Today</Text>
        <Text>09:00</Text>
        <View style={{ backgroundColor: "blue", height: 2, width: "100%" }} />
        <Text>10:00</Text>
        <View style={styles.card_}>
          <View style={{ flex: 1, backgroundColor: color.bg1, }}>
            <Text>Cardiologist</Text>
            <Text>Don Johnson</Text>
          </View>
          <Image source={img} style={{ height: 24, width: 24, borderRadius: 24 }} />
        </View>
        <Text>11:00</Text>

      </View>

      <View style={{ width: '100%' }} >
        <Text style={styles.title} >Reminder</Text>
        <Text>Don't foget to shedule fo upcoming appointment</Text>
      </View>
      <Profile1 name='Semo Olomide' desc={"gbabaka"} style={{ flexDirection: "row-reverse" }} src={img} />
      <View style={styles.dateCon}>
        <View style={{ flexDirection: "row", backgroundColor: "transparents" }}>
          <FontAwesome name='calendar-o' size={24} />
          <Text style={[styles.item_sub, { fontWeight: "700", }]}> Monday, Dec, 23</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome name='houzz' size={24} />
          <Text style={[styles.item_sub, { fontWeight: "700", }]}> 12:00-13:00</Text>
        </View>
      </View>
      <View style={styles.actionCon}>
        <View style={{ flex: 1, marginRight: 8, }}>
          <BtnDefault title={"Shedule"} style={styles.btn} /></View>
        <View style={{ flex: 1, marginLeft: 8 }}>
          <BtnDefault style={[styles.btn, {
            color: color.blue, backgroundColor: "transparents"
          }]}
            title={"Cancel"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16, paddingVertical: 32
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }, card_: {
    flexDirection: "row", backgroundColor: color.bg1,
    alignItems: "center", justifyContent: "space-between", padding: 8, marginStart: 100, borderRadius: 8
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
