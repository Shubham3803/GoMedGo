import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const DropdownInput = ({ label, value, onChange, options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{ }</Text>

      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        style={styles.dropdown}
      >
        <Text style={styles.dropdownText}>
          {value ? value.charAt(0).toUpperCase() + value.slice(1) : ` ${label}`}
        </Text>
        <Text style={styles.arrow}>{isOpen ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {isOpen && (
        <ScrollView
          style={styles.optionsContainer}
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={true}
        >
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              onPress={() => {
                onChange(option);
                setIsOpen(false);
              }}
              style={styles.option}
            >
              <Text style={styles.optionText}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
  borderWidth: 1,
  borderColor: '#888',
  borderRadius: 8,
  marginTop: 5,
  maxHeight: 150, // 👈 scrolls only this part if list is long
},

  container: {
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    color:'#333'
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 8,
    padding: 15,
  },
  dropdownText: {
    color: '#555',
  },
  arrow: {
    fontSize: 18,
    color: '#888',
    marginLeft: 10,
  },
  optionsContainer: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 8,
    marginTop: 5,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    color: '#333',
  },
});

export default DropdownInput;
