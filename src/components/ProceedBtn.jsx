import Icon from "react-native-vector-icons/FontAwesome"

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

const ProceedBtn = ({ onPress, buttonTexts, marginTop, borderRadius }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.button,
          { marginTop: marginTop, borderRadius: borderRadius },
        ]}
      >
        <Text style={styles.buttonText}>{buttonTexts}</Text>
        <Icon name="arrow-forward" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default ProceedBtn;

const styles = StyleSheet.create({
  button: {
    marginTop: height * 0.018,
    backgroundColor: "#ACF6AE",
    paddingVertical: height * 0.012,
    paddingHorizontal:width * 0.04,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: width * 0.02,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: width * 0.04,
  },
});
