import React, { Component } from "react";
import {Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Alert, Modal, Pressable } from "react-native";

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
    }
})

let plantData = [
    {
        id: 1,
        name: 'Sunflower', 
        heights: [2, 2.1, 2.3, 2.3, 2.4, null, null]
    },
    {
        id: 2,
        name: 'Mayflower',
        heights: [2, 2.1, 2.3, 2.3, 2.4, null, null]
    },
    {
        id: 3,
        name: 'Cauliflower',
        heights: [2, 2.1, 2.3, 2.3, 2.4, null, null]
    },
    {
        id: 4,
        name: 'Spinach',
        heights: [2, 2.1, 2.3, 2.3, 2.4, null, null]
    },
    {
        id: 5,
        name: 'Kristel',
        heights: [2, 2.1, 2.3, 2.3, 2.4, null, null]
    },
    {
        id: 6,
        name: 'Fung',
        heights: [2, 2.1, 2.3, 2.3, 2.4, null, null]
    }
]

const formattedPots = () => {
    let result = []
    let i
    for (i = 0; i < allPots.length - 1; i += 2) {
        result.push(
            <View key={i} style={styles.potRow}>
                {allPots[i]}
                {allPots[i + 1]}
            </View>
        )
    }
    if (allPots.length % 2 == 1) {
        result.push(
            <View key={allPots.length - 1} style={styles.potRow}>
                {allPots[allPots.length - 1]}
            </View>
        )
    }
    return result
}

class Pots extends Component {
    state = {
        modalVisible: false,
        plants: [{
            id: 0,
            name: 'Sunflower', 
            heights: [2, 2.1, 2.3, 2.3, 2.4, null, null]
        }, 
        {
            id: 1,
            name: 'Mayflower',
            heights: [2, 2.1, 2.3, 2.3, 2.4, null, null]
        },
        {
            id: 2,
            name: 'Cauliflower',
            heights: [2, 2.1, 2.3, 2.3, 2.4, null, null]
        },
        {
            id: 3,
            name: 'Spinach',
            heights: [2, 2.1, 2.3, 2.3, 2.4, null, null]
        }]
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        const {modalVisible} = this.state;
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
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => this.setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
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
                {this.state.plants.map((plantInfo) => 
                    <TouchableOpacity
                        key={plantInfo.id}
                        onPress={() => this.setModalVisible(true)}
                        style={styles.pot}
                        underlayColor='#d4f0c7'
                    >
                        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Pot {plantInfo.id+1}</Text>
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
                            <Text style={{fontSize: 15}}>{plantInfo.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            </ScrollView>
        );
    }
}

export default Pots;