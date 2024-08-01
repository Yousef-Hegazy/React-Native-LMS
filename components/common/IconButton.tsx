import React from "react";
import { TouchableOpacity } from "react-native";

const IconButton = ({
  children,
  onPress,
  containerClassName = "",
  activeOpacity = 0.7,
}: {
  children: React.ReactNode;
  onPress: () => void;
  containerClassName?: string;
  activeOpacity?: number;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onPress}
      className={`p-2 blur-sm bg-gray-300/25 rounded-full ${containerClassName}`}
    >
      {children}
    </TouchableOpacity>
  );
};

export default IconButton;
