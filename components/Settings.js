import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function Settings(props) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={{color: '#000000', fontSize: 45, fontWeight: 'bold', paddingTop: 10, paddingBottom: 40, alignSelf: "baseline"}}>
             {"    "}Settings
            </Text>
            <View style={styles.waterbutton}>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 200
    },

    waterbutton: {
        width: '80%',
        height: 550,
        backgroundColor:'#F6F6F6',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: '#C1C1C1',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 0.5,
        shadowOffset: {
        height: 1,
        width: 0.5}
    }
})

export default Settings;
