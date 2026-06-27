import { Story } from "@/types";
import { users } from "./users";

export const stories: Story[] = users.map((user, i) => ({
  id: `s${i + 1}`,
  user,
  seen: i % 3 === 0,
}));
