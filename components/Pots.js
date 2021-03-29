import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

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
    },
    {
        id: 5,
        name: 'Kristel'
    },
    {
        id:6,
        name: 'Fung'
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
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Pot {plantInfo.id}</Text>
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
));

const formattedPots = () => {
    let result = []
    var i
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

function Pots(props) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.topContainer}>
                <Text style={{color: '#000000', fontSize: 45, fontWeight: 'bold'}}>
                    Liana's{'\n'}
                    <Text style={{color: '#669850'}}>
                        Garden
                    </Text>
                </Text>
            </View>
            {formattedPots()}
        </ScrollView>
    );
}

export default Pots;