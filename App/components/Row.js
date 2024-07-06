import React from "react";
import { View } from "react-native";

// Row component 
export default ({ children }) => (
  <View style={{ flexDirection: "row" }}>{children}</View>
);
