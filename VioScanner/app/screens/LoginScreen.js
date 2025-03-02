import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
import { createClient } from "@supabase/supabase-js";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import Constants from "expo-constants";

WebBrowser.maybeCompleteAuthSession();

// 🔹 Supabase Credentials
const supabaseUrl = "https://vdobfuaenmtkzfqjrpgy.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkb2JmdWFlbm10a3pmcWpycGd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4OTU3MzAsImV4cCI6MjA1NjQ3MTczMH0.3FBB9F3RWSy2LiR0I5n3dwRccOVVZjW2vdD8osSr1kU"; // 🚨 Never expose this in production!
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 🔹 Get Correct Redirect URI for Different Platforms
const redirectUri = AuthSession.makeRedirectUri({
  useProxy: true, // ✅ Recommended for Expo Go
  native: "yourapp://redirect", // ✅ Used in standalone builds
  useWeb: "http://localhost:8081", // ✅ Used for Web (Only if running on localhost)
});

const LoginScreen = ({ navigation }) => {
  // 🔹 Google OAuth Request
  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: "1089667306742-imtutpgd9dnu9c7qn4ocmr0kjmtjru0n.apps.googleusercontent.com", // Google Web Client ID
      redirectUri, // ✅ Use the correct redirect URI
      responseType: "id_token",
      scopes: ["openid", "profile", "email"], // ✅ Required OAuth scopes
      usePKCE: false, // ✅ Disable PKCE to prevent errors
    },
    { authorizationEndpoint: "https://accounts.google.com/o/oauth2/auth" }
  );

  // 🔹 Handle OAuth Response
  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      handleLogin(id_token);
    }
  }, [response]);

  // 🔹 Login to Supabase with Google ID Token
  const handleLogin = async (idToken) => {
    console.log("handleLogin called");
    try {
      const { data, error } = await supabase.auth.signInWithIdToken({
        provider: "google",
        token: idToken,
      });

      if (error) {
        console.error("Login error:", error);
        Alert.alert("Login error", error.message);
        return;
      }

      if (data?.user?.email?.endsWith("@neu.edu.ph")) {
        console.log("Google Sign-In successful. User info:", data.user);
        navigation.navigate("Home");
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
      <Image source={require("../../assets/images/headerPhoto.png")} style={styles.headerPhoto} />
      <Image source={require("../../assets/images/logo.png")} style={styles.logo} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>VioScanner</Text>
        <Text style={styles.subtitle}>A Violation Detection App</Text>
        <TouchableOpacity style={styles.button} onPress={() => promptAsync()} disabled={!request}>
          <Text style={styles.buttonText}>Continue using Google Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// 🔹 Styles
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
    top: 300,
    left: "50%",
    transform: [{ translateX: -50 }],
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 50,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 250,
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