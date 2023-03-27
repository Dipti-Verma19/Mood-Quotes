import React from "react";
import { View, Text, Image } from "react-native";

const About = () => {
    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: 30, margin: 10, fontWeight: "bold" }}>Mood Quotes App is made by-</Text>
            <Image style={{ height: 150, width: 150, margin: 20, }}
                source={{ uri: 'https://i.pinimg.com/736x/68/6b/07/686b07e7a8a09447677e69f67ec8e784.jpg' }} />
            <Text style={{ fontSize: 20, marginLeft: 20, fontWeight: 'bold' }}>Dipti Verma</Text>
            <Text style={{ fontSize: 20, marginLeft: 20 }}>4th Sem CSE</Text>
            <Text style={{ fontSize: 20, marginLeft: 20 }}>Section-C</Text>
            <Image style={{ height: 150, width: 150, margin: 20, marginLeft: 235 }}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzjhGzxEffUl4m8pjf3Cu__F0abuYdxITIjpXjMJqdoN9GO-vFpoZP8wgSG6bKdJTtIfY&usqp=CAU' }} />
            <Text style={{ textAlign: 'right', fontSize: 20, marginRight: 30, fontWeight: 'bold' }}>Ayushi Shrivastav</Text>
            <Text style={{ textAlign: 'right', fontSize: 20, marginRight: 30 }}>4th Sem CSE</Text>
            <Text style={{ textAlign: 'right', fontSize: 20, marginRight: 30 }}>Section-B</Text>
        </View>
    )
}
export default About;