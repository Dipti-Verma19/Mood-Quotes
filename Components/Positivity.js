import React from 'react';
import { ScrollView, View, Text, ImageBackground, StyleSheet } from 'react-native';

const App = () => {
    return (
        <ScrollView>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <ImageBackground style={{ height: '100%', width: '100%' }}
                    source={{ uri: 'https://i.pinimg.com/474x/07/56/67/075667e464db9141b837f381a2fa6eba.jpg' }}>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Things Take Time.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Don't fear failure. Fear being in the exact same place next year as you are today.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   A negative mind will never give you a positive life.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Celebrate every win, no matter how small.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Life is 10% what happens to you and 90% on how you react to it.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   When you focus on the good, the good gets better.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Trust the timing of your life.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   What is coming is better than what's gone.   "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Create a life you don't need a vacation from.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Choose yourself without any regrets.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   You yourself are enough to be HAPPY and CHEERFUL.  "  </Text>
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
        backgroundColor: 'peachpuff',
        padding: 20,
        textAlign: 'center'
    },
    rcorners1: {
        borderRadius: 25,
        borderColor: 'salmon',
        borderWidth: 4

    }
})