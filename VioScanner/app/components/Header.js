// Header.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, backgroundColor: 'rgba(255,255,255,0.9)' }}>
    <Image source={require('../../assets/images/logo.png')} style={{ width: 30, height: 30 }} />
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#007AFF' }}>VioScanner</Text>
      <FontAwesome name="bars" size={24} color="black" />
    </View>
  );
};

export default Header;