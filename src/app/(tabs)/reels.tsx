import { FlatList, StyleSheet } from "react-native";
import { useState } from "react";
import { posts } from "@/data/posts";
import { ReelItem } from "@/components/ReelItem";

export default function Reels() {
  const [listHeight, setListHeight] = useState(0);
  return (
    <FlatList
      style={styles.list}
      data={posts}
      keyExtractor={(p) => p.id}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      onLayout={(e) => setListHeight(e.nativeEvent.layout.height)}
      renderItem={({ item }) => <ReelItem post={item} height={listHeight} />}
    />
  );
}

const styles = StyleSheet.create({
  list: { flex: 1, backgroundColor: "#000" },
});
