import { Text, View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";

const IPA = ({ IPA }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.name}>{IPA.name}</Text>
      <Image style={styles.image} source={{ uri: IPA.image_url }} />
      <Text style={styles.tagline}>{IPA.tagline}</Text>
      <Text style={styles.description}>{IPA.description}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoMainValue}>
          ABV : <Text style={styles.infoSubValue}>{IPA.abv} </Text>
        </Text>
        <Text style={styles.infoMainValue}>
          IBU : <Text style={styles.infoSubValue}>{IPA.ibu} </Text>
        </Text>
        <Text style={styles.infoMainValue}>
          ID : <Text style={styles.infoSubValue}>{IPA.id} </Text>
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
    padding: 8,
    height: "100%",
    width: "100%",
    color: "black",
  },
  name: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#F28123",
    fontSize: 20,
  },
  image: {
    marginTop: 15,
    marginBottom: 15,
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  tagline: {
    textAlign: "center",
    color: "#E49124",
    fontSize: 15,
    marginBottom: 15,
  },
  description: {
    textAlign: "center",
    color: "#AAAE8E",
    fontSize: 13,
    marginBottom: 15,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 8,
    color: "black",
    fontSize: 10,
  },
  infoMainValue: {
    color: "#435058",
    fontSize: 11,
    fontWeight: "bold",
    marginRight: 5,
  },
  infoSubValue: {
    fontSize: 10,
  },
});

export default IPA;
