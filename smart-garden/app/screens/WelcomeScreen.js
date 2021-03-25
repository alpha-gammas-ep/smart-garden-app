import React from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

function WelcomeScreen(props) {
    return (
        <View style = {styles.container}>
            <Text>Smart Garden</Text>
            <Image 
                source = {require('../assets/gardening-lady.png')}
                style = {styles.image}
                resizeMode = 'contain'
            />
            <TouchableOpacity
                style={styles.growButton}
                underlayColor='#fff'>
                <Text style={styles.growText}>Grow</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    growButton: {
        width: '50%',
        height: 50,
        backgroundColor:'#669850',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    growText: {
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    },
    image: {
        width: '50%',
        height: '50%'
    }
})

export default WelcomeScreen;