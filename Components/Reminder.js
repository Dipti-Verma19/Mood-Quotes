import React from 'react';
import { ScrollView, View, Text, ImageBackground, StyleSheet } from 'react-native';

const App = () => {
    return (
        <ScrollView>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <ImageBackground style={{ height: '100%', width: '100%' }}
                    source={{ uri: 'https://www.mwallpapers.com/download-image/676648/1080x810' }}>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Reminder: It's just a bad day, not a bad life.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Reminder: It will all make sense at the end.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Reminder: Stop being so hard on yourself.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Reminder: Love yourself. Today & everyday.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Reminder: Its ok not to be ok. "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Reminder: Train your mind to see the good in everything.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Reminder: Drean big. Stay focus & make it happen.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Reminder: It always seems impossible util its done. "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Reminder: Do what makes you the happiest.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Reminder: Good things are coming.  "  </Text>
                    <Text style={[style1.font1, style1.rcorners1]}>  "   Reminder: Everything will be fine. "  </Text>
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
        backgroundColor: 'lightcoral',
        padding: 20,
        textAlign: 'center'
    },
    rcorners1: {
        borderRadius: 25,
        borderColor: 'crimson',
        borderWidth: 4

    }
})