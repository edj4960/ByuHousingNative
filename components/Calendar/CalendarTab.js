import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { useState } from 'react';

export default function CalendarTab(props) {
    const items = {
        '2021-04-24': [
            {
                name: "Current Agreement Ends",
            }
        ]
    }
    
    function renderItem (item) {
        return (
            <TouchableOpacity
                testID={'item'}
                style={[styles.item, {height: item.height}]}
                onPress={() => Alert.alert(item.name)}
                >
                <Text>{item.name}</Text>
            </TouchableOpacity>
        );
    }
    
    const otherEvent = {key:'other', color: 'gray', selectedDotColor: 'blue'}
    const userEvent = {key:'users', color: '#002E5D', selectedDotColor: 'blue'}

    /* Eventually will combine dots_data and calendar data.
     Seperate currently as it is easier to display dots
     without extra baggage. */
    const dots_data = {
        '2021-04-01': {dots: [userEvent, otherEvent]},
        '2021-04-06': {dots: [otherEvent]},
        '2021-04-11': {dots: [otherEvent]},
        '2021-04-24': {dots: [userEvent]},
        '2021-05-01': {dots: [otherEvent]},
        '2021-05-11': {dots: [otherEvent]},
    }

    const calendar_data = {
        '2021-04-11': {
            otherEvent: '$30 Late fee posted to Past-Due Accounts'
        },
        '2021-04-24': {
            userEvent: 'Your Heritage Halls contract is ending. Check-out by 10:00 AM.'
        }
    }

    const handleDayPress = (dateString) => {
        if (calendar_data[dateString]) {
            let day_data = calendar_data[dateString]
            let str = day_data.userEvent
    
            Alert.alert(str)
        }
    }

  return (
    <View>
        <View style={styles.legend}>
            <View style={styles.legendSection}>
                <View style={styles.yoursBullet}></View>
                <Text>Your Events</Text>
            </View>
            <View style={styles.legendSection}>
                <View style={styles.othersBullet}></View>
                <Text>Other Events</Text>
            </View>
        </View>
        <CalendarList
            markedDates={dots_data}
            markingType={'multi-dot'}
            onDayPress={(day) => handleDayPress(day.dateString)}
            disableAllTouchEventsForDisabledDays={true}
            theme={{
                monthTextColor: '#002E5D',
                textMonthFontWeight: 'bold',
            }}
            />
    </View>
  );
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: 'white',
      flex: 1,
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      marginTop: 17
    },
    emptyDate: {
      height: 15,
      flex: 1,
      paddingTop: 30
    },
    legend: {
        padding: 10,
        flexDirection: 'row',
        // justifyContent: 'space-evenly'
    },
    legendSection: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        marginRight: 15
    },
    yoursBullet: {
        backgroundColor: "#002E5D",
        width: 10,
        height: 10,
        borderRadius: 10,
        marginRight: 5
    },
    othersBullet: {
        backgroundColor: 'grey',
        width: 10,
        height: 10,
        borderRadius: 10,
        marginRight: 5
    }
  });