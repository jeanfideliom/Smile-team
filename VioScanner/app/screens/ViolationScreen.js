import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ViolationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Violations Report</Text>
      {/* Add your violations report content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ViolationScreen;