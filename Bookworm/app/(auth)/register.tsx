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

const Register = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <BackBtn onPress={() => router.replace("/")} />
        <CenterHeading
          title="Create Account"
          subtitle="Create an Account if you don't have one"
        />
      </View>
      <View style={styles.regFormView}>
        <PrimaryInput
          label="Name"
          placeholder="Jane"
          keyboard="default"
          required="*"
        />

        <PrimaryInput
          label="Email"
          placeholder="jane@example.com"
          keyboard="email-address"
          required="*"
        />

        <PrimaryInput
          label="Password"
          placeholder="**********"
          secureTextEntry
          required="*"
        />
        <CustomButton
          title="Register"
          onPress={() => router.replace("/(tabs)")}
        />
      </View>

      <View style={styles.optionalView}>
        <View style={styles.line} />
        <Text style={styles.optionalText}>Or Sign Up with</Text>
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
        <Text style={styles.loginSub}>Already have an Account? </Text>
        <Pressable onPress={() => router.replace("/(auth)/login")}>
          <Text style={styles.loginText}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Register;
