import { ScrollView, StyleSheet } from "react-native";
import { stories } from "@/data/stories";
import { Colors } from "@/constants/Colors";
import { StoryRing } from "./StoryRing";

export function StoriesBar() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bar} contentContainerStyle={styles.content}>
      {stories.map((s) => <StoryRing key={s.id} story={s} />)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bar: { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: Colors.border },
  content: { paddingVertical: 10, paddingHorizontal: 8 },
});
