import React from "react";
import {  View, Text,  TouchableOpacity,  StyleSheet,Image, Alert} from "react-native";
import { createClient } from '@supabase/supabase-js';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

WebBrowser.maybeCompleteAuthSession();

const supabaseUrl = 'https://izcvkzcuncdshfrqwcmu.supabase.co';

const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6Y3ZremN1bmNkc2hmcnF3Y211Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3NDI0NTQsImV4cCI6MjA1NjMxODQ1NH0.mIIhSysocDdQuStUEV6uXzyh7Y-xzbnfWOm95uWlrnk';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const LoginScreen = ({ navigation }) => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: '875733199883-qfa622msk2h44le0ljbecef42b7j9l7m.apps.googleusercontent.com', // Replace with your actual Web client ID
    redirectUri: 'https://vioscanner-451201.supabase.co/auth/v1/callback', // Ensure this matches the authorized redirect URI

  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      handleLogin(authentication.accessToken);
    }
  }, [response]);

  const handleLogin = async (accessToken) => {
    console.log("handleLogin called");
    try {
      const { user, session, error } = await supabase.auth.signIn({
        provider: 'google',
        accessToken,
      });

      if (error) {
        console.error("Login error:", error);
        Alert.alert("Login error", error.message);
        return;
      }

      if (user.email.endsWith('@neu.edu.ph')) {
        console.log("Google Sign-In successful. User info:", user);
        console.log("Navigating to Home screen...");
        navigation.navigate("Home");
        console.log("Successfully navigated to Home screen.");
      } else {
        console.error("Login failed: Unauthorized domain");
        Alert.alert("Login failed", "Unauthorized domain. Please use your @neu.edu.ph email.");
        await supabase.auth.signOut();
      }
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Login error", error.message);
    }
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
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => {
            promptAsync();
          }}
          disabled={!request}
        >
          <Text style={styles.buttonText}>Continue using Google Sign In</Text>
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
    color: "#666",
    marginBottom: 20,
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
