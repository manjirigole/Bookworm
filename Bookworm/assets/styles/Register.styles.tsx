import Border from "@/constants/border";
import Colors from "@/constants/colors";
import Fonts from "@/constants/fonts";
import Spacings from "@/constants/spacings";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  regFormView: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginTop: Spacings.md,
  },
  inputWrapper: {
    width: "100%",
  },
  optionalView: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: Spacings.lg,
  },
  optionalText: {
    fontFamily: Fonts.nunito.bold,
    color: Colors.greenDark,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.greenDark,
    marginHorizontal: 10,
  },
  socialsView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: Spacings.lg,
  },
  logoWrapper: {
    borderWidth: 1,
    padding: Spacings.md,
    borderRadius: Border.radius.round,
    borderColor: Colors.greenDark,
  },
  loginView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: Spacings.md,
  },
  loginSub: {
    fontFamily: Fonts.nunito.medium,
    fontSize: 15,
  },
  loginText: {
    fontFamily: Fonts.nunito.bold,
    fontSize: 16,
  },
});

export default styles;
