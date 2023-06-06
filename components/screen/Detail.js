import { EvilIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
function Detail() {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.backgroundViewChild}
        colors={["#7DE5ED", "#5837D0"]}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.6, y: 0.1 }}
      >
        <View style={styles.title}>
          <Text style={styles.textHeader}>InfoLoker</Text>
        </View>
      </LinearGradient>
      <View style={styles.detail}>
        <Text style={{ fontWeight: 500, fontSize: 16 }}>Detail Pekerjaan</Text>
      </View>
      <View style={styles.wrapContent}>
        <View style={styles.headContent}></View>
        <View style={{ padding: 15 }}>
          <View style={{ rowGap: 2 }}>
            <View>
              <Text style={styles.titleContent}>Front-end Developer</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 300, fontSize: 12 }}>Full-Time</Text>
            </View>
            <View>
              <Text>PT Marca-Buana Asri</Text>
            </View>
            <View style={styles.row}>
              <View>
                <EvilIcons name="location" size={24} color="black" />
              </View>
              <View>
                <Text style={{ fontWeight: 300, fontSize: 12 }}>
                  {" "}
                  Yogyakarta
                </Text>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.titleContent}>Deskripsi Pekerjaan</Text>
            <View>
              <Text style={styles.textDescription}>
                Mengembangkan sistem dan membuat sistem dengan tools ReactJs,
                React Native, dan Tailwind CSS
              </Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <Text style={styles.textDescription}>
                Dapat membuat responsive webpage
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
  },
  backgroundViewChild: {
    height: "15%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  textHeader: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
  },
  title: {
    paddingTop: 50,
    alignItems: "center",
  },
  headContent: {
    height: 100,
    backgroundColor: "grey",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  titleContent: { fontWeight: 500, fontSize: 16, marginBottom: 6 },
  detail: {
    alignItems: "center",
    paddingVertical: 20,
  },
  wrapContent: {
    borderRadius: 5,
    borderWidth: 0.2,
    marginHorizontal: 20,
  },
  row: {
    flexDirection: "row",
  },
  textDescription: {
    fontSize: 13,
  },
});
