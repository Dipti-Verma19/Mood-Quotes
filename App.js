import 'react-native-gesture-handler';
import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Attitude from './Components/Attitude';
import Happy from './Components/Happy';
import Motivational from './Components/Motivational';
import Positivity from './Components/Positivity';
import Success from './Components/Success';
import Outfit from './Components/Outfit';
import Sad from './Components/Sad';
import Reminder from './Components/Reminder';
import Description from './Components/Description';
import Acknowledgement from './Components/Acknowledgement';
import About from './Components/About';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Hoome({ navigation }) {
    return (
        <ScrollView>
            <ImageBackground style={{ height: '100%', width: '100%' }}
                source={{ uri: 'https://media.istockphoto.com/vectors/seamless-pattern-with-confetti-vector-id504750682?k=20&m=504750682&s=612x612&w=0&h=0Rwv1KWAflfivuES-Hn3iTyFsm-zrYSvAuXJWAjwI4Q=' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Attitude')} >
                    <Text style={[style1.font1, style1.bg1]}>Attitude</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Happy')} >
                    <Text style={[style1.font1, style1.bg2]}>Happy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Motivational')} >
                    <Text style={[style1.font1, style1.bg3]}>Motivational</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Positivity')} >
                    <Text style={[style1.font1, style1.bg4]}>Positivity</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Success')} >
                    <Text style={[style1.font1, style1.bg5]}>Success</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Outfit')} >
                    <Text style={[style1.font1, style1.bg6]}>Outfit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Sad')} >
                    <Text style={[style1.font1, style1.bg7]}>Sad</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Reminder')} >
                    <Text style={[style1.font1, style1.bg8]}>Reminder</Text>
                </TouchableOpacity>
            </ImageBackground>
        </ScrollView>
    )
}

function Atitude({ navigation }) {
    return (
        <ScrollView style={{ flex: 1 }}>
            <Attitude />
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")} >
                    <Text style={style1.gotoback}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row-reverse' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Happy")} >
                    <Text style={style1.gotoforward}>Go To Happy</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
function Hapy({ navigation }) {
    return (
        <ScrollView>
            <Happy />
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")} >
                    <Text style={style1.gotoback}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row-reverse' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Motivational")} >
                    <Text style={style1.gotoforward}>Go To Motivational</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
function Motivate({ navigation }) {
    return (
        <ScrollView>
            <Motivational />
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")} >
                    <Text style={style1.gotoback}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row-reverse' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Positivity")} >
                    <Text style={style1.gotoforward}>Go To Positivity</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
function Positive({ navigation }) {
    return (
        <ScrollView>
            <Positivity />
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")} >
                    <Text style={style1.gotoback}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row-reverse' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Success")} >
                    <Text style={style1.gotoforward}>Go To Success</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
function Sucess({ navigation }) {
    return (
        <ScrollView>
            <Success />
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")} >
                    <Text style={style1.gotoback}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row-reverse' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Outfit")} >
                    <Text style={style1.gotoforward}>Go To Outfit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
function Ouutfit({ navigation }) {
    return (
        <ScrollView>
            <Outfit />
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")} >
                    <Text style={style1.gotoback}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row-reverse' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Sad")} >
                    <Text style={style1.gotoforward}>Go To Sad</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
function Sed({ navigation }) {
    return (
        <ScrollView>
            <Sad />
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")} >
                    <Text style={style1.gotoback}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row-reverse' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Reminder")} >
                    <Text style={style1.gotoforward}>Go To Reminder</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
function Remin({ navigation }) {
    return (
        <ScrollView>
            <Reminder />
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")} >
                    <Text style={style1.gotoback}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row-reverse' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Attitude")} >
                    <Text style={style1.gotoforward}>Go To Attitude</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

function Descript() {
    return (
        <View>
            <Description />
        </View>
    )
}
function Acknow() {
    return (
        <View>
            <Acknowledgement />
        </View>
    )
}
function AboutUs() {
    return (
        <View>
            <About />
        </View>
    )
}
function DrawTab() {
    return (
        <Stack.Navigator  >
            <Stack.Screen name='Home' component={Hoome}
                options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="Attitude" component={Atitude} />
            <Stack.Screen name="Happy" component={Hapy} />
            <Stack.Screen name="Motivational" component={Motivate} />
            <Stack.Screen name="Positivity" component={Positive} />
            <Stack.Screen name="Success" component={Sucess} />
            <Stack.Screen name="Outfit" component={Ouutfit} />
            <Stack.Screen name="Sad" component={Sed} />
            <Stack.Screen name="Reminder" component={Remin} />
        </Stack.Navigator>

    )
}

const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Mood Quotes for You' component={DrawTab}
                    options={{
                        headerTitle: () => (
                            <Image style={{ width: 150, height: 100, marginTop: 40, marginLeft: 65 }} source={{ uri: 'https://img.freepik.com/premium-vector/shape-quote-icon-illustration_185757-549.jpg?w=2000' }} />
                        ),
                    }} />
                <Drawer.Screen name="Description" component={Descript} />
                <Drawer.Screen name="About Us" component={AboutUs} />
                <Drawer.Screen name="Acknowledgement" component={Acknow} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
export default App;

const style1 = StyleSheet.create({
    font1: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 20,
        color: 'white',
        borderRadius: 25,
        padding: 20,
        textAlign: 'center',
        borderColor: 'black',
        borderWidth: 4
    },
    gotoback: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        padding: 10,
        borderColor: 'black',
        borderWidth: 3,
        justifyContent: 'center',
        borderRadius: 15,
        borderRightWidth: 10

    },
    gotoforward: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        padding: 10,
        borderColor: 'red',
        borderWidth: 3,
        borderRadius: 15,
        alignSelf: 'center',
        textAlign: 'right',
        borderLeftWidth: 10
    },
    bg1: {
        backgroundColor: 'seagreen',

    },
    bg2: {
        backgroundColor: 'pink'
    },
    bg3: {
        backgroundColor: 'purple',
    },
    bg4: {
        backgroundColor: 'orange',
    },
    bg5: {
        backgroundColor: 'blue'
    },
    bg6: {
        backgroundColor: 'slategrey'
    },
    bg7: {
        backgroundColor: 'peru',
    },
    bg8: {
        backgroundColor: 'lightcoral',
    },
})