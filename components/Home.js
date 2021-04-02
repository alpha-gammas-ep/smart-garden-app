import React, { Component } from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

class Home extends Component {
    state = {
        
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{color: '#000000', fontSize: 45, fontWeight: 'bold', alignSelf: "baseline"}}>
                    Home
                </Text>
                <View style={styles.waterContainer}
                    underlayColor='#ffffff'
                    >
                    <Text style={styles.waterText}>Water</Text>
                <View style = {{flex : 1, flexDirection: "row"}}>
                <Image
                    source={require('../assets/water-bucket.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
                <Image
                    source={require('../assets/ellipse.png')}
                    style={styles.image2}
                    resizeMode='contain'
                />
                </View>    
                <Text style={styles.waterTime}>00:00:00{'\n'}until refill</Text>
                </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 30
    },

    waterContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    waterText: {
        paddingTop: 50,
        paddingBottom: 30,
        fontSize: 32,
        fontWeight: 'bold',
        color:'#000000',
        textAlign: "center",
    },
    image: {
        flex: 3,
        width: '80%',
        height: '80%',
        marginLeft: 20,
        marginRight: 20
    },
    image2: {
        flex: 3,
        width: '80%',
        height: '80%',
        marginLeft: 20,
        marginRight: 20
    },
    waterTime: {
        flex : 1,
        fontSize: 40,
        fontWeight: 'bold',
        color:'#000000',
        alignSelf: "center",
        textAlign: "center"
    }
})

export default Home;