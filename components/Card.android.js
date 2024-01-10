import { useState } from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
// import { TextInput } from "react-native-web";

function Card({ handleAdd, item }) {
  const [name, setName] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <KeyboardAvoidingView keyboardVerticalOffset={10} style={styles.card}>
      <Pressable onPress={handleAdd}>
        <View style={styles.img_card}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO3dm7_iUIUmJjRY-HgcKpW0o6eWHMNaYR8v_e6MnGkP2LVJSPDBwC-n3SbylAXkMncvc&usqp=CAU",
            }}
            style={styles.img}
            resizeMode="contain"
          />
          <Pressable onPress={handleAdd}>
            <View style={styles.title}>
              <View style={styles.text}>
                <Text>
                  {item.name} {name}
                </Text>
              </View>
              <View
                style={[
                  styles.text,
                  {
                    textAlign: "right",
                  },
                ]}
              >
                <Text
                  style={{
                    textAlign: "right",
                  }}
                >
                  210000
                </Text>
              </View>
            </View>
          </Pressable>
        </View>
      </Pressable>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Nhập số"
        keyboardType="number-pad"
      />
      <Switch
        value={darkMode}
        onValueChange={() => setDarkMode(!darkMode)}
        trackColor={{ false: "red", true: "green" }}
        thumbColor={"black"}
      />
      <Pressable onPress={handleAdd}>
        <View style={styles.button}>
          <Text>Thêm</Text>
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

export default Card;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  card: {
    width: 310,
    height: "auto",
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    paddingTop: 12,
    paddingBottom: 20,
    // marginBottom: 10,
    gap: 10,
  },
  img_card: {
    width: 280,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
  },
  img: {
    flex: 1,
  },
  button: {
    width: 260,
    height: 40,
    backgroundColor: "#0ab0ca",
    borderRadius: 12,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    width: 280,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    height: 40,
    width: 140,
    fontSize: windowWidth > 500 ? 50 : 24,
  },
  input: {
    width: "80%",
    borderRadius: 12,
    borderColor: "black",
    borderWidth: 1,
    padding: 6,
  },
});
