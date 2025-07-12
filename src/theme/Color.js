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
  // Window background & dialogs (slightly muted)
  bg:           "#DCE7F0",  // Muted AliceBlue (less bright, still XP-like)

  // Navbar / toolbar / sidebar background (darker for navbars)
  bgSecondary:  "#C3D3E9",  // Muted light steel blue (like XP toolbars, subtle)

  // Taskbar & titlebars
  primary:      "#3B7DBE",  // Keep this vibrant for contrast

  // Start button & highlights
  secondary:    "#00703C",  // Slightly softened green (less neon than #008000)
  accent:       "#eb3f18ff",  // XP red, as you already set
  highlight:    "#FF6600",  // Keep for warnings / bright actions

  // Text & borders
  text:         "#000000",
  contrast:     "#8C8C8C",  // Slightly darker for subtle borders
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