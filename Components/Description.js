import React from "react";
import { View, Text, Image } from "react-native";

const Description = () => {
    return (
        <View>
            <Image style={{ width: 50, height: 50, margin: 10, marginLeft: 180 }}
                source={{ uri: 'https://i.pinimg.com/originals/3d/4d/30/3d4d30d051741b0309b083953713f9b3.png' }} />
            <Text style={{ textAlign: 'center', fontSize: 30, margin: 10, fontWeight: "bold" }}>This is our Mood Quotes App.</Text>
            <Text style={{ textAlign: 'center', margin: 10 }}>It contains offline Readable Quotes specified according to our moods.</Text>
            <Text style={{ textAlign: 'center', margin: 10 }}>We added 8 specified mood Quotes Namely-</Text>
            <Text style={{ textAlign: 'center', margin: 10 }}>Attitude</Text>
            <Text style={{ textAlign: 'center', margin: 10 }}>Happy</Text>
            <Text style={{ textAlign: 'center', margin: 10 }}>Motivational</Text>
            <Text style={{ textAlign: 'center', margin: 10 }}>Positivity</Text>
            <Text style={{ textAlign: 'center', margin: 10 }}>Success</Text>
            <Text style={{ textAlign: 'center', margin: 10 }}>Outfit</Text>
            <Text style={{ textAlign: 'center', margin: 10 }}>Sad</Text>
            <Text style={{ textAlign: 'center', margin: 10 }}>Reminder</Text>

            <Text style={{ textAlign: 'center', margin: 10 }}>We Used Nested Navigator Of Drawer And Stack Navigation.</Text>
            <Text style={{ textAlign: 'center', fontSize: 20, margin: 10, fontWeight: 'bold' }}>Few of the properites we used in our App are navigations, Image, TouchableOpacity, Text and View styles, SytleSheets, ImageBackground, Functions, HeaderTitle Logo, Flex and flexDirection etc. </Text>
            <Image style={{ width: 50, height: 50, margin: 10, marginLeft: 180 }}
                source={{ uri: 'https://i.pinimg.com/originals/3d/4d/30/3d4d30d051741b0309b083953713f9b3.png' }} />
        </View>
    )
}
export default Description;