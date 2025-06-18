import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const UploadDocument = ({ title, onFileSelect }) => {
  const handleImageSelection = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const selectedImage = response.assets[0];
        onFileSelect && onFileSelect(selectedImage);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity 
        style={styles.uploadContainer} 
        onPress={handleImageSelection}
        activeOpacity={0.7}
      >
        <View style={styles.uploadIconContainer}>
          <Text style={styles.plusIcon}>+</Text>
        </View>
        <Text style={styles.uploadText}>Click to Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    color: '#000000',
  },
  uploadContainer: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#654edf',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
  },
  uploadIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#654edf20',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  plusIcon: {
    fontSize: 24,
    color: '#000000',
    fontWeight: 'bold',
  },
  uploadText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default UploadDocument;
