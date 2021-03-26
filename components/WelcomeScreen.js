import React from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const WelcomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{color: '#000000', fontSize: 45, fontWeight: 'bold'}}>
                Smart
                <Text style={{color: '#669850'}}> Garden</Text>
            </Text>

            <Image
                source={require('../assets/gardening-lady.png')}
                style={styles.image}
                resizeMode='contain'
            />
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Home')
                }
                style={styles.growButton}
                underlayColor='#ffffff'
                >
                <Text style={styles.growText}>Grow</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#ffffff',
        width: '100%'
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '50%',

        marginTop: 0,
        marginBottom: 0
    },
    growButton: {
        width: '50%',
        height: 50,
        backgroundColor:'#669850',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    growText: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#ffffff'
    },
    image: {
        width: '60%',
        height: '60%'
    }
})

export default WelcomeScreen;
