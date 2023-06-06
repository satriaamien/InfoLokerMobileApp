import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.backgroundViewParent}>
        <LinearGradient
          style={styles.backgroundViewChild}
          colors={["#7DE5ED", "#5837D0"]}
          start={{ x: 0.5, y: 0.7 }}
          end={{ x: 0.6, y: 0.4 }}
        >
          <View style={styles.title}>
            <Text style={styles.textHeader}>InfoLoker</Text>
          </View>
          <View style={styles.subtitle}>
            <View>
              <Text style={styles.text}>Sign Up</Text>
            </View>
            <View>
              <Text style={styles.text}>Register your account</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.pageMid}>
        <View style={styles.pageMidChild}>
          <Text style={styles.textInput}>Username</Text>
          <TextInput style={styles.input} placeholder="Input Username" />
          <Text style={styles.textInput}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Input Email"
            value={email}
            onChangeText={(item) => {
              setEmail(item);
            }}
          />
          <Text style={styles.textInput}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Input Password"
          />
          <Text style={styles.textInput}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Input Password"
          />
          <TouchableOpacity style={styles.signInput}>
            <Text
              style={styles.textSign}
              onPress={() => {
                signIn({ email });
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mid}>
        <Text style={styles.textMid}>Or Connect With</Text>
      </View>
      <View style={styles.logos}>
        <View style={styles.logosChild}>
          <View>
            <Ionicons name="logo-github" size={24} color="black" />
          </View>
          <View>
            <AntDesign name="google" size={24} color="black" />
          </View>
          <View>
            <FontAwesome5 name="facebook" size={24} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9E9E9",
  },
  backgroundViewParent: {
    height: "40%",
  },
  backgroundViewChild: {
    height: "100%",
    backgroundColor: "red",
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
  subtitle: {
    marginTop: 20,
    paddingHorizontal: 25,
    rowGap: 5,
  },
  text: {
    color: "white",
  },
  pageMid: {
    marginTop: -140,
    alignContent: "center",
    display: "flex",
    alignItems: "center",
  },
  pageMidChild: {
    borderRadius: 10,
    backgroundColor: "white",
    width: "80%",
    padding: 20,
  },
  textInput: {
    marginBottom: 10,
    marginTop: 10,
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 3,
    paddingLeft: 10,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  signInput: {
    marginTop: 20,
    backgroundColor: "#7DE5ED",
    padding: 5,
    borderRadius: 5,
    marginBottom: 15,
  },
  textSign: {
    color: "white",
    textAlign: "center",
  },
  mid: {
    marginBottom: 20,
    marginTop: 20,
  },
  textMid: {
    textAlign: "center",
  },
  logos: {
    justifyContent: "center",
    flexDirection: "row",
  },
  logosChild: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
    columnGap: 10,
    alignItems: "center",
    backgroundColor: "white",
    width: "80%",
  },
});
