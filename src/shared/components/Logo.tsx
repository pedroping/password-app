import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { COLORS } from "../styles/colors";

const logoImage = require("../../../assets/logo.png");

export default function Logo() {
  return (
    <View>
      <Text style={styles.text}>Pass Generator</Text>
      <Image source={logoImage} style={styles.image}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 100
  },
  text: {
    textAlign: 'center',
    color: COLORS.white_01,
    fontWeight: 600,
    fontSize: 20,
    marginBottom: 20
  },
});
