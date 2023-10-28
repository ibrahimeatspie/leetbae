import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Card from "./components/card";
import styles from "./styles"; // Import the styles module

const data = [
  { streak: 3, time: "12s", name: "tyler", problemSolved: "2sum" },
  { streak: 6, time: "12m", name: "ibrahim", problemSolved: "2sum" },
  { streak: 4, time: "32m", name: "andy", problemSolved: "2sum" },
  { streak: 9, time: "13h", name: "claire", problemSolved: "2sum" },
];

export default function App() {
  const [fontsLoaded] = useFonts({
    "Segoe UI": require("./assets/fonts/SegoeUI.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ backgroundColor: "#1a1a1a" }}>
      <View style={styles.bodyStyle}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Card
              streak={item.streak}
              time={item.time}
              name={item.name}
              problemSolved={item.problemSolved}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
