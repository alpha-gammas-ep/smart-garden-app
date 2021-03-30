import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


function Settings(props) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={{color: '#000000', fontSize: 45, fontWeight: 'bold', paddingTop: 10, paddingBottom: 40, alignSelf: "baseline"}}>
             {"    "}Settings
            </Text>
            <View style={styles.waterbutton}>
            <Text style={styles.potText}>   Pot 1</Text>
            <Text style={styles.potInfo}>   Plant Type</Text>
            <DropDownPicker
              containerStyle={{height: 40, width: 300}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'space-between'
                }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              />
            <Text style={styles.potInfo}>   Soil Type</Text>
            <DropDownPicker
              containerStyle={{height: 40, width: 300}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'space-between'
                }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              />
            <Text style={styles.potInfo}>   Pot Diameter</Text>
            <DropDownPicker
              containerStyle={{height: 40, width: 300}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'space-between'
                }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              />
            <Text style={styles.potInfo}>   Pot Height</Text>
            <DropDownPicker
              containerStyle={{height: 40, width: 300}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'space-between'
                }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              />
            </View>


            <View style={styles.waterbutton}>
            <Text style={styles.potText}>   Pot 2</Text>
            <Text style={styles.potInfo}>   Plant Type</Text>
            <DropDownPicker
              containerStyle={{height: 40, width: 300}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'space-between'
                }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              />
            <Text style={styles.potInfo}>   Soil Type</Text>
            <DropDownPicker
              containerStyle={{height: 40, width: 300}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'space-between'
                }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              />
            <Text style={styles.potInfo}>   Pot Diameter</Text>
            <DropDownPicker
              containerStyle={{height: 40, width: 300}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'space-between'
                }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              />
            <Text style={styles.potInfo}>   Pot Height</Text>
            <DropDownPicker
              containerStyle={{height: 40, width: 300}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'space-between'
                }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              />
            </View>


            <View style={styles.waterbutton}>
            <Text style={styles.potText}>   Pot 3</Text>
            <Text style={styles.potInfo}>   Plant Type</Text>
            <DropDownPicker
              containerStyle={{height: 40, width: 300}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'space-between'
                }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              />
            <Text style={styles.potInfo}>   Soil Type</Text>
            <DropDownPicker
              containerStyle={{height: 40, width: 300}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'space-between'
                }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              />
            <Text style={styles.potInfo}>   Pot Diameter</Text>
            <DropDownPicker
              containerStyle={{height: 40, width: 300}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'space-between'
                }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              />
            <Text style={styles.potInfo}>   Pot Height</Text>
            <DropDownPicker
              containerStyle={{height: 40, width: 300}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'space-between'
                }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              />
            </View>

            <View style={styles.waterbutton}>
            <Text style={styles.potText}>   Pot 4</Text>
            <Text style={styles.potInfo}>   Plant Type</Text>
            <DropDownPicker
              containerStyle={{height: 40, width: 300}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'space-between'
                }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              />
            <Text style={styles.potInfo}>   Soil Type</Text>
            <DropDownPicker
              containerStyle={{height: 40, width: 300}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'space-between'
                }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              />
            <Text style={styles.potInfo}>   Pot Diameter</Text>
            <DropDownPicker
              containerStyle={{height: 40, width: 300}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'space-between'
                }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              />
            <Text style={styles.potInfo}>   Pot Height</Text>
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
        marginTop: 10,
        marginBottom: 200,
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
    waterbutton: {
        width: '80%',
        height: 550,
        paddingBottom: 20,
        backgroundColor:'#F6F6F6',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: '#C1C1C1',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 0.5,
        shadowOffset: {
        height: 1,
        width: 0.5}
    }
})

export default Settings;
