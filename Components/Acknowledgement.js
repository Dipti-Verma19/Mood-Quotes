import React from "react";
import { View, Text, Image } from "react-native";

const Acknowledegment = () => {
    return (
        <View>
            <Image style={{ width: 50, height: 50, margin: 10, marginLeft: 180 }}
                source={{ uri: 'https://i.pinimg.com/originals/3d/4d/30/3d4d30d051741b0309b083953713f9b3.png' }} />
            <Text style={{ textAlign: 'center', fontSize: 20, margin: 10 }}>We would like to express our special thanks of gratitude to our teacher,</Text>
            <Text style={{ textAlign: 'center', fontSize: 25, margin: 10, fontWeight: "bold" }}>Mr. Dheeraj Kumar Ghaghre Sir</Text>
            <Text style={{ textAlign: 'center', margin: 10, fontSize: 25, fontWeight: "bold" }}>and our college's IDEA LAB Faculties</Text>
            <Text style={{ textAlign: 'center', margin: 10, fontSize: 20 }}>who provided us this golden opportunity to take part in </Text>
            <Text style={{ textAlign: 'center', margin: 10, fontSize: 30, fontWeight: "bold" }}>8 Days Skill Development Program </Text>
            <Text style={{ textAlign: 'center', margin: 2, fontSize: 15 }}>on Topic</Text>
            <Text style={{ textAlign: 'center', margin: 10, fontSize: 30, fontWeight: "bold" }}>APP DEVELOPMENT USING REACT NATIVE</Text>
            <Text style={{ textAlign: 'center', margin: 13, fontSize: 20 }}>We got to learn more about React Native Language for which we are really thankful to you.</Text>
            <Image style={{ width: 50, height: 50, margin: 10, marginLeft: 180 }}
                source={{ uri: 'https://i.pinimg.com/originals/3d/4d/30/3d4d30d051741b0309b083953713f9b3.png' }} />
        </View>
    )
}
export default Acknowledegment;