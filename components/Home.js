import React, {Component} from 'react';
import { Alert, Modal, Pressable } from "react-native";
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Platform} from 'react-native';

import {Calendar} from 'react-native-calendars';
import {db, storage} from "../config";

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            waters: [],
            allData: {},
            dayPressed: '',
            month: 0,
            day: 0,
            year: 0,
            img1: '',
            img2: '',
            loading: true
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
                        interval: info["plants"]["plant_1"]["water_interval"],
                        plant: info["settings"]["plant_1"]["plant"]
                    }],
                    allData: info,
                    modalVisible: false,

                    loading: false
                })
            })
    }

    getFrequency(age, plant_name) {
        return new Promise(resolve => {
            setTimeout(() => {
                if (age == "plant") {
                    switch(this.state.plant_types[plant_name]) {
                        case "very low":
                            resolve("1209600000")
                        case "low":
                            resolve("604800000")
                        case "moderate":
                            resolve("302400000")
                    }
                }
                else if (age == "sapling") { // age == "sapling"
                    switch(this.state.plant_types[plant_name]) {
                        case "very low":
                            resolve("604800000")
                        case "low":
                            resolve("302400000")
                        case "moderate":
                            resolve("151200000")
                    }
                }
            }, 1000)
        })
      }

    getDate(milliseconds) {
        const dateObject = new Date(milliseconds)
        return dateObject.toLocaleDateString("en-US")
    }

    getTime(milliseconds) {
        const dateObject = new Date(milliseconds)
        return dateObject.toLocaleTimeString()
    }
    CalendarMarker() {
        let items = []
        for (let i = 0; i < this.state.waters.length; i++) {
          var date = new Date(parseInt(this.state.waters[i]['last_watered']*1000) + parseInt(this.state.waters[i]['interval'])); // Date 2011-05-09T06:08:45.178Z
          var year = date.getFullYear();
          var month = ("0" + (date.getMonth() + 1)).slice(-2);
          var day = ("0" + date.getDate()).slice(-2);

          items.push(`${year}-${month}-${day}`);
        }

        const result = {}
      	for (let i = 0; i <= items.length; i++) {
      		result[items[i]] = {customStyles: {
                container: {
                  backgroundColor: '#C7EEF4'
                },
                text: {
                  color: 'black',
                  fontWeight: 'bold'
                }
              }};
        }
        return result
      }

    setModalVisible = (visible, date) => {
        let formattedDate = `${date['month']}/${date['day']}/${date['year']}`
        let day = date['day']
        let month = date['month']
        let year = date['year']
        this.setState({ modalVisible: visible, dayPressed: formattedDate});
        if (day < 10) {
            day = "0" + day
        }
        if (month < 10) {
            month = "0" + month
        }
        let fileName = "0-" + year + "-" + month + "-" + day + ".jpg"
        storage.ref(fileName).getDownloadURL().then((url) => {
            this.setState({imageUrl: url})
        }).catch((err) => {
            let errorUrl = 'https://firebasestorage.googleapis.com/v0/b/smart-garden-db.appspot.com/o/no_image.png?alt=media&token=5d6f1188-bbd5-4161-bbaa-478c7d15e785'
            this.setState({imageUrl: errorUrl})
        })
        let fileName2 = "1-" + year + "-" + month + "-" + day + ".jpg"
        storage.ref(fileName2).getDownloadURL().then((url) => {
            this.setState({imageUrl2: url})
        }).catch((err) => {
            let errorUrl = 'https://firebasestorage.googleapis.com/v0/b/smart-garden-db.appspot.com/o/no_image.png?alt=media&token=5d6f1188-bbd5-4161-bbaa-478c7d15e785'
            this.setState({imageUrl2: errorUrl})
        })
        db.ref('/').update({
            update: 1
        })
    }

    modalWaters1() {
    let nextDate= this.getDate(parseInt(this.state.waters[0].last_watered*1000) + parseInt(this.state.waters[0].interval))
        if (nextDate == this.state.dayPressed) {
        return (
        <View style={[styles.waterNotif, styles.modalWaterNotif]}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{flex: 1, paddingLeft: 20, paddingTop: 15}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        Top Pots
                    </Text>
                </Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <View style={{flex:1}}>
                    <Text style={{fontSize: 12, paddingLeft:20, color: 'grey', fontWeight: 'bold'}}>
                        {this.state.waters[0]['plant'].replace(/_/g, " ")}
                    </Text>
                </View>
                <View style={{flex:1, paddingLeft:100, paddingBottom:15}}>
                    <Text style={{fontSize: 12, color: 'grey', fontWeight: 'bold'}}>
                        {this.getTime(parseInt(this.state.waters[0].last_watered*1000) + parseInt(this.state.waters[0].interval))}
                    </Text>
                    <Text style={{fontSize: 10, fontWeight: 'bold'}}>
                        ({this.state.allData['plants']['plant_0']['water_volume']} mL)
                    </Text>
                </View>
            </View>
        </View>
        )} else {
        return (
        <View style={[styles.waterNotif, styles.modalWaterNotif]}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{flex: 1, paddingLeft: 20, paddingTop: 15, paddingBottom: 3}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        Top Pots
                    </Text>
                </Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <View style={{flex:1, paddingBottom:15}}>
                    <Text style={{fontSize: 12, paddingLeft: 20, color: 'grey', fontWeight: 'bold'}}>
                        No watering!
                    </Text>
                </View>
            </View>
        </View>
        )}
    }

    modalWaters2() {
        let nextDate= this.getDate(parseInt(this.state.waters[1].last_watered*1000) + parseInt(this.state.waters[1].interval))
        if (nextDate == this.state.dayPressed) {
        return (
        <View style={[styles.waterNotif, styles.modalWaterNotif]}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{flex: 1, paddingLeft: 20, paddingTop: 15}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        Bottom Pots
                    </Text>
                </Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <View style={{flex:1}}>
                <Text style={{fontSize: 12, paddingLeft: 20, color: 'grey', fontWeight: 'bold'}}>
                        {this.state.waters[1]['plant'].replace(/_/g, " ")}
                    </Text>
                </View>
                <View style={{flex:1, paddingLeft:100, paddingBottom:15}}>
                    <Text style={{fontSize: 12, color: 'grey', fontWeight: 'bold'}}>
                        {this.getTime(parseInt(this.state.waters[1].last_watered*1000) + parseInt(this.state.waters[1].interval))}
                    </Text>
                    <Text style={{fontSize: 10, fontWeight: 'bold'}}>
                        ({this.state.allData['plants']['plant_1']['water_volume']} mL)
                    </Text>
                </View>
            </View>
        </View>
        )} else {
        return (
        <View style={[styles.waterNotif, styles.modalWaterNotif]}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{flex: 1, paddingLeft: 20, paddingTop: 15, paddingBottom: 3}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        Bottom Pots
                    </Text>
                </Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <View style={{flex:1, paddingBottom:15}}>
                    <Text style={{fontSize: 12, paddingLeft: 20, color: 'grey', fontWeight: 'bold'}}>
                        No watering!
                    </Text>
                </View>
            </View>
        </View>
        )}
    }

    render() {
        const {modalVisible} = this.state;
        if (!this.state.loading) {
            return (
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.topContainer}>
                        <Text style={{color: '#000000', fontSize: 45, fontWeight: 'bold'}}>
                            Welcome{' '}
                            <Text style={{color: '#669850'}}>
                                Back!
                            </Text>
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
                                        <Text style={{flex: 1, padding: 20}}>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                                                {this.getDate(parseInt(wateringInfo.last_watered)*1000 + parseInt(wateringInfo.interval))}{'\n'}
                                            </Text>
                                            <Text style={{fontSize: 12, fontWeight: 'bold', color: "grey"}}>
                                                {this.getTime(parseInt(wateringInfo.last_watered)*1000 + parseInt(wateringInfo.interval))}
                                            </Text>
                                        </Text>
                                        <Text style={{flex: 1, padding: 20}}>
                                            <Text style={{fontSize: 18, fontWeight: "bold"}}>
                                                Watering{'\n'}
                                            </Text>
                                            <Text style={{fontSize: 12, fontWeight: 'bold', color: "grey"}}>
                                                {wateringInfo.plant.replace(/_/g, " ")}
                                            </Text>
                                        </Text>

                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>

                    <View style={styles.bottomContainer}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        backdropOpacity={0.1}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            this.setModalVisible(!modalVisible);
                        }}
                        >
                    <View style={styles.modalContainer}>
                        <Text style={{fontSize: 25, fontWeight: 'bold'}}>{this.state.dayPressed}</Text>
                        <View style={{height: 20}}/>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#669850'}}>Top Pots</Text>
                        <View style={{height: 10}}/>
                        <Image
                            source={{uri: this.state.imageUrl}}
                            style={{width: 175, height: 175, alignSelf: 'center', transform: [{rotate: '90deg'}]}}
                            resizeMode='contain'
                        />
                        <View style={{height: 10}}/>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#669850'}}>Bottom Pots</Text>
                        <View style={{height: 10}}/>
                        <Image
                            source={{uri: this.state.imageUrl2}}
                            style={{width: 175, height: 175, alignSelf: 'center', transform: [{rotate: '90deg'}]}}
                            resizeMode='contain'
                        />
                        <View style={{height: 10}}/>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#5B98BB'}}>Waters</Text>
                        {this.modalWaters1()}
                        {this.modalWaters2()}
                        <View style={{height: 10}}/>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => this.setModalVisible(!modalVisible, '')}
                            >
                                <Text style={styles.buttonText}>Close</Text>
                            </Pressable>
                        </View>
                    </Modal>

                        <Calendar
                            markingType={'custom'}
                            onDayPress={(day) => {
                              this.setModalVisible(true, day);
                            }}

                            theme={{
                              todayBackgroundColor: '#6291a3',
                              todayTextColor: 'white',
                              textDayFontWeight: 'bold'                            }}

                            markedDates={
                              this.CalendarMarker()
                            }
                        />

                    </View>
                    <View style={{height: 45}}/>
                </ScrollView>
            );
        }
        else {
            return null
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
    modalContainer: {
        display: 'flex',
        marginTop: 50,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 770
    },
    middleContainer: {
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
    button: {
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        width: '35%',
        height: 35,
        backgroundColor:'#669850',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    waterNotif: {
        backgroundColor: '#C7EEF4',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ffffff',
        marginTop: 10
    },
    modalWaterNotif: {
        width: '100%',
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color:'#ffffff'
    }

})

export default Home;
