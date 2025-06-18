import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

const StepsContainer = ({ currentStep, totalSteps }) => {
  return (
    <View>
      <Text style={styles.stepText}>
        Step {currentStep} of {totalSteps}
      </Text>

      <View style={styles.containerSteps}>
        {Array.from({ length: totalSteps }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.step,
              index < currentStep ? styles.activeStep : styles.inactiveStep,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default StepsContainer;

const styles = StyleSheet.create({
  stepText: {
    fontSize: width * 0.035,
    color: "#888",
    marginBottom: height * 0.015,
  },
  containerSteps: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: height * 0.01,
  },
  step: {
    flex: 1,
    height: height * 0.007,
    borderRadius: width * 0.007,
    marginHorizontal: width * 0.01,
  },
  activeStep: {
    backgroundColor: "#007299",
  },
  inactiveStep: {
    backgroundColor: "#d0d8ea",
  },
});
