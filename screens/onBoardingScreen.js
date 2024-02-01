import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const OnBoardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        marginTop: 30
      }}
    >
      <View>
        <Text style={{fontSize: 30, fontWeight: "bold", color: "#20315f" }}>
          GAMEON
        </Text>
      </View>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../assets/images/gaming.jpg')} style={{height: 400, width: 300, borderRadius: 20}}/>
        {/* <Image source={require('../assets/images/gaming.jpg')} style={{height: 400, width: 300, transform: [{rotate: '-15deg'}]}}/> */}
      </View>

      <TouchableOpacity style={{backgroundColor: '#AD40AF', padding: 18, width: '90%', borderRadius: 10, flexDirection: 'row', marginBottom: 30, justifyContent: 'space-between' }} onPress={() => navigation.navigate("Login")}>
        <Text style={{color: 'white', fontSize: 15, textAlign: 'center', fontWeight: 'bold' }}>Let's Begin</Text>
        <MaterialIcons name='arrow-forward-ios' color='#fff' size={19}/>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;
