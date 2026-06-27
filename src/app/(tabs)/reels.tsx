import { FlatList, StyleSheet } from "react-native";
import { posts } from "@/data/posts";
import { ReelItem } from "@/components/ReelItem";

export default function Reels() {
  return (
    <FlatList
      style={styles.list}
      data={posts}
      keyExtractor={(p) => p.id}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <ReelItem post={item} />}
    />
  );
}

const styles = StyleSheet.create({
  list: { flex: 1, backgroundColor: "#000" },
});
