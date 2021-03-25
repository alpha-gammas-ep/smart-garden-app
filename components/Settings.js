import React from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function Settings(props) {
    return (
        <View style={styles.container}>
            <Text style={{color: '#000000', fontSize: 45, fontWeight: 'bold'}}>
                Settings
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 200,
        marginBottom: 200
    },
})

export default Settings;