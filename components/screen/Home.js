import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  ScrollView,
} from "react-native";

function Home({ navigation }) {
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
      <View style={styles.search}>
        <View style={styles.wrapInput}>
          <View>
            <Entypo name="location-pin" size={24} color="#7DE5ED" />
          </View>
          <View style={styles.inputParent}>
            <TextInput style={styles.input} placeholder="Location" />
          </View>
        </View>
        <View style={styles.wrapInput}>
          <View>
            <MaterialIcons name="work" size={24} color="#7DE5ED" />
          </View>
          <View style={styles.inputParent}>
            <TextInput style={styles.input} placeholder="Job" />
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.wrapContent}>
          <View style={styles.subContent}>
            <TouchableOpacity
              style={styles.content}
              onPress={() => {
                navigation.navigate("Detail");
              }}
            >
              <Text style={{ fontSize: 16 }}>Front-end Developer</Text>
              <Text style={{ fontSize: 12, fontWeight: 200 }}>Full-Time</Text>
              <Text style={{ fontSize: 14, fontWeight: 300 }}>
                PT Marca-Buana Asri
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <EvilIcons name="location" size={24} color="black" />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <View>
                    <Text style={{ fontSize: 11, fontWeight: 300 }}>
                      Yogyakarta
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapContent}>
          <View style={styles.subContent}>
            <TouchableOpacity
              style={styles.content}
              onPress={() => {
                navigation.navigate("Detail");
              }}
            >
              <Text style={{ fontSize: 16 }}>Front-end Developer</Text>
              <Text style={{ fontSize: 12, fontWeight: 200 }}>Full-Time</Text>
              <Text style={{ fontSize: 14, fontWeight: 300 }}>
                PT Marca-Buana Asri
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <EvilIcons name="location" size={24} color="black" />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <View>
                    <Text style={{ fontSize: 11, fontWeight: 300 }}>
                      Yogyakarta
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapContent}>
          <View style={styles.subContent}>
            <TouchableOpacity
              style={styles.content}
              onPress={() => {
                navigation.navigate("Detail");
              }}
            >
              <Text style={{ fontSize: 16 }}>Front-end Developer</Text>
              <Text style={{ fontSize: 12, fontWeight: 200 }}>Full-Time</Text>
              <Text style={{ fontSize: 14, fontWeight: 300 }}>
                PT Marca-Buana Asri
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <EvilIcons name="location" size={24} color="black" />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <View>
                    <Text style={{ fontSize: 11, fontWeight: 300 }}>
                      Yogyakarta
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapContent}>
          <View style={styles.subContent}>
            <TouchableOpacity
              style={styles.content}
              onPress={() => {
                navigation.navigate("Detail");
              }}
            >
              <Text style={{ fontSize: 16 }}>Front-end Developer</Text>
              <Text style={{ fontSize: 12, fontWeight: 200 }}>Full-Time</Text>
              <Text style={{ fontSize: 14, fontWeight: 300 }}>
                PT Marca-Buana Asri
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <EvilIcons name="location" size={24} color="black" />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <View>
                    <Text style={{ fontSize: 11, fontWeight: 300 }}>
                      Yogyakarta
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapContent}>
          <View style={styles.subContent}>
            <TouchableOpacity
              style={styles.content}
              onPress={() => {
                navigation.navigate("Detail");
              }}
            >
              <Text style={{ fontSize: 16 }}>Front-end Developer</Text>
              <Text style={{ fontSize: 12, fontWeight: 200 }}>Full-Time</Text>
              <Text style={{ fontSize: 14, fontWeight: 300 }}>
                PT Marca-Buana Asri
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <EvilIcons name="location" size={24} color="black" />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <View>
                    <Text style={{ fontSize: 11, fontWeight: 300 }}>
                      Yogyakarta
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  wrapInput: {
    flexDirection: "row",
    columnGap: 10,
    // backgroundColor: "grey",
  },
  inputParent: {
    // width: "100%",
  },
  search: {
    marginTop: 20,
    flexDirection: "column",
    rowGap: 10,
    alignItems: "center",
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 5,
    paddingLeft: 10,
    width: 250,
  },
  wrapContent: {
    marginTop: 20,
    rowGap: 15,
  },
  content: {
    borderWidth: 0.2,
    padding: 15,
    borderRadius: 4,
    backgroundColor: "#F5F5F5",
    width: 350,
  },
  subContent: {
    alignItems: "center",
  },
});
