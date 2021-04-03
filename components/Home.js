import React, { Component } from 'react';
import {Button, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {db} from '../config';

let plantsRef = db.ref('/plants');
let statsRef = db.ref('/stats');
let settingsRef = db.ref('/settings');
const TOTAL_VOLUME = 14748.4;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plants: {},
            stats: {},
            settings: {},
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
        statsRef.on('value', snapshot => {
            let data = snapshot.val();
            let statsData = {...data};
            this.setState({ 
                stats: statsData
            });
        });
        settingsRef.on('value', snapshot => {
            let data = snapshot.val();
            let settingsData = {...data};
            this.setState({ 
                settings: settingsData,
                loading: false
            });
        });
    }
    getPercentVolume() {
        let timeElapsed = Date.now() - this.state.stats['last_refilled'];
        let water_0 = Math.floor(timeElapsed / this.state.plants['plant_0']['water_interval']) * this.state.plants['plant_0']['water_volume'] * 2;
        let water_1 = Math.floor(timeElapsed / this.state.plants['plant_1']['water_interval']) * this.state.plants['plant_1']['water_volume'] * 2;
        return Math.floor((TOTAL_VOLUME - water_0 - water_1) / TOTAL_VOLUME * 100)
        // console.log(Date.now())
        // return performance.now();
    }
    getDaysLeft0() {
        let timeElapsed = Date.now() - this.state.stats['last_fertilized_0'];
        if (this.state.settings['plant_0']['plant'] == 'sapling') {
            return 7 - Math.floor(timeElapsed / 1000 / 60 / 60 / 24);
        } else {
            return 14 - Math.floor(timeElapsed / 1000 / 60 / 60 / 24);
        }
        return null;
    }
    getDaysLeft1() {
        let timeElapsed = Date.now() - this.state.stats['last_fertilized_1'];
        if (this.state.settings['plant_1']['plant'] == 'sapling') {
            return 7 - Math.floor(timeElapsed / 1000 / 60 / 60 / 24);
        } else {
            return 14 - Math.floor(timeElapsed / 1000 / 60 / 60 / 24);
        }
        return null;
    }
    render() {
        if (!this.state.loading) {
            return (
                <ScrollView contentContainerStyle={styles.container}>
                    
                    {/* Tank*/}

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
                                    <Text style={{fontSize: 25, fontWeight: 'bold', paddingRight: 60}}>
                                        {this.getPercentVolume()}%
                                    </Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                onPress={() =>
                                    db.ref('/stats').set({
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
                    
                    {/* Fertilizer 1 & 2 */}

                    <View style={styles.waterContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.waterText}>Fertilizer</Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../assets/dirt.png')}
                                style={{flex: 1}}
                                resizeMode='contain'
                            />
                            <ImageBackground source={require('../assets/green-circle.png')} style={{flex: 1, width: 125, height: 125, resizeMode: 'center'}}>
                                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{fontSize: 25, fontWeight: 'bold', paddingRight: 65}}>
                                        {this.getDaysLeft0()} Days
                                    </Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                onPress={() =>
                                    db.ref('/stats').set({
                                        last_refilled: Date.now()
                                    })
                                }
                                style={styles.fertilizerButton}
                                underlayColor='#5B98BB'
                                >
                                <Text style={styles.fertilizerText}>Fertilize</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Fertilizer 3 & 4 */}

                    <View style={styles.waterContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.waterText}>Fertilizer</Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../assets/dirt.png')}
                                style={{flex: 1}}
                                resizeMode='contain'
                            />
                            <ImageBackground source={require('../assets/green-circle.png')} style={{flex: 1, width: 125, height: 125, resizeMode: 'center'}}>
                                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{fontSize: 25, fontWeight: 'bold', paddingRight: 65}}>
                                        {this.getDaysLeft1()} Days
                                    </Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                onPress={() =>
                                    db.ref('/stats').set({
                                        last_refilled: Date.now()
                                    })
                                }
                                style={styles.fertilizerButton}
                                underlayColor='#5B98BB'
                                >
                                <Text style={styles.fertilizerText}>Fertilize</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                
            );
        } else {
            return null;
        }
    }
}

const styles = StyleSheet.create({
    container: {
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
        height: 300,
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
        elevation: 5,
        marginBottom: 25
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
    fertilizerButton: {
        width: '50%',
        height: 50,
        backgroundColor:'#E1EED3',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fertilizerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#000000'
    },
})

export default Home;