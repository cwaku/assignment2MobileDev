export interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
  bio?: string;
  posts: number;
  followers: number;
  following: number;
}

export interface Post {
  id: string;
  user: User;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timeAgo: string;
  liked?: boolean;
}

export interface Story {
  id: string;
  user: User;
  seen?: boolean;
}
