import { Text, View, StyleSheet, Button, Image } from "react-native";
import Constants from "expo-constants";

const Home = () => {
  const buttonColor = "#E49124";
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Image source={require("../assets/img/Beer-icon.png")}></Image>
        <Text style={styles.title}>Beer APP</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button color={buttonColor} title="1" accessibilityLabel="1" />
        <View style={styles.space} />
        <Button color={buttonColor} title="2" accessibilityLabel="1" />
        <View style={styles.space} />
        <Button color={buttonColor} title="3" accessibilityLabel="1" />
        <View style={styles.space} />
        <Button color={buttonColor} title="4" accessibilityLabel="1" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
    padding: 8,
    height: "100%",
    width: "100%",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    margin: 24,
    fontSize: 50,
    textAlign: "center",
    color: "#F28123",
    fontFamily: "LEMONMILK",
  },
  buttonContainer: {
    textAlign: "center",
    paddingTop: Constants.statusBarHeight,
    margin: 50,
  },
  space: {
    width: 20,
    height: 20,
  },
});

export default Home;
