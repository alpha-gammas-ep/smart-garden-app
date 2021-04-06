import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {db} from "../config";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            waters: []
        }
    }

    componentDidMount() {
        db.ref("/").on("value", snapshot => {
            let data = snapshot.val() ? snapshot.val() : {};
            let info = {...data};
            this.setState({
                waters: [{
                    id: 1,
                    last_watered: info["plants"]["plant_0"]["last_watered"],
                    interval: info["plants"]["plant_0"]["water_interval"],
                    plant: info["settings"]["plant_0"]["plant"]
                },
                {
                    id: 2,
                    last_watered: info["plants"]["plant_1"]["last_watered"],
                    interval: info["plants"]["plant_0"]["water_interval"],
                    plant: info["settings"]["plant_1"]["plant"]
                }]
            })
        })
    }

    getDate(milliseconds) {
        const dateObject = new Date(parseInt(milliseconds))
        return dateObject.toLocaleString()
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.topContainer}>
                    <Text style={{color: '#000000', fontSize: 35, fontWeight: 'bold'}}>
                        Welcome back!
                    </Text>
                </View>
                <View style={styles.middleContainer}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        Upcoming Waters
                    </Text>
                    <View style={styles.waterContainer}>
                        
                    {this.state.waters.map(wateringInfo => (
                        <View key={wateringInfo.id} style={styles.waterNotif}>
                            <View style={{display: 'flex', flexDirection: 'row'}}>
                                <Text style={{flex: 1, fontSize: 18, fontWeight: 'bold', paddingTop: 10, paddingLeft: 10}}>
                                    {this.getDate(wateringInfo.last_watered)}
                                </Text>
                                <Text style={{flex: 1, fontSize: 12, fontWeight: 'bold', paddingTop: 15}}>
                                    Watering{'\n'}
                                </Text>
                            </View>
                            <View style={{display: 'flex', flexDirection: 'row', paddingLeft: 10, paddingBottom: 15}}>
                                <Text style={{flex: 1, color: 'gray', fontWeight: 'bold'}}>
                                    {wateringInfo.time}
                                </Text>
                                <Text style={{flex: 1, color: 'gray', fontWeight: 'bold'}}>
                                    {wateringInfo.plant}
                                </Text>
                            </View>
                        </View>
                    ))}
    
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <Calendar>
    
                    </Calendar>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    topContainer: {
        paddingTop: 50,
        width: '90%'
    },
    middleContainer: {
        paddingTop: 50,
        width: '90%'
    },
    bottomContainer: {
        paddingTop: 25,
        paddingBottom: 50,
        width: '90%'
    },
    waterContainer: {
        marginTop: 10
    },
    waterNotif: {
        backgroundColor: '#d4f0c7',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ffffff',
        marginTop: 10
    }
})

export default Home;