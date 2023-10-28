import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

import styles from "../styles.js"; // Import the styles module

export default function Card({ streak, time, name, problemSolved }) {
  const [fontsLoaded] = useFonts({
    "Segoe UI": require("../assets/fonts/SegoeUI.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    // <SafeAreaView style={{ backgroundColor: "#1a1a1a" }}>
        // <View style={styles.cardStack}>
          <View style={styles.progressCard}>
            <View style={styles.streakCounterSection}>
              <Text style={styles.streakCounterText}>{streak}🔥</Text>
            </View>
            <View style={styles.streakInfoSection}>
              <Text style={styles.streakInfoText}>{name} just did {problemSolved}</Text>
            </View>
          </View>
        // </View>
    // </SafeAreaView>
  );
}
