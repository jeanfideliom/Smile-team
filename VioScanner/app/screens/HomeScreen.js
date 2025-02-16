import { useState } from "react";
import { 
  ImageBackground, 
  View, 
  Text, 
  TouchableOpacity, 
  Modal 
} from "react-native";
import Header from "../components/Header";
import BottomNavigation from "../components/BottomNavigation";
import { globalStyles } from "../styles/styles";

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ImageBackground
      source={require("../../assets/images/background.jpg")} 
      style={globalStyles.backgroundImage}
    >
      {/* Dark overlay effect */}
      <View style={globalStyles.overlay} />

      {/* Main UI */}
      <View style={globalStyles.container}>
        <Header /> {/* Header component */}
        
        {/* "View Policy" Section */}
        <View style={globalStyles.policyContainer}>
          <Text style={globalStyles.policyText}>Read Our Policy Below:</Text>
          <TouchableOpacity 
            style={globalStyles.policyButton} 
            onPress={() => setModalVisible(true)}
          >
            <Text style={globalStyles.policyButtonText}>View Policy</Text>
          </TouchableOpacity>
        </View>

        {/* Policy Modal */}
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

        {/* Bottom Navigation */}
        <BottomNavigation />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
