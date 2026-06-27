import { View, Text, StyleSheet } from "react-native";
import { Story } from "@/types";
import { Colors } from "@/constants/Colors";
import { Avatar } from "./Avatar";

export function StoryRing({ story }: { story: Story }) {
  return (
    <View style={styles.item}>
      <Avatar uri={story.user.avatar} size={62} ring={!story.seen} />
      <Text style={styles.name} numberOfLines={1}>{story.user.username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: { alignItems: "center", width: 76, marginRight: 4 },
  name: { fontSize: 12, color: Colors.text, marginTop: 4 },
});
