export const Colors = {
  background: "#ffffff",
  text: "#000000",
  textMuted: "#8e8e8e",
  border: "#dbdbdb",
  tint: "#000000",
  icon: "#262626",
  like: "#ed4956",
  link: "#3897f0",
} as const;

export type ColorName = keyof typeof Colors;
