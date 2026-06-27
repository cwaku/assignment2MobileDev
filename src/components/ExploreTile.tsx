import { Pressable, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Post } from "@/types";

export function ExploreTile({ post }: { post: Post }) {
  const router = useRouter();
  return (
    <Pressable style={styles.tile} onPress={() => router.push(`/post/${post.id}`)}>
      <Image source={post.image} style={styles.image} contentFit="cover" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: { flex: 1 / 3, aspectRatio: 1, padding: 1 },
  image: { width: "100%", height: "100%" },
});
