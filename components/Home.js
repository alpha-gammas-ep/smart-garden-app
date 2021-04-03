import React, { Component } from 'react';
import {Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {db} from '../config';

let plantsRef = db.ref('/plants');
let tankRef = db.ref('/tank');
const TOTAL_VOLUME = 14748.4;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plants: {},
            tank: {},
            loading: true
        }
    }
    componentDidMount() {
        plantsRef.on('value', snapshot => {
            let data = snapshot.val();
            let plantData = {...data};
            this.setState({ 
                plants: plantData
            });
        });
        tankRef.on('value', snapshot => {
            let data = snapshot.val();
            let tankData = {...data};
            this.setState({ 
                tank: tankData,
                loading: false
            });
        });
    }
    getPercentVolume() {
        let timeElapsed = Date.now() - this.state.tank['last_refilled'];
        let water_0 = Math.floor(timeElapsed / this.state.plants['plant_0']['water_interval']) * this.state.plants['plant_0']['water_volume'] * 2;
        let water_1 = Math.floor(timeElapsed / this.state.plants['plant_1']['water_interval']) * this.state.plants['plant_1']['water_volume'] * 2;
        return Math.floor((TOTAL_VOLUME - water_0 - water_1) / TOTAL_VOLUME * 100)
        // console.log(Date.now())
        // return performance.now();
    }
    render() {
        if (!this.state.loading) {
            return (
                <View style={styles.container}>
                    <View style={styles.topContainer}>
                        <Text style={{color: '#000000', fontSize: 45, fontWeight: 'bold', alignSelf: "baseline"}}>
                            My
                            <Text style={{color: '#669850'}}> Tank </Text>
                        </Text>
                    </View>
                    <View style={styles.waterContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.waterText}>Water</Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../assets/water-bucket.png')}
                                style={{flex: 1}}
                                resizeMode='contain'
                            />
                            <ImageBackground source={require('../assets/blue-circle.png')} style={{flex: 1, width: 125, height: 125, resizeMode: 'center'}}>
                                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{fontSize: 30, fontWeight: 'bold', paddingRight: 55}}>
                                        {this.getPercentVolume()}%
                                    </Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                onPress={() =>
                                    db.ref('/tank').set({
                                        last_refilled: Date.now()
                                    })
                                }
                                style={styles.refillButton}
                                underlayColor='#5B98BB'
                                >
                                <Text style={styles.refillText}>Refill</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                
            );
        } else {
            return null;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    topContainer: {
        marginVertical: 25,
        width: '90%'
    },
    waterContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        height: '40%',
        width: '90%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    textContainer: {
        paddingLeft: 20
    },
    waterText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    refillButton: {
        width: '50%',
        height: 50,
        backgroundColor:'#5B98BB',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    refillText: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#ffffff'
    },
})

export default Home;