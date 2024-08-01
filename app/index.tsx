import PageView from "@/components/LandingPage/PageView";
import images from "@/constants/images";
import { router } from "expo-router";
import React, { useState } from "react";
import { NativeSyntheticEvent, Text, TouchableOpacity, View } from "react-native";
import PagerView from "react-native-pager-view";
import { OnPageSelectedEventData } from "react-native-pager-view/lib/typescript/specs/PagerViewNativeComponent";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const LandingPage = () => {
  const width = [useSharedValue(12), useSharedValue(12), useSharedValue(12)];
  const [currentPage, setCurrentPage] = useState(0);

  const onPageSelected = (event: NativeSyntheticEvent<{ position: number }>) => {
    setCurrentPage(event.nativeEvent.position);

    width.forEach((w, index) => {
      if (index !== event.nativeEvent.position) {
        w.value = withSpring(12);
      } else {
        w.value = withSpring(24);
      }
    });
  };

  return (
    <SafeAreaView className="relative">
      <PagerView scrollEnabled initialPage={0} useNext={true} onPageSelected={onPageSelected}>
        <PageView
          key="1"
          title="Have a Unique Learning Experience"
          imgSrc={images.reading}
          description="The best learning experience with our special and motivated instructors."
        />

        <PageView
          key="2"
          title="Connect with Everyone"
          imgSrc={images.man}
          description="Connect with everyone in the community and learn together."
        />

        <PageView
          key="3"
          title="Have the Best of Both Worlds"
          imgSrc={images.boy}
          description="Learn from the best instructors and connect with the best community, at your own leisure."
        />
      </PagerView>

      <View className="absolute flex-col gap-6 px-8 top-3/4 left-0 right-0 items-center justify-center">
        <View className="flex-row">
          {Array.from({ length: 3 }).map((_, index: number) => (
            <Animated.View
              key={index}
              className={`h-3 rounded-full mx-1 ${currentPage === index ? "bg-primary" : "bg-neutral-400"}`}
              style={{ width: width[index] }}
            />
          ))}
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          className="w-full max-w-[400px] items-center justify-center py-5 rounded-2xl shadow-xl   bg-primary"
          onPress={() => router.push("sign-in")}
        >
          <Text className="text-white text-lg font-msemibold">Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LandingPage;
