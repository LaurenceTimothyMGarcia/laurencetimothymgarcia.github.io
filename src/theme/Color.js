import { extendTheme } from "@chakra-ui/react";

// Text + Background: Neutral Colors
// Primary for main CTAs and Sections
// Secondary for less ipmortant buttons and info cards
// Accent color appears in images, highlights, hyperlinks, boxes, cards, etc.

// const colors = {
//   bg: "#090b0b",
//   bgSecondary: "#364242",
//   primary: "#86dfe0",
//   secondary: "#891473",
//   accent: "#df2434",
//   text: "#e7fafb",

//   contrast: "#ababbe",
// }

// const colors = {
//   bg: "#0b0911",
//   bgSecondary: "#231C36",
//   primary: "#b19fcf",
//   secondary: "#673933",
//   accent: "#b29464",
//   text: "#f0edf6",

//   contrast: "#ababbe",
// }

// const colors = {
//   bg: "#05020d",
//   bgSecondary: "#11072E",
//   primary: "#AF8DF7",
//   secondary: "#B81A34",
//   accent: "#e17634",
//   text: "#e7e1fb",

//   contrast: "#ababbe",
// }

// windows xp inspired
const colors = {
  // Window background & dialogs
  bg:           "#F0F8FF",  // AliceBlue (light XP window background)
  bgSecondary:  "#E5ECF9",  // Soft light grey-blue

  // Taskbar & titlebars
  primary:      "#3B7DBE",  // XP “active title bar” blue

  // Start button & highlights
  secondary:    "#008000",  // Start button green
  accent:       "#E04B2B",  // Selection highlight yellow
  highlight:    "#FF6600",  // Orange for warnings/buttons

  // Text & borders
  text:         "#000000",  // Classic black text
  contrast:     "#A6A6A6",  // Grey for inactive edges/borders
};


// const colors = extendTheme({
//   colors: {
//     bg: "#010A25",
//     primary: "#7F9FFA",
//     secondary: "#A5069E",
//     accent: "#F73693",
//     text: "#D2E0FD",
//   }
// })

export default colors;