// import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Modal,
  Platform,
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Card from "../components/Card";
function Home({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const vw = useWindowDimensions().width;
  const vh = useWindowDimensions().height;
  console.log("Check", vw, vh);
  const handleAdd = () => {
    setShowModal(true);
    Alert.alert("Open Modal Title", "Modal has been opened!", [
      {
        text: "Nút 1",
        onPress: () => navigation.navigate("Detail", { name: "String Path" }),
      },
      {
        text: "Nút 2",
        onPress: () => console.log("Chạy 2"),
      },
      {
        text: "Nút 3",
        onPress: () => console.log("Chạy 3"),
      },
    ]);
  };
  async function fetchData(limit = 5) {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users?_limit=${limit}`
    ).then((response) => response.json());
    // console.log(res);
    if (res) {
      setData(res);
      setLoading(false);
    }
  }
  const handleRefresh = () => {
    console.log("Herre");
    setRefreshing(true);
    fetchData(10);
    setRefreshing(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView>
        <ActivityIndicator size="large" color="red" />

        <Text>Loading....</Text>
      </SafeAreaView>
    );
  }
  return (
    <>
      <View style={styles.container}>
        <ScrollView
          style={styles.scroll}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
        >
          <View style={styles.scroll_box}>
            <FlatList
              data={data}
              renderItem={({ item }) => {
                return <Card handleAdd={handleAdd} item={item} />;
              }}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    height: 16,
                  }}
                />
              )}
              ListFooterComponent={
                <Text style={{ color: "white" }}>Ending</Text>
              }
              refreshing={refreshing}
            />
          </View>
        </ScrollView>
        <Modal
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
          animationType="slide"
        >
          <View style={[styles.container]}>
            <ActivityIndicator size="large" color="red" />
            <Pressable
              onPress={() => setShowModal(false)}
              style={styles.button}
            >
              <Text>Close</Text>
            </Pressable>
          </View>
        </Modal>
        <StatusBar hidden />
      </View>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {},
      android: {},
    }),
    flex: 1,
    backgroundColor: "#202020",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 12,
    paddingBottom: 12,
    color: Platform.OS === "android" ? "#ffffff" : "black",
    borderColor: "red",
    borderWidth: 1,
    borderStyle: "solid",
    boxSizing: "border-box",
    fontSize: 24,
  },
  scroll: {
    // backgroundColor: "yellow",
    // height: 400,
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
  scroll_box: {
    padding: 16,

    gap: 20,
  },
});
