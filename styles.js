import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bodyStyle: {
    width: "100%",
    height: "100%",
    fontFamily: "Segoe UI",
    marginTop:10,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  // .bodyStyle > div:not(:last-child) {
  //   margin-bottom: 10px;
  // }
  progressCard: {
    width: "98%",
    height: 125,
    backgroundColor: "#282828",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  streakInfoSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "67%",
    // backgroundColor:"red"
  },
  streakCounterSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    width: "30%",
    height: "100%",
    // backgroundColor:"blue"
  },
  streakCounterText: {
    fontSize: 48,
    fontFamily: "Segoe UI",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  streakInfoText: {
    // width:"70%",
    fontSize: 20,
    fontWeight: "500",
    color: "#04b49f",
  },
});

export default styles;
