import { FlatList, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { currentUser } from "@/data/users";
import { posts } from "@/data/posts";
import { Colors } from "@/constants/Colors";
import { ProfileHeader } from "@/components/ProfileHeader";
import { ExploreTile } from "@/components/ExploreTile";

export default function Profile() {
  const myPosts = posts.filter((p) => p.user.id === currentUser.id);
  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <View style={styles.topbar}>
        <Text style={styles.handle}>{currentUser.username}</Text>
        <Ionicons name="menu" size={26} color={Colors.icon} style={styles.menu} />
      </View>
      <FlatList
        data={myPosts}
        keyExtractor={(p) => p.id}
        numColumns={3}
        ListHeaderComponent={<ProfileHeader user={currentUser} />}
        renderItem={({ item }) => <ExploreTile post={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  topbar: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8 },
  handle: { fontSize: 20, fontWeight: "700", color: Colors.text },
  menu: { marginLeft: "auto" },
});
