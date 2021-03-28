import React from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        height: '100%'
    },
    pot: {
        flex: 1,
        height: 200,
        width: '50%',
        backgroundColor: '#d4f0c7'
    }
})

let plantData = [
    {
        id: 1,
        name: 'Sunflower'
    },
    {
        id: 2,
        name: 'Mayflower'
    },
    {
        id: 3,
        name: 'Cauliflower'
    },
    {
        id: 4,
        name: 'Spinach'
    }
]

let allPots = plantData.map(plantInfo => (
    <TouchableOpacity
        key={plantInfo.id}
        onPress={() =>
            console.log('sheeeeeeeeesh')
        }
        style={styles.pot}
        underlayColor='#d4f0c7'
        >
        <Text style={{}}>{plantInfo.name}</Text>
    </TouchableOpacity> 
));

function Pots(props) {
    return (
        <View style={styles.container}>
            {allPots}
        </View>
    );
}

export default Pots;