import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';



const ViewViolationsReportScreen = () => {
  const [violations, setViolations] = useState([
    { id: 1, date: '10/01/2023', type: 'Improper Uniform', time: '08:30 AM', remarks: '' },
    { id: 2, date: '09/25/2023', type: 'No I.D', time: '10:15 AM', remarks: '' },
    { id: 3, date: '09/18/2023', type: 'Improper Haircut', time: '02:45 PM', remarks: '' },
  ]);

  const handleRemarksChange = (id, text) => {
    const updatedViolations = violations.map(violation => 
      violation.id === id ? { ...violation, remarks: text } : violation
    );
    setViolations(updatedViolations);
  };



  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Violations Report</Text>
      
      {violations.map(violation => (
        <View key={violation.id} style={styles.violationCard}>
          <Text style={styles.violationDate}>{violation.date}</Text>
          <Text style={styles.violationType}>{violation.type}</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Time:</Text>
            <Text style={styles.detailValue}>{violation.time}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Remarks:</Text>
            <TextInput
              style={styles.remarksInput}
              value={violation.remarks}
              onChangeText={(text) => handleRemarksChange(violation.id, text)}

              placeholder="Enter remarks"
            />
          </View>

        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  violationCard: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  violationDate: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 5,
  },
  violationType: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#212529',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  detailLabel: {
    fontSize: 14,
    color: '#6c757d',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#212529',
  },
  remarksInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 4,
    padding: 8,
    marginLeft: 10,
  },

});

export default ViewViolationsReportScreen;
