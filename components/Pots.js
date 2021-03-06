import React, { Component } from "react";
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import { Alert, Modal, Pressable } from "react-native";
import Carousel from 'react-native-snap-carousel';
import { db, storage } from "../config";

class Pots extends Component {
        constructor(props) {
        super(props);
        this.state = {
            img: "",
            plant_0_settings: {},
            plant_1_settings: {},
            plant_types: {},
            lst_plant_types: [],
            loading: true,
        }
    }

    componentDidMount() {
        let today = new Date();
        let dd = today.getDate();

        let mm = today.getMonth()+1; 
        let yyyy = today.getFullYear();

        if (mm < 10) {
            mm = "0" + mm
        }

        let carouselItems = [{id: 0}, {id: 1}, {id: 2}, {id: 3}, 
            {id: 4}, {id: 5}, {id: 6}]
        for (let i = 0; i < carouselItems.length; i++) {
            if (i == 0) {
                carouselItems[i]["title"] = "Today"
            }
            else if (i == 1) {
                carouselItems[i]["title"] = i + " day ago"
            }
            else {
                carouselItems[i]["title"] = i + " days ago"
            }
            let day = (parseInt(dd)-i).toString()
            if (day < 10) {
                day = "0" + day
            }
            let fileName = "0-" + yyyy + "-" + mm + "-" + day + ".jpg"
            storage.ref(fileName).getDownloadURL().then((url) => {
                carouselItems[i]["url"] = url
            }).catch((err) => {
                let errorUrl = 'https://firebasestorage.googleapis.com/v0/b/smart-garden-db.appspot.com/o/no_image.png?alt=media&token=5d6f1188-bbd5-4161-bbaa-478c7d15e785'
                carouselItems[i]["url"] = errorUrl
            })
        }
        let carouselItems2 = [{id: 0}, {id: 1}, {id: 2}, {id: 3}, 
            {id: 4}, {id: 5}, {id: 6}]
        for (let i = 0; i < carouselItems2.length; i++) {
            if (i == 0) {
                carouselItems2[i]["title"] = "Today"
            }
            else if (i == 1) {
                carouselItems2[i]["title"] = i + " day ago"
            }
            else {
                carouselItems2[i]["title"] = i + " days ago"
            }
            let fileName = "1-" + yyyy + "-" + mm + "-" + (parseInt(dd)-i).toString() + ".jpg"
            storage.ref(fileName).getDownloadURL().then((url) => {
                carouselItems2[i]["url"] = url
            }).catch((err) => {
                let errorUrl = 'https://firebasestorage.googleapis.com/v0/b/smart-garden-db.appspot.com/o/no_image.png?alt=media&token=5d6f1188-bbd5-4161-bbaa-478c7d15e785'
                carouselItems2[i]["url"] = errorUrl
            })
        }
        let imageRef = storage.ref('/test1.jpg');
        imageRef.getDownloadURL().then((url) => {
            db.ref('/settings').on('value', snapshot => {
                let data = snapshot.val() ? snapshot.val() : {};
                let settings = {...data};
                this.setState({
                    //img: url,
                    plant_0_settings: settings["plant_0"],
                    plant_1_settings: settings["plant_1"],
                    plant_types: settings["plant_watering_frequency"],
                    index: 0,
                    activeIndex: 0,
                    activeIndex2:0,
                    carouselItems: carouselItems,
                    carouselItems2: carouselItems2,
                    modalVisible: false,
                    modalVisible2: false,
                    plants: [{
                        id: 0,
                        name: settings['plant_0']['plant'],
                        heights: [2, 2.1, 2.3, 2.3, 2.4, null, null]
                    },
                    {
                        id: 2,
                        name: settings['plant_1']['plant'],
                        heights: [2, 2.1, 2.3, 2.3, 2.4, null, null]
                    }]
                });
            });
        }).then(() => {
            this.setState({loading: false})
        })
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    setModalVisible2 = (visible) => {
        this.setState({ modalVisible2: visible});
    }

    _renderItem = (item) => { 
        return (
          <View style={{
              borderRadius: 5,
              height: 250,
              padding: 20,
              marginLeft: 25,
              marginRight: 25, }}>
            <Text style={{fontSize: 20, textAlign: 'center', paddingBottom: 10, fontWeight: 'bold'}}>{item["item"]["title"]}</Text>
            <Image
                source={{uri: item["item"]["url"] }}
                style={{width: 175, height: 175, alignSelf: 'center', transform: [{rotate: '90deg'}]}}
                resizeMode='contain'
            />
          </View>
        )
    }

    render() {
        const {modalVisible} = this.state;
        const {modalVisible2} = this.state;
        if (!this.state.loading) {
        return (
            <ScrollView contentContainerStyle={styles.container}>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        this.setModalVisible(!modalVisible);
                    }}
                    >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                        <SafeAreaView style={{flex: 1, backgroundColor:'transparent', paddingTop: 50, }}>
                        <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center'}}>
                            <Carousel
                              style={{alignSelf: 'center'}}
                              layout={"default"}
                              ref={ref => this.carousel = ref}
                              data={this.state.carouselItems}
                              sliderWidth={300}
                              itemWidth={300}
                              renderItem={this._renderItem}
                              onSnapToItem = { index => this.setState({activeIndex:index}) } />
                        </View>
                        </SafeAreaView>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => this.setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.buttonText}>Close</Text>
                        </Pressable>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible2}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        this.setModalVisible2(!modalVisible2);
                    }}
                    >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                        <SafeAreaView style={{flex: 1, backgroundColor:'transparent', paddingTop: 50, }}>
                        <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center'}}>
                            <Carousel
                              style={{alignSelf: 'center'}}
                              layout={"default"}
                              ref={ref => this.carousel = ref}
                              data={this.state.carouselItems2}
                              sliderWidth={300}
                              itemWidth={300}
                              renderItem={this._renderItem}
                              onSnapToItem = { index => this.setState({activeIndex2:index}) } />
                        </View>
                        </SafeAreaView>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => this.setModalVisible2(!modalVisible2)}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                        </View>
                    </View>
                </Modal>

                <View style={styles.topContainer}>
                    <Text style={{color: '#000000', fontSize: 45, fontWeight: 'bold'}}>
                        My{' '}
                        <Text style={{color: '#669850'}}>
                            Garden
                        </Text>
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => this.setModalVisible(true)}
                    style={styles.pot}
                    underlayColor='#d4f0c7'
                >
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>Top Pots</Text>
                    <View style={{alignItems: 'center'}}>
                        <Image
                            source={require('../assets/pot-icon.png')}
                            style={{width: 175, height: 175}}
                            resizeMode='contain'
                        />
                    </View>
                    <View style={{
                        backgroundColor: '#ffffff',
                        borderRadius: 20,
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        alignItems: 'center',
                        padding: 3
                    }}>
                        <Text style={{fontSize: 15}}>{this.state.plants[0]['name'].replace(/_/g, " ")}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                        onPress={() => this.setModalVisible2(true)}
                        style={styles.pot}
                        underlayColor='#d4f0c7'
                    >
                        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Bottom Pots</Text>
                        <View style={{alignItems: 'center'}}>
                            <Image
                                source={require('../assets/pot-icon.png')}
                                style={{width: 175, height: 175}}
                                resizeMode='contain'
                            />
                        </View>
                        <View style={{
                            backgroundColor: '#ffffff',
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: '#ffffff',
                            alignItems: 'center',
                            padding: 3
                        }}>
                            <Text style={{fontSize: 15}}>{this.state.plants[1]['name'].replace(/_/g, " ")}</Text>
                        </View>
                    </TouchableOpacity>
                <View style={{height: 50}}></View>
            </ScrollView>
        );
    }
    else {
        return null;
    }
} }

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },
    topContainer: {
        marginVertical: 25,
        width: '90%'
    },
    pot: {
        flex: 1,
        height: 300,
        width: '90%',
        backgroundColor: '#e1eed3',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ffffff',
        padding: 20,
        margin: 5
    },
    potRow: {
        width: '95%',
        display: 'flex',
        flexDirection: 'row'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 400
    },
    button: {
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        width: 110,
        height: 35,
        backgroundColor:'#669850',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color:'#ffffff'
    }
})

export default Pots;
