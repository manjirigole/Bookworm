import Colors from "@/constants/colors";
import Spacings from "@/constants/spacings";
import Ionicons from "@react-native-vector-icons/ionicons";
import React from "react";
import { StyleSheet, View } from "react-native";

interface BackBtnProps {
  onPress: () => void;
}

const BackBtn: React.FC<BackBtnProps> = ({ onPress }) => {
  return (
    <View style={styles.backBtnView}>
      <Ionicons
        name="arrow-back"
        size={25}
        color={Colors.charcoal}
        onPress={onPress}
      />
    </View>
  );
};

export default BackBtn;

const styles = StyleSheet.create({
  backBtnView: {
    marginLeft: Spacings.xxxl,
    marginTop: Spacings.xl,
  },
});
