import { View, Text, Image } from "react-native";
import React from "react";

export default function Backimg() {
  return (
    <View style={{ marginLeft: 26 }}>
      <Image source={require("../../assets/todo.webp")}></Image>
      <Text style={{ marginLeft: 50, fontWeight: "700" }}>
        Let's start to add your todos
      </Text>
    </View>
  );
}
