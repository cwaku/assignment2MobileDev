import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export default function Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Explore</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: Colors.background },
  label: { color: Colors.text, fontSize: 18 },
});
