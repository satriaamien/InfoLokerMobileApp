import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useEffect } from "react";

function Profil() {
  const { signOut } = useContext(AuthContext);
  const [data, setData] = useState(null);

  const dataUser = async () => {
    try {
      let response = await fetch("https://randomuser.me/api/");
      const resp = await response.json();
      const [resps] = resp.results;
      setData(resps.name.first);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    dataUser();
  }, []);

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
      <View style={styles.profilePhoto}>
        <View style={styles.profilePhotoChild}>
          <View style={styles.photo}>
            <View></View>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.headName}>
          <View>
            <Text style={{ fontWeight: "400" }}>{data !== null && data}</Text>
          </View>
          <View>
            <Text style={{ fontWeight: "300" }}>@{data !== null && data}</Text>
          </View>
        </View>
        <View style={styles.directLink}>
          <View style={styles.directLinkChild}>
            <Text style={styles.textSmall}>Add Friend</Text>
          </View>
          <View style={styles.directLinkChild}>
            <Text style={styles.textSmall}>Edit Profile</Text>
          </View>
          <View style={styles.directLinkChild}>
            <Text style={styles.textSmall}>Instagram</Text>
          </View>
        </View>
      </View>
      <View style={styles.wrapContent}>
        <View style={styles.onceContent}>
          <View style={styles.headContent}>
            <View>
              <Text style={styles.textHead}>Portofolio</Text>
            </View>
            <View>
              <EvilIcons name="plus" size={30} color="#7DE5ED" />
            </View>
          </View>
          <View style={styles.headContent}>
            <View>
              <Text>Github</Text>
            </View>
            <View>
              <Text>Github.com/{data !== null && data}</Text>
            </View>
          </View>
        </View>
        <View style={styles.onceContent}>
          <View style={styles.headContent}>
            <View>
              <Text style={styles.textHead}>Skills</Text>
            </View>
            <View>
              <EvilIcons name="plus" size={30} color="#7DE5ED" />
            </View>
          </View>
          <View style={styles.headContent}>
            <View>
              <Text style={{ fontWeight: 300 }}>Javascript</Text>
            </View>
            <View>
              <Text>Intermediate</Text>
            </View>
          </View>
          <View style={styles.headContent}>
            <View>
              <Text style={{ fontWeight: 300 }}>ReactJs</Text>
            </View>
            <View>
              <Text>Advanced</Text>
            </View>
          </View>
          <View style={styles.headContent}>
            <View>
              <Text style={{ fontWeight: 300 }}>Tailwind CSS</Text>
            </View>
            <View>
              <Text>Intermediate</Text>
            </View>
          </View>
          <View style={styles.headContent}>
            <View>
              <Text style={{ fontWeight: 300 }}>Git</Text>
            </View>
            <View>
              <Text>Intermediate</Text>
            </View>
          </View>
        </View>
        <View style={styles.onceContent}>
          <View style={styles.headContent}>
            <View>
              <Text style={styles.textHead}>Penghargaan</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <EvilIcons name="plus" size={30} color="#7DE5ED" />
            </View>
            <View>
              <Text>Tambah Penghargaan</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            signOut();
          }}
          style={{
            flexDirection: "row",
            backgroundColor: "#7DE5ED",
            padding: 8,
            borderRadius: 5,
            width: "80%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <Feather name="log-out" size={24} color="white" />
          </View>
          <View>
            <Text style={{ color: "white" }}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Profil;
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FDFDFD" },
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
  profilePhoto: {
    alignItems: "center",
    marginTop: -30,
  },
  profilePhotoChild: {
    width: 70,
    height: 70,
    backgroundColor: "pink",
    borderRadius: 50,
  },
  photo: {
    alignItems: "center",
    // backgroundColor: "green",
  },
  headName: {
    alignItems: "center",
    rowGap: 5,
    marginVertical: 10,
  },
  directLink: {
    marginVertical: 20,
    flexDirection: "row",
    columnGap: 22,
    justifyContent: "center",
  },
  textSmall: {
    fontWeight: 300,
    fontSize: 12,
  },
  directLinkChild: { backgroundColor: "white", padding: 3 },
  wrapContent: {
    alignItems: "center",
  },
  onceContent: {
    // backgroundColor: "green",
    width: 350,
    padding: 15,
    rowGap: 6,
    marginTop: 10,
  },
  headContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textHead: {
    fontWeight: 600,
    fontSize: 18,
  },
});
