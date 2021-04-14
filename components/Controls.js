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
            return 'Water Top'
        } else if (num == 2) {
            return 'Water Bottom'
        } else if (num == 3) {
            if (this.state.data['controls']['manual_light'] == 1) {
                if (this.state.data['controls']['light'] == 1) {
                    return 'Lights Off'
                } else {
                    return 'Lights On'
                }
            } else {
                return 'Disabled'
            }
        } else if (num == 4) {
            if (this.state.data['controls']['manual_light'] == 1) {
                return 'Automatic'
            } else {
                return 'Manual'
            }
        }
    }

    updateButtonText(num) {
        if (num == 1) {
            db.ref('/controls/plant_0').update({
                water: 1
            })
        } else if (num == 2) {
            db.ref('/controls/plant_1').update({
                water: 1
            })
        } else if (num == 3) {
            if (this.state.data['controls']['manual_light'] == 1) {
                if (this.state.data['controls']['light'] == 0) {    
                    db.ref('/controls').update({
                        light: 1
                    })
                } else if (this.state.data['controls']['light'] == 1) {
                    db.ref('/controls').update({
                        light: 0
                    })
                }
            }
        } else if (num == 4) {
            if (this.state.data['controls']['manual_light'] == 0) {    
                db.ref('/controls').update({
                    manual_light: 1
                })
            } else {
                db.ref('/controls').update({
                    manual_light: 0
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
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../assets/water-drop.png')}
                                style={{flex: 1, marginVertical: 20}}
                                resizeMode='contain'
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <View style={styles.buttonWrapper}>
                                <TouchableOpacity
                                    onPress={() =>
                                        {this.updateButtonText(1)
                                        db.ref('/plants/plant_0').update({
                                            num_waters: this.state.data['plants']['plant_0']['num_waters'] + 1
                                        })}
                                    }
                                    style={styles.waterButton}
                                    underlayColor='#5B98BB'
                                    >
                                    <Text style={styles.buttonText}>{this.setButtonText(1)}</Text>
                                </TouchableOpacity>
                            </View>
                            
                            <View style={styles.buttonWrapper}>
                                <TouchableOpacity
                                    onPress={() =>
                                        {this.updateButtonText(2)
                                            db.ref('/plants/plant_1').update({
                                                num_waters: this.state.data['plants']['plant_1']['num_waters'] + 1
                                            })}
                                        }
                                    style={styles.waterButton}
                                    underlayColor='#5B98BB'
                                    >
                                    <Text style={styles.buttonText}>{this.setButtonText(2)}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Light */}

                    <View style={styles.controlsContainer}>
                        <View style={styles.upperContainer}>
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>Light</Text>
                            </View>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../assets/sun.png')}
                                style={{flex: 1}}
                                resizeMode='contain'
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <View style={styles.buttonWrapper}>
                                <TouchableOpacity
                                    onPress={() =>
                                        this.updateButtonText(4)
                                    }
                                    style={styles.lightButton}
                                    underlayColor='#5B98BB'
                                    >
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: 'bold'
                                    }}>
                                        {this.setButtonText(4)}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonWrapper}>
                                <TouchableOpacity
                                    onPress={() =>
                                        this.updateButtonText(3)
                                    }
                                    style={this.state.data['controls']['manual_light'] == 1 ? styles.lightButton : styles.disabledButton}
                                    underlayColor='#5B98BB'
                                    >
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: 'bold'
                                    }}>
                                        {this.setButtonText(3)}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    
                    {/* Photos */}

                    <View style={styles.controlsContainer}>
                        <View style={styles.upperContainer}>
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>Photos</Text>
                            </View>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../assets/camera.png')}
                                style={{flex: 1, marginVertical: 15}}
                                resizeMode='contain'
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <View style={styles.buttonWrapper}>
                                <TouchableOpacity
                                    onPress={() =>
                                        db.ref('/controls/plant_0').update({
                                            capture: 1
                                        })
                                    }
                                    style={styles.photosButton}
                                    underlayColor='#5B98BB'
                                    >
                                    <Text style={styles.buttonText}>Capture Top</Text>
                                </TouchableOpacity>
                            </View>
                            
                            <View style={styles.buttonWrapper}>
                                <TouchableOpacity
                                    onPress={() =>
                                        db.ref('/controls/plant_1').update({
                                            capture: 1
                                        })
                                    }
                                    style={styles.photosButton}
                                    underlayColor='#5B98BB'
                                    >
                                    <Text style={styles.buttonText}>Capture Bottom</Text>
                                </TouchableOpacity>
                            </View>
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
        width: 150,
        height: 40,
        backgroundColor:'#5B98BB',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'  
    },
    lightButton: {
        width: 150,
        height: 40,
        backgroundColor:'#FDF082',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'  
    },
    disabledButton: {
        width: 150,
        height: 40,
        backgroundColor:'#d3d3d3',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    photosButton: {
        width: 150,
        height: 40,
        backgroundColor:'#7C8CAA',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'  
    },
    buttonText: {
        fontSize: 12,
        fontWeight: 'bold',
        color:'#ffffff'
    },
    buttonWrapper: {
        flex: 1,
        alignItems: 'center'
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30
    }
})

export default Controls;