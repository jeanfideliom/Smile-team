import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/styles';

const ProfileScreen = () => {
  return (
    <ScrollView style={globalStyles.profileContainer}>
      <View style={globalStyles.profileHeader}>
        <Image
          source={require('../../assets/images/mark.jpg')}
          style={globalStyles.profileImage}
        />
        <Text style={globalStyles.username}>Mhark Lawrhenz Alejandro</Text>
        <Text style={globalStyles.userEmail}>marklorenz.alejandrino@neu.edu.ph</Text>
        <Text style={globalStyles.studentId}>Student ID: 123456</Text>
      </View>

      <View style={globalStyles.infoContainer}>
        <View style={globalStyles.profileDetails}>
          <View style={globalStyles.detailItem}>
            <Text style={globalStyles.detailLabel}>Course:</Text>
            <Text style={globalStyles.detailValue}>Computer Science</Text>
          </View>
          <View style={globalStyles.detailItem}>
            <Text style={globalStyles.detailLabel}>Department:</Text>
            <Text style={globalStyles.detailValue}>College of Computer Studies</Text>
          </View>
          <View style={globalStyles.detailItem}>
            <Text style={globalStyles.detailLabel}>Year Level:</Text>
            <Text style={globalStyles.detailValue}>3rd Year</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={globalStyles.violationButton}>
        <Text style={globalStyles.violationButtonText}>View Violations Report</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;
