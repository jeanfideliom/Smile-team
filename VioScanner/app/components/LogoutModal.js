import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/styles';

const LogoutModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
    >
      <View style={globalStyles.modalContainer}>
        <View style={globalStyles.logoutModalContainer}>
          <Text style={globalStyles.logoutModalTitle}>
            Are you sure you want to sign out?
          </Text>
          <View style={globalStyles.logoutButtonContainer}>
            <TouchableOpacity 
              style={[globalStyles.logoutButton, globalStyles.logoutCancelButton]} 
              onPress={onCancel}
            >
              <Text style={globalStyles.logoutButtonText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[globalStyles.logoutButton, globalStyles.logoutConfirmButton]} 
              onPress={onConfirm}
            >
              <Text style={globalStyles.logoutButtonText}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;
