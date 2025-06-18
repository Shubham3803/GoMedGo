import { View, StyleSheet, TextInput, Text } from 'react-native'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { scale, spacing, borderRadius, hp, fontSize } from '../utils/responsive'

const FormInput = ({
  value,
  onChangeText,
  placeholder,
  label,
  style,
  containerStyle,
  inputStyle,
  labelStyle,
  borderColor = '#888',
  backgroundColor = 'white',
  borderRadius: customBorderRadius = borderRadius.md,
  padding = spacing.md,
  borderWidth = 1,
  marginBottom = spacing.md,
  placeholderTextColor = '#999',
  keyboardType = 'default',
  maxLength,
}) => {
  const [error, setError] = useState('');

  const validateEmail = (text) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (keyboardType === 'email-address' && text && !emailRegex.test(text)) {
      setError('Please enter a valid email address');
    } else {
      setError('');
    }
  };

  const handleChangeText = (text) => {
    onChangeText(text);
    if (keyboardType === 'email-address') {
      validateEmail(text);
    } else if (keyboardType === 'numeric') {
      // Only allow numbers
      const numericValue = text.replace(/[^0-9]/g, '');
      onChangeText(numericValue);
    }
  };

  return (
    <View style={[styles.container, { marginBottom }, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          {
            borderColor: error ? '#ff0000' : borderColor,
            backgroundColor,
            borderRadius: customBorderRadius,
            padding,
            borderWidth,
          },
          inputStyle,
        ]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={handleChangeText}
        multiline={false}
        numberOfLines={1}
        fontSize={scale(16)}
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  )
}

FormInput.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.object,
  containerStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.number,
  padding: PropTypes.number,
  borderWidth: PropTypes.number,
  marginBottom: PropTypes.number,
  placeholderTextColor: PropTypes.string,
  keyboardType: PropTypes.string,
  maxLength: PropTypes.number,
}

const styles = StyleSheet.create({
  // Container styling
  container: {
    width: '100%', // Takes full width of parent
  },

  // Label styling
  label: {
    fontSize: fontSize.md,      // Medium font size
    fontWeight: '600',         // Semi-bold weight
    color: '#333333',          // Dark gray color
    marginBottom: spacing.xs,  // Small bottom margin
  },

  // Input field styling
  input: {
    width: '100%',             // Takes full width of container
    height: hp(6),             // Responsive height (6% of screen height)
    fontSize: scale(16),       // Responsive font size
    color: '#333',             // Dark gray text color
    textAlignVertical: 'center', // Centers text vertically
    includeFontPadding: false,   // Removes extra font padding
    paddingTop: 0,             // Removes top padding
    paddingBottom: 0,          // Removes bottom padding
  },

  // Error text styling
  errorText: {
    color: '#ff0000',
    fontSize: scale(12),
    marginTop: spacing.xs,
  },
})

export default FormInput