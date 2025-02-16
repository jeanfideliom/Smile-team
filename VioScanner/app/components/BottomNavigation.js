import React from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const BottomNavigation = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <FontAwesome name="user" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name="camera" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name="cog" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
};

export default BottomNavigation;
