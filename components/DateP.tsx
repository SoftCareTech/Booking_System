import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, TouchableOpacity,Platform } from 'react-native';
import { DatePickerModal, TimePickerModal } from 'react-native-paper-dates';

import Colors, { color } from '../constants/Colors';
import { day, month } from '../screens/MakeApointmentScreen';
import { Text, View } from './Themed';

export const formatDate = (date = new Date()) => day(date.getDay()) + ", " + month(date.getMonth()) + ", "
    + date.getDate()
export const formatTime = (h = 0, m = 0) => {
    const s = (v = 0) => v > 9 ? v + "" : "0" + v
    return s(h) + ":" + s(m)
}

export default function DateP({ date, onDateChange }: { date: Date, onDateChange: Function }) {

    const [visible, setVisible] = React.useState(false)
    const [timeValue, setTimeValue] = React.useState(formatTime(date.getHours(), date.getMinutes()))
    const [dateP, setDateP] = React.useState<Date | undefined>(date);
    const [open, setOpen] = React.useState(false);

    const onDismissSingle = React.useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirmSingle = React.useCallback(
        (params) => {
            setOpen(false);
            setDateP(params.date);
            if (onDateChange) onDateChange(dateP)
        },
        [setOpen, setDateP]
    );



    const onDismiss = React.useCallback(() => {
        setVisible(false)
    }, [setVisible])

    const onConfirm = React.useCallback(
        ({ hours, minutes }) => {
            setVisible(false);
            console.log({ hours, minutes });
            setTimeValue(formatTime(hours, minutes))
            // if (onDateChange) onDateChange(dateP.)
        },
        [setVisible]
    );

    return (
        <View>
            <DatePickerModal
                locale="en"
                mode="single"
                visible={open}
                onDismiss={onDismissSingle}
                date={date}
                onConfirm={onConfirmSingle}
                validRange={{
                    startDate: new Date(),
                }} />
            <TimePickerModal
                visible={visible}
                onDismiss={onDismiss}
                onConfirm={onConfirm}
                hours={12}
                minutes={14}
                label="Select time"
                uppercase={false}
                animationType="fade" />

            <View style={styles.dateCon}>
                <Pressable onPress={() => { if(Platform.OS=="web") setOpen(true)}}>
                    <View style={{ flexDirection: "row", backgroundColor: "transparents", }}>
                        <Ionicons name="md-calendar" size={24} color={color.blue} />
                        <Text style={[styles.item_sub, { fontWeight: "700", }]}> {formatDate(dateP)}</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => { if(Platform.OS=="web")setVisible(true)}}>
                    <View style={{ flexDirection: "row", backgroundColor: "transparents" }}>
                        <Ionicons name="time" size={24} color={color.blue} />
                        <Text style={[styles.item_sub, { fontWeight: "700", }]}> {timeValue}
                        </Text>
                    </View>
                </Pressable>

            </View>
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
