import React from "react";
import { Image, ImageSourcePropType, View } from "react-native";
import ThemedText from "../common/ThemedText";

const PageView = ({
  imgSrc,
  title,
  description,
}: {
  imgSrc: ImageSourcePropType;
  title: string;
  description: string;
}) => {
  return (
    <View>
      <Image source={imgSrc} className="mx-auto w-full h-auto max-h-[400px] max-w-[400px]" resizeMode="contain" />

      <View className="mx-0 px-4 gap-4 my-3">
        <ThemedText className="text-xl font-msemibold text-center">{title}</ThemedText>

        <ThemedText className="text-base font-mmedium text-center">{description}</ThemedText>
      </View>
    </View>
  );
};

export default PageView;
