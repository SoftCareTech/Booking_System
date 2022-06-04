import React, { useCallback } from "react"
import { Pressable, StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';
import { Image, Dimensions } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import img from '../assets/images/img_welcome.png'
import { RootStackParamList, RootStackScreenProps } from '../types';

export default function WelcomeScreen({ navigation }: RootStackScreenProps<'Welcome'>) {
  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => { navigation.navigate('Signin') }, 3000)

    }, [])
  );
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.skip}> Skip  </Text>
      </Pressable>
      <View style={styles.containerCenter}>
        <Image source={img} style={styles.img} />
        <Text style={styles.title}>Hi there!</Text>
        <Text style={styles.subTitle}>This Los Service app development test! </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    flex: 1,
    alignItems: Dimensions.get('window').width > 345 ? 'center' : "flex-end",
    justifyContent: 'flex-start',
  },
  containerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 32,
    marginHorizontal: 32,
    textAlign: "center"
  },
  skip: {
    fontSize: 20,
    marginHorizontal: 16,
    textAlign: "right"
  },
  subTitle: {
    fontSize: 20,
    marginHorizontal: 32
    , marginBottom: 32,
    textAlign: "center"
  },
  img: {
    marginVertical: 32,
    height: 300,
    width: '90%',
    maxWidth: 300
  },
});
