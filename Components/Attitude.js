import React from 'react';
import { ScrollView, View, Text, ImageBackground, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <ImageBackground style={{ height: '100%', width: '100%' }}
          source={{ uri: 'https://r1.ilikewallpaper.net/iphone-x-wallpapers/download/35561/Green-Yellow-Blur-Gradation-iphone-x-wallpaper-ilikewallpaper_com.jpg' }}>
          <Text style={[style1.font1, style1.rcorners1]}>  " I am what I am... I will never try to be some one else  "  </Text>
          <Text style={[style1.font1, style1.rcorners1]}>  "   My attitude is a result of your actions... So if you don't like my attitude blame yourself  "  </Text>
          <Text style={[style1.font1, style1.rcorners1]}>  "   A bad attitude is ike a flst tire. if you don't change it, you will never go anywhere  "  </Text>
          <Text style={[style1.font1, style1.rcorners1]}>  "   I'm 97% sure you don't like me but I'm 100% sure I don't care...  "  </Text>
          <Text style={[style1.font1, style1.rcorners1]}>  "   I have a attitude for those who force me to show them...  "  </Text>
          <Text style={[style1.font1, style1.rcorners1]}>  "   I don't react but trust me I notice everything.  "  </Text>
          <Text style={[style1.font1, style1.rcorners1]}>  "   I am not perfect. I am limited edition.  "  </Text>
          <Text style={[style1.font1, style1.rcorners1]}>  "   Before you judge me make sure you're perfect.  "  </Text>
          <Text style={[style1.font1, style1.rcorners1]}>  "   I never dream about success. I work for it.  "  </Text>
          <Text style={[style1.font1, style1.rcorners1]}>  "   Your attitude is like a price tag it shows how valuable you are.  "  </Text>
          <Text style={[style1.font1, style1.rcorners1]}>  "   There is no competiton, because nobody can be me.  "  </Text>
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
    color: 'white',
    backgroundColor: 'seagreen',
    padding: 20,
    textAlign: 'center'
  },
  rcorners1: {
    borderRadius: 25,
    borderColor: 'yellowgreen',
    borderWidth: 4

  }
})