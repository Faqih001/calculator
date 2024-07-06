import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

// Styles for the button component
const screen = Dimensions.get("window");

// Button component 
const buttonWidth = screen.width / 4;

// Styles for the button component 
const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 25
  },
  textSecondary: {
    color: "#060606"
  },
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6"
  },
  buttonAccent: {
    backgroundColor: "#f09a36"
  }
});

// Button component 
export default ({ onPress, text, size, theme }) => {

  // Styles for the button component button styles
  const buttonStyles = [styles.button];
  
  // Styles for the button component text styles
  const textStyles = [styles.text];

  // If the size is double, add the double button style
  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
