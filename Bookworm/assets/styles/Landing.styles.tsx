import Colors from "@/constants/colors";
import Fonts from "@/constants/fonts";
import Spacings from "@/constants/spacings";
import { StyleSheet } from "react-native";

let styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  bgImg: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  // Fully centered quote container
  quoteContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30, // smooth line wrapping
    gap: Spacings.md,
  },

  quote: {
    fontFamily: Fonts.nunito.bold,
    fontSize: 22,
    lineHeight: 30,
    color: Colors.offWhite,

    textAlign: "center",

    // subtle shadow for readability
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
});

export default styles;
