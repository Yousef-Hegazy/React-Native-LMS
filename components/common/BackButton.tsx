import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useColorScheme } from "nativewind";
import React from "react";
import { TouchableOpacity } from "react-native";
import IconButton from "./IconButton";

/**
 * BackButton component
 *
 * This component is an absolute positioned button that navigates back when pressed.
 * It should only be used inside a relative positioned view to ensure correct positioning.
 *
 * Usage:
 *
 * <View style={{ position: 'relative' }}>
 *   <BackButton />
 * </View>
 */

const BackButton = ({ containerStyle = "" }: { containerStyle?: string }) => {
  const { colorScheme } = useColorScheme();

  return (
    <IconButton onPress={router.back} activeOpacity={0.7} containerClassName={`absolute left-3 ${containerStyle}`}>
      <Ionicons name="arrow-back-outline" size={24} color={colorScheme === "dark" ? "white" : "black"} />
    </IconButton>
  );
};

export default BackButton;
