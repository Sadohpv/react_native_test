import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";

function Card({ handleAdd }) {
  return (
    <View style={styles.card}>
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
                <Text>Cái gì đó</Text>
              </View>
              <View style={styles.text}>
                <Text>210000</Text>
              </View>
            </View>
          </Pressable>
        </View>
      </Pressable>

      <Pressable onPress={handleAdd}>
        <View style={styles.button}>
          <Text>Thêm</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Card;
// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;
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
    paddingBottom: 12,
   
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
    width: 80,
    fontSize: windowWidth > 500 ? 50 : 24,

  },
});
