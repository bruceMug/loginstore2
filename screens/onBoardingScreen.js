import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";

const OnBoardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <View>
        <Text style={{fontSize: 30, fontWeight: "bold", color: "#20315f" }}>
          GAME ON
        </Text>
      </View>

      <View>
        <Text>Image</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Let's Begin</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;
