import { Image } from "expo-image";
import { View, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export function Avatar({ uri, size = 40, ring = false }: { uri: string; size?: number; ring?: boolean }) {
  return (
    <View style={[ring && styles.ring, { borderRadius: (size + 8) / 2 }]}>
      <Image source={uri} style={{ width: size, height: size, borderRadius: size / 2 }} contentFit="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  ring: { padding: 3, borderWidth: 2, borderColor: Colors.like },
});
