import FormField from "@/components/common/FormField";
import ScreenHeader from "@/components/common/ScreenHeader";
import ThemedText from "@/components/common/ThemedText";
import icons from "@/constants/icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Href, router } from "expo-router";
import { useColorScheme } from "nativewind";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Image, ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SignInFields {
  email: string;
  password: string;
}

const SignIn = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const { control, handleSubmit } = useForm<SignInFields>();
  const passwordRef = useRef<TextInput>(null);

  const onSubmit = (data: SignInFields) => {
    console.log(data);
    router.push("/home" as Href);
  };

  return (
    <SafeAreaView>
      <ScrollView className="h-full" keyboardShouldPersistTaps="handled">
        <ScreenHeader title="Login" />

        <View className="flex-row gap-6 items-center justify-center mt-6">
          <TouchableOpacity activeOpacity={0.6} className="bg-white w-12 h-12 rounded-full border border-neutral-200">
            <Image source={icons.google} className="w-full h-full rounded-full" resizeMode="cover" />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} className="bg-white w-12 h-12 rounded-full border border-neutral-200">
            <Image source={icons.facebook} className="w-full h-full rounded-full" resizeMode="cover" />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} className="bg-white w-12 h-12 rounded-full border border-neutral-200">
            <Image source={icons.apple} className="w-full h-full rounded-full" resizeMode="cover" />
          </TouchableOpacity>
        </View>

        <ThemedText className="text-lg text-center my-4 text-neutral-600 dark:text-neutral-300">
          Or login using your email
        </ThemedText>

        <View className="px-4 flex-col">
          <FormField
            control={control}
            name="email"
            title="Email"
            nextElement={passwordRef}
            rules={{ required: "Email is required" }}
          />

          <FormField
            ref={passwordRef}
            control={control}
            name="password"
            title="Password"
            type="password"
            rules={{ required: "Email is required" }}
            otherStyles="mt-5"
            onSubmitEditing={handleSubmit(onSubmit)}
          />

          <TouchableOpacity activeOpacity={0.8} className="mt-3">
            <ThemedText className="underline">Forgot Password?</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            activeOpacity={0.8}
            className="mt-8 min-h-[60px] bg-primary rounded-2xl flex-row items-center justify-center"
          >
            <Ionicons name="enter-outline" size={22} color="white" />
            <ThemedText className="text-white text-lg font-semibold ml-2">Login</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/sign-up")}
            activeOpacity={0.8}
            className="mt-4 min-h-[60px] rounded-2xl border-2 border-neutral-300 flex-row items-center justify-center"
          >
            <Ionicons name="person-add-outline" size={22} color={colorScheme === "dark" ? "white" : "black"} />
            <ThemedText className="text-lg font-semibold ml-2">Register</ThemedText>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-center my-8">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={toggleColorScheme}
            className="p-4 blur-sm bg-gray-300/25 rounded-full"
          >
            {colorScheme === "dark" ? (
              <Ionicons name="sunny" size={24} color="white" />
            ) : (
              <Ionicons name="moon" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
