import { View, Text, StyleSheet, Pressable } from "react-native";
import { User } from "@/types";
import { Colors } from "@/constants/Colors";
import { Avatar } from "./Avatar";

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statValue}>{value.toLocaleString()}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

export function ProfileHeader({ user }: { user: User }) {
  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        <Avatar uri={user.avatar} size={86} />
        <Stat value={user.posts} label="Posts" />
        <Stat value={user.followers} label="Followers" />
        <Stat value={user.following} label="Following" />
      </View>
      <Text style={styles.name}>{user.name}</Text>
      {user.bio ? <Text style={styles.bio}>{user.bio}</Text> : null}
      <View style={styles.buttons}>
        <Pressable style={styles.btn}><Text style={styles.btnText}>Edit profile</Text></Pressable>
        <Pressable style={styles.btn}><Text style={styles.btnText}>Share profile</Text></Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingHorizontal: 16, paddingTop: 8 },
  row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  stat: { alignItems: "center", flex: 1 },
  statValue: { fontSize: 17, fontWeight: "700", color: Colors.text },
  statLabel: { fontSize: 13, color: Colors.textMuted },
  name: { fontWeight: "600", color: Colors.text, marginTop: 10 },
  bio: { color: Colors.text, marginTop: 2 },
  buttons: { flexDirection: "row", marginTop: 12, gap: 8 },
  btn: { flex: 1, backgroundColor: "#efefef", borderRadius: 8, paddingVertical: 7, alignItems: "center" },
  btnText: { fontWeight: "600", color: Colors.text },
});
