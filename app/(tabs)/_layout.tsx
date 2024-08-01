import icons from "@/constants/icons";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import colors from "tailwindcss/colors";

const TabIcon = ({
  icon,
  color,
  name,
  focused,
}: {
  icon: ImageSourcePropType;
  color: string;
  focused: boolean;
  name?: string;
}) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image source={icon} resizeMode="contain" tintColor={color} className="w-5 h-5" />
      {name && (
        <Text style={{ color }} className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}>
          {name}
        </Text>
      )}
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "#3d3dd8ef",
        tabBarInactiveTintColor: colors.neutral[200],
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 1,
          borderTopColor: colors.neutral[50],
          height: 70,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => <TabIcon color={color} focused={focused} icon={icons.home} />,
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => <TabIcon color={color} focused={focused} icon={icons.search2} />,
        }}
      />

      <Tabs.Screen
        name="play"
        options={{
          title: "Play",
          tabBarIcon: ({ color, focused }) => <TabIcon color={color} focused={focused} icon={icons.play} />,
        }}
      />

      <Tabs.Screen
        name="message"
        options={{
          title: "Message",
          tabBarIcon: ({ color, focused }) => <TabIcon color={color} focused={focused} icon={icons.message} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => <TabIcon color={color} focused={focused} icon={icons.person2} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
