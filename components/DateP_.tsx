import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Colors, { color } from '../constants/Colors';
import { day, month } from '../screens/MakeApointmentScreen';
import { Text, View } from './Themed';
export default function DateP({ date_, onDateChange }: {
    date_: Date,
    onDateChange: Function
}) {



    const formatDate = (date = new Date()) => day(date.getDay()) + ", " + month(date.getMonth()) + ", "
        + date.getDate()
    const formatTime = (h = 0, m = 0) => {
        const s = (v = 0) => v > 9 ? v + "" : "0" + v
        return s(h) + ":" + s(m)
    }

    const [date, setDate] = useState(date_);

    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event: any, selectedDate: Date) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
        if (onDateChange) onDateChange(currentDate)
    };

    const showMode = (currentMode: any) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (

        <View style={styles.dateCon}>
            <Pressable onPress={showDatepicker}>
                <View style={{ flexDirection: "row", backgroundColor: "transparents", }}>
                    <Ionicons name="md-calendar" size={24} color={color.blue} />
                    <Text style={[styles.item_sub, { fontWeight: "700", }]}> {formatDate(date)}</Text>
                </View>
            </Pressable>
            <Pressable onPress={showTimepicker}>
                <View style={{ flexDirection: "row", backgroundColor: "transparents" }}>
                    <Ionicons name="time" size={24} color={color.blue} />
                    <Text style={[styles.item_sub, { fontWeight: "700", }]}> {formatTime(date.getHours(), date.getMinutes())}
                    </Text>
                </View>
            </Pressable>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    dateCon: {
        backgroundColor: color.gray
        , flexDirection: 'row',
        justifyContent: "space-between"
        , width: "100%"
        , padding: 8
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightContainer: {
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center',
    },
    item_sub: {
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 18,
        color: color.black,
    },
    helpContainer: {
        marginTop: 15,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        textAlign: 'center',
    },
});
