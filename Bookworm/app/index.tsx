import styles from "@/assets/styles/Landing.styles";
import PrimaryBtn from "@/components/buttons/PrimaryBtn";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";

const Index = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <Image style={styles.bgImg} source={images.landing_image} />

      <View style={styles.quoteContainer}>
        <Text style={styles.quote}>Not all those who wander are lost.</Text>
        <PrimaryBtn
          title="Get Started"
          onPress={() => router.replace("/(auth)/register")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Index;
