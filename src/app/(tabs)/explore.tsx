import { FlatList, View, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { posts } from "@/data/posts";
import { Colors } from "@/constants/Colors";
import { ExploreTile } from "@/components/ExploreTile";

export default function Explore() {
  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <View style={styles.searchWrap}>
        <Ionicons name="search" size={18} color={Colors.textMuted} />
        <TextInput placeholder="Search" placeholderTextColor={Colors.textMuted} style={styles.input} editable={false} />
      </View>
      <FlatList
        data={posts}
        keyExtractor={(p) => p.id}
        numColumns={3}
        renderItem={({ item }) => <ExploreTile post={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  searchWrap: { flexDirection: "row", alignItems: "center", backgroundColor: "#efefef", borderRadius: 10, marginHorizontal: 12, marginVertical: 8, paddingHorizontal: 10, height: 38 },
  input: { marginLeft: 8, flex: 1, color: Colors.text },
});
