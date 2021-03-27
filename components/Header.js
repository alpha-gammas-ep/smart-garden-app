import React from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function Header() {
    return (
        <View style={styles.header}>
            <Text style = {{color:'#669850', fontSize: 20, fontWeight: 'bold'}}> Smart Garden </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    }
})

export default Header;