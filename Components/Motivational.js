import React from 'react';
import { ScrollView, View, Text, ImageBackground, StyleSheet } from 'react-native';

const App = () => {
    return (
        <ScrollView>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <ImageBackground style={{ height: '100%', width: '100%' }}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOKNl-uYYExJcTbyYKWhfGEhQB-48Tbu610Q&usqp=CAU' }}>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   If it won't challenge you, it won't change you.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Believe in yourself and you will be unstoppable.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   The future depends on what you do today.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   You are so much STRONGER than you think.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Mistakes are proof that you are trying.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Become the hardest working person you know.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   A little progress each day adds up to big results.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   If you get tired, learn to rest not to quit.   "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Never let your fear decide your fate.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Great things never came from comfort zones.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Stop doubting yourself. Work hard and make it happen  "  </Text>
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
        backgroundColor: 'orchid',
        padding: 20,
        textAlign: 'center'
    },
    rcorners1: {
        borderRadius: 25,
        borderColor: 'purple',
        borderWidth: 4

    }
})