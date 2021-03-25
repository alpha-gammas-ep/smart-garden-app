import React from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

function WelcomeScreen(props) {
    return (
        <View style = {styles.container}>
            <Text style = {{color: '#000', fontSize: 45, fontWeight: 'bold'}}>
                Smart
                <Text style = {{color: '#669850'}}> Garden</Text>
            </Text>

            <Image 
                source = {require('../assets/gardening-lady.png')}
                style = {styles.image}
                resizeMode = 'contain'
            />
            <TouchableOpacity
                style = {styles.growButton}
                underlayColor = '#fff'>
                <Text style = {styles.growText}>Grow</Text>
            </TouchableOpacity>
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
    growButton: {
        width: '50%',
        height: 50,
        backgroundColor:'#669850',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    growText: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#fff'
    },
    image: {
        width: '60%',
        height: '60%'
    }
})

export default WelcomeScreen;