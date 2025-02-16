import { useState } from "react";
import { 
  ImageBackground, 
  View, 
  Text, 
  TouchableOpacity, 
  Modal, 
  TextInput, 
  StyleSheet
} from "react-native";
import Header from "../components/Header";
import BottomNavigation from "../components/BottomNavigation";
import { globalStyles } from "../styles/styles";

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <ImageBackground
      source={require("../../assets/images/background.jpg")} 
      style={globalStyles.backgroundImage}
    >
      <View style={globalStyles.overlay} />

      <View style={globalStyles.container}>
        <Header />

        
        <View style={styles.mainContent}>
          
          <View style={styles.loginContainer}>
            <Text style={globalStyles.policyText}>Need to sign in?</Text>
            <TouchableOpacity 
              style={globalStyles.policyButton} 
              onPress={() => setLoginModalVisible(true)}
            >
              <Text style={globalStyles.policyButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>

        
        <View style={styles.bottomContainer}>
          
          <View style={globalStyles.policyContainer}>
            <TouchableOpacity 
              style={globalStyles.policyButton} 
              onPress={() => setModalVisible(true)}
            >
              <Text style={globalStyles.policyButtonText}>View Policy</Text>
            </TouchableOpacity>
          </View>
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

        
        <Modal
          animationType="fade"
          transparent={true}
          visible={loginModalVisible}
          onRequestClose={() => setLoginModalVisible(false)}
        >
          <View style={globalStyles.modalContainer}>
            <View style={globalStyles.modalContent}>
              <Text style={globalStyles.modalTitle}>Login</Text>
              <Text style={globalStyles.modalText}>
                Please enter your credentials.
              </Text>
              
              
              <TextInput
                style={globalStyles.textInput}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
              />

              
              <TextInput
                style={globalStyles.textInput}
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
              />

              <TouchableOpacity 
                style={globalStyles.loginButton} 
                onPress={handleLogin}
              >
                <Text style={globalStyles.loginButtonText}>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={globalStyles.closeButton} 
                onPress={() => setLoginModalVisible(false)}
              >
                <Text style={globalStyles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <BottomNavigation />
      </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  loginContainer: {
    alignItems: 'center', 
  },
  bottomContainer: {
    flex: 0,
    justifyContent: 'flex-end', 
  },
});

export default HomeScreen;