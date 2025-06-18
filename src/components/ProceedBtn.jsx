import Icon from "react-native-vector-icons/FontAwesome"

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

const ProceedBtn = ({ onPress, buttonTexts, marginTop, borderRadius, showArrow = true, width: customWidth, height: customHeight }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.button,
          { marginTop: marginTop, borderRadius: borderRadius, width: customWidth, height: customHeight },
        ]}
      >
        <Text style={styles.buttonText}>{buttonTexts}</Text>
        {showArrow && <Icon name="arrow-right" size={24} color="#fff" />}
      </TouchableOpacity>
    </View>
  );
};

export default ProceedBtn;

const styles = StyleSheet.create({
  button: {
    // marginTop: 10,
    // paddingVertical: height * 0.020,
    // paddingHorizontal: width * 0.2,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: width * 0.02,
    backgroundColor:"#007299" 
  },
  buttonText: {
    color: "#fff",
    fontWeight: '400',
    fontSize: width * 0.04,
  },
});
