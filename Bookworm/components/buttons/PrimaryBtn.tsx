import Border from "@/constants/border";
import Colors from "@/constants/colors";
import Fonts from "@/constants/fonts";
import Spacings from "@/constants/spacings";
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        buttonStyle,
        (disabled || loading) && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={Colors.greenDark} />
      ) : (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.greenDark,
    padding: Spacings.lg,
    borderRadius: Border.radius.round,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  text: {
    color: Colors.cream,
    fontSize: 17,
    fontFamily: Fonts.nunito.bold,
  },
  disabled: {
    backgroundColor: "#d1d3d1ff",
  },
});
