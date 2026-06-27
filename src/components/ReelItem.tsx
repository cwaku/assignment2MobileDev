import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { Post } from "@/types";
import { Avatar } from "./Avatar";

function ReelAction({ icon, label }: { icon: keyof typeof Ionicons.glyphMap; label: string }) {
  return (
    <View style={styles.action}>
      <Ionicons name={icon} size={28} color="#fff" />
      <Text style={styles.actionLabel}>{label}</Text>
    </View>
  );
}

export function ReelItem({ post, height }: { post: Post; height: number }) {
  return (
    <View style={[styles.reel, { height }]}>
      <Image source={post.image} style={StyleSheet.absoluteFill} contentFit="cover" />
      <View style={styles.overlay}>
        <View style={styles.bottom}>
          <View style={styles.userRow}>
            <Avatar uri={post.user.avatar} size={32} />
            <Text style={styles.username}>{post.user.username}</Text>
          </View>
          <Text style={styles.caption}>{post.caption}</Text>
        </View>
        <View style={styles.rail}>
          <ReelAction icon="heart" label={post.likes.toLocaleString()} />
          <ReelAction icon="chatbubble" label={String(post.comments)} />
          <ReelAction icon="paper-plane" label="Share" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reel: { width: "100%", backgroundColor: "#000" },
  overlay: { flex: 1, flexDirection: "row", alignItems: "flex-end", padding: 16 },
  bottom: { flex: 1 },
  userRow: { flexDirection: "row", alignItems: "center" },
  username: { color: "#fff", fontWeight: "600", marginLeft: 8 },
  caption: { color: "#fff", marginTop: 8 },
  rail: { alignItems: "center", gap: 18, marginLeft: 12 },
  action: { alignItems: "center" },
  actionLabel: { color: "#fff", fontSize: 12, marginTop: 4 },
});
