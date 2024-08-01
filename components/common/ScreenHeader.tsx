import React from "react";
import { View } from "react-native";
import BackButton from "./BackButton";
import ThemedText from "./ThemedText";

const ScreenHeader = ({
  title,
  containerStyle,
  titleStyle,
  disableBack = false,
}: {
  title: string;
  containerStyle?: string;
  titleStyle?: string;
  disableBack?: boolean;
}) => {
  return (
    <View
      className={`relative flex-row items-center justify-center py-6 border-b border-neutral-200 dark:border-neutral-700 ${containerStyle}`}
    >
      <ThemedText className={`text-xl font-bold ${titleStyle}`}>{title}</ThemedText>

      {!disableBack && <BackButton />}
    </View>
  );
};

export default ScreenHeader;
