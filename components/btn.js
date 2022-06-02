import { color as colors } from "../constants/Colors"

import React, { FC } from "react"
import { Pressable, TouchableOpacity, StyleSheet } from "react-native"
import { Text, View } from '../components/Themed';
export function BtnDefault({ title, onPress, style }) {

    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.button, style]}>
                {title}
            </Text>
        </TouchableOpacity>
    )

}
export const BtnText = ({ title, onPress, style }) => {
    return (<>
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.buttonText, style]}>
                {title}
            </Text>
        </TouchableOpacity>
    </>)

}

const styles = StyleSheet.create({
    button: {
        padding: 8,
        color: colors.white,
        borderRadius: 5,
        textAlign: "center",
        fontSize: 20,
        fontWeight: '700',
        color: colors.white,
        backgroundColor: colors.black,

        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: .3,
        shadowRadius: 8,
        elevation: 5,


    },
    buttonText: {
        padding: 8,
        color: colors.black,
        textAlign: "center",
        fontSize: 20,


    },
    buttonPositive: {
        padding: 8,
        backgroundColor: colors.blue,
        color: colors.white,
        borderWidth: 1,
        borderColor: colors.white
        , borderRadius: 25,
        fontWeight: "bold",
        fontSize: 20,
        minWidth: 100,
        textAlign: "center",
        margin: 8,

        shadowColor: 'red',
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 5,
    },
    buttonPositiveDisable: {
        padding: 8,
        backgroundColor: colors.blue,
        color: colors.white,
        borderWidth: 1,
        borderColor: colors.white
        , borderRadius: 25,
        fontWeight: "bold",
        fontSize: 20,
        minWidth: 100,
        textAlign: "center",
        margin: 8,
        opacity: 0.5,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .1,
        shadowRadius: 8,
        elevation: 5,
    },
    buttonNegative: {
        margin: 8,
        padding: 8,
        backgroundColor: colors.white,
        color: colors.blue,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: colors.blue,
        fontWeight: "bold",
        fontSize: 20
        , minWidth: 100,
        textAlign: "center",

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .1,
        shadowRadius: 8,
        elevation: 5,
    },

})





