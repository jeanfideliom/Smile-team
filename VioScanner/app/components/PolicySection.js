import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PolicyModal from "./PolicyModal"; 

const PolicySection = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>School Policy</Text>
      <Text style={styles.description}>
        Click below to view the full school policy.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>View Policy</Text>
      </TouchableOpacity>

      {/* Modal Component */}
      <PolicyModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
};


export default PolicySection;
