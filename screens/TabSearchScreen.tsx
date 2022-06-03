import { StyleSheet, FlatList, Image, TouchableHighlight } from 'react-native';
import React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import hireNurseBg from "../assets/images/hire_nurse_bg.png"
import { color } from '../constants/Colors';
const ItemNurse = ({ name = "Aondohemba", amt = 343, sub = "gbenge", sym = "$" }) => {
  return <View style={styles.item}>
    {name ? <View style={styles.item_ico_v}><Text style={styles.item_ico_t}>{name[0]}</Text></View> : null}
    <View style={styles.itemCol}>
      <Text style={styles.item_title}>{name}</Text>
      <Text style={styles.item_sub}>{sub}</Text>
    </View>
    <Text style={styles.item_amount}>{sym}{amt}</Text>
  </View>
}


export default function TabSearchScreen({ navigation }: RootTabScreenProps<'Search'>) {
  const data = [{ name: "Seun Olumide", desc: "Gbagada", amt: 250 },
  { name: "Seun Olumide 1", desc: "Gbagada", amt: 250, },
  { name: "Seun Olumide 2", desc: "Gbagada", amt: 250, },
  { name: "Seun Olumide 3", desc: "Gbagada", amt: 250, },
  { name: "Seun Olumide 4", desc: "Gbagada", amt: 250, },
  { name: "Seun Olumide 5", desc: "Gbagada", amt: 250, },
  { name: "Raphael G.A", desc: "Gbenge", amt: 300, },
  { name: "Raymond G.A.R.", desc: "Aondoakulsa", amt: 250, },
  ]
  return (
    <View style={styles.container}>
      <Image source={hireNurseBg} style={{ height: 128, margin: -5, width: "100%" }} />
      <Text style={styles.title}>Hire a nurse</Text>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(e) => e.name}
        renderItem={({ item }) => <TouchableHighlight onPress={() =>
          navigation.navigate("ViewNurse", item)}>
          <ItemNurse name={item.name} sub={item.desc}
            amt={item.amt} />
        </TouchableHighlight>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    paddingHorizontal: 16
  },
  list: {
    paddingHorizontal: 16
  },
  item: {
    flex: -1,
    width: "100%",
    flexDirection: "row"
    , paddingVertical: 8
  },
  itemCol: {
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: 8,
    paddingVertical: 4
    , alignItems: "flex-start"

  },

  item_ico_v: {
    height: 50,
    width: 50,
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
    fontSize: 16,
    color: color.black,
    opacity: 0.5
  },
  item_amount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: color.red
  },
});
