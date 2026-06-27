import { Post } from "@/types";
import { users } from "./users";

export const posts: Post[] = [
  { id: "p1", user: users[1], image: "https://picsum.photos/id/1018/600/600", caption: "Mountain mornings 🏔️", likes: 482, comments: 24, timeAgo: "2h" },
  { id: "p2", user: users[2], image: "https://picsum.photos/id/1025/600/600", caption: "Studio buddy", likes: 1290, comments: 88, timeAgo: "5h" },
  { id: "p3", user: users[3], image: "https://picsum.photos/id/1080/600/600", caption: "Brunch done right 🍓", likes: 765, comments: 41, timeAgo: "8h" },
  { id: "p4", user: users[4], image: "https://picsum.photos/id/1043/600/600", caption: "City lights", likes: 2034, comments: 132, timeAgo: "12h" },
  { id: "p5", user: users[0], image: "https://picsum.photos/id/1015/600/600", caption: "River walk", likes: 540, comments: 19, timeAgo: "1d" },
  { id: "p6", user: users[1], image: "https://picsum.photos/id/1037/600/600", caption: "Roadtrip vibes", likes: 988, comments: 53, timeAgo: "1d" },
  { id: "p7", user: users[0], image: "https://picsum.photos/id/1024/600/600", caption: "Good boy 🐶", likes: 1450, comments: 96, timeAgo: "2d" },
  { id: "p8", user: users[0], image: "https://picsum.photos/id/1059/600/600", caption: "Sunset chasing", likes: 670, comments: 28, timeAgo: "3d" },
];

export function getPostById(id: string): Post | undefined {
  return posts.find((p) => p.id === id);
}
