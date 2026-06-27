import { User } from "@/types";

export const users: User[] = [
  { id: "u1", username: "jane_doe", name: "Jane Doe", avatar: "https://i.pravatar.cc/150?img=1", bio: "Photographer 📸 | Coffee lover", posts: 24, followers: 1820, following: 312 },
  { id: "u2", username: "mike.r", name: "Mike Rivera", avatar: "https://i.pravatar.cc/150?img=12", bio: "Traveler ✈️", posts: 58, followers: 4200, following: 540 },
  { id: "u3", username: "sara_k", name: "Sara Kim", avatar: "https://i.pravatar.cc/150?img=5", bio: "Designer", posts: 12, followers: 980, following: 210 },
  { id: "u4", username: "tom_b", name: "Tom Brooks", avatar: "https://i.pravatar.cc/150?img=15", bio: "Foodie 🍜", posts: 33, followers: 2100, following: 430 },
  { id: "u5", username: "lily.w", name: "Lily Wong", avatar: "https://i.pravatar.cc/150?img=9", bio: "Plants & books 🌿", posts: 41, followers: 3050, following: 290 },
];

export const currentUser: User = users[0];
