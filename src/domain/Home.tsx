import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../shared/styles/colors";
import Logo from "../shared/components/Logo";

export default function Home() {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black_01,
    alignItems: "center",
    justifyContent: "center",
  },
});
