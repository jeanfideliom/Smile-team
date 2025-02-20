import { useState } from "react";
import { ImageBackground, View, Text, TouchableOpacity, Modal } from "react-native";
import Header from "../components/Header";
import BottomNavigation from "../components/BottomNavigation";
import { globalStyles } from "../styles/styles";

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {/* Background Image */}
      <View style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}>
        <ImageBackground
          source={require("../../assets/images/background.jpg")}
          style={[globalStyles.backgroundImage, { transformOrigin: 'center' }]}
        >
          <View style={globalStyles.overlay} />
        </ImageBackground>
      </View>

      {/* Main Content */}
      <View style={{ flex: 1, zIndex: 1 }}>
        <View style={globalStyles.container}>
          <Header />
          
          <View style={globalStyles.policyContainer}>
            <Text style={globalStyles.policyText}>Read Our Policy Below:</Text>
            <TouchableOpacity style={globalStyles.policyButton} onPress={() => setModalVisible(true)}>
              <Text style={globalStyles.policyButtonText}>View Policy</Text>
            </TouchableOpacity>
          </View>

          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={globalStyles.modalContainer}>
              <View style={globalStyles.modalContent}>
                <Text style={globalStyles.modalTitle}>Privacy Policy</Text>
                <Text style={globalStyles.modalText}>
                  This is a sample policy text. Here you can display the actual policy 
                  content explaining terms and conditions, privacy rules, etc.
                </Text>
                <TouchableOpacity 
                  style={globalStyles.closeButton} 
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={globalStyles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <BottomNavigation />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
