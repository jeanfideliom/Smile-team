import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";

const ViolationScreen = () => {
  const openPdf = () => {
    const pdfUrl = "https://drive.google.com/file/d/1rSpT96TyhyrTz0EevdFrKenfo8artknU/view"; // Replace with your actual PDF URL
    Linking.openURL(pdfUrl);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Violations Report</Text>
      <TouchableOpacity style={styles.button} onPress={openPdf}>
        <Text style={styles.buttonText}>Open PDF</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default ViolationScreen;
