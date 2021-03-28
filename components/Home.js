import React from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function Home(props) {
    return (
        <View style={styles.container}>
            <Text style={{color: '#000000', fontSize: 45, fontWeight: 'bold', paddingBottom: 50, paddingTop: 30, alignSelf: "baseline"}}>
             {"    "}Home
            </Text>
            <TouchableOpacity style = {{display: 'flex'}}
                onPress={() =>
                    navigation.navigate('Home')
                }
                style={styles.waterbutton}
                underlayColor='#ffffff'
                >
                <Text style={styles.waterText}>   Water</Text>
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
            <Text style={styles.waterTime}>   00:00:00 {'\n'}   until refill</Text>
            </TouchableOpacity>
        </View>
        
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
        height: 500,
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
    },
    waterText: {
        paddingTop: 20,
        flex : 1,
        fontSize: 30,
        fontWeight: 'bold',
        color:'#000000',
        alignSelf: "stretch",
    },
    image: {
        flex: 3,
        width: '80%',
        height: '80%'
    },
    image2: {
        flex: 3,
        width: '80%',
        height: '80%'
    },
    waterTime: {
        paddingTop: 20,
        flex : 1,
        fontSize: 40,
        fontWeight: 'bold',
        color:'#000000',
        alignSelf: "center",
    }
})

export default Home;