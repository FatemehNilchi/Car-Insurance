import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

const MyButton = ({isDark, buttonText, isSmall = false}) => {
  const textColor = isDark ? '#fff' : '#001F40';
  const buttonColor = isDark ? '#001F40' : '#EEF4FA';
  const buttonBorderColor = isDark ? '#001F40' : '#A2B3C1';
  const buttonHeight = isSmall ? 0.08 * windowWidth : 0.1 * windowWidth;
  const buttonWidth = isSmall ? 0.32 * windowWidth : 0.39 * windowWidth;

  return (
    <TouchableOpacity
      style={[
        styles.Button,
        {
          height: buttonHeight,
          width: buttonWidth,
          borderColor: buttonBorderColor,
          backgroundColor: buttonColor,
        },
      ]}>
      <Text style={[styles.ButtonText, {color: textColor}]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 30,
  },
  ButtonText: {
    fontSize: 13,
    fontWeight: '400',
  },
});

export default MyButton;
