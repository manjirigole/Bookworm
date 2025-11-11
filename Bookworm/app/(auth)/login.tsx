import styles from "@/assets/styles/Register.styles";
import BackBtn from "@/components/buttons/BackBtn";
import CustomButton from "@/components/buttons/PrimaryBtn";
import CenterHeading from "@/components/headers/CenterHeading";
import PrimaryInput from "@/components/inputs/PrimaryInput";
import Colors from "@/constants/colors";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <BackBtn onPress={() => router.replace("/")} />
        <CenterHeading
          title="Log In"
          subtitle="Already have an Account? Login"
        />
      </View>

      <View style={styles.regFormView}>
        <PrimaryInput
          label="Email"
          placeholder="jane@example.com"
          required="*"
        />
        <PrimaryInput
          label="Password"
          placeholder="********"
          required="*"
          secureTextEntry
        />
        <CustomButton title="Login" onPress={() => router.push("/(tabs)")} />
      </View>

      <View style={styles.optionalView}>
        <View style={styles.line} />
        <Text style={styles.optionalText}>Or Login with</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.socialsView}>
        <Ionicons
          name="logo-google"
          size={25}
          color={Colors.greenDark}
          style={styles.logoWrapper}
        />
      </View>
      <View style={styles.loginView}>
        <Text style={styles.loginSub}>Don&apos; t have an Account? </Text>
        <Pressable onPress={() => router.replace("/(auth)/login")}>
          <Text style={styles.loginText}>Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;
