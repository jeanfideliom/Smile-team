import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const PolicyModal = ({ visible, onClose }) => {
  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>School Policy</Text>
          <Text style={styles.content}>
            This is a placeholder policy. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Pellentesque vitae sapien euismod, accumsan mauris eu, malesuada velit. Suspendisse 
            potenti. Nullam fermentum velit sed quam scelerisque, ut tincidunt metus dignissim.
          </Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};


export default PolicyModal;
