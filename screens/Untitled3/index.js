import { Text } from "react-native";
import { FlatList } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled3 = () => {
  return <View style={_styles.OhjRLvGy}>
      <View style={_styles.QDsZOmtf}></View><FlatList style={_styles.ylweJxqJ} renderItem={() => <View style={_styles.gGaVqRbg}><Text style={_styles.YZlhVlQW}>Lorem ipsum…</Text></View>} ItemSeparatorComponent={() => <View style={_styles.SMnYNQAK} />} data={[1, 2, 3]} keyExtractor={item => item.toString()}></FlatList></View>;
};

export default Untitled3;

const _styles = StyleSheet.create({
  OhjRLvGy: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  SBfyYSmE: {
    left: 24,
    top: 107,
    position: "absolute",
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  QDsZOmtf: {
    left: 35,
    top: 91,
    position: "absolute",
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  ylweJxqJ: {
    left: 140,
    top: 298,
    position: "absolute",
    width: 100,
    height: 150
  },
  gGaVqRbg: {
    width: 92,
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  SMnYNQAK: {
    backgroundColor: "#000000",
    height: 1
  },
  YZlhVlQW: {
    left: 0,
    top: 0,
    position: "absolute",
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});