import React, { Component } from 'react';
import {Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {db} from '../config';

let ref = db.ref('/');

class Controls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            loading: true
        }
    }
    
    componentDidMount() {
        ref.on('value', snapshot => {
            let data = snapshot.val();
            let allData = {...data};
            this.setState({ 
                data: allData,
                loading: false
            });
        });
    }

    setButtonText(num) {
        if (num == 1) {
            if (this.state.data['controls']['water'] == 0) {
                return 'Water On'
            } else {
                return 'Water Off'
            }
        } else if (num == 2) {
            if (this.state.data['controls']['light'] == 0) {
                return 'Light On'
            } else {
                return 'Light Off'
            }
        }
    }

    updateButtonText(num) {
        if (num == 1) {
            if (this.state.data['controls']['water'] == 0) {    
                db.ref('/controls').update({
                    water: 1
                })
            } else {
                db.ref('/controls').update({
                    water: 0
                })
            }
        } else if (num == 2) {
            if (this.state.data['controls']['light'] == 0) {    
                db.ref('/controls').update({
                    light: 1
                })
            } else {
                db.ref('/controls').update({
                    light: 0
                })
            }
        }
    }

    render() {
        if (!this.state.loading) {
            return (
                <ScrollView contentContainerStyle={styles.container}>

                    {/* Water */}

                    <View style={styles.topContainer}>
                    <Text style={{color: '#000000', fontSize: 45, fontWeight: 'bold'}}>
                        My{' '}
                        <Text style={{color: '#669850'}}>
                            Controls
                        </Text>
                    </Text>
                    </View>
                    <View style={styles.controlsContainer}>
                        <View style={styles.upperContainer}>
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>Water</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() =>
                                    this.updateButtonText(1)
                                }
                                style={styles.waterButton}
                                underlayColor='#5B98BB'
                                >
                                <Text style={styles.buttonText}>{this.setButtonText(1)}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../assets/water-drop.png')}
                                style={{flex: 1, marginVertical: 20}}
                                resizeMode='contain'
                            />
                        </View>
                    </View>

                    {/* Light */}

                    <View style={styles.controlsContainer}>
                        <View style={styles.upperContainer}>
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>Light</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() =>
                                    this.updateButtonText(2)
                                }
                                style={styles.lightButton}
                                underlayColor='#5B98BB'
                                >
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color:'#000000'
                                }}>
                                    {this.setButtonText(2)}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../assets/sun.png')}
                                style={{flex: 1}}
                                resizeMode='contain'
                            />
                        </View>
                    </View>

                    {/* Camera */}
                    
                    <View style={styles.controlsContainer}>
                        <View style={styles.upperContainer}>
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>Photos</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() =>
                                    db.ref('/controls').update({
                                        capture: 1
                                    })
                                }
                                style={styles.photosButton}
                                underlayColor='#5B98BB'
                                >
                                <Text style={styles.buttonText}>Capture</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../assets/camera.png')}
                                style={{flex: 1, marginVertical: 15}}
                                resizeMode='contain'
                            />
                        </View>
                    </View>
                </ScrollView>
            )
        } else {
            return null;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: "#ffffff"
    },
    topContainer: {
        marginVertical: 25,
        width: '90%'
    },
    controlsContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
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
        marginBottom: 25,
        padding: 20
    },
    upperContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    textContainer : {
        flex: 1
    },
    waterButton: {
        width: 100,
        height: 40,
        backgroundColor:'#5B98BB',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'  
    },
    lightButton: {
        width: 100,
        height: 40,
        backgroundColor:'#FDF082',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'  
    },
    photosButton: {
        width: 100,
        height: 40,
        backgroundColor:'#7C8CAA',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'  
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'#ffffff'
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30
    }
})

export default Controls;