import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  profileContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  studentId: {
    fontSize: 16,
    color: '#444',
    fontWeight: '500',
  },

  profileDetails: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 20,
    marginBottom: 20,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    color: '#666',
  },
  detailLabel: {
    fontSize: 16,
    color: '#333',
  },
  detailValue: {
    fontSize: 16,
    color: '#666',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: "cover",
    position: 'relative',
    transform: [{ scale: 1.2 }],
    zIndex: 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
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
  violationButton: {
    backgroundColor: "rgba(0, 122, 255, 0.9)",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginBottom: 20,
    alignSelf: 'center',
  },

  violationButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
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
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export const colors = {
  primary: "#007AFF",
  background: "#F5F5F5",
  text: "#333333",
  white: "#FFFFFF",
};

export const typography = {
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
  },
  body: {
    fontSize: 16,
    color: colors.text,
  },
};
