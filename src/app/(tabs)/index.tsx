import { FlatList, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { posts } from "@/data/posts";
import { Colors } from "@/constants/Colors";
import { StoriesBar } from "@/components/StoriesBar";
import { PostCard } from "@/components/PostCard";

export default function Home() {
  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <View style={styles.topbar}>
        <Text style={styles.logo}>Instagram</Text>
        <Ionicons name="heart-outline" size={26} color={Colors.icon} style={styles.topIcon} />
        <Ionicons name="paper-plane-outline" size={24} color={Colors.icon} />
      </View>
      <FlatList
        data={posts}
        keyExtractor={(p) => p.id}
        ListHeaderComponent={<StoriesBar />}
        renderItem={({ item }) => <PostCard post={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  topbar: { flexDirection: "row", alignItems: "center", paddingHorizontal: 12, paddingVertical: 8, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: Colors.border },
  logo: { fontSize: 24, fontWeight: "700", color: Colors.text, fontStyle: "italic" },
  topIcon: { marginLeft: "auto", marginRight: 16 },
});
