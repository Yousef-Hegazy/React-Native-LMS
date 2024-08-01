import { View, Text, TextProps } from "react-native";
import React from "react";

interface Props extends TextProps {}

const ThemedText = ({ children, ...rest }: Props) => {
  return (
    <Text {...rest} className="dark:text-white">
      {children}
    </Text>
  );
};

export default ThemedText;
