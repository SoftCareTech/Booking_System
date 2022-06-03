import { StatusBar } from 'expo-status-bar';
import {
  Dimensions, Platform, StyleSheet, TextInput, ScrollView,
  ImageBackground, Image, Pressable
} from 'react-native';
import { Text, View } from '../components/Themed';
import { FontAwesome5 } from '@expo/vector-icons';
import { color } from '../constants/Colors';
import ico from "../assets/images/ico_lox.png"
import ico_g from "../assets/images/google.png"
import bga from "../assets/images/bga.png"
import { BtnDefault } from '../components/btn';
import { RootStackScreenProps } from '../types';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const mobileWidth = 400
export default function SigninScreen({ navigation }: RootStackScreenProps<'Signin'>) {

  return (<ScrollView showsVerticalScrollIndicator={Dimensions.get("screen").width > mobileWidth}>

    <View style={styles.container}>
      <View style={{
        flexDirection: "row", backgroundColor: "transparent", alignItems: "center",
        justifyContent: "center", paddingVertical: 32
      }}>
        <Image source={ico} style={{ height: 60, width: 60 }} />
        <View style={{ backgroundColor: "transparent", alignItems: "flex-start" }}>
          <Text style={[styles.title, { color: color.gray }]}>The test</Text>
          <Text > Powered by Lox</Text></View>

      </View>

      <ImageBackground source={bga} resizeMode="stretch" style={styles.image}>
        <Text style={styles.title} >Login</Text>
      </ImageBackground>


      <View style={{
        flex: 1, //borderTopLeftRadius: Dimensions.get("screen").width, borderTopRightRadius: Dimensions.get("screen").width,
        padding: 32,
        paddingTop: 0,
        alignItems: Dimensions.get("screen").width > mobileWidth ? 'center' : undefined
      }}>


        <View style={styles.containerI}>
          <Text style={styles.textL}>Email</Text>
          <TextInput style={styles.textI} underlineColorAndroid={color.black} />

          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={styles.textL}>Password</Text>
            <Text style={[styles.textL, { fontWeight: '600' }]}>Forget?</Text>
          </View>
          <TextInput style={styles.textI} autoCorrect={false}
            secureTextEntry underlineColorAndroid={color.black} />
          <BtnDefault title='Login' style={styles.btn}
            onPress={() => navigation.replace('RootTab', { screen: 'Search' })} />
        </View>

        <Text style={styles.text}>Or Continue with</Text>
        <View style={styles.containerRow}>
          <View style={styles.containerRow_}>
            <Image source={ico_g} style={{ height: 24, width: 24 }} />
            <Text style={styles.text}>  Google</Text>
          </View>
          <View style={styles.containerRow_}>
            <FontAwesome5 name="facebook" size={24} color="blue" />
            <Text style={styles.text}>  Facebook</Text>
          </View>
        </View>
        <Pressable onPress={() => navigation.replace('Signup')}>
          <View style={[styles.containerRow_, { backgroundColor: color.white }]}>
            <Text style={styles.text}>Don't have account  </Text>
            <Text style={[styles.text, { fontWeight: "bold" }]}>Create new</Text>
          </View>
        </Pressable>


      </View>




      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View> </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.blue
    , justifyContent: 'center'
    , flexDirection: "column"
  },
  image: {
    flex: -1,
    justifyContent: "center"
    , height: Dimensions.get("screen").width > mobileWidth ? 80 : 200
    , margin: -1
  },
  containerRow: {
    flex: -1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerRow_: {
    borderRadius: 4,
    padding: 4,
    flex: -1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.gray
    , marginVertical: 16
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: color.black
    , textAlign: "center"

  },
  btn: {
    fontSize: 18,
    textAlign: "center"
  },
  text: {
    fontSize: 18,
    textAlign: "center"
  },
  textL: {
    fontSize: 18,
    marginTop: 8
  },
  containerI: {
    flex: 1,
    marginHorizontal: 16
    , marginBottom: 32

  },
  textI: {
    height: 40,
    fontSize: 20,
    backgroundColor: color.white
    , marginBottom: 16


  },
});

const bg_path = "M 156 77 l -49.2 -85.8 c -8.5 -14.8 -22.2 -14.8 -30.7 0 L 32 77 H 156 z"

function RootTabScreenProps<T>(): any {
  throw new Error('Function not implemented.');
}
// "M138.592,123.612c17.037,0,23.98-11.982,15.504-26.761l-49.188-85.768c-8.477-14.778-22.208-14.778-30.677,0L25.036,96.851   c-8.474,14.778-1.533,26.761,15.503,26.761H138.592z"

