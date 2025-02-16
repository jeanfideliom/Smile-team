import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between", 
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // Ensure background covers screen
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Darkens background only
  },
  policyContainer: {
    alignItems: "center",
    marginBottom: 20, 
  },
  policyText: {
    fontSize: 18,
    color: "white",
    marginBottom: 10,
  },
  policyButton: {
    backgroundColor: "rgba(0, 122, 255, 0.9)", 
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30, 
  },
  policyButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Darkens the background when modal is open
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    width: "80%",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
