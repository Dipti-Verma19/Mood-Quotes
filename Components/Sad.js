import React from 'react';
import { ScrollView, View, Text, ImageBackground, StyleSheet } from 'react-native';

const App = () => {
    return (
        <ScrollView>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <ImageBackground style={{ height: '100%', width: '100%' }}
                    source={{ uri: 'https://wallpaperaccess.com/full/1353542.jpg' }}>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   I feel like I'm waiting for something that's never going to happen.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   When she is happy,she can't stop talking,when she is sad she doesn't say a word.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   My head is currently a horrible place to be.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Sometimes, all you can do is lie in bed, and hope to fall asleep.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   My life has become this one thing I DON'T KNOW.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   I am fading away slowly and no one isn't noticing.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Everything hits you at night.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   I'm not okay but it's okay.   "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   I hate getting flashbacks from the things i don't want to remember.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   I said I was fine but never said it didn't hurt.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   The worst kind of sadness is not being able to explain why.  "  </Text>
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
        backgroundColor: 'peru',
        padding: 20,
        textAlign: 'center'
    },
    rcorners1: {
        borderRadius: 25,
        borderColor: 'saddlebrown',
        borderWidth: 4

    }
})