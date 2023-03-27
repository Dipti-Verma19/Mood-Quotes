import React from 'react';
import { ScrollView, View, Text, ImageBackground, StyleSheet } from 'react-native';

const App = () => {
    return (
        <ScrollView>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <ImageBackground style={{ height: '100%', width: '100%' }}
                    source={{ uri: 'https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-54587.jpg?w=360' }}>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   The secret of our success is that we never,never give up.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Ambition is the path to success, persistence is the vehicle you arrive in.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Put your heart, mind, and soul into even your smalllest acts. This is the secret of success.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Successs is dependent on effort.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Success usually comes to those who are too busy to be looking for it.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Success is how high you bounce when you hit bottom.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Once you can accept failure, you can have fun and success.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Formal education will make you a living; self-education will make you a fortune.   "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   One important key to success is self-confidence. An important key to self-confidence is preparation.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   The starting point of all achievement is desire..  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   There is no success without hardships.  "  </Text>
                </ImageBackground>
            </View>
        </ScrollView>
    )
}
export default App;

const style1 = StyleSheet.create({
    font1: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 30,
        color: 'black',
        backgroundColor: 'powderblue',
        padding: 20,
        textAlign: 'center'
    },
    rcorners1: {
        borderRadius: 25,
        borderColor: 'midnightblue',
        borderWidth: 4

    }
})