import Fonts from "@/constants/fonts";
import Spacings from "@/constants/spacings";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface CenterHeadingProps {
  title: string;
  subtitle?: string;
}

const CenterHeading: React.FC<CenterHeadingProps> = ({ title, subtitle }) => {
  return (
    <View style={styles.centerView}>
      <Text style={styles.headingText}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default CenterHeading;

const styles = StyleSheet.create({
  
  centerView: {
    justifyContent: "center",
    alignItems: "center",
    padding: Spacings.sm,
    marginTop: Spacings.xl,
    gap: Spacings.sm,
  },
  headingText: {
    fontFamily: Fonts.nunito.bold,
    fontSize: 25,
  },
  subtitle: {
    fontFamily: Fonts.nunito.semiBold,
    fontSize: 15,
  },
});
