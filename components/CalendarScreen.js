import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

function CalendarScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={{color: '#000000', fontSize: 35, fontWeight: 'bold'}}>
                    Welcome back,{'\n'} 
                    <Text style = {{color: '#669850'}}>Liana!</Text>
                </Text>
            </View>
            <View style={styles.middleContainer}>
                <Text style={{fontWeight: 'bold'}}>
                    Upcoming Waters
                </Text>
            </View >
            <View style={styles.bottomContainer}>
                <Calendar>

                </Calendar>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    topContainer: {
        paddingTop: 50,
        paddingRight: 25,
        paddingLeft: 25
    },
    middleContainer: {
        paddingTop: 50,
        paddingRight: 25,
        paddingLeft: 25
    },
    bottomContainer: {
        paddingTop: 50,
        paddingBottom: 50,
        paddingRight: 25,
        paddingLeft: 25
    }
})

export default CalendarScreen;