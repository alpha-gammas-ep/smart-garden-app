import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


function Settings(props) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={{fontSize: 45, fontWeight: 'bold', alignSelf: "baseline"}}>
                Settings
            </Text>
            <View style={styles.potContainer}>
            <Text style={styles.potText}>Pot 1 and 2</Text>
            <Text style={styles.potInfo}>Plant Type</Text>
            <DropDownPicker
              containerStyle={{height: 40, width: 300}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'space-between'
                }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              />
            <Text style={styles.potInfo}>Soil Type</Text>
            <DropDownPicker
              containerStyle={{height: 40, width: 300}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'space-between'
                }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              />
            <Text style={styles.potInfo}>Pot Diameter</Text>
            <DropDownPicker
              containerStyle={{height: 40, width: 300}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'space-between'
                }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              />
            <Text style={styles.potInfo}>Pot Height</Text>
            <DropDownPicker
              containerStyle={{height: 40, width: 300}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'space-between'
                }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              />
            </View>


            <View style={styles.potContainer}>
            <Text style={styles.potText}>Pot 3 and 4</Text>
            <Text style={styles.potInfo}>Plant Type</Text>
            <DropDownPicker
              containerStyle={{height: 40, width: 300}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'space-between'
                }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              />
            <Text style={styles.potInfo}>Soil Type</Text>
            <DropDownPicker
              containerStyle={{height: 40, width: 300}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'space-between'
                }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              />
            <Text style={styles.potInfo}>Pot Diameter</Text>
            <DropDownPicker
              containerStyle={{height: 40, width: 300}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'space-between'
                }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              />
            <Text style={styles.potInfo}>Pot Height</Text>
            <DropDownPicker
              containerStyle={{height: 40, width: 300}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'space-between'
                }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        backgroundColor: "#ffffff"
    },
    potText: {
        paddingTop: 0,
        fontSize: 30,
        fontWeight: 'bold',
        color:'#000000',
        alignSelf: "stretch",
    },
    potInfo: {
        paddingTop: 37,
        paddingBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color:'#000000',
        alignSelf: "stretch",
    },
    potContainer: {
        height: 550,
        marginTop: 10,
        marginBottom: 10,
        padding: 20,
        backgroundColor:'#ffffff',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: '#C1C1C1',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000000",
        shadowOffset: {
        height: 1,
        width: 0.5}
    }
})

export default Settings;
