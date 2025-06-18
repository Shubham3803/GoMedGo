import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { scale, spacing, borderRadius, hp, fontSize } from '../utils/responsive';

const DropdownInput = ({ 
  label, 
  value, 
  onChange, 
  options = [],
  labelStyle,
  containerStyle,
  style,
  borderColor = '#888',
  backgroundColor = 'white',
  borderRadius: customBorderRadius = borderRadius.md,
  padding = spacing.md,
  borderWidth = 1,
  marginBottom = spacing.md,
  placeholderTextColor = '#999',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={[styles.container, { marginBottom }, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        style={[
          styles.dropdown,
          {
            borderColor,
            backgroundColor,
            borderRadius: customBorderRadius,
            padding,
            borderWidth,
          },
          style
        ]}
      >
        <Text style={[styles.dropdownText, !value && styles.placeholder]}>
          {value ? value.charAt(0).toUpperCase() + value.slice(1) : 'Select an option'}
        </Text>
        <Text style={styles.arrow}>{isOpen ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.optionsWrapper}>
          <ScrollView
            style={styles.optionsContainer}
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={true}
            bounces={false}
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
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: fontSize.md,
    fontWeight: '600',
    color: '#333333',
    marginBottom: spacing.xs,
  },
  dropdown: {
    width: '100%',
    height: hp(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlignVertical: 'center',
    includeFontPadding: false,
    paddingTop: 0,
    paddingBottom: 0,
  },
  dropdownText: {
    color: '#333',
    flex: 1,
    fontSize: scale(16),
  },
  placeholder: {
    color: '#999',
  },
  arrow: {
    fontSize: scale(18),
    color: '#888',
    marginLeft: spacing.xs,
  },
  optionsWrapper: {
    position: 'relative',
    zIndex: 2,
  },
  optionsContainer: {
    maxHeight: hp(25),
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: borderRadius.md,
    marginTop: spacing.xs,
  },
  option: {
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    color: '#333',
    fontSize: scale(16),
  },
});

export default DropdownInput;
