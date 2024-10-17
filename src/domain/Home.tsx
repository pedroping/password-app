import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../shared/colors";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Teste</Text>
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
  text: {
    color: COLORS.white_01,
    fontWeight: 600,
  },
});
