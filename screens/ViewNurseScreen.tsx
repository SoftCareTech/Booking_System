import React from 'react';
import { FontAwesome, FontAwesome5, Ionicons, Zocial } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import { Platform, StyleSheet, Image, ScrollView, FlatList, Pressable } from 'react-native';
import { BtnDefault, card } from '../components/btn';

import img from '../assets/images/img_welcome.png'
import { Text, View } from '../components/Themed';
import { color } from '../constants/Colors';
import { RootStackScreenProps } from '../types';



export const Profile = ({ style = null, src = null, name = "Aondohemba", sub = "Nurse", participant = "0" }) => {
  return <View style={style ? [styles.item, style] : styles.item}>
    {src ? <Image source={src} style={{ height: 100, width: 100, borderRadius: 10 }} /> :
      <View style={styles.item_ico_v} ><Text style={styles.item_ico_t}>{name[0]}</Text> </View>}
    <View style={styles.itemCol}>
      <Text style={styles.item_title}>{name}</Text>
      <Text style={styles.item_sub}>{sub}</Text>
      <View style={styles.itemRow}>
        <Ionicons name="ios-people-sharp" size={24} color={color.blue} />
        <View style={styles.itemCol}>
          <Text style={styles.item_sub}>Partcipate</Text>
          <Text style={styles.item_title}>{participant}</Text>
        </View>

      </View>
    </View>

  </View>
}


const TextDetail = ({ number = 14, text = "ooh" }) => {
  return <View style={[styles.itemCol, { alignItems: "center", justifyContent: 'center' }]}>
    <Text style={styles.item_title}>{number}</Text>
    <Text style={styles.item_sub}>{text}</Text>

  </View>
}

const Comment = ({ src = null, name = "", text = "ooh" }) => {
  return <View style={[styles.itemCol]}>
    <View style={styles.itemRow}>{src ? <Image source={src}
      style={{ height: 24, width: 24, borderRadius: 24 }} /> : <FontAwesome size={24}
        name='question-circle' color={color.gray1} />}
      <Text style={styles.item_title}>{name}</Text></View>

    <Text style={styles.item_sub}>{text}</Text>

  </View>
}





export default function ViewNurseScreen({ navigation, route }: RootStackScreenProps<"ViewNurse">) {

  const aname = Platform.OS === "web" ? route.params.name.replaceAll("%20", " ") : route.params.name
  const userProfile = {
    ...route.params, name: aname
  }
  console.log(userProfile)
  const comments = [
    {
      id: "er1", name: "Anonymous Feedback",
      text: "Very compentent specialist, I am very happy there are professional. My baby is safe. My child healtth is above all"
      , src: null
    },
    {
      id: "er2", name: "Erikal", text: "Jus a wonderfull doctor, Ver happy that she is leading our child. very competent,  "
      , src: img
    }]

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Pressable onPress={() => {
          if (navigation.canGoBack()) navigation.goBack()
          else navigation.replace("RootTab", { screen: "Search" })
        }}>
          <Ionicons name="chevron-back" size={24} color={color.blue} />
        </Pressable>
        <Text style={styles.title}>Profile</Text>
        <Zocial name="email" size={24} color={color.blue} />
      </View>
      <ScrollView>
        <Profile name={userProfile.name} sub='Nurse' participant={"345+"} src={img} />
        <View style={styles.itemRow}>
          <TextDetail number={124} text={"Articles"} />
          <TextDetail number={124} text={"Following"} />
          <TextDetail number={124} text={"Followers"} />
        </View>
        <View style={{
          flexDirection: "row", marginVertical: 8,
          justifyContent: 'space-between'
        }}>
          <View style={{ flex: 1, marginRight: 8, }}>
            <BtnDefault title={"Follow"} style={styles.btn} /></View>
          <View style={{ flex: 1, marginLeft: 8 }}>
            <BtnDefault style={[styles.btn, { color: color.blue, backgroundColor: "transparents" }]} title={"Message"} />
          </View>
        </View>
        <View style={[styles.itemRow, { marginVertical: 8 }]}>
          <View style={{ flexDirection: 'row', alignItems: "center" }}>
            <FontAwesome style={{ ...card, flex: -1, backgroundColor: color.bgStar, borderRadius: 5 }}
              name="star" size={30} color={color.star} />
            <View style={{ alignItems: "flex-start" }}>
              <Text style={styles.item_sub}>Rating</Text>
              <Text style={styles.item_title}>4.75 out of 5</Text>
            </View>
          </View>
          <BtnDefault title={"See all > "} style={styles.btn} />
        </View>
      </ScrollView>
      <FlatList data={comments}
        keyExtractor={(e) => e.id}
        renderItem={({ item }) => <Comment src={item.src} name={item.name} text={item.text} />} />

      <BtnDefault style={{ backgroundColor: color.blue }}
        title={"Make an Appointment"}
        onPress={() => navigation.replace("RootTab", {
          screen: "Appointment",
          params: {
            screen: 'MakeAppointment', params: {
              amt: userProfile.amt, appId: userProfile.appId
            }
          }
        })} />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  head: {
    flex: -1,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
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
  item_amount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: color.red
  },

  btn: {

    flex: 1,
    borderWidth: 1,
    borderColor: color.blue,
    backgroundColor: color.blue,
    color: color.gray,
  }
});
