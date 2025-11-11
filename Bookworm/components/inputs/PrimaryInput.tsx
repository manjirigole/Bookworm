import Border from "@/constants/border";
import Colors from "@/constants/colors";
import Fonts from "@/constants/fonts";
import Ionicons from "@react-native-vector-icons/ionicons";
import React, { useState } from "react";

import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

interface PrimaryInputProps {
  label: string;
  value?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  multiline?: boolean;
  keyboard?:
    | "default"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "number-pad";
  required?: string;
}

const PrimaryInput: React.FC<PrimaryInputProps> = ({
  label,
  value,
  placeholder,
  onChangeText,
  secureTextEntry,
  multiline,
  keyboard,
  required,
}) => {
  const [hidePassword, setHidePassword] = useState(secureTextEntry ?? false);
  return (
    <View style={styles.container}>
      <View style={styles.labelView}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.reqText}>{required}</Text>
      </View>

      <View style={styles.inputWrapper}>
        <TextInput
          style={[styles.input, multiline && styles.multilineInput]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={Colors.charcoal}
          secureTextEntry={hidePassword}
          multiline={multiline}
          keyboardType={keyboard}
        />
        {secureTextEntry && (
          <Pressable
            onPress={() => setHidePassword(!hidePassword)}
            style={styles.iconWrapper}
          >
            <Ionicons
              name={hidePassword ? "eye-off-outline" : "eye-outline"}
              size={20}
              color={Colors.greenDark}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default PrimaryInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16, // ✅ FIX: DO NOT LIMIT HEIGHT
    flexDirection: "column",
  },
  label: {
    fontFamily: Fonts.nunito.bold,
    fontSize: 15,
    marginBottom: 4,
    color: Colors.charcoal,
  },
  input: {
    flex: 1, // ✅ text input should take remaining space
    paddingVertical: 10,
    fontFamily: Fonts.nunito.regular,
    fontSize: 15,
    color: Colors.greenDark,
  },
  multilineInput: {
    height: 130,
    textAlignVertical: "top",
  },
  labelView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
  },
  reqText: {
    color: "red",
    fontFamily: Fonts.nunito.bold,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: Border.radius.md,
    borderColor: Colors.greenDark,
    paddingHorizontal: 10, // ✅ add padding so icon sits inside
  },
  iconWrapper: {
    paddingRight: 15,
  },
});
