import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Post } from "@/types";
import { Colors } from "@/constants/Colors";
import { Avatar } from "./Avatar";

export function PostCard({ post }: { post: Post }) {
  const router = useRouter();
  const open = () => router.push(`/post/${post.id}`);

  return (
    <View style={styles.card}>
      <Pressable style={styles.header} onPress={open}>
        <Avatar uri={post.user.avatar} size={34} />
        <Text style={styles.username}>{post.user.username}</Text>
        <Ionicons name="ellipsis-horizontal" size={18} color={Colors.icon} style={styles.more} />
      </Pressable>
      <Pressable onPress={open}>
        <Image source={post.image} style={styles.image} contentFit="cover" />
      </Pressable>
      <View style={styles.actions}>
        <Ionicons name="heart-outline" size={26} color={Colors.icon} style={styles.action} />
        <Ionicons name="chatbubble-outline" size={24} color={Colors.icon} style={styles.action} />
        <Ionicons name="paper-plane-outline" size={24} color={Colors.icon} style={styles.action} />
        <Ionicons name="bookmark-outline" size={24} color={Colors.icon} style={styles.bookmark} />
      </View>
      <Text style={styles.likes}>{post.likes.toLocaleString()} likes</Text>
      <Text style={styles.caption}>
        <Text style={styles.username}>{post.user.username}</Text> {post.caption}
      </Text>
      <Text style={styles.comments}>View all {post.comments} comments</Text>
      <Text style={styles.time}>{post.timeAgo} ago</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: Colors.background, paddingBottom: 12 },
  header: { flexDirection: "row", alignItems: "center", paddingHorizontal: 12, paddingVertical: 8 },
  username: { fontWeight: "600", color: Colors.text, marginLeft: 10 },
  more: { marginLeft: "auto" },
  image: { width: "100%", aspectRatio: 1 },
  actions: { flexDirection: "row", alignItems: "center", paddingHorizontal: 12, paddingTop: 10 },
  action: { marginRight: 14 },
  bookmark: { marginLeft: "auto" },
  likes: { fontWeight: "600", color: Colors.text, paddingHorizontal: 12, paddingTop: 8 },
  caption: { color: Colors.text, paddingHorizontal: 12, paddingTop: 4 },
  comments: { color: Colors.textMuted, paddingHorizontal: 12, paddingTop: 4 },
  time: { color: Colors.textMuted, fontSize: 11, paddingHorizontal: 12, paddingTop: 4 },
});
