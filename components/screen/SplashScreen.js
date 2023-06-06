import { StyleSheet, Text, View } from "react-native";

function SplashScreen() {
  return (
    <View styles={styles.container}>
      <Text>Wait Screen</Text>
    </View>
  );
}
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
});
