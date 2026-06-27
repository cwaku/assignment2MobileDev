import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { getPostById } from "@/data/posts";
import { Colors } from "@/constants/Colors";
import { PostCard } from "@/components/PostCard";

export default function PostDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const post = id ? getPostById(id) : undefined;

  if (!post) {
    return (
      <View style={styles.missing}>
        <Text style={styles.missingText}>Post not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <PostCard post={post} linkable={false} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  missing: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: Colors.background },
  missingText: { color: Colors.textMuted, fontSize: 16 },
});
