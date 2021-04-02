import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View, TextInput} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {db} from '../config';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            settings: {},
            loading: true
        }
    }
    componentDidMount() {
        this.setState({ loading: true })
        db.ref('/settings').on('value', snapshot => {
            let data = snapshot.val() ? snapshot.val() : {};
            let settings = {...data};
            this.setState({
                settings: settings,
                loading: false
            });
            console.log(settings["plant_0"]["diameter"])
        });
    }
    render () {
        if (!this.state.loading) {
            return (
                <ScrollView contentContainerStyle={styles.container}>
                    <Text style={{fontSize: 45, fontWeight: 'bold', alignSelf: "baseline"}}>
                        Settings
                    </Text>
                    <View style={styles.potContainer}>
                    <Text style={styles.potText}>Pot 1 and 2</Text>
                    <Text style={styles.potInfo}>Plant Type</Text>
                    <DropDownPicker
                        defaultValue={this.state.settings["plant_0"]["plant"]}
                        items={[{label: "vines", value: "vines"}, {label: "leaves", value: "leaves"}]}
                        containerStyle={{height: 40, width: 300}}
                        style={{backgroundColor: '#fafafa'}}
                        itemStyle={{
                            justifyContent: 'space-between'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                    />
                    
                    <Text style={styles.potInfo}>Soil Type</Text>
                    <DropDownPicker
                        defaultValue={this.state.settings["plant_0"]["soil"]}
                        items={[
                            {label: "sandy", value: "sandy"},
                            {label: "chalk", value: "chalk"},
                            {label: "clay", value: "clay"},
                            {label: "loam", value: "loam"},
                            {label: "silt", value: "silt"},
                            {label: "peat", value: "peat"}
                        ]}
                        containerStyle={{height: 40, width: 300}}
                        style={{backgroundColor: '#fafafa'}}
                        itemStyle={{
                            justifyContent: 'space-between'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                    />
                    <Text style={styles.potInfo}>Pot Diameter (cm)</Text>
                    <DropDownPicker
                        // defaultValue={this.state.settings["plant_0"]["diameter"]}
                        // items={[
                        //     {label: 3, value: 3},
                        //     {label: 3.5, value: 3.5},
                        //     {label: 4, value: 4},
                        //     {label: 4.5, value: 4.5},
                        //     {label: 5, value: 5},
                        //     {label: 5.5, value: 5},
                        //     {label: 6, value: 6},
                        //     {label: 6.5, value: 6.5},
                        //     {label: 7, value: 7},
                        //     {label: 7.5, value: 7.5},
                        //     {label: 8, value: 8}
                        // ]}
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
                    <TextInput editable maxLength={10}/>
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
        else {
            return null
        }
    }
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
