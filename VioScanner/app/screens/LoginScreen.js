import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet,
  Image
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    navigation.navigate("Home");
  };

  const handleSignUp = () => {
    // Add your sign-up navigation logic here
    console.log("Navigate to Sign Up screen");
  };

  const handleForgotPassword = () => {
    // Add your forgot password navigation logic here
    console.log("Navigate to Forgot Password screen");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/headerPhoto.png")} 
        style={styles.headerPhoto}
      />
      <Image
        source={require("../../assets/images/logo.png")} // Replace with your logo path
        style={styles.logo}
      />
      <View style={styles.formContainer}>
        <Text style={styles.title}>VioScanner</Text>
        <Text style={styles.subtitle}>A Violation Detection App</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.linkText}>Don't have an Account? Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerPhoto: {
    width: "100%",
    height: 345,
    resizeMode: "cover",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    position: "absolute",
    top: 300, // Adjust this value to position the logo at the mid-bottom of the header photo
    left: "50%",
    transform: [{ translateX: -50 }],
    backgroundColor: "#fff", // Add white background color
    padding: 10, // Add padding
    borderRadius: 50, // Add border radius to make it circular
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 250, // Adjust this value to position the form below the logo
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  linkText: {
    color: "#007BFF",
    marginBottom: 10,
  },
  button: {
    width: "80%",
    padding: 15,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default LoginScreen;