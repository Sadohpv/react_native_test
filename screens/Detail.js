import { Pressable, StyleSheet, Text, View } from "react-native";

function Detail({ navigation, route }) {
  const { name } = route.params;
  return (
    <View>
      <View>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <View style={styles.button}>
            <Text style={{ color: "white" }}>Back Home</Text>
          </View>
        </Pressable>
        <Text>Detail Page</Text>
      </View>
    </View>
  );
}

export default Detail;

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 46,
    backgroundColor: "black",
    borderRadius: 12,
    overflow: "hidden",
  },
});
